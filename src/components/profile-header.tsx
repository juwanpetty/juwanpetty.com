export function ProfileHeader() {
  return (
    <div className="relative mb-6 flex w-full gap-3">
      <div className="flex flex-col items-start justify-center">
        <span className="text-foreground leading-snug font-medium">
          Juwan Petty
        </span>
        <span className="text-muted-foreground leading-snug">
          Design Engineer
        </span>
      </div>
    </div>
  );

  return (
    <div className="relative isolate h-min pt-40">
      <div className="relative z-1 mb-6 flex w-full flex-col gap-4">
        <div className="ring-background size-20 rounded-full bg-neutral-100 ring-3" />

        <div className="flex flex-col items-start justify-center">
          <span className="text-foreground leading-snug font-medium">
            Juwan Petty
          </span>
          <span className="text-muted-foreground leading-snug">
            Design Engineer
          </span>
        </div>
      </div>

      <div className="absolute top-0 left-0 z-0 h-50 w-[calc(100%+2rem)] -translate-x-4 overflow-hidden bg-blue-400 sm:rounded-md" />
    </div>
  );
}
