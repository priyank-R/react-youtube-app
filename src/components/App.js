import React, { Fragment } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";
import VideoDetail from "./VideoDetail";
//import Loader from "./loader";
import Header from "./Header";
import ErrorBoundry from "./ErrorBoundry";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    searchTerm: "cars",
    isLoading: true,
    error: {
      hasError: false,
      message: "",
      code: 201,
    },
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  componentDidMount() {
    this.onTermSubmit("cars");
    this.setState({ isLoading: false });
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  onTermSubmit = async (term) => {
    console.log("term is ", term);
    try {
      this.setState({ isLoading: true });
      const response = await youtube.get("/search", {
        params: {
          q: term,
        },
      });
      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0],
        searchTerm: term,
        isLoading: false,
      });

      console.log(response);
    } catch (e) {
      console.log(e.response.data.error);
      this.setState({
        error: {
          hasError: true,
          code: e.response.data.error.code,
          message: e.response.data.error.message,
        },
      });
    }
  };

  render() {
    // if (this.state.isLoading) {
    //   return <Loader />;
    // }
    if (this.state.error.hasError) {
      return (
        <div style={{ margin: "35px" }}>
          {" "}
          <h1>Oops !</h1>
          <p>{this.state.error.message}</p>
        </div>
      );
    }

    return (
      <ErrorBoundry>
        <div id="wrapper">
          <div id="main">
            <Header onFormSubmit={this.onTermSubmit} />
            <SearchBar
              parent="app"
              onFormSubmit={this.onTermSubmit}
              onHeaderSearchSubmit={this.onTermSubmit}
            />

            <VideoDetail
              video={this.state.selectedVideo}
              searchTerm={this.state.searchTerm}
            />
          </div>

          <VideoList
            selectVideo={this.onVideoSelect}
            videos={this.state.videos}
          />
        </div>
      </ErrorBoundry>
    );
  }
}

export default App;
