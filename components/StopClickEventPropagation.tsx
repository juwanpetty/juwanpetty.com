import type { ReactElement, KeyboardEvent, MouseEvent } from "react";

type Props = {
  children: ReactElement | ReactElement[];
  shouldPreventDefault?: boolean;
};

export function StopClickEventPropagation({
  children,
  shouldPreventDefault,
}: Props) {
  function onEvent(event: KeyboardEvent<HTMLDivElement> | MouseEvent) {
    event.stopPropagation();

    if (shouldPreventDefault) {
      event.preventDefault();
    }
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className="contents"
      onClick={onEvent}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          onEvent(event);
        }
      }}
    >
      {children}
    </div>
  );
}
