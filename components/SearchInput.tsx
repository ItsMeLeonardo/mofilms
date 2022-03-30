import { useState, useEffect, useRef, ChangeEvent } from "react";
import { useRouter } from "next/router";
import {
  Button,
  Input,
  Spacer,
  Loading,
  Tooltip,
  CSS,
} from "@nextui-org/react";
import { Search, CloseSquare } from "react-iconly";

//components
import KeywordResult from "components/KeywordResults";
//utils
import { useMovieSearch } from "hooks/useMovieSearch";
import { useResponsive } from "hooks/useResponsive";
import { debounce } from "utils/debounce";
//types
interface Props {
  label?: string;
}
//nextUI css
const tooltipCss: CSS = {
  maxH: "500px",
  overflow: "auto",
  "&::-webkit-scrollbar-thumb": {
    bg: "$accents4",
  },
};

const breakpoint = 500;

export default function SearchInput({ label = "Search movie" }: Props = {}) {
  const [inputShowed, setInputShowed] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();
  const { widthScreen } = useResponsive();

  const { isLoading, data: results, search } = useMovieSearch();

  useEffect(() => {
    // reset values when changing route
    setKeyword("");
    inputRef.current.value = "";

    //in mobile to close the overlay
    if (widthScreen <= breakpoint) setInputShowed(false);
  }, [router.asPath]);

  // show the searcher and close if the input is empty
  const handleClick = () => {
    if (keyword.length !== 0) return;
    setInputShowed(!inputShowed);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const value = input.value || "";
    setKeyword(value);
    if (value.trim().length === 0) return (input.value = "");
    search({ keyword: value });
  };

  const debouncedHandleChange = debounce(handleChange, 500);

  const showInputInMobile = widthScreen <= breakpoint && inputShowed;

  return (
    <>
      <div className="input-container">
        <div className={showInputInMobile ? "input-mobile" : ""}>
          <Tooltip
            trigger=""
            visible={keyword.length !== 0}
            placement="bottom"
            content={<KeywordResult results={results} />}
            css={tooltipCss}
          >
            <Input
              type="search"
              className="input uwu"
              placeholder={label}
              onChange={debouncedHandleChange}
              hidden={!inputShowed}
              bordered={inputShowed}
              color="error"
              name="keyword"
              id="SearchInput"
              ref={inputRef}
              arial-label="Search"
              css={{ bg: "#333" }}
            />
          </Tooltip>
          {showInputInMobile && (
            <>
              <Spacer x={0.5} />
              <Button
                auto
                css={{ aspectRatio: "1/1" }}
                onClick={handleClick}
                color="error"
              >
                <CloseSquare />
              </Button>
            </>
          )}
        </div>
        <Spacer x={0.5} />
        <Button
          auto
          css={{ aspectRatio: "1/1" }}
          onClick={handleClick}
          clickable={!isLoading}
          color="error"
        >
          {isLoading ? (
            <Loading color="white" size="sm" />
          ) : (
            <Search size="small" stroke="bold" />
          )}
        </Button>
      </div>

      <style jsx>{`
        .input-container {
          display: flex;
          align-items: center;
        }
        .input-mobile {
          display: flex;
          position: absolute;
          align-items: flex-start;
          justify-content: flex-end;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgb(51 51 51 / 90%);
          padding: 1rem;
          z-index: 1000;
        }
        @media (min-width: 375px) {
          .input-mobile {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
