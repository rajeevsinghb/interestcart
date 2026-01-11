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
    <Section yPadding="py-5">
      <NavbarTwoColumns logo={<Logo xl />}>
        <span />
      </NavbarTwoColumns>
    </Section>

    {/* Hero */}
    <Section yPadding="pt-10 pb-8 sm:pt-12 sm:pb-10">
      <HeroOneButton
        title={
          <>
            {'Financial decisions feel complex\n'}
            <span className="text-primary-500">
              because important details are easy to miss.
            </span>
          </>
        }
        description="
          Most financial products come with slabs, conditions,
          exclusions, and calculations that are hard to compare clearly.
          InterestCart helps you cut through that complexity and
          understand — in seconds — whether a better choice was possible.
        "
        button={
          <Link href="#calculator">
            <Button xl>
              Check your decision →
            </Button>
          </Link>
        }
      />

      <p className="mt-6 text-center text-xs text-gray-400">
        Built for clarity · No login · No ads · No hidden intent
      </p>
    </Section>
  </Background>
);

export default Hero;
