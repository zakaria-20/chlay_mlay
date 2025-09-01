// types.ts
export type LinkType = {
  href?: string;
  heading?: string;
  paragraph?: string;
  subLinks?: Array<LinkType>;
};

export type LinksDataType = {
  name: string;
  links: Array<LinkType>;
};

export type MobileLinksState = {
  company: boolean;
  industry: boolean;
  services: {
    isOpen: boolean;
    construction: boolean;
    subscriptions: boolean;
    agriculture: boolean;
    industrial: boolean;
  };
};
