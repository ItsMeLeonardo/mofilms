export interface Breakpoints {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xl2?: number;
}

export interface State {
  widthScreen: number;
  currentScreen: "xs" | "sm" | "md" | "lg" | "xl" | "xl2" | "max" | string;
}

export interface Props {
  breakpoints?: Breakpoints;
}
