export interface DetailPosterProps {
  title: string;
  poster: string;
  overlayPosition?: "top" | "bottom";
}
export const defaultDetailPosterProps = {
  poster: "",
  title: "",
};
