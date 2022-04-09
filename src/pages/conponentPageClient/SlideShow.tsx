import React from 'react'
import 'react-slideshow-image/dist/styles.css'
// import { Slide } from 'react-slideshow-image';
type Props = {}

const SlideShow = (props: Props) => {
    return (
        <div>
            {/* <Slide easing="ease"> */}
            <div className="each-slide">
                <div style={{ 'backgroundImage': `url(https://cdn.hoanghamobile.com/i/home/Uploads/2022/02/21/banner-laptop-web.jpg)` }}>
                </div>
            </div>
            {/* <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(https://cdn.hoanghamobile.com/i/home/Uploads/2022/03/23/tecno-spark-8c-01.jpg)` }}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(https://cdn.hoanghamobile.com/i/home/Uploads/2022/03/22/1200x382.png)` }}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(https://cdn.hoanghamobile.com/i/home/Uploads/2022/03/28/web-1.jpg)` }}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(https://cdn.hoanghamobile.com/i/home/Uploads/2022/03/16/web1200.png)` }}>
                    </div>
                </div> */}
            {/* </Slide> */}
        </div>
    )
}

export default SlideShow