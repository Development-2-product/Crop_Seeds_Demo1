/**
 * Builds responsive Pexels URLs without preserving the small, card-sized crop
 * height that is stored in the content data. The original image remains the
 * single source of truth while hero images can use their natural aspect ratio.
 */
export function responsiveImage(source: string, width: number) {
  const url = new URL(source);

  url.searchParams.delete('h');
  url.searchParams.set('w', String(width));

  return url.toString();
}

export function responsiveImageSet(source: string) {
  return [960, 1600, 2400]
    .map((width) => `${responsiveImage(source, width)} ${width}w`)
    .join(', ');
}
