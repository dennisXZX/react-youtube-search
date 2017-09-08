// import modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

// import custom-made components
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAyUARPmplwiV8JtcP_EgP8gCIO1dWtM3E';

// import style
import './stylesheets/main.scss';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        // initialize data from Youtube API
        this.searchVideo("javascript");
    }

    // perform an initial search
    searchVideo(searchTerm) {
        YTSearch({key: API_KEY, term: searchTerm}, (youtubeVideoResults) => {
            this.setState({
                videos : youtubeVideoResults,
                selectedVideo: youtubeVideoResults[0]
            });
        });         
    }

    render() {
        
        const videoSearch = _.debounce((searchTerm) => {this.searchVideo(searchTerm)}, 300);
                  
        {/* pass the videoSearch function to SearchBar component */}
        {/* pass a callback function to VideoList component as props.onVideoSelect */}
        return (
            <div className="container">
                <div className="row">
                    <h1 className="title">Youtube Search App</h1>
                    <SearchBar
                        onSearchTermChange={videoSearch} />
                </div>
                <div className="row">
                    <VideoDetail 
                        video={this.state.selectedVideo} />
                    <VideoList                     
                        onVideoSelect={(video) => this.setState({selectedVideo: video})}
                        videos={this.state.videos} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.app'));