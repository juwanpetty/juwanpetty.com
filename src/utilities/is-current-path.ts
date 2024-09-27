function checkPath(pathName: string, href: string): boolean {
  if (href === "/") {
    return pathName === href;
  }

  // Ensure that href matches the start of pathName and is followed by a "/" or ends there
  return pathName === href || pathName.startsWith(`${href}/`);
}

type Props = {
  pathName: string;
  href: string | string[];
};

export function isCurrentPath({ pathName, href }: Props): boolean {
  if (typeof href === "string") {
    return checkPath(pathName, href);
  }

  // If href is an array, check if any of the paths match
  return href.some(singleHref => checkPath(pathName, singleHref));
}
