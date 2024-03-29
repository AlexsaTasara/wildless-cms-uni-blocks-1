import { JSX } from '@redneckz/uni-jsx';
import { UniBlockProps } from '../../model/ContentPageDef';
import { Checkbox } from '../Checkbox/Checkbox';

interface RadioButtonItem {
  id: string;
  text: string;
}

interface RadioButtonGroupProps extends UniBlockProps {
  items: RadioButtonItem[];
  checkedItem?: string;
  onChangeCheckedItem: (id: string) => void;
}

export const RadioButtonGroup = JSX<RadioButtonGroupProps>(
  ({ items, checkedItem, onChangeCheckedItem }) => {
    return (
      <div className="flex flex-col gap-3">
        {items?.map(({ id, text }) => (
          <Checkbox
            key={id}
            isRadio
            text={text}
            checked={checkedItem === id}
            onChange={() => onChangeCheckedItem(id)}
          />
        ))}
      </div>
    );
  },
);
