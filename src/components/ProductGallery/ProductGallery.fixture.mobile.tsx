import React from 'react';
import type { Picture } from '../../model/Picture';
import { context } from '../../setup-fixture';
import { ProductGallery } from './ProductGallery';

const moneyImage: Picture = {
  src: 'money-1.png',
  format: 'webp',
  size: {
    width: 280,
    height: 280,
  },
  alt: 'Варианты потребительского кредита',
};

const worker: Picture = {
  src: 'money-2.png',
  format: 'webp',
  size: {
    width: 280,
    height: 280,
  },
};

const creditCard: Picture = {
  src: 'credit-card-1.png',
  format: 'webp',
  size: {
    width: 280,
    height: 280,
  },
};

export default {
  primary: (
    <div className="p-2">
      <div className="container grid grid-cols-12">
        <ProductGallery
          className="col-span-12"
          context={context}
          slides={[
            {
              productBlock: {
                title: 'Акция «Кредит на все, что хочется!»',
                items: [
                  'Потребительский кредит по специальной процентной ставке',
                  'Получите деньги без залога и поручительства',
                  'Кредитный лимит до 5 млн рублей',
                ],
                buttons: [
                  {
                    href: 'https://rshb.ru',
                    text: 'Подробнее',
                    target: '_blank',
                    version: 'primary',
                  },
                ],
                image: moneyImage,
              },
            },
            {
              productBlock: {
                title: 'Ставка от 12,5% годовых на срок до 3 лет!',
                items: [
                  'Потребительский кредит по специальной процентной ставке',
                  'Получите деньги без залога и поручительства',
                  'Кредитный лимит до 5 млн рублей',
                ],
                buttons: [
                  {
                    href: 'https://rshb.ru',
                    text: 'Подробнее',
                    target: '_blank',
                    version: 'primary',
                  },
                ],
                image: worker,
              },
            },
            {
              nav: {
                title: 'Выгодно покупать',
                desc: 'Дополнительные бонусные баллы за покупки',
              },
              productBlock: {
                title: 'Дополнительные бонусные баллы за покупки!',
                items: [
                  'Потребительский кредит по специальной процентной ставке',
                  'Получите деньги без залога и поручительства',
                  'Кредитный лимит до 5 млн рублей',
                ],
                buttons: [
                  {
                    href: 'https://rshb.ru',
                    text: 'Подробнее',
                    target: '_blank',
                    version: 'primary',
                  },
                ],
                image: creditCard,
              },
            },
            {
              productBlock: {
                title: 'Карты Unionpay',
                items: [
                  'Потребительский кредит по специальной процентной ставке',
                  'Получите деньги без залога и поручительства',
                  'Кредитный лимит до 5 млн рублей',
                ],
                buttons: [
                  {
                    href: 'https://rshb.ru',
                    text: 'Подробнее',
                    target: '_blank',
                    version: 'primary',
                  },
                ],
                image: creditCard,
              },
            },
          ]}
        />
      </div>
    </div>
  ),
};
