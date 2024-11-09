import React from 'react'

export default function Gifs() {
    return (
        <section className="video-module-wrapper" id='Gifs'>
            <video
                src="https://strapiallsopp.s3.eu-west-1.amazonaws.com/video_module_c953df1d1c.mp4"
                playsInline
                autoPlay
                loop
                muted
                className="banner-video"
            ></video>
            <div className="content-wrapper container">
                <div className="row text-center text-white">
                    <div className="col-xl-12">
                        <div className="heading">Featured Video</div>
                        <h2>Dubai Property Market Snapshot For Q3 2024</h2>
                        <div className="vertical-line"></div>
                        <button className="text">Watch <span>Now</span></button>
                    </div>
                </div>
            </div>
        </section>
    )
}
