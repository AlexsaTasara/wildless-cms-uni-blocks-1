import { DEFAULT_MONTHS } from './constants';
import type { CalculatorParams } from './CalculatorContent';

export const getDefaultMonths = (calculatorParams: CalculatorParams) =>
  calculatorParams.maxMonths && calculatorParams.minMonths
    ? Math.round((calculatorParams.maxMonths - calculatorParams.minMonths) / 2)
    : DEFAULT_MONTHS;