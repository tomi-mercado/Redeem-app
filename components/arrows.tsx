import ImageComponentFactory from '../factories/ImageComponentFactory';
import arrowLeftImg from '../images/arrow-left.svg';
import arrowRightImg from '../images/arrow-right.svg';

const arrows = {
  ArrowLeft: ImageComponentFactory({ src: arrowLeftImg, alt: 'Arrow Left' }),
  ArrowRight: ImageComponentFactory({
    src: arrowRightImg,
    alt: 'Arrow Right',
  }),
};

export default arrows;
