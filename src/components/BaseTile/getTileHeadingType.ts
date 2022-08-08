import { getColSpan } from '../../utils/getColSpan';

export function getTileHeadingType(className = '') {
  const colSpan = getColSpan(className);
  if (colSpan <= 4) {
    return 'h4';
  } else if (colSpan <= 8) {
    return 'h3';
  } else {
    return 'h2';
  }
}
