import { JSX } from '@redneckz/uni-jsx';
import type { LinkProps } from '../../model/LinkProps';

interface TextInformationLinkProps extends LinkProps {
  className: string;
  index: number;
  onClick: () => void;
}

export const TextInformationLink = JSX<Partial<TextInformationLinkProps>>(
  ({ className = '', index, text, href, target, onClick }) => (
    <a
      className={`text-xs-light text-secondary-text visited:text-secondary-text hover:text-primary-main inline-block no-underline max-w-[292px] ${className}`}
      href={href}
      target={target}
      onClick={onClick}
    >
      {text || `Документ ${index}`}
    </a>
  ),
);
