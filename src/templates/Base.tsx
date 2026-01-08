import { InterestCalculator } from '../feature/InterestCalculator';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import Hero from './Hero';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />

    <Hero />
    <div className="h-px bg-gray-100" />
    <InterestCalculator />
    <Footer />
  </div>
);

export { Base };
