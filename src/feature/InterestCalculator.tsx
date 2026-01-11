import { useState } from 'react';

import { Section } from '../layout/Section';

const BANKS = ['SBI', 'HDFC', 'ICICI', 'Axis'];

const InterestCalculator = () => {
  const [product, setProduct] = useState<'savings' | 'fd'>('savings');
  const [amount, setAmount] = useState(100000);
  const [isSenior, setIsSenior] = useState(false);
  const [tenure, setTenure] = useState('1y');

  const [compareEnabled, setCompareEnabled] = useState(false);
  const [selectedBank, setSelectedBank] = useState('');

  return (
    <Section yPadding="py-12">
      <div className="mx-auto max-w-7xl rounded-2xl border bg-white p-6 shadow-sm">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold">
            Interest Comparison Calculator
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Clear comparison for Savings & Fixed Deposits
          </p>
        </div>

        {/* Product Tabs */}
        <div className="mb-6 flex justify-center gap-2">
          <button
            onClick={() => setProduct('savings')}
            className={`rounded-full px-5 py-2 text-sm font-medium ${
              product === 'savings'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100'
            }`}
          >
            Savings Account
          </button>

          <button
            onClick={() => setProduct('fd')}
            className={`rounded-full px-5 py-2 text-sm font-medium ${
              product === 'fd' ? 'bg-primary-500 text-white' : 'bg-gray-100'
            }`}
          >
            Fixed Deposit
          </button>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          {/* Amount */}
          <div>
            <label className="text-sm text-gray-700">Amount (₹)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
            />
          </div>

          {/* FD Tenure */}
          {product === 'fd' && (
            <div>
              <label className="text-sm text-gray-700">Tenure</label>
              <select
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
                className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
              >
                <option value="6m">6M – 1Y</option>
                <option value="1y">1 – 2Y</option>
                <option value="2y">2 – 3Y</option>
                <option value="3y">3 – 5Y</option>
              </select>
            </div>
          )}

          {/* Senior */}
          <div className="flex items-end">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={isSenior}
                onChange={(e) => setIsSenior(e.target.checked)}
              />
              Senior Citizen
            </label>
          </div>

          {/* Compare */}
          <div className="flex items-end">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={compareEnabled}
                onChange={(e) => setCompareEnabled(e.target.checked)}
              />
              Compare with your bank
            </label>
          </div>

          {compareEnabled && (
            <div>
              <label className="text-sm text-gray-700">Select Your Bank</label>
              <select
                value={selectedBank}
                onChange={(e) => setSelectedBank(e.target.value)}
                className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
              >
                <option value="">Select bank</option>
                {BANKS.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Result Table */}
        <div className="mt-10 overflow-x-auto">
          {product === 'savings' ? (
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border px-3 py-2">Bank</th>
                  <th className="border px-3 py-2">Rate %</th>
                  <th className="border px-3 py-2">Balance Slab</th>
                  <th className="border px-3 py-2">Credit Freq</th>
                  <th className="border px-3 py-2">Min Bal</th>
                  <th className="border px-3 py-2">Senior Benefit</th>
                  <th className="border px-3 py-2">Yield %</th>
                  <th className="border px-3 py-2">Compare</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-gray-400">
                  <td className="border px-3 py-2">Sample Bank</td>
                  <td className="border px-3 py-2">4.0%</td>
                  <td className="border px-3 py-2">₹10k–₹1L</td>
                  <td className="border px-3 py-2">Quarterly</td>
                  <td className="border px-3 py-2">₹5k</td>
                  <td className="border px-3 py-2">+0.5%</td>
                  <td className="border px-3 py-2">4.05%</td>
                  <td className="border px-3 py-2">
                    {compareEnabled ? '+₹ / -₹' : '—'}
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border px-3 py-2">Bank</th>
                  <th className="border px-3 py-2">Tenure</th>
                  <th className="border px-3 py-2">Rate %</th>
                  <th className="border px-3 py-2">Type</th>
                  <th className="border px-3 py-2">Comp.</th>
                  <th className="border px-3 py-2">Invest</th>
                  <th className="border px-3 py-2">Maturity</th>
                  <th className="border px-3 py-2">Interest</th>
                  <th className="border px-3 py-2">Premature</th>
                  <th className="border px-3 py-2">Sr+ Rate</th>
                  <th className="border px-3 py-2">Compare</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-gray-400">
                  <td className="border px-3 py-2">Sample Bank</td>
                  <td className="border px-3 py-2">1–2Y</td>
                  <td className="border px-3 py-2">6.5%</td>
                  <td className="border px-3 py-2">Cumulative</td>
                  <td className="border px-3 py-2">Quarterly</td>
                  <td className="border px-3 py-2">₹1,00,000</td>
                  <td className="border px-3 py-2">₹1,13,000</td>
                  <td className="border px-3 py-2">₹13,000</td>
                  <td className="border px-3 py-2">Yes</td>
                  <td className="border px-3 py-2">7.0%</td>
                  <td className="border px-3 py-2">
                    {compareEnabled ? '+₹ / -₹' : '—'}
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </Section>
  );
};

export { InterestCalculator };
