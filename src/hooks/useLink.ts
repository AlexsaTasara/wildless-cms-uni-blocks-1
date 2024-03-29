import { HandlerDecorator, Router } from '../components/ContentPage/ContentPageContext';
import type { LinkProps } from '../model/LinkProps';
import { adjustHref } from '../utils/adjustHref';
import { isURL } from '../utils/url';

export const defaultHandlerDecorator: HandlerDecorator = (handler) => handler;

export function useLink(
  {
    router,
    handlerDecorator = defaultHandlerDecorator,
  }: { router: Router; handlerDecorator?: HandlerDecorator },
  link: Partial<LinkProps & { className: string }>,
) {
  const href = adjustHref(link.href, router);

  return {
    ...link,
    href,
    'aria-label': link.text,
    onClick: handlerDecorator((ev?: { preventDefault: () => void }) => {
      const isLocalHref = href && !isURL(href);
      const isLocalTarget = !link.target || link.target === '_self';
      if (isLocalHref && isLocalTarget) {
        ev?.preventDefault();
        router.push(href);
      }
    }, link),
  };
}
