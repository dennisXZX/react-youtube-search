import React from 'react';

const VideoListItem = (props) => {
    const imageURL = props.video.snippet.thumbnails.default.url;
    const videoTitle = props.video.snippet.title;

    return (
        <li className="list-group-item" onClick={() => props.onVideoSelect(props.video)}>
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