import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../model/ContentPageDef';
import { SearchBarInner } from './SearchBarInner';

export const SearchBar = JSX<UniBlockProps>(({ className = '' }) => {
  return <SearchBarInner className={className} />;
});
