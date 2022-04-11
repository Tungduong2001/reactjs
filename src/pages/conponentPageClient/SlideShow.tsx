import React from 'react'
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";
import { SlideType } from '../../types/slide';


type Props = {
    data: SlideType[]
}

const SlideShow = (props: Props) => {
    const [thumbsSwiper, setThumbsSwiper] = React.useState<any>();

    return (
        <div className='bg-white border-8 rounded-md mx-auto w-[1200px] mt-6'>
            <Swiper spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} modules={[FreeMode, Navigation, Thumbs]} className="my-slider">
                {props.data && props.data.map(item => (
                    <SwiperSlide>
                        <img src={item.image} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]} className="my-slider-button">
                {props.data && props.data.map(item => (
                    <SwiperSlide>
                        <div className='promotion'>{item.title}</div>
                    </SwiperSlide>
                ))}


                {/* <SwiperSlide>
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
                </SwiperSlide> */}
            </Swiper>

        </div>
    )
}

export default SlideShow