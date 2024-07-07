export function isCurrentPath(pathName: string, href: string) {
  if (href === "/") {
    return pathName === href;
  }

  return pathName.includes(href);
}
