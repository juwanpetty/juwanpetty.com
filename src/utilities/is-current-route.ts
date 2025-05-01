type Props = {
  pathName: string;
  href: string | string[];
};

export function isMatchingPath({ pathName, href }: Props): boolean {
  if (href === "/") {
    return pathName === href;
  }

  // Ensure that href matches the start of pathName and is followed by a "/" or ends there
  return pathName === href || pathName.startsWith(`${href}/`);
}
