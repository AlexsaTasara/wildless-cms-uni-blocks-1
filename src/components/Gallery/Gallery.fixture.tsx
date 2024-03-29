import type { Picture } from '../../model/Picture';
import { context } from '../../react/setup-fixture';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import { Img } from '../../ui-kit/Img/Img';
import { Gallery } from './Gallery';
import type { GalleryProps } from './GalleryProps';
const isDotted = true;

const image: Picture = {
  src: 'money-1.png',
  format: 'webp',
  size: {
    width: 140,
    height: 140,
  },
  title: 'money',
};

const buttonPrimary: ButtonWithIconProps = {
  href: '/credit-cards',
  text: 'Подробнее',
  target: '_blank',
  version: 'secondary',
};

const buttonPrimaryIcon: ButtonWithIconProps = {
  href: '/credit-cards',
  text: 'Подробнее',
  target: '_blank',
  version: 'secondary',
  appendLeft: <Img image={{ icon: 'BankIcon' }} width="24" height="24" asSVG />,
};

const defaultItems = [
  { text: 'Качественные фермерские продукты напрямую от производителей' },
  { text: 'Самая большая база сельских туров по России' },
  { text: 'Площадки для создания комфортной жизни за городом' },
];

export const defaultProps: GalleryProps = {
  title: 'Вы можете оплатить бонусными баллами',
  description: 'Удобный каталог с большим ассортиментом товаров и сервисов',
  context,
  cards: [
    {
      title: 'Более 5000 товаров',
      description:
        'Время копить: ставка растет в зависимости от срока нахождения средств на Счете!',
      image,
      button: buttonPrimary,
      isDotted,
      items: defaultItems,
      version: 'secondary',
    },
    {
      title: 'Более 1000 развлечений',
      description: 'Порядок и условия предоставления в соответствии с 106 ФЗ',
      image,
      button: buttonPrimaryIcon,
      isDotted,
      items: defaultItems,
    },
    {
      title: 'Фермерские продукты',
      description: 'Высокий процент даже при небольшой сумме денежных средств',
      image,
      button: buttonPrimary,
      isDotted,
      items: defaultItems,
    },
    {
      title: '«Моя выгода»',
      description:
        'Время копить: ставка растет в зависимости от срока нахождения средств на Счете!',
      image,
      button: buttonPrimary,
      isDotted,
      items: defaultItems,
    },
  ],
};

const textAndButtonProps: GalleryProps = {
  title: 'Вы можете оплатить бонусными баллами',
  description: 'Удобный каталог с большим ассортиментом товаров и сервисов',
  context,
  cards: [
    {
      title: 'Более 5000 товаров',
      description:
        'Время копить: ставка растет в зависимости от срока нахождения средств на Счете!',
      image,
      button: buttonPrimary,
    },
    {
      title: 'Более 1000 развлечений',
      description: 'Порядок и условия предоставления в соответствии с 106 ФЗ',
      image,
      button: buttonPrimary,
    },
    {
      title: 'Фермерские продукты',
      description: 'Высокий процент даже при небольшой сумме денежных средств',
      image,
      button: buttonPrimary,
    },
    {
      title: '«Моя выгода»',
      description:
        'Время копить: ставка растет в зависимости от срока нахождения средств на Счете!',
      image,
      button: buttonPrimary,
    },
  ],
};

const listAndButtonProps: GalleryProps = {
  title: 'Вы можете оплатить бонусными баллами',
  description: 'Удобный каталог с большим ассортиментом товаров и сервисов',
  context,
  cards: [
    {
      title: 'Более 5000 товаров',
      image,
      button: buttonPrimary,
      isDotted,
      items: defaultItems,
    },
    {
      title: 'Более 1000 развлечений',
      image,
      button: buttonPrimary,
      isDotted,
      items: defaultItems,
    },
    {
      title: 'Фермерские продукты',
      image,
      button: buttonPrimary,
      isDotted,
      items: defaultItems,
    },
    {
      title: '«Моя выгода»',
      image,
      button: buttonPrimary,
      isDotted,
      items: defaultItems,
    },
  ],
};

const textAndNoButtonProps: GalleryProps = {
  title: 'Вы можете оплатить бонусными баллами',
  description: 'Удобный каталог с большим ассортиментом товаров и сервисов',
  context,
  cards: [
    {
      title: 'Более 5000 товаров',
      description:
        'Время копить: ставка растет в зависимости от срока нахождения средств на Счете!',
      image,
    },
    {
      title: 'Более 1000 развлечений',
      description: 'Порядок и условия предоставления в соответствии с 106 ФЗ',
      image,
    },
    {
      title: 'Фермерские продукты',
      description: 'Высокий процент даже при небольшой сумме денежных средств',
      image,
    },
    {
      title: '«Моя выгода»',
      description:
        'Время копить: ставка растет в зависимости от срока нахождения средств на Счете!',
      image,
    },
  ],
};

const onlyTitleProps: GalleryProps = {
  title: 'Вы можете оплатить бонусными баллами',
  description: 'Удобный каталог с большим ассортиментом товаров и сервисов',
  context,
  cards: [
    {
      title: 'Более 5000 товаров',
      image,
    },
    {
      title: 'Более 1000 развлечений',
      image,
    },
    {
      title: 'Фермерские продукты',
      image,
    },
    {
      title: '«Моя выгода»',
      image,
    },
  ],
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <Gallery className="col-span-12" {...defaultProps} />
    </div>
  ),
  'text and button': (
    <div className="container grid grid-cols-12">
      <Gallery className="col-span-12" {...textAndButtonProps} />
    </div>
  ),
  'list and button': (
    <div className="container grid grid-cols-12">
      <Gallery className="col-span-12" {...listAndButtonProps} />
    </div>
  ),
  'text and no button': (
    <div className="container grid grid-cols-12">
      <Gallery className="col-span-12" {...textAndNoButtonProps} />
    </div>
  ),
  'only title': (
    <div className="container grid grid-cols-12">
      <Gallery className="col-span-12" {...onlyTitleProps} />
    </div>
  ),
};
