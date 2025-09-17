import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

export function Button({ ...props }: ButtonProps) {
  return <button {...props} />;
}
