// import modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

// import API keys
import KEYS from './config/keys';
const API_KEY = KEYS.youtubeAPIKey;

// library to handle Youtube search
import YTSearch from 'youtube-api-search';

// import custom-made components
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

// import style
import 'bootstrap/dist/css/bootstrap.css';
import './stylesheets/main.scss';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        // initialize data from Youtube API on the first load
        this.searchVideo("javascript");
    }

    // perform a Youtube search
		// the callback function receives the an object from Youtube API
    searchVideo(searchTerm) {
        YTSearch({key: API_KEY, term: searchTerm}, (youtubeVideoResults) => {
            this.setState({
                videos : youtubeVideoResults,
                selectedVideo: youtubeVideoResults[0]
            });
        });         
    }

    render() {
    	  // create a debounce version of searchVideo function
        const videoSearch = _.debounce((searchTerm) => {this.searchVideo(searchTerm)}, 300);
                  
        {/* pass the videoSearch function to SearchBar component */}
        {/* pass a callback function to VideoList component as props.onVideoSelect */}
        return (
            <div className="container">
                <div className="row">
                    <h1 className="title text-center">Youtube Search App</h1>
                    <SearchBar
                        onSearchTermChange={videoSearch} />
                </div>
                <div className="row">
                    <VideoDetail 
                        video={this.state.selectedVideo} />
                    <VideoList                     
                        onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
                        videos={this.state.videos} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.app'));