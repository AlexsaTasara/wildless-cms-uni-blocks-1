import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type { ErrorBlockContent } from './ErrorBlockContent';
import { useLink } from '../../hooks/useLink';
import { Button } from '../../ui-kit/Button/Button';
import { Img } from '../../ui-kit/Img/Img';
import { Heading } from '../../ui-kit/Heading/Heading';

export interface ErrorBlockProps extends ErrorBlockContent, UniBlockProps {}

const renderErrorContent = (error: ErrorBlockContent['error']) => {
  if (error?.errorContentType === 'Image' && error?.image) {
    return <Img className="mb-7" image={error.image} />;
  }

  if (error?.errorContentType === 'Code' && error.code) {
    return <div className="text-title-extra gradient-color-text">{error.code}</div>;
  }

  return null;
};

export const ErrorBlock = JSX<ErrorBlockProps>(
  ({ context, className = '', title, subtitle, error, button }) => {
    const { useRouter, handlerDecorator } = context;
    const router = useRouter();

    return (
      <section className={`flex flex-col justify-center items-center ${className}`} role="listitem">
        <div className="flex justify-center mb-7">{renderErrorContent(error)}</div>
        {title ? <Heading headingType="h1" className="text-left mb-4" title={title} /> : null}
        {subtitle ? <div className="text-xl-light text-left mb-7">{subtitle}</div> : null}
        {button?.text ? (
          <Button
            className="py-4 px-9"
            version={button?.version}
            {...useLink({ router, handlerDecorator }, button)}
          >
            {button.text}
          </Button>
        ) : null}
      </section>
    );
  },
);
