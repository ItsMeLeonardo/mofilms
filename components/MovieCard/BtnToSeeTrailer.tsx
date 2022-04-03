import { MouseEvent } from "react";
import { Tooltip } from "@nextui-org/react";
import { Video } from "react-iconly";

//utils
import { useVideoId } from "hooks/useVideoId";

//types
interface Props {
  movieId: string | number;
}

export default function BtnToSeeTrailer({ movieId }: Props) {
  const { setVideoId } = useVideoId();
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setVideoId(movieId.toString());
  };

  return (
    <>
      <Tooltip placement="right" content="see trailer">
        <button onClick={handleClick}>
          <Video />
        </button>
      </Tooltip>

      <style jsx>{`
        button {
          border: none;
          padding: 0.5rem;
          display: flex;
          border-radius: 50%;
          cursor: pointer;
          background: transparent;
          transition: background 0.5s ease-in-out, transform 0.35s ease-in;
        }
        button:hover {
          background: rgba(255, 255, 255, 0.25);
        }
        button:active {
          transform: scale(0.95);
        }
      `}</style>
    </>
  );
}
