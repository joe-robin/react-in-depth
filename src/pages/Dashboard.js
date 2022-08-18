import React, { Component } from "react";
import SearchAppBar from "../components/AppBar";
import Connect from "../components/Connect";
import Movies from "../components/Movies";
import actions from "../redux/actions";

class Dashboard extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({ type: actions.GET_CATEGORIES });
  }

  componentDidUpdate(prevProps, prevState) {
    const currentMoviesLoading = this.props.moviesLoading;
    const previousMoviesLoading = prevProps.moviesLoading;
    const { setLoading } = this.props;

    if (currentMoviesLoading !== previousMoviesLoading) {
      setLoading(currentMoviesLoading);
    }
  }

  getMovies = (query) => {
    const { dispatch } = this.props;
    dispatch({ type: actions.GET_MOVIES, payload: query });
  };

  render() {
    const { movies } = this.props;
    const { getMovies } = this;
    return (
      <>
        <SearchAppBar onSearchChange={getMovies} />
        {movies && <Movies movies={movies?.results} />}
      </>
    );
  }
}

function mapStateToProps(state) {
  const { homeReducer } = state;
  const { movies, moviesLoading, categories } = homeReducer;
  return {
    movies,
    moviesLoading,
    categories,
  };
}

export default Connect(Dashboard, mapStateToProps);
