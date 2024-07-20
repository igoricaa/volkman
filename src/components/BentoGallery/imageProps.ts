import { getImageProps } from 'next/image';
import masaryckaRestaurantImage from '@/../public/about-me/gallery/desktop/masarycka-restaurant.png';
import basicsCoffeeImage from '@/../public/about-me/gallery/mobile/basics-coffee.png';
import marijaVolkmanWorkImage from '@/../public/about-me/gallery/mobile/marija-volkman-work.png';
import birdAndBirdOfficeImage from '@/../public/about-me/gallery/mobile/bird-and-bird-office.png';
import vokoviceImage from '@/../public/about-me/gallery/mobile/vokovice.png';
import archicraftDumImage from '@/../public/about-me/gallery/mobile/archicraft-dum.png';
import vokovice2Image from '@/../public/about-me/gallery/mobile/vokovice-2.png';
import ardenFamilyRoomImage from '@/../public/about-me/gallery/desktop/arden-family-room.png';
import marijaVolkmanInteriorDesignImage from '@/../public/about-me/gallery/desktop/marija-volkman-interior-design.png';
import marijaVolkmanWork2Image from '@/../public/about-me/gallery/mobile/marija-volkman-work-2.png';
import marijaVolkmanInteriorDesign2Image from '@/../public/about-me/gallery/desktop/marija-volkman-interior-design-2.png';
import exteriorImage from '@/../public/about-me/gallery/desktop/exterior.png';
import wilshireCafeViewImage from '@/../public/about-me/gallery/desktop/wilshire-cafe-view.png';
import ardenBackYardImage from '@/../public/about-me/gallery/desktop/arden-back-yard.png';

const common = {
  alt: 'Marija Volkman',
  sizes: '33vw',
  fill: true,
};
const {
  props: { srcSet: desktop1 },
} = getImageProps({
  ...common,
  src: masaryckaRestaurantImage,
});
const {
  props: { srcSet: mobile1, ...rest },
} = getImageProps({
  ...common,
  src: basicsCoffeeImage,
});
const {
  props: { srcSet: desktop2 },
} = getImageProps({
  ...common,
  src: ardenBackYardImage,
});
const {
  props: { srcSet: mobile2, ...rest2 },
} = getImageProps({
  ...common,
  src: marijaVolkmanWorkImage,
});
const {
  props: { srcSet: desktop3 },
} = getImageProps({
  ...common,
  src: '',
});
const {
  props: { srcSet: mobile3, ...rest3 },
} = getImageProps({
  ...common,
  src: '',
});
const {
  props: { srcSet: desktop4 },
} = getImageProps({
  ...common,
  src: exteriorImage,
});
const {
  props: { srcSet: mobile4, ...rest4 },
} = getImageProps({
  ...common,
  src: marijaVolkmanWork2Image,
});
const {
  props: { srcSet: desktop5 },
} = getImageProps({
  ...common,
  src: wilshireCafeViewImage,
});
const {
  props: { srcSet: mobile5, ...rest5 },
} = getImageProps({
  ...common,
  src: birdAndBirdOfficeImage,
});
const {
  props: { srcSet: desktop6 },
} = getImageProps({
  ...common,
  src: marijaVolkmanInteriorDesign2Image,
});
const {
  props: { srcSet: mobile6, ...rest6 },
} = getImageProps({
  ...common,
  src: vokovice2Image,
});
const {
  props: { srcSet: desktop7 },
} = getImageProps({
  ...common,
  src: ardenFamilyRoomImage,
});
const {
  props: { srcSet: mobile7, ...rest7 },
} = getImageProps({
  ...common,
  src: archicraftDumImage,
});
const {
  props: { srcSet: desktop8 },
} = getImageProps({
  ...common,
  src: marijaVolkmanInteriorDesignImage,
});
const {
  props: { srcSet: mobile8, ...rest8 },
} = getImageProps({
  ...common,
  src: vokoviceImage,
});

const desktopImages = [
  desktop1,
  desktop2,
  desktop3,
  desktop4,
  desktop5,
  desktop6,
  desktop7,
  desktop8,
];
const mobileImages = [
  mobile1,
  mobile2,
  mobile3,
  mobile4,
  mobile5,
  mobile6,
  mobile7,
  mobile8,
];
const restProps = [rest, rest2, rest3, rest4, rest5, rest6, rest7, rest8];

export { desktopImages, mobileImages, restProps };
