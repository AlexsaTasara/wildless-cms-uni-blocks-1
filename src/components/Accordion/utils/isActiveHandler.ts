import type { IconName } from '../../../icons/IconName';

export const isActiveHandler = ({ context, blocks }) => {
  const [isActive, setIsActive] = context.useState(false);
  const hasContent = blocks?.length;
  const icon: IconName = isActive ? 'MinusIcon' : 'PlusIcon';

  const getContentBlock = ({ currentTarget }) => currentTarget.nextSibling;

  const handleToggle = (e: MouseEvent) => {
    if (!hasContent) {
      return;
    }

    setIsActive(!isActive);
    const contentBlock = getContentBlock(e);
    contentBlock.style.maxHeight = contentBlock.style.maxHeight
      ? null
      : `${contentBlock.scrollHeight}px`;
  };

  return { isActive, hasContent, icon, handleToggle };
};
