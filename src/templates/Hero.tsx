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
            {'Smart interest decisions start with\n'}
            <span className="text-primary-500">InterestCart</span>
          </>
        }
        description="Compare, calculate, and understand interest across loans, EMIs, credit cards, and investments — all in one place."
        button={
          <Link href="#early-access">
            <Button xl>Join Early Access</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
