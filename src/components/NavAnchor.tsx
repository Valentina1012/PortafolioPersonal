import Download from '../assets/icons/Download.svg?react';

type NavAnchorProps = {
  link: string;
  isDownloadable?: boolean;
  content?: string;
};

export function NavAnchor({
  link,
  isDownloadable,
  content,
}: NavAnchorProps) {
  return isDownloadable ? (
    <a
      className='text-neutral-tertiary hover:text-brand-primary flex gap-xs'
      href={link} download
    >
      {content} <Download />
    </a>
  ) : (
    <a
      className='text-neutral-tertiary hover:text-brand-primary underline'
      href={link} target='_blank' rel='noopener noreferrer'
    >
      {content}
    </a>
  );
}
