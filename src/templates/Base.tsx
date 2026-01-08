import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import Hero from './Hero';

// Future use
// import { EmiCalculator } from '../feature/EmiCalculator';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />

    {/* HERO */}
    <Hero />

    {/* CALCULATOR (next step) */}
    {/* <EmiCalculator /> */}

    {/* FOOTER */}
    <Footer />
  </div>
);

export { Base };
