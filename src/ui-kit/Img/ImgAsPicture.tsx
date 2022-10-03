import { JSX } from '@redneckz/uni-jsx';
import type { ImgSource, Picture } from '../../model/Picture';
import type { ImageProps } from './ImgProps';

export const ImgAsPicture = JSX<ImageProps<Picture>>(
  ({ className = '', image, imageClassName = '', isMobile = false }) => {
    if (!image) {
      return null;
    }

    const pictureStyles = isMobile ? 'flex' : 'flex-none';

    return (
      <picture className={`${pictureStyles} ${className}`}>
        {image?.sources?.length
          ? image.sources.map(({ src, format, media, size }, index) => (
              <source
                key={`${index}_${src}`}
                srcSet={src}
                type={formatToMimeType(format)}
                media={media}
                {...size}
              />
            ))
          : null}
        {renderImg(image, imageClassName, isMobile)}
      </picture>
    );
  },
);

const renderImg = (image: Picture, imageClassName = '', isMobile = false) => {
  const title = image.title || '';
  const alt = image.alt || image.title;
  const imgStyle = isMobile ? 'm-auto' : 'm-0';

  return (
    <img
      src={image.src}
      className={`${imgStyle} ${imageClassName}`}
      alt={alt}
      title={title}
      {...image.size}
    />
  );
};

export function formatToMimeType(format: ImgSource['format']): string | undefined {
  return format ? `image/${String(format)}` : undefined;
}