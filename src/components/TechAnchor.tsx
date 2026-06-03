type TechAnchorProps = {
  activeTech: {
    num: string;
    positionX: number;
  };
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  id: string;
  content?: string;
};

export function TechAnchor({
  handleClick,
  activeTech,
  id,
  content = 'frontend',
}: TechAnchorProps) {
  return (
    <button
      id={id.toString()}
      className={`cursor-pointer small-bold relative p-m rounded-border-xxl z-10 uppercase ${activeTech.num == id ? 'relative text-neutral-inverse-primary' : 'bg-transparent text-neutral-secondary'}`}
      onClick={handleClick}
    >
      {content}
    </button>
  );
}
