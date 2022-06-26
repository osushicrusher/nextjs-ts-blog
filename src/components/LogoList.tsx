import NextImage from '@/components/NextImage';

type Logo = {
  style: string;
  src: string;
  height: string;
  width: string;
  alt: string;
};

type Props = {
  logos: Logo[];
};

export default function LogoList({ logos }: Props) {
  return logos.map((logo) => (
    <NextImage
      className={logo.style}
      src={logo.src}
      height={logo.height}
      width={logo.width}
      alt={logo.alt}
      key={logo.src}
    />
  ));
}
