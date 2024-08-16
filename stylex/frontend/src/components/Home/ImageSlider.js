import { color } from '@mui/system';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const ImageSlider = () => {
    const style = {
        "height": "500px"
    }
    const imagestyle = {
        "height": "100%",
        "width": "100%",
        "object-fit": "cover",
    }
    const sliderBottomContent ={
        "text-align":"center",
        "padding":"20px",
        "background-color":"black",
        "color":"white",
        "font-size":"45px",
        "border-radius":"10px",
        "margin-top":"15px"
    }
    return (
        <div className="relative w-full">
            <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
                <div style={style}>
                    <img src="images\IMG-20240729-WA0006.jpg" alt="Slide 1" style={imagestyle} />

                </div>
                <div style={style}>
                    <img src="images\IMG-20240725-WA0004.jpg" alt="Slide 2" style={imagestyle} />
                </div>
                <div style={style}>
                    <img src="images\IMG-20240725-WA0006.jpg" alt="Slide 3" style={imagestyle} />
                </div>
                <div style={style}>
                    <img src="images\IMG-20240725-WA0007.jpg" alt="Slide 4" style={{ "height": "490px" }} />
                </div>
                <div style={style}>
                    <img src="images\silder5.jpg" alt="Slide 5" style={imagestyle} />
                </div>
            </Carousel>
            <div className='slider-bootom-content' style={sliderBottomContent}>
                Discover Online Stores
            </div>
        </div>
    );
}

export default ImageSlider;