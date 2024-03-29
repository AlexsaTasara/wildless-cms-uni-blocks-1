import { context } from '../../react/setup-fixture';
import { Header } from './Header';

export default {
  default: <Header context={context} defaultLocation="Москва" />,
  transparent: <Header context={context} defaultLocation="Москва" bgColor="transparent" />,
  'no submenu': <Header context={context} defaultLocation="Москва" showSubMenu={false} />,
};
