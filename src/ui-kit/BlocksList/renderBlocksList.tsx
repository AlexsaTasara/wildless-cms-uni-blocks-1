import type { ContentPageContext } from '../../components/ContentPage/ContentPageContext';
import type { JSXBlock } from '../../model/BlocksRegistry';
import type { UniBlockProps } from '../../model/ContentPageDef';
import { style2className } from '../../utils/style2className';
import type { BlockDef } from './BlocksListProps';
import { EmbeddableBlocks } from './EmbeddableBlocks';

export type EmbeddableBlocksProps = {
  blocks?: BlockDef[];
  context: ContentPageContext;
  className?: string;
};

export const renderBlocksList = ({ blocks, context, className = '' }: EmbeddableBlocksProps) =>
  blocks?.length ? blocks.map(renderBlock({ context, className })) : [];

const renderBlock =
  ({ context, className }: UniBlockProps) =>
  (block: BlockDef, i: number) => {
    if (!block) {
      return null;
    }

    const { style, blockListType: type, ...rest } = block;

    if (!type || !(type in EmbeddableBlocks)) {
      return null;
    }

    const classNameBlock = style2className(style);
    const EmbeddedBlock: JSXBlock = EmbeddableBlocks[type];

    return (
      <EmbeddedBlock
        key={`block_${i}`}
        className={`${className} ${classNameBlock}`}
        context={context}
        {...rest}
      />
    );
  };
