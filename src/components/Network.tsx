import Github from '../assets/icons/GithubLogo.svg?react';

type NetworkProps = {
  logo?: React.ReactNode;
  name: string;
  link: string;
};

export function Network({
  logo = <Github />,
  name = 'Lorem ipsum',
  link = 'https://example.com/',
}: NetworkProps) {
  return (
    <a href={link} target='_blank' className='flex items-center gap-s'>
      <span className='rounded-border-xl border border-neutral-primary p-m text-neutral-inverse-tertiary'>
        {logo}
      </span>
      <span className='lg:hidden text-neutral-inverse-tertiary body-bold'>
        {name}
      </span>
    </a>
  );
}
