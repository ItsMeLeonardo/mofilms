import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { Button, Input, Spacer, Loading, Tooltip } from "@nextui-org/react";
import { Search } from "react-iconly";

import { useMovieSearch } from "../hooks/useMovieSearch";

import KeywordResult from "./KeywordResults";
import { debounce } from "../utils/debounce";

export default function SearchInput({ label = "Search movie" } = {}) {
  const [inputShowed, setInputShowed] = useState(false);
  const [keyword, setKeyword] = useState("");
  const inputRef = useRef();

  const router = useRouter();

  const { isLoading, data: results, search } = useMovieSearch();

  useEffect(() => {
    // reset values when changing route
    setKeyword("");
    inputRef.current.value = "";
  }, [router.asPath]);

  // show the searcher and close if the input is empty
  const handleClick = (event) => {
    const keyword = event.target.value || "";
    if (keyword.length !== 0) return;
    setInputShowed(!inputShowed);
  };

  const handleChange = (event) => {
    const value = event.target.value || "";
    setKeyword(value);
    search({ keyword: value });
  };

  const debouncedHandleChange = debounce(handleChange, 500);

  return (
    <>
      <div className="input-container">
        <Tooltip
          trigger=""
          visible={keyword.length !== 0}
          placement="bottom"
          content={<KeywordResult results={results} />}
          css={{
            maxH: "500px",
            overflow: "auto",
            "&::-webkit-scrollbar-thumb": {
              bg: "$accents4",
            },
          }}
        >
          <Input
            type="search"
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
      `}</style>
    </>
  );
}
