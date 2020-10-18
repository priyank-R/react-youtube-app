import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";
import VideoDetail from "./VideoDetail";
import Loader from './loader'

class App extends React.Component {
  state = { videos: [], selectedVideo: null, searchTerm: "cars",isLoading:true };

  componentDidMount() {
    this.onTermSubmit("cars");
    this.setState({isLoading:false})
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  onTermSubmit = async (term) => {
    console.log("term is ", term);
    try {
      this.setState({isLoading:true})
      const response = await youtube.get("/search", {
        params: {
          q: term,
        },
      });
      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0],
        searchTerm: term,
        isLoading:false
      });
    } catch (e) {
      throw new Error(e);
    }
  };

  render() {
    if(this.state.isLoading){
      return(
        <Loader />
      )
    }
    return (
      <div>
        <div className="ui container">
          <div className="ui segment" style={{ marginTop: "20px" }}>
            <SearchBar onFormSubmit={this.onTermSubmit} />
          </div>
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail
                  video={this.state.selectedVideo}
                  searchTerm={this.state.searchTerm}
                />
              </div>
              <div className="five wide column">
                <VideoList
                  selectVideo={this.onVideoSelect}
                  videos={this.state.videos}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
