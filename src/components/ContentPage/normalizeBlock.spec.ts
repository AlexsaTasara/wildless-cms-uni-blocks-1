import { BlockDef } from '../../types';
import { normalizeBlock } from './normalizeBlock';

describe('normalizeBlock', () => {
  it('should return new block definition without "mobile" property', () => {
    const blockDef: BlockDef = {
      type: 'TextBlock',
      content: {
        title: 'Desktop Title',
        description: 'Desktop description',
      },
      mobile: {
        type: 'TextBlock',
        content: {
          title: 'Mobile Title',
        },
      },
    };

    const desktopBlockDef: BlockDef = {
      type: 'TextBlock',
      content: {
        title: 'Desktop Title',
        description: 'Desktop description',
      },
    };

    expect(normalizeBlock(blockDef)).toEqual(desktopBlockDef);
  });

  it('should return new block definition same to input', () => {
    const blockDef: BlockDef = {
      type: 'TextBlock',
      content: {
        title: 'Desktop Title',
        description: 'Desktop description',
      },
    };

    const desktopBlockDef: BlockDef = {
      type: 'TextBlock',
      content: {
        title: 'Desktop Title',
        description: 'Desktop description',
      },
    };

    expect(normalizeBlock(blockDef)).toEqual(desktopBlockDef);
  });
});
