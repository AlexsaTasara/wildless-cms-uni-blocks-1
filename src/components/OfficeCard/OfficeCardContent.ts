import type { Picture } from '../../model/Picture';

/**
 * @title Цвет текста
 * @enumNames [
 *    "Красный",
 *    "Зеленый"
 * ]
 */
export type TextColorVersion = 'red' | 'green';

export interface OfficeCardContent {
  title?: string;
  link?: string;
  location?: Location;
  openTime?: string;
  metros?: Metro[];
  contactsInfo?: ContactInformation[];
  dates?: DayOfWeek[];
  currencies?: Currency[];
}

export interface Currency {
  name?: string;
  buy?: string;
  sell?: string;
}

export interface Location {
  icon?: Picture;
  adress: string;
}

export interface DayOfWeek {
  dayOfWeek?: string;
  time?: string;
  status?: string;
}

export interface ContactInformation {
  title?: string;
  info?: string;
}

export interface Metro {
  icon?: Picture;
  name?: string;
  distance?: string;
  time?: string;
}
