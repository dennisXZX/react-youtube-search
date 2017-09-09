import React from 'react';

const VideoDetail = ({video}) => {

    if (!video) {
        return <div>Loading...</div>
    }

    const videoId = video.id.videoId;
		const youtubeURL = `https://www.youtube.com/embed/${videoId}`;
    const videoTitle = video.snippet.title;
    const channelTitle = video.snippet.channelTitle;
    const publishedTime = video.snippet.publishedAt.split('T')[0];
		const description = video.snippet.description;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={youtubeURL}></iframe>
            </div>
            <div className="details">
                <div className="title">{videoTitle}</div>
                <div className="author">
	                {channelTitle} - {publishedTime}
                </div>
                <div className="description">{description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;