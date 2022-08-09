import type { BlockDef, ContentPageDef } from '../../types';
import { Blocks } from '../Blocks';
import { isBlockInRegistry } from './isBlockInRegistry';
import { normalizeBlock } from './normalizeBlock';

export function normalizePage(contentPage: ContentPageDef): ContentPageDef {
  const { blocks, slots } = contentPage;

  return {
    ...contentPage,
    blocks: getDesktopBlocks(blocks),
    slots:
      slots &&
      Object.keys(slots).reduce(
        (res, key) => ({
          ...res,
          [key]: {
            ...slots[key],
            blocks: getDesktopBlocks(slots[key].blocks),
          },
        }),
        {},
      ),
  };
}

function getDesktopBlocks(blocks?: BlockDef[]) {
  return blocks?.filter((block) => isBlockInRegistry(block, Blocks)).map(normalizeBlock);
}
