import { Button } from '../../ui-kit/Button/Button';
import type { ButtonContent } from '../../ui-kit/Button/ButtonProps';
import { Img } from '../../ui-kit/Img/Img';
import type { ImageContent } from '../../ui-kit/Img/ImgProps';
import { List } from '../../ui-kit/List/List';
import type { ListProps } from '../../ui-kit/List/ListProps';
import type { LabelDescriptionCell } from './TariffsTableContent';

export type EmbeddableCellDataType =
  | ButtonContent
  | LabelDescriptionCell
  | ImageContent
  | ListProps;

const renderButtonsCellData = ({ buttons }: ButtonContent) =>
  buttons && buttons?.length ? (
    <div>
      {buttons.map(({ rounded, appendLeft, ariaLabel, ...buttonProps }, idx) => (
        <Button
          className={`mt-3 ${idx > 0 && rounded ? 'ml-2.5' : ''} ${appendLeft ? 'w-12 h-12' : ''}`}
          key={String(idx)}
          appendLeft={appendLeft}
          rounded={rounded}
          ariaLabel={ariaLabel}
          {...buttonProps}
        />
      ))}
    </div>
  ) : null;

const renderLabelDescriptionCellData = ({ label, description }: LabelDescriptionCell) => {
  const labelClassName = `text-xl font-medium m-0 ${description ? 'mb-1' : ''}`;

  return (
    <div>
      {label ? <div className={labelClassName}>{label}</div> : null}
      {description ? <div className="text-s text-secondary-text">{description}</div> : null}
    </div>
  );
};

const renderImgCellData = ({ image }: ImageContent) =>
  image?.src ? <Img image={{ ...image, className: 'm-0' }} /> : null;

const renderListCellData = ({ isDotted, ...rest }: ListProps) => (
  <List
    className="flex flex-col justify-between items-start text-m"
    version="gray"
    isDotted={isDotted ?? true}
    {...rest}
  />
);

export const EmbeddableCellData = {
  Buttons: renderButtonsCellData,
  Img: renderImgCellData,
  List: renderListCellData,
  LabelDescription: renderLabelDescriptionCellData,
};
