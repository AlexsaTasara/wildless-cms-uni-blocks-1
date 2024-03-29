import { JSX } from '@redneckz/uni-jsx';
import type { SVGPathOptions } from '../SVG';

export interface LikeButtonProps {
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

export const LikeButton = JSX<LikeButtonProps>(({ className, onClick, ariaLabel }) => (
  <button
    type="button"
    className={`border-0 w-9 bg-inherit cursor-pointer ${className || ''}`}
    onClick={onClick}
    aria-label={ariaLabel}
  >
    {renderLikeIcon()}
  </button>
));

const renderLikeIcon = () => {
  const params = {
    stroke: '#292D32',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: '1.5',
  } as SVGPathOptions;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        {...params}
        strokeMiterlimit="10"
        /* eslint-disable max-len */
        d="M21.48 11.95c.5-1.4-.4-2.6-1.9-2.6h-4c-.6 0-1.1-.5-1-1.2l.5-3.2c.2-.9-.4-1.9-1.3-2.2-.8-.3-1.8.1-2.2.7l-4.1 6.1M7.48 18.35l3.1 2.4c.4.4 1.3.6 1.9.6h3.8c1.2 0 2.5-.9 2.8-2.1l1.24-3.77"
      />
      <path
        {...params}
        d="M2.38 18.35v-9.8c0-1.4.6-1.9 2-1.9h1c1.4 0 2 .5 2 1.9v9.8c0 1.4-.6 1.9-2 1.9h-1c-1.4 0-2-.5-2-1.9Z"
      />
    </svg>
  );
};
