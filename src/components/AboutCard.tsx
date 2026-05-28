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
    <div className='bg-neutral-secondary rounded-border-xs p-l lg:p-l flex flex-col gap-s text-neutral-secondary'>
      <a
        className='bg-neutral-inverse-secondary text-neutral-inverse-primary border border-border-neutral-inverse-primary w-fit p-3 rounded-lg hover:text-brand-primary'
        href={link}
      >
        {icon}
      </a>
      <div className='flex flex-col'>
        <p className='h5-bold font-impact'>{title}</p>
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
