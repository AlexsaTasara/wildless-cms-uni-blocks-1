import { EventBus } from '../../EventBus/EventBus';
import { useLink } from '../../hooks/useLink';
import type { ContentPageDef } from '../../model/ContentPageDef';
import { assertUnreachable } from '../../utils/assertUnreachable';
import type { ContentPageContext } from '../ContentPage/ContentPageContext';
import { renderGroupTab } from './renderGroupTab';
import { renderLinkTab } from './renderLinkTab';
import type { Tab } from './TabsContent';

export interface RenderTabProps {
  onClick: (tab: Tab) => void;
  currentTab?: Tab;
  page?: ContentPageDef;
  showCounter?: boolean;
  context: ContentPageContext;
}

export const renderTab =
  ({ onClick, currentTab, showCounter, page, context }: RenderTabProps) =>
  // Linter doesn't understand that switch processes all cases
  // eslint-disable-next-line consistent-return
  (tab: Tab, i: number) => {
    const { useRouter, handlerDecorator } = context;
    const router = useRouter();

    const type = tab.type;

    if (!(type === 'group' || type === 'link')) {
      return null;
    }

    switch (type) {
      case 'group':
        return renderGroupTab({ onClick, currentTab, showCounter, page, context })(tab, i);
      case 'link': {
        const link = useLink({ router, handlerDecorator }, tab);
        const linkClick = link.onClick;

        return renderLinkTab({
          ...link,
          onClick: (ev?: { preventDefault: () => void }) => {
            linkClick(ev);
            onClick(tab);
            EventBus.inst.fire('anchorClick', { isScrolling: true, label: tab.href });
          },
          currentTab,
          i,
        });
      }
      default:
        assertUnreachable(type);
    }
  };
