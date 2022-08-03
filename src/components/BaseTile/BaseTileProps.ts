import type { BlockVersion } from '../../model/BlockVersion';
import type { Picture } from '../../model/Picture';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import type { HeadingType } from '../../ui-kit/Heading/HeadingProps';
import type { IconName } from '../../ui-kit/Icon/IconProps';

/**
 * @title Выравнивание
 * @enumNames [
 *    "По левому краю",
 *    "По центру",
 *    "По правому краю"
 * ]
 */
export type AlignType = 'left' | 'center' | 'right';

export interface BaseTileIconButton extends ButtonWithIconProps {
  icon?: IconName;
}

/**
 * @title Общий компонент плиток
 */
export type BaseTileCommonProps = BaseTileTitleProps & BaseTileMainProps;

/**
 * @title Заголовк плитки
 */
export interface BaseTileTitleProps {
  /** @title Заголовок */
  title?: string;
  /**
   * @title Тип заголовка
   */
  headingType?: HeadingType;
}

export interface BaseTileMainProps {
  description?: string;
  image?: Picture;
  /** @title Список */
  items?: string[];
  /**
   * @title Кнопки
   * @maxItems 4
   */
  buttons?: BaseTileIconButton[];
  version?: BlockVersion;
  align?: AlignType;
}
