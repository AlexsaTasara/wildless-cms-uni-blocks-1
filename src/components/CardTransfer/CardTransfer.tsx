import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import type { UniBlockProps } from '../../model/ContentPageDef';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import type { GetButtonClassParams } from '../../ui-kit/Button/GetButtonClassParams';
import { getDisabledButtonClasses } from '../../ui-kit/Button/getDisabledButtonClasses';
import { getRegularButtonClasses } from '../../ui-kit/Button/getRegularButtonClasses';
import { CurrencyInput } from '../../ui-kit/CurrencyInput/CurrencyInput';
import { Heading } from '../../ui-kit/Heading/Heading';
import type { CardTransferContent } from './CardTransferContent';

const AMOUNT_KEY = 'amount';
const FORM_URL = 'https://www.rshb.ru/p2p/';

const DEFAULT_TITLE = 'Укажите сумму перевода';
const DEFAULT_LABEL = 'Сумма перевода';
const DEFAULT_PLACEHOLDER = '1500';
const DEFAULT_BUTTON_TEXT = 'Далее';

const BUTTON_CLASS_PARAMS: GetButtonClassParams = {
  version: 'primary',
  className: 'w-full h-[56px] px-9 mt-6',
};

export interface CardTransferProps extends CardTransferContent, UniBlockProps {}

export const CardTransfer = JSX<CardTransferProps>(
  ({
    className = '',
    title = DEFAULT_TITLE,
    label = DEFAULT_LABEL,
    placeholder = DEFAULT_PLACEHOLDER,
    buttonText = DEFAULT_BUTTON_TEXT,
    ...rest
  }) => {
    const [value, setValue] = useState<string>('');
    const isDisabled = !Number(value);

    return (
      <BlockWrapper
        className={`p-[50px] flex flex-col items-center font-sans bg-white ${className}`}
        {...rest}
      >
        {title ? <Heading className="max-w-[684px] pb-9" headingType="h2" title={title} /> : null}
        <form className="w-[468px]" method="POST" action={FORM_URL}>
          <CurrencyInput
            name={AMOUNT_KEY}
            value={value}
            onChange={setValue}
            placeholder={placeholder}
            label={label}
          />
          <button
            type="submit"
            className={
              isDisabled
                ? getDisabledButtonClasses(BUTTON_CLASS_PARAMS)
                : getRegularButtonClasses(BUTTON_CLASS_PARAMS)
            }
            disabled={isDisabled}
          >
            {buttonText}
          </button>
        </form>
      </BlockWrapper>
    );
  },
);
