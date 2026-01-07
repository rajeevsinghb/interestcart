import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter
        logo={<Logo />}
        iconList={<>{/* Social icons can be enabled later */}</>}
      >
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/about">About</Link>
        </li>

        <li>
          <Link href="/privacy">Privacy Policy</Link>
        </li>

        <li>
          <Link href="/terms">Terms of Service</Link>
        </li>

        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
