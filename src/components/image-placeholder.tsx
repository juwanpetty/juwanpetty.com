import { cn } from "@/utilities/merge-classnames";

type Props = {
  className?: string;
};

export function ImagePlaceholder({ className }: Props) {
  return (
    <div
      className={cn(
        "border-neutral-6 bg-neutral-1 text-neutral-11 flex aspect-square w-full items-center justify-center rounded-lg border border-dashed",
        className
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        className="size-5 min-w-5"
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path d="M3.762,14.989l6.074-6.075c.781-.781,2.047-.781,2.828,0l2.586,2.586" />
          <rect x="2.75" y="2.75" width="12.5" height="12.5" rx="2" ry="2" />
          <circle
            cx="6.25"
            cy="7.25"
            r="1.25"
            fill="currentColor"
            data-stroke="none"
            stroke="none"
          />
        </g>
      </svg>
    </div>
  );
}
