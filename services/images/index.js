const baseUrl = "https://image.tmdb.org/t/p/";

const images = {
  backdrop_sizes: ["w300", "w780", "w1280", "original"],
  logo_sizes: ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
  poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
  profile_sizes: ["w45", "w185", "h632", "original"],
  still_sizes: ["w92", "w185", "w300", "original"],
};

const imageSize = (imageType) => {
  const sizesAccepted = images[imageType];
  return new Proxy(
    {},
    {
      get: (target, size) => {
        if (!sizesAccepted.includes(size)) {
          console.error(
            `'${size}' size is not valid`,
            sizesAccepted.join(" | ")
          );
        }
        return (path) => {
          if (!path) return;
          if (!path?.startsWith("/")) path = `/${path}`;
          return `${baseUrl}${size}${path}`;
        };
      },
    }
  );
};

/**
 * Object Proxy to Get the image size, the corrects values are:
 * ```
 * backdrop_sizes: ["w300", "w780", "w1280", "original"]
 * backdrop_sizes: ["w300", "w780", "w1280", "original"]
 * logo_sizes: ["w45", "w92", "w154", "w185", "w300", "w500", "original"]
 * poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"]
 * profile_sizes: ["w45", "w185", "h632", "original"]
 * still_sizes: ["w92", "w185", "w300", "original"]
 * ```
 */
export const imageUrl = new Proxy(
  {},
  {
    get: (target, imageType) => {
      const typesAccepted = Object.keys(images);
      if (typesAccepted.includes(imageType)) {
        return imageSize(imageType);
      }

      console.error(
        `'${imageType}' type is not valid`,
        typesAccepted.join(" | ")
      );
    },
  }
);
