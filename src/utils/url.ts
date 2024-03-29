export const isURL = (href?: string) => href?.includes('//');

export const withoutQuery = (href?: string) => (href || '').replace(/\/?\?.*/, '');

export const getOrigin = (href?: string) => {
  if (!href || !isURL(href)) {
    return undefined;
  }

  const url = href;
  const protoSeparator = '//';
  const endOfProto = url.indexOf(protoSeparator);
  const endOfOrigin = url.indexOf('/', endOfProto + protoSeparator.length);

  return endOfOrigin !== -1 ? url.substring(0, endOfOrigin) : url;
};

export const getHash = (href?: string) => {
  if (!href || !isURL(href)) {
    return undefined;
  }

  const hashIndex = href.indexOf('#');

  return hashIndex !== -1 ? href.substring(hashIndex, href.length) : undefined;
};

export const isHash = (href?: string) => href?.startsWith('#');
