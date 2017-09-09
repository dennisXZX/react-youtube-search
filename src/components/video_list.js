import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = ({videos, onVideoSelect}) => {

    // generate a new array containing JSX elements
    /* pass the callback function attached to props to VideoListItem component as props.onVideoSelect */    
    const videoItems = videos.map((video) => {
        return (
            <VideoListItem 
                key={video.etag} 
                video={video}                 
                onVideoSelect={onVideoSelect}
            />
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;