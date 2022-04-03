import { useEffect } from "react";
import { useAtomValue, useSetAtom } from "jotai";

import { isTouchAtom, setIsTouchAtom } from "store/isTouchAtom";

export const useTouch = (): boolean => {
  const isEnabled = useAtomValue(isTouchAtom);
  const setIsEnabled = useSetAtom(setIsTouchAtom);

  useEffect(() => {
    const enabled = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsEnabled(enabled);
  }, [setIsEnabled]);

  return isEnabled;
};
