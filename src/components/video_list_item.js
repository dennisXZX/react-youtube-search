import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imageURL = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;

    return (
        <li className="list-group-item" onClick={() => onVideoSelect(video)}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageURL} alt="" />
                </div>
            </div>

            <div className="media-body">
                <div className="media-heading">{videoTitle}</div>
            </div>
        </li>
    );
}

export default VideoListItem;