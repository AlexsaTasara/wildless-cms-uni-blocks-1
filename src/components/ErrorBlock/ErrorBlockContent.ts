import type { EmptyOption } from '../../model/EmptyOptionType';
import type { Picture } from '../../model/Picture';
import type { ButtonProps } from '../../ui-kit/Button/ButtonProps';

/**
 * @title Изображение
 */
export type ErrorImageDef = {
  /** @default Image */
  errorContentType: 'Image';
  /** @title Изображение */
  image?: Picture;
};

/**
 * @title Код ошибки
 */
export type ErrorCodeDef = {
  /** @default Code */
  errorContentType: 'Code';
  /** @title Код ошибки */
  code?: number;
};
export type ErrorContentDef = EmptyOption | ErrorImageDef | ErrorCodeDef;

/**
 * @title Блок ошибки
 */
export interface ErrorBlockContent {
  /** @title Заголовок */
  title?: string;
  /** @title Описание */
  subtitle?: string;
  /** @title Вид контента */
  error?: ErrorContentDef;
  /** @title Кнопка */
  button?: ButtonProps;
}
