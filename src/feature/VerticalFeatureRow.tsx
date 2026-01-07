import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = ({
  title,
  description,
  image,
  imageAlt,
  reverse = false,
}: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className('mt-20 flex flex-wrap items-center', {
    'flex-row-reverse': reverse,
  });

  const router = useRouter();

  return (
    <section className={verticalFeatureClass}>
      {/* Text Content */}
      <div className="w-full text-center sm:w-1/2 sm:px-10">
        <h3 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          {title}
        </h3>

        <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
          {description}
        </p>
      </div>

      {/* Image */}
      <div className="w-full p-6 sm:w-1/2">
        <img
          src={`${router.basePath}${image}`}
          alt={imageAlt}
          className="mx-auto max-w-full rounded-xl shadow-sm"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
};

export { VerticalFeatureRow };
