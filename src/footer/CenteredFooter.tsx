import type { ReactNode } from 'react';

import { FooterCopyright } from './FooterCopyright';
import { FooterIconList } from './FooterIconList';

type ICenteredFooterProps = {
  logo: ReactNode;
  iconList: ReactNode;
  children: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <footer className="text-center">
    {/* Logo */}
    <div>{props.logo}</div>

    {/* Navigation Links */}
    <nav aria-label="Footer navigation">
      <ul className="navbar mt-5 flex flex-row flex-wrap justify-center text-base font-medium text-gray-700">
        {props.children}
      </ul>
    </nav>

    {/* Social / Icon List */}
    <div className="mt-8 flex justify-center">
      <FooterIconList>{props.iconList}</FooterIconList>
    </div>

    {/* Copyright – SINGLE SOURCE OF TRUTH */}
    <div className="mt-8">
      <FooterCopyright />
    </div>

    <style jsx>
      {`
        .navbar :global(li) {
          @apply mx-4 my-2;
        }
      `}
    </style>
  </footer>
);

export { CenteredFooter };
