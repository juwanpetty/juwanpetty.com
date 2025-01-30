import { AnchorHTMLAttributes } from "react";

export const PostMDXComponents = {
  a: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      {...props}
      className="font-normal text-sky-500 underline decoration-sky-500/10 underline-offset-3 transition-colors duration-200 hover:decoration-sky-500/30"
    />
  ),
};
