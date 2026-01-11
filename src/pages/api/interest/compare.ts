import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/lib/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { amount, product_code } = req.body;

    if (!amount || !product_code) {
      return res.status(400).json({ error: 'Invalid request payload' });
    }

    /* ---------------- GET PRODUCT ID ---------------- */
    const { data: product, error: productError } = await supabase
      .from('products')
      .select('id')
      .eq('product_code', product_code)
      .single();

    if (productError || !product) {
      return res.status(400).json({ error: 'Invalid product selected' });
    }

    /* ---------------- FETCH INTEREST RULES ---------------- */
    const { data: rules, error: rulesError } = await supabase
      .from('interest_rules')
      .select(`
        interest_rate,
        min_amount,
        banks (
          bank_name
        )
      `)
      .eq('product_id', product.id)
      .lte('min_amount', amount)
      .order('interest_rate', { ascending: false });

    if (rulesError) {
      throw rulesError;
    }

    /* ---------------- FORMAT RESULTS ---------------- */
    const results =
      rules?.map((row: any) => ({
        bank_name: row.banks?.name ?? 'Unknown Bank',
        interest_rate: row.interest_rate
      })) || [];

    return res.status(200).json({
      results,
      excluded: []
    });
  } catch (err: any) {
    return res.status(500).json({
      error: err.message || 'Internal server error'
    });
  }
}
