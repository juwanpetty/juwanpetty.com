import { AnchorHTMLAttributes, HTMLAttributes } from "react";

export const PostMDXComponents = {
  a: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      {...props}
      className="font-normal underline decoration-neutral-500/30 decoration-1 underline-offset-3 transition-colors duration-200 hover:decoration-neutral-500/80"
    />
  ),
  p: (props: HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className="my-6 leading-6.5 text-neutral-800/90 first:mt-0" />
  ),
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      {...props}
      className="mt-16 mb-3 text-base font-medium text-neutral-900"
    />
  ),
};
