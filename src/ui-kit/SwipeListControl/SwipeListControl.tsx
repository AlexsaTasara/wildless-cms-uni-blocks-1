import { JSX } from '@redneckz/uni-jsx';
import { DEFAULT_GAP, DEFAULT_PADDING } from './constants';
import { SwipeListControlDots } from './SwipeListControlDots';
import { SwipeListControlList } from './SwipeListControlList';
import type { SwipeListControlProps } from './SwipeListControlProps';
import { getIndexParts } from './utils/getIndexParts';
import { getScrollPoints } from './utils/getScrollPoints';

export const SwipeListControl = JSX<SwipeListControlProps>(
  ({
    className,
    context,
    children,
    gap = DEFAULT_GAP,
    padding = DEFAULT_PADDING,
    showDots = true,
    onSlideChange,
  }) => {
    const [activeIndex, setActiveIndex] = context.useState<number>(0);
    const [indexFraction, setIndexFraction] = context.useState<number>(0);

    const handleScroll = (e: UIEvent) => {
      const { scrollLeft, clientWidth, childElementCount, scrollWidth, children } =
        e.currentTarget as HTMLElement;

      // horizontal PADDING / 2 to compensate padding-margin combo of child container
      // without CSS calc function, as wrapper element gets bigger in the DOM, remaining same visually
      const itemWidth = (children[0] as HTMLElement).offsetWidth - padding / 2;
      const scrollPoints = getScrollPoints({
        gap,
        padding,
        clientWidth,
        scrollWidth,
        childElementCount,
        itemWidth,
      });

      const { index, fraction } = getIndexParts(scrollLeft, scrollPoints);
      if (index !== activeIndex && onSlideChange) {
        onSlideChange();
      }
      setActiveIndex(index);
      setIndexFraction(fraction);
    };

    return (
      <div className={className}>
        {renderSwipeList({ gap, padding, activeIndex, handleScroll, children })}
        {renderSwipelistDots({ activeIndex, indexFraction, showDots, children })}
      </div>
    );
  },
);

const renderSwipeList = ({ gap, padding, activeIndex, handleScroll, children }) => (
  <SwipeListControlList
    gap={gap}
    padding={padding}
    activeIndex={activeIndex}
    onScroll={handleScroll}
  >
    {children}
  </SwipeListControlList>
);

const renderSwipelistDots = ({ activeIndex, indexFraction, showDots, children }) => (
  <SwipeListControlDots activeIndex={activeIndex} indexFraction={indexFraction} showDots={showDots}>
    {children}
  </SwipeListControlDots>
);
