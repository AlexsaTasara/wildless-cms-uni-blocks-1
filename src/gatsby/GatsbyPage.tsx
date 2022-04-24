import { setup } from '@redneckz/uni-jsx';
import type { PageProps } from 'gatsby';
import runtime from 'react/jsx-runtime';
import { ContentPage } from '../ContentPage.js';
import type { ContentPageDef } from '../types.js';

import '@redneckz/wildless-cms-uni-blocks/dist/common.css';

const { jsx, jsxs } = runtime as any;
setup(jsx, jsxs);

type PageData<D extends string> = Record<D, ContentPageDef>;

export const GatsbyPage =
  <D extends string>(discriminator: D) =>
  ({ data }: PageProps<PageData<D>>) =>
    <ContentPage data={data[discriminator]} />;
