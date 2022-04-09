import React from 'react'
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";


type Props = {}

const SlideShow = (props: Props) => {
    const [thumbsSwiper, setThumbsSwiper] = React.useState<any>(null);

    return (
        <div className='bg-white border-8 rounded-md mx-auto w-[1200px] mt-6'>
            <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="my-slider"
            >
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="my-slider-button"
            >
                <SwiperSlide>
                    <div className='promotion'>iPhone 13 Pro Max lì xì đến 6 triệu</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='promotion'>Sắm vivo lì xì đến 1,5 triệu</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='promotion'>Hàng gia dụng lì xì đến 6 triệu</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='promotion'>Laptop giảm ngay 10%+bảo hành đến 3 năm</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='promotion'>Đặt trước Redmi Note 11 giảm 500.000đ</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='promotion'>Sử dụng Xiaomi lì xì đến 6 triệu</div>
                </SwiperSlide>
            </Swiper>
            {/* <Slide easing="ease"> */}
            {/* <div className="each-slide">
                <div style={{ 'backgroundImage': `url(https://cdn.hoanghamobile.com/i/home/Uploads/2022/02/21/banner-laptop-web.jpg)` }}>
                </div>
            </div> */}
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