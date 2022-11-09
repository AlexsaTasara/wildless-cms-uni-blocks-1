import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../model/ContentPageDef';
import { Img } from '../../ui-kit/Img/Img';
import type { AccordionItemCommonProps } from './AccordionContent';
import { AccordionItemInner } from './AccordionItemInner';
import { useActiveHandler } from './useActiveHandler';

export interface AccordionItemProps extends AccordionItemCommonProps, UniBlockProps {}

export const AccordionItem = JSX<AccordionItemProps>(
  ({ label, labelIcon, blocks, bordered, context }) => {
    const { hasContent, icon, handleToggle } = useActiveHandler({ blocks });

    return (
      <li className={`${borderedLiClass(bordered)} border-solid border-main-divider`}>
        <button
          className={`border-none bg-transparent flex justify-between text-left w-full font-sans text-primary-text
          ${bordered ? '' : 'py-[14px] px-0'}
          ${hasContent ? 'group cursor-pointer' : ''}`}
          onClick={handleToggle}
        >
          <span
            className={`text-m-title-xs font-medium pr-2.5 flex ${
              hasContent ? 'group-hover:text-primary-main' : ''
            }`}
          >
            {labelIcon ? (
              <Img image={labelIcon} className="mr-3 flex-shrink-0" width="24" height="24" asSVG />
            ) : null}
            {label}
          </span>
          {hasContent ? (
            <Img className="flex-shrink-0" image={icon} width="24" height="24" asSVG />
          ) : null}
        </button>
        {hasContent ? <AccordionItemInner blocks={blocks} context={context} /> : null}
      </li>
    );
  },
);

function borderedLiClass(bordered?: boolean) {
  return bordered ? 'border p-4 rounded mb-4' : 'border-0 border-b last:border-b-0';
}
