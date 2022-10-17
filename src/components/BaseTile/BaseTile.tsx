import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type { BaseTileCommonProps } from './BaseTileProps';

export interface BaseTileProps extends BaseTileCommonProps, UniBlockProps {}

export const BaseTile = JSX<BaseTileProps>(
  ({ className = '', title = '', children, buttons, image }) => {
    return (
      <div className={`font-sans flex flex-col grow h-full items-start ${className}`}>
        {title}
        <div className="flex grow w-full justify-between">
          <div className="flex flex-col w-full">
            <div>{children}</div>
            {buttons ? <div className="mt-9">{buttons}</div> : null}
          </div>
          {image}
        </div>
      </div>
    );
  },
);
