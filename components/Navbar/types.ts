export interface Route {
  route: string;
  label: string;
  iconLabel: IconLabel;
}

export interface NavbarLinkItemProps extends Route {
  isInThisPage: boolean;
}

export type IconLabel = "Video" | "Image" | "Star";
