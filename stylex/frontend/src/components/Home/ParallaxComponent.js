import "./Parallax.css";
import { Parallax } from "react-parallax";


function ParallaxComponent() {
    return (
        <div className="App">
            <a href="category/shirt" >
            <Parallax strength={200} bgImage='images\IMG-20240729-WA0004.jpg'>
                <div className="content" >  
                </div>
            </Parallax>
            <div className="text-desc">Get Upto 50% Discount On
                <img src='images\IMG-20240729-WA0008.jpg' />
                <img src='images\IMG-20240729-WA0005.jpg' />
            </div>
            
            <Parallax  strength={300} bgImage='images\IMG-20240729-WA0006.jpg'>
                <div className="content">
                </div>
            </Parallax>
            <div className="text-desc">Elevate Your Style With
                <img src='images\IMG-20240729-WA0008.jpg' />
                <img src='images\IMG-20240729-WA0005.jpg' />
            </div>
            <Parallax strength={300} bgImage='images\IMG-20240729-WA0007.jpg'>
                <div className="content">
                </div>
            </Parallax>
            <div className='slider-bootom-content'>
                Daily Offers
            </div>
            </a>
        </div>
    );
}

export default ParallaxComponent;