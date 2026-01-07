import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Everything you need to make smarter interest decisions"
    description="InterestCart helps you understand the real cost of money — clearly, transparently, and without confusion."
  >
    <VerticalFeatureRow
      title="EMI & Interest Calculators"
      description="Calculate EMI, total interest, and total payable amount for loans, credit cards, and investments in seconds with complete transparency."
      image="/assets/images/feature.svg"
      imageAlt="EMI and interest calculator"
    />

    <VerticalFeatureRow
      title="Compare Loans & Financial Products"
      description="Compare interest rates, tenure, and total cost across banks, NBFCs, and platforms to choose what truly saves you money."
      image="/assets/images/feature2.svg"
      imageAlt="Compare loans and financial products"
      reverse
    />

    <VerticalFeatureRow
      title="Smart Finance Insights (Coming Soon)"
      description="Get intelligent insights and recommendations powered by data and AI to help you take better financial decisions, not emotional ones."
      image="/assets/images/feature3.svg"
      imageAlt="Smart finance insights"
    />
  </Section>
);

export { VerticalFeatures };
