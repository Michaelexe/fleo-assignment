import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import LogoPNG from "./logo.png";

import Filters from "./components/filters";
import List from "./components/list";

function App() {
  const [language, setLanguage] = useState();
  const [name, setName] = useState();
  const [page, setPage] = useState(1);
  const [sortby, setSortby] = useState("name");
  const [results, setResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [query, setQuery] = useState(
    new URLSearchParams(window.location.search)
  );

  useEffect(() => {
    setLanguage(query.get("language"));
    setName(query.get("name"));
    setPage(query.get("page") ? query.get("page") : 1);
    setSortby(query.get("sortby") ? query.get("sortby") : "name");
  }, [query]);

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/search/repositories?q=${name ? name : ""}${
          language && name ? "+" : ""
        }${language ? "language:" + language + "&" : ""}${name ? "&" : null}${
          sortby ? "sort=" + sortby + "&order=asc&" : null
        }page=${page}&per_page=10`
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.items[0]) {
          setResults(res.data.items);
          setTotalResults(res.data.total_count);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [language, page, name, sortby]);

  return (
    <>
      <div className="navbar flex">
        <img src={LogoPNG} alt="" />
      </div>
      <div className="main-container flex flex--justify-center">
        <Filters />
        <List
          results={results}
          page={page}
          totalResults={totalResults}
          setQuery={setQuery}
        />
      </div>
    </>
  );
}

export default App;
