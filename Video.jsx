import React from "react";
import './video.css'; // Import your video component's CSS file
import video from '../../assets/video.mp4'; // Correct the path to the video file

const Video = () => {
    return (
        <section className="video" id='video'>
            <div className= "video__container container">
                <div className="video__content">
                    <span className="video__subtitle">Watch Our Video</span>
                    {/* Add your video player component here */}
                    <div className="video__player">
                        <video controls>
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <p className="video__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam quis mauris in odio laoreet accumsan vel ac purus.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Video;



