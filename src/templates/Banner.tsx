import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Make interest work in your favor"
      subtitle="Join early access to InterestCart and get smarter tools for loans, EMIs, and financial decisions — before everyone else."
      button={
        <Link href="#early-access">
          <Button>Get Early Access</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
