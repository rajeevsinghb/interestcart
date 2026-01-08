import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-white">
    {/* Navbar */}
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <span /> {/* REQUIRED children — DO NOT REMOVE */}
      </NavbarTwoColumns>
    </Section>

    {/* Hero Content */}
    <Section yPadding="pt-16 pb-24 sm:pt-20 sm:pb-28">
      <HeroOneButton
        title={
          <>
            {'Calculate EMI & Interest\n'}
            <span className="text-primary-500">without bank tricks</span>
          </>
        }
        description="See exact EMI, total interest, and true loan cost in seconds. No hidden charges. No confusing bank math."
        button={
          <Link href="#calculator">
            <Button xl>Start EMI Calculator →</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export default Hero;
