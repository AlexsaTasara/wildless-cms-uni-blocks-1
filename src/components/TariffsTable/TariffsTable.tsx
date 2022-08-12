import { JSX } from '@redneckz/uni-jsx';
import { useComparisonTableScroll } from '../../hooks/useComparisonTableScroll';
import type { UniBlockProps } from '../../types';

import { Heading } from '../../ui-kit/Heading/Heading';
import { COLS_LENGTH_FOR_SCROLL } from './constants';
import { TariffsTableNavigation } from './renderTariffsTableNavigation';
import type {
  TariffsTableCellData,
  TariffsTableContent,
  TariffsTableRowHeader,
} from './TariffsTableContent';
import { TariffsTableRow } from './TariffsTableRow';

export interface TariffsTableProps extends TariffsTableContent, UniBlockProps {}

export const TariffsTable = JSX<TariffsTableProps>(
  ({ className, context, title, rowHeaders, columns }) => {
    const [activeCardIndex, setActiveCardIndex] = context.useState(0);

    const colData = columns?.map(({ data }) => data) || [];
    const rowData = rowHeaders?.map((header, i) => ({
      header,
      data: colData.map((col) => col?.[i] || [{}]),
    }));

    const { nextClick, prevClick, isScrollAvailable, showNextButton, showPrevButton } =
      useComparisonTableScroll({
        colData,
        colsLengthForScroll: COLS_LENGTH_FOR_SCROLL,
        activeCardIndex,
        setActiveCardIndex,
      });

    return (
      <section
        className={`bg-white font-sans py-[50px] pl-[50px] overflow-hidden text-primary-text relative ${
          className || ''
        }`}
      >
        <Heading
          headingType="h2"
          className="max-w-[47rem] text-center mb-9 mx-auto"
          title={title}
        />
        <div role="table">
          {rowData?.length
            ? rendrerTariffsTableRows({
                rowData,
                activeCardIndex,
                isScrollAvailable,
                showNextButton,
                showPrevButton,
                nextClick,
                prevClick,
              })
            : null}
          {isScrollAvailable ? (
            <div className="absolute top-0 right-0 bottom-0 w-[84px] bg-opacity-to-white" />
          ) : null}
        </div>
      </section>
    );
  },
);

interface rendrerTariffsTableRowsProps {
  rowData: {
    header: TariffsTableRowHeader;
    data: TariffsTableCellData[][];
  }[];
  activeCardIndex: number;
  isScrollAvailable: boolean | 0;
  showNextButton: boolean | 0;
  showPrevButton: boolean | 0;
  nextClick: () => void;
  prevClick: () => void;
}

function rendrerTariffsTableRows(params: rendrerTariffsTableRowsProps) {
  const {
    rowData,
    activeCardIndex,
    isScrollAvailable,
    showNextButton,
    showPrevButton,
    nextClick,
    prevClick,
  } = params;
  return (
    <div className="relative">
      {rowData.map((row, i, { length }) => (
        <TariffsTableRow
          key={String(i)}
          row={row}
          isLastRow={i + 1 === length}
          activeCardIndex={activeCardIndex}
        />
      ))}
      {isScrollAvailable
        ? TariffsTableNavigation({
            showNextButton,
            showPrevButton,
            nextClick,
            prevClick,
          })
        : null}
    </div>
  );
}
