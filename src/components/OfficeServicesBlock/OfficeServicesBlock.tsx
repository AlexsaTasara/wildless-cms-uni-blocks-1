import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../model/ContentPageDef';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import type {
  OfficeServicesBlockContent,
  OfficeServicesBlockList,
} from './OfficeServicesBlockContent';

export interface OfficeServicesBlockProps extends OfficeServicesBlockContent, UniBlockProps {}

export const OfficeServicesBlock = JSX<OfficeServicesBlockProps>(
  ({ className = '', context, title, servicesList, anchor = '', ...rest }) => {
    return (
      <BlockWrapper
        context={context}
        id={anchor}
        className={`font-sans bg-white p-8 flex flex-col ${className}`}
        {...rest}
      >
        {title ? <Heading headingType="h5" className="mb-5" title={title} /> : null}
        {servicesList?.length ? servicesList.map(renderListItems) : null}
      </BlockWrapper>
    );
  },
);

const renderListItems = (itemList: OfficeServicesBlockList, i) => (
  <li key={`list_item_${String(i)}`} className="flex mb-5 last:mb-0 list-none">
    {itemList.icon ? (
      <Img
        className="mr-3 min-w-6 min-h-6 w-6 h-6"
        width="24"
        height="24"
        asSVG
        image={itemList.icon}
      />
    ) : null}
    {itemList.label ? <span className="text-l-light">{itemList.label}</span> : null}
  </li>
);
