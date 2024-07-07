export function Environment() {
  const isDevEnvironment = process && process.env.NODE_ENV === "development";

  return isDevEnvironment ? (
    <div className="fixed left-0 top-0 z-50 h-1 w-dvw bg-yellow-300">
      <span className="absolute rounded-br-md bg-yellow-300 px-1 font-mono text-xs font-bold text-yellow-700">
        DEV
      </span>
    </div>
  ) : null;
}
