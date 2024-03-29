import type { IconName } from '../../icons/IconName';
import type { IconVersion } from '../../model/IconVersion';

export type { IconName };

export interface IconCompatibilityFields {
  /** @title Альтернативный текст (alt) */
  alt?: string;
  /** @title Текст подсказки (title) */
  title?: string;
  /** @title Ширина */
  width?: string;
  /** @title Высота */
  height?: string;
  /** @hidden */
  asSVG?: boolean;
}

export type IconProps = IconCompatibilityFields & {
  className?: string;
  imageClassName?: string;
  name?: IconName;
  iconVersion?: IconVersion;
};
