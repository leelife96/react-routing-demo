import React from "react";
import Movie from "../components/Movie";
import { dummy } from "../movieDummy";

export default function Movies() {
  return (
    <div>
      <div className="movies-container">
        {dummy.results.map((item) => {
          return (
            <Movie
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              release_date={item.release_date}
              overview={item.overview}
              genre_ids={item.genre_ids}
            />
          );
        })}
      </div>
    </div>
  );
}
