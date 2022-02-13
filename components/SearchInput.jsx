import { useState } from "react";

import { Button, Input, Spacer, Loading } from "@nextui-org/react";
import { Search } from "react-iconly";

export default function SearchInput({ label = "Write a word" } = {}) {
  const [inputShowed, setInputShowed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const input = event.target.keyword;
    const keyword = input.value || "";

    if (keyword.trim().length === 0) return;
    console.log({ keyword });
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
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
          css={{ background: "#333333" }}
        />
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
