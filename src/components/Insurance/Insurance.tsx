import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type { InsuranceContent } from './InsuranceContent';
import type { Benefit } from '../BenefitsBlock/BenefitsBlockContent';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import { addSpacesBetweenNumbers } from '../../utils/addSpacesBetweenNumbers';

export interface InsuranceProps extends InsuranceContent, UniBlockProps {}

export const Insurance = JSX<InsuranceProps>(
  ({ className = '', title, description, image, benefits, insuranceSum, monthLimit }) => {
    return (
      <section className={`px-[100px] py-[50px] bg-white text-primary-text ${className}`}>
        {title ? <Heading headingType="h3" title={title} className="text-center" /> : null}
        {description ? <div className="text-center text-md mt-3">{description}</div> : null}
        <div>
          <div className="mt-5 mx-auto flex justify-center gap-[120px] mt-[30px]">
            {image?.src ? <Img image={image} /> : null}
            <div className="w-[558px] m-auto">
              {benefits ? (
                <div className="flex flex-col gap-4">{benefits.map(renderBenefit)}</div>
              ) : null}

              <div className="bg-secondary-light h-15 flex mt-7 gap-6 px-5 py-4">
                {insuranceSum
                  ? renderValueBlock('Страховая сумма:', insuranceSum, Boolean(monthLimit))
                  : null}
                {monthLimit
                  ? renderValueBlock('Ежемесячный лимит:', monthLimit, Boolean(insuranceSum))
                  : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },
);

function renderBenefit(benefit: Benefit, i: number) {
  return (
    <div key={String(i)} className="flex items-center gap-5">
      {benefit?.icon ? (
        <Img
          className="w-[50px] h-[50px] min-w-[50px] p-3 rounded-full bg-secondary-light"
          image={benefit.icon}
          width="24"
          height="24"
          asSVG
        />
      ) : null}
      <div className="flex">
        <div className="text-title-2xs">{benefit.label}</div>
      </div>
    </div>
  );
}

function renderValueBlock(title, sum, isAnotherBlock) {
  const widthStyle = isAnotherBlock ? 'w-fit' : 'w-full';
  return (
    <div className={`flex justify-between items-center gap-2 w-full ${widthStyle}`}>
      <span className="text-secondary-text text-base">{title}</span>
      <span className="text-primary-main text-title-2xs">{addSpacesBetweenNumbers(sum)} ₽</span>
    </div>
  );
}