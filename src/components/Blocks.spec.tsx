import { setup } from '@redneckz/uni-jsx';
import { render } from '@testing-library/react';
import { useState } from 'react';
import runtime from 'react/jsx-runtime';
import { Blocks } from './Blocks';
import type { ContentPageContext } from './ContentPage/ContentPageContext';

const { jsx, jsxs } = runtime as any;

setup(jsx, jsxs);

const emptyFn = () => {
  /* For sure */
};

const context: ContentPageContext = {
  useState,
  useRouter: () => ({
    pathname: '/credits',
    query: {},
    push: emptyFn,
    replace: emptyFn,
  }),
  useAsyncData: () => ({}),
  useGeolocation: (defaultLocation) => [defaultLocation, emptyFn],
  useLikeService: () => ({
    likeCount: 0,
    like: emptyFn,
    dislike: emptyFn,
  }),
  handlerDecorator: (): any => emptyFn,
  useSearch: () => ({
    term: '',
    setTerm: emptyFn,
  }),
  IntersectionObserverTag: ({ children }) => children,
};

describe('Blocks', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  for (const [key, BlockComponent] of Object.entries(Blocks)) {
    describe(key, () => {
      it(`should render block "${key}" without content`, () => {
        expect.assertions(2);

        const { container } = render(<BlockComponent context={context} />);
        expect(container.firstChild).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
      });

      it(`should render block "${key}" with demo content`, async () => {
        expect.assertions(1);

        let data = {};

        try {
          const { default: example } = await import(`./${key}/${key}.example.json`);
          data = example;
        } catch (ex) {
          // Do nothing
        }

        const { container } = render(<BlockComponent context={context} {...data} />);
        expect(container.firstChild).toBeTruthy();
      });
    });
  }
});