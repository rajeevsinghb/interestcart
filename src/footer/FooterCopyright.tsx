import { AppConfig } from '../utils/AppConfig';

const FooterCopyright = () => (
  <div className="footer-copyright text-sm text-gray-500">
    © {new Date().getFullYear()} {AppConfig.title}. All rights reserved.
  </div>
);

export { FooterCopyright };
