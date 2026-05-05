export default function SectionTitle({
  title = 'Section Title',
}: {
  title: string;
}) {
  return <h2 className='text-brand-primary font-impact h4-bold'>{title}</h2>;
}
