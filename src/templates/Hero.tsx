import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="#features">Features</Link>
        </li>
        <li>
          <Link href="#early-access">Early Access</Link>
        </li>
      </NavbarTwoColumns>
    </Section>
    <Section yPadding="pt-16 pb-24 sm:pt-20 sm:pb-32">
      <HeroOneButton
        title={
          <>
            {'Clear answers for\n'}
            <span className="text-primary-500">interest, banking & loans</span>
          </>
        }
        description="InterestCart helps you avoid hidden bank rules, confusing fine print, and misleading rates. Get clear, accurate results with smart filters and calculators — fast."
        button={
          <Link href="#early-access">
            <Button xl>Get Clear Financial Answers</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
