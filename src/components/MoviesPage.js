import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  //useRouteMatch returns a special object with info about the currently
  //matched route
  const match = useRouteMatch();
  // console.log(match);

  return (
    <div>
      <MoviesList movies={movies} />

      {/* adding code to show a msg to the user to select
       a movie if they havent yet */}
      {/* default route */}
      <Route exact path={match.url}>
        <h3>Choose a movie from the list above</h3>
      </Route>

      {/* we can use the current URL from 'match' object as part of the path; this 
      will generate a url like "/movies/:movieId" */}
      {/* extends the URL path of the first */}
      <Route path={`${match.url}/:movieId`}>
        {/* //adding movies obj as a prop to MovieShow */}
        <MovieShow movies={movies} />
      </Route>
    </div>
  );
}
export default MoviesPage;
