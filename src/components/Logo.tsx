export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-serif leading-none ${className}`}>
      <span className="text-pink">Nardi</span>{" "}
      <span className="text-foreground">Creates</span>
    </span>
  );
}
