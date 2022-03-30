import { useAtomValue } from "jotai";

import { responsiveAtom, ResponsiveAtom } from "store/responsiveAtom";

export const useResponsive = (): ResponsiveAtom => {
  return useAtomValue(responsiveAtom);
};
