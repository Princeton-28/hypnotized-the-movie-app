// import section
import "./App.css";
import React, { useContext, useEffect } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Movie from "./components/Movie/Movie";
import { movieContext } from "./context/Context";
import Footer from "./components/Footer/Footer";

// our movie API is saved in a variable called movieApiLink
const movieApiLink = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";
function App() {
  //here we are getting the dispatch from our context.
  const { state, dispatch } = useContext(movieContext);
  const { loading, movies, errorMessage } = state;

  //  with this useEffect hook we are now dispatching an action with the payload as the movies array we are getting from the server/API
  useEffect(() => {
    fetch(movieApiLink)
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse); //{Search: Array(10), totalResults: '13202', Response: 'True'}

        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: jsonResponse.Search,
        });
      });
  }, [dispatch]);

  // this is our search function, in which we are actually dispatching three different actions.
  const search = (searchValue) => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST", //with this action type we're updating our state object, making "loading" = true and "errorMessage" = null
    });

    // we're making a dynamic fetch request here
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        //If the request is successful, then we dispatch another action with the type SEARCH_MOVIES_SUCCESS, that updates our state object making "loading "= false and "movies" = action.payload where the payload is the movies array received from the endpoint.
        if (jsonResponse.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.Search,
          });
        }
        // On the contrary, if there we encounter an error, we will instead dispatch a different action with the type SEARCH_MOVIES_FAILURE that updates our state object making "loading" = false and "errorMessage" = action.error, whereby the action.error is the error message gotten from the server.
        else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.Error,
          });
        }
      });
  };

  return (
    <div className="App">
      <Header text_1="HYPNOTIZED" text_2="The Movie App" />
      <Search search={search} />
      <p className="App-intro">Sharing some of our favorite movies :</p>
      <div className="movies">
        {loading && !errorMessage ? (
          <span>Loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies &&
          movies.map((movie) => (
            <Movie movie={movie} key={`${movie.imdbID} ${movie.Title}`} />
          ))
        )}
      </div>
      <Footer text_1={"2023 Princeton28"} text_2={"Hypnotized The Movie App"} />
      {/* \u00a9 */}
    </div>
  );
}

export default App;
