import Image from "next/image";
interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  image?: { src: string; alt: string };
  children?: React.ReactNode;
}
export function PageHero({
  label,
  title,
  subtitle,
  image,
  children,
}: PageHeroProps) {
  return (
    <section className="interior-hero">
      {image && <Image src={image.src} alt="" fill sizes="100vw" />}
      <div className="wrap">
        <p className="eyebrow">{label}</p>
        <h1>{title}</h1>
        {subtitle && <p className="subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
