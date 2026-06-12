type TechAnchorProps = {
  activeTech: {
    type: string;
  };
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  content?: string;
};

export function TechAnchor({
  handleClick,
  activeTech,
  content = 'frontend',
}: TechAnchorProps) {
  return (
    <button
      data-tech={content?.toLowerCase()}
      className={`cursor-pointer small-bold relative p-m rounded-border-xxl z-10 uppercase ${activeTech.type == content ? 'relative text-neutral-inverse-primary' : 'bg-transparent text-neutral-secondary'}`}
      onClick={handleClick}
    >
      {content}
    </button>
  );
}
