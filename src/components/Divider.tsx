export default function Divider({ className = "justify-center" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="h-[2px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-primary/80"></div>
      <div className="flex gap-1.5">
        <div className="w-1.5 h-4 bg-primary transform skew-x-[-30deg]"></div>
        <div className="w-1.5 h-4 bg-primary transform skew-x-[-30deg]"></div>
        <div className="w-1.5 h-4 bg-primary transform skew-x-[-30deg]"></div>
      </div>
      <div className="h-[2px] w-12 sm:w-16 bg-gradient-to-l from-transparent to-primary/80"></div>
    </div>
  );
}
