interface Props {
  number: string;
  title: string;
}

export default function SectionHeading({ number, title }: Props) {
  return (
    <div className="flex items-center gap-4 mb-14">
      <span className="font-mono text-cyan-400 text-sm">{number}.</span>
      <h2 className="text-2xl font-bold text-slate-100">{title}</h2>
      <div className="flex-1 h-px bg-slate-800 max-w-xs" />
    </div>
  );
}
