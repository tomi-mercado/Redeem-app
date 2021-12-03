import ImageComponentFactory from '../factories/ImageComponentFactory';
import buyIconBlue from '../images/buy-blue.svg';
import buyIconWhite from '../images/buy-white.svg';

export interface BuyIconProps {
  variant: 'white' | 'blue';
}

const WhiteBuyIcon = ImageComponentFactory({
  src: buyIconWhite,
  alt: 'Buy Icon White',
});
const BlueBuyIcon = ImageComponentFactory({
  src: buyIconBlue,
  alt: 'Buy Icon Blue',
});

export default function BuyIcon({ variant }: BuyIconProps) {
  if (variant === 'white') {
    return <WhiteBuyIcon />;
  }
  return <BlueBuyIcon />;
}
