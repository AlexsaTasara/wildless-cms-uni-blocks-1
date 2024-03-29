import { JSX } from '@redneckz/uni-jsx';
import type { LinkProps } from '../model/LinkProps';

export interface BreadcrumbProps extends LinkProps {
  className?: string;
  onClick?: () => void;
}

export const Breadcrumb = JSX<BreadcrumbProps>(
  ({ text, href, target, onClick, className = '', children }) => {
    if (href) {
      return (
        <a className={`no-underline ${className}`} href={href} target={target} onClick={onClick}>
          <span className={className}>{text || children}</span>
        </a>
      );
    } else {
      return <span className={className}>{text || children}</span>;
    }
  },
);
