import { AnchorHTMLAttributes } from "react";

export const PostMDXComponents = {
  a: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      {...props}
      className="font-normal underline decoration-neutral-200 underline-offset-3 transition-colors duration-200 hover:decoration-neutral-600"
    />
  ),
};
