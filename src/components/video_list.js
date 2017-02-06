import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) => {

    // generate a new array containing JSX elements
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem 
                key={video.etag} 
                video={video} 
                onVideoSelect={props.onVideoSelect}
            />
                );
    });

    return (
        <ul className="col-md-4">
            {videoItems}
        </ul>
    );
}

export default VideoList;