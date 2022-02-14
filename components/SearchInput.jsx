import { useState } from "react";

import { Button, Input, Spacer, Loading, Tooltip } from "@nextui-org/react";
import { Search } from "react-iconly";

import KeywordResult from "./KeywordResults";

const data = [
  {
    id: 9951,
    name: "alien",
  },
  {
    id: 4939,
    name: "alien phenomenons",
  },
  {
    id: 10158,
    name: "alien planet",
  },
  {
    id: 14909,
    name: "alien invasion",
  },
  {
    id: 15250,
    name: "alien infection",
  },
  {
    id: 12553,
    name: "alien abduction",
  },
  {
    id: 160515,
    name: "alien contact",
  },
  {
    id: 163488,
    name: "human alien",
  },
];

export default function SearchInput({ label = "Write a word" } = {}) {
  const [inputShowed, setInputShowed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const input = event.target.keyword;
    const keyword = input.value || "";

    if (keyword.trim().length === 0) return;
    // console.log({ keyword });
    setLoading(true);

    // reset values
    setTimeout(() => {
      setLoading(false);
      setInputShowed(false);
      input.value = "";
    }, 1000);
  };

  const handleClick = (event) => {
    const keyword = event.target.value || "";
    if (keyword.length !== 0) return;
    setInputShowed(!inputShowed);
  };

  const handleChange = (event) => {
    const keyword = event.target.value || "";
    if (keyword.length < 3) return setResults(null);
    setResults(data.filter((item) => item.name.includes(keyword)));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Tooltip
          trigger=""
          visible={results}
          placement="bottom"
          content={<KeywordResult results={results} />}
        >
          <Input
            onChange={handleChange}
            placeholder={label}
            type="search"
            hidden={!inputShowed}
            readOnly={loading}
            bordered={inputShowed}
            color="error"
            helperText={inputShowed && "min 3 characters"}
            name="keyword"
            id="SearchInput"
            arial-label="Search"
            css={{ bg: "#333" }}
          />
        </Tooltip>
        <Spacer x={0.5} />
        <Button
          auto
          css={{ aspectRatio: "1/1" }}
          onClick={handleClick}
          clickable={!loading}
          color="error"
        >
          {loading ? (
            <Loading color="white" size="sm" />
          ) : (
            <Search size="small" stroke="bold" />
          )}
        </Button>
      </form>

      <style jsx>{`
        form {
          display: flex;
          align-items: center;
        }
      `}</style>
    </>
  );
}
