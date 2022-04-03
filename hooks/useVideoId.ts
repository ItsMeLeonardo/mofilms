import { useAtomValue, useSetAtom } from "jotai";
import {
  deleteVideoIdAtom,
  setVideoIdAtom,
  videoIdAtom,
} from "store/videoIdAtom";

export const useVideoId = () => {
  const videoId = useAtomValue(videoIdAtom);
  const setVideoId = useSetAtom(setVideoIdAtom);
  const resetVideoId = useSetAtom(deleteVideoIdAtom);

  return { videoId, setVideoId, resetVideoId };
};
