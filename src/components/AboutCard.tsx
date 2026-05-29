import NavAnchor from './NavAnchor.tsx';

type AboutCardProps = {
  title: string;
  link?: string;
  icon?: React.ReactNode;
  description?: string;
  hasDownloadableLink?: boolean;
  linkContent?: string;
};

export default function AboutCard({
  title,
  link,
  icon,
  description,
  hasDownloadableLink,
  linkContent,
}: AboutCardProps) {
  return (
    <div className='bg-neutral-secondary rounded-border-xs border border-neutral-inverse-primary p-l lg:p-l flex flex-col gap-s text-neutral-secondary h-38.25'>
      <a
        className='cursor-pointer bg-neutral-inverse-secondary text-neutral-inverse-primary w-fit p-3 rounded-lg hover:text-brand-primary'
        href={link} target='_blank' rel='noopener noreferrer'
      >
        {icon}
      </a>
      <div className='flex flex-col'>
        <p className='h5-bold font-impact'>{title}</p>
        {description ? (
          <p className='truncate text-neutral-tertiary'>{description}</p>
        ) : (
          link && (
            <NavAnchor
              link={link}
              isDownloadable={hasDownloadableLink}
              content={linkContent}
            />
          )
        )}
      </div>
    </div>
  );
}
