import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type { InsuranceAmountBlockContent } from './InsuranceAmountBlockContent';
import { InsuranceAmountBlockInner } from './InsuranceAmountBlockInner';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Button } from '../../ui-kit/Button/Button';

export interface InsuranceAmountBlockProps extends InsuranceAmountBlockContent, UniBlockProps {}

export const InsuranceAmountBlock = JSX<InsuranceAmountBlockProps>(
  ({ className = '', context, title, insuranceTabs = [], button, anchor = null }) => {
    const insuranceGalleries = insuranceTabs.map((_) => _.cards);
    const [activeSlideIndex, setActiveSlideIndex] = context.useState(0);

    return (
      <section
        id={anchor}
        className={`box-border py-[50px] overflow-hidden relative font-sans w-100 bg-white ${className}`}
      >
        {title ? <Heading className="text-center" title={title} headingType="h3" /> : null}
        <div className="p-1.5 bg-secondary-light w-fit m-auto rounded-md mt-[34px]">
          {insuranceTabs.map((item, i) =>
            renderNavButton({
              title: item?.title,
              i,
              activeSlideIndex,
              onClick: () => setActiveSlideIndex(i),
            }),
          )}
        </div>
        <div
          className="flex"
          style={{ transform: `translateX(-${activeSlideIndex}00%)` }}
          role="list"
        >
          {renderInsuranceGalleries({
            context,
            className,
            insuranceGalleries,
          })}
        </div>
        {button?.text ? (
          <div className="flex justify-center">
            <Button
              className="box-border p-4 h-14 w-full max-w-[240px]"
              version={button?.version || 'primary'}
              href={button.href}
            >
              {button.text}
            </Button>
          </div>
        ) : null}
      </section>
    );
  },
);

const renderInsuranceGalleries = ({ insuranceGalleries, context, className }: any) => {
  return insuranceGalleries?.length
    ? insuranceGalleries.map((cards) => (
        <InsuranceAmountBlockInner context={context} className={className} cards={cards} />
      ))
    : null;
};

function renderNavButton({ title, i, activeSlideIndex, onClick }) {
  const isActiveBtn = i === activeSlideIndex;

  const btnClassName = isActiveBtn
    ? 'bg-primary-main text-white rounded-md'
    : `text-secondary-text`;

  return (
    <button
      type="button"
      key={String(i)}
      onClick={onClick}
      aria-label={title}
      className={`box-border px-4 py-3 text-m-md ${btnClassName}`}
    >
      {title}
    </button>
  );
}
