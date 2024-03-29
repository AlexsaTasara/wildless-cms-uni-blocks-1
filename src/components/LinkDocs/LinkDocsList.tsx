import { JSX } from '@redneckz/uni-jsx';
import type { Picture } from '../../model/Picture';
import type { LinkColumnsMode, LinkDocsItem } from './LinkDocsContent';
import { LinkDocsListItem } from './LinkDocsListItem';

export interface LinkDocsListProps {
  className?: string;
  documents?: LinkDocsItem[];
  columnsMode?: LinkColumnsMode;
  icon?: Picture;
}

export const LinkDocsList = JSX<LinkDocsListProps>(
  ({ className, documents, columnsMode = 'double', icon }) => {
    return documents?.length ? (
      <div className={className} role="list">
        {documents.map((doc, i) => (
          <div
            key={String(i)}
            className={columnsMode === 'double' ? 'basis-[calc(50%-20px)]' : ''}
            role="listitem"
          >
            <LinkDocsListItem
              className="group flex align-middle h-fit w-fit text-primary-text no-underline hover:text-primary-main"
              doc={doc}
              icon={icon}
            />
          </div>
        ))}
      </div>
    ) : null;
  },
);
