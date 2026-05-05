import NavAnchor from './NavAnchor.tsx';

type AboutCardProps = {
  title: string;
  link?: string;
  icon?: React.ReactNode;
  description: string;
  hasDownloadableLink?: boolean;
  linkContent?: string;
}
export default function AboutCard({
  title,
  link,
  icon,
  description,
  hasDownloadableLink,
  linkContent,
}: AboutCardProps) {
  return (
    <div className='bg-neutral-secondary rounded-border-xl p-l lg:p-xl flex flex-col gap-6 text-neutral-secondary'>
      <a
        className='border border-border-neutral-inverse-primary w-fit p-3 rounded-lg hover:text-brand-primary'
        href={link}
      >
        {icon}
      </a>
      <div className='flex flex-col gap-2'>
        <p className='body-bold'>{title}</p>
        {link ? (
          <NavAnchor
            link={link}
            isDownloadable={hasDownloadableLink}
            content={linkContent}
          />
        ) : (
          <p className='truncate'>{description}</p>
        )}
      </div>
    </div>
  );
}
