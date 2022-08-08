import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../types';
import { ButtonSection } from '../../ui-kit/Button/ButtonSection';
import { Description } from '../../ui-kit/Description/Description';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import { List } from '../../ui-kit/List/List';
import { BaseTile } from '../BaseTile/BaseTile';
import { getTileHeadingType } from '../BaseTile/getTileHeadingType';
import { getTileMinHeight } from '../BaseTile/getTileMinHeight';
import { getTileRightPadding } from '../BaseTile/getTileRightPadding';
import type { TileContent } from '../Tile/TileContent';

export interface TileProps extends TileContent, UniBlockProps {
  role?: string;
}

const tileStyleMap: Record<BlockVersion, string> = {
  primary: 'bg-white text-primary-text',
  secondary: 'bg-primary-main text-white',
};

export const Tile = JSX<TileProps>((props) => {
  const {
    context,
    title,
    description,
    items,
    children,
    buttons,
    image,
    className = '',
    version = 'primary',
    role,
  } = props;

  return (
    <section
      className={`font-sans p-9 box-border ${className} ${
        tileStyleMap[version]
      } ${getTileRightPadding(className)} ${getTileMinHeight(className)} `}
      role={role}
    >
      <BaseTile
        context={context}
        title={
          title && (
            <Heading
              headingType={getTileHeadingType(className)}
              title={title}
              className={`whitespace-pre-wrap max-w-[600px] ${
                version === 'primary' ? 'text-primary-text' : ''
              }`}
            />
          )
        }
        buttons={
          buttons?.length ? (
            <ButtonSection context={context} buttons={buttons} className="flex mt-9 gap-3" />
          ) : null
        }
        image={image?.src && <Img className="mt-auto ml-7" image={image} />}
      >
        {description && <Description description={description} />}
        {children}
        {items?.length ? <List items={items} /> : null}
      </BaseTile>
    </section>
  );
});
