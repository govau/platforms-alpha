interface BaseLink {
  heading: string;
  href: string;
}

export interface MainLink extends BaseLink {}

export interface SubLink extends BaseLink {
  blurb: string;
}

export function isSubLink(l: MainLink | SubLink): l is SubLink {
  return (<SubLink>l).blurb !== undefined;
}
