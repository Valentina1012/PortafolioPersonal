export function SectionTitle({
  title = 'Section Title',
}: {
  title: string;
}) {
  return <h2 className='text-neutral-secondary font-impact h4-bold'>{title}</h2>;
}
