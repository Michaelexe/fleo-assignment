import React from "react";

import "./styles.css";

function List({ results, page, totalResults, setQuery }) {
  const prevPage = () => {
    if (page > 1) {
      let query = new URLSearchParams(window.location.search);
      query.set("page", page - 1);
      window.history.pushState(
        null,
        "",
        window.location.pathname + "?" + query.toString()
      );
      setQuery(new URLSearchParams(window.location.search));
    }
  };

  const nextPage = () => {
    if (page * 10 <= totalResults) {
      let query = new URLSearchParams(window.location.search);
      query.set("page", parseInt(page) + 1);
      window.history.pushState(
        null,
        "",
        window.location.pathname + "?" + query.toString()
      );
      setQuery(new URLSearchParams(window.location.search));
    }
  };

  return (
    <div className="list-container flex flex--column">
      <div className="flex flex--align-center flex--justify-center pagination">
        <span
          className={page <= 1 ? "pagination--disabled" : null}
          onClick={prevPage}
        >
          {"< Prev"}
        </span>
        <span>{page}</span>
        <span
          className={page * 10 >= totalResults ? "pagination--disabled" : null}
          onClick={nextPage}
        >
          {"Next >"}
        </span>
      </div>
      {results.map((item) => {
        return (
          <a
            key={item.id}
            className="card flex flex--column"
            href={item.html_url}
          >
            <h1>{item.name}</h1>
            <span className="card__owner">{"-" + item.owner.login}</span>
            <p className="card__desc">{item.description}</p>
            <div className="card__others flex">
              <svg
                aria-hidden="true"
                height="18"
                viewBox="0 0 16 16"
                version="1.1"
                width="18"
                data-view-component="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                ></path>
              </svg>
              <span>{item.stargazers_count}</span>
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                ></path>
              </svg>
              <span>{item.forks_count}</span>
              <svg
                aria-hidden="true"
                height="18"
                viewBox="0 0 16 16"
                version="1.1"
                width="18"
                data-view-component="true"
              >
                <path
                  fillRule="evenodd"
                  d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"
                ></path>
              </svg>
              <span>{item.language}</span>
            </div>
          </a>
        );
      })}
      <div className="flex flex--align-center flex--justify-center pagination">
        <span
          className={page <= 1 ? "pagination--disabled" : null}
          onClick={prevPage}
        >
          {"< Prev"}
        </span>
        <span>{page}</span>
        <span
          className={page * 10 >= totalResults ? "pagination--disabled" : null}
          onClick={nextPage}
        >
          {"Next >"}
        </span>
      </div>
    </div>
  );
}

export default List;
