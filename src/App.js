import "./App.css";
import NavBar from "./Components/NavBar";
import SearchResults from "./Components/SearchResults";
import { useState, useEffect, useLayoutEffect } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [error, setError] = useState(null);
  const [size, setSize] = useState([0, 0]);

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  const handleOnClick = () => {
    setQuery("");
  };

  useEffect(() => {
    if (query !== "") {
      const abortCont = new AbortController();
      fetch(`https://imdb-api.com/en/API/Search/k_9fvd72tf/${query}`, {
        signal: abortCont.signal,
      })
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch");
          }
          return res.json();
        })
        .then((data) => {
          setSearchData(data.results);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
        });
      return () => abortCont.abort();
    }
  }, [query]);

  useEffect(() => {
    if (query === "") {
      setSearchData(null);
    }
  }, [query]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="App">
      {error && console.log(error)}
      <NavBar
        handleOnChange={handleOnChange}
        handleOnClick={handleOnClick}
        size={size}
        query={query}
      />
      {!query ? (
        <div className="homePage">
          <h1>Welcome to Netflix!</h1>
          <h2>Use the searchbar to find your favourite movie or TV Show</h2>
        </div>
      ) : (
        ""
      )}
      {query && searchData !== null ? (
        <SearchResults searchData={searchData} query={query} size={size} />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
