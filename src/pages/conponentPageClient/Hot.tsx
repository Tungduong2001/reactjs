import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Hot = (props: Props) => {
    return (
        <div className=" bg-white border-8 rounded-md mt-5 mx-auto w-[1200px] ">
            <div className="tilte-accessory">
                <h2 className="uppercase text-lg ml-3 font-bold my-3">Phụ kiện hot</h2>
            </div>
            <div className="box-accessory">
                <Link to=''>
                    <div className="accessory">
                        <i className="fas fa-award text-[36px] text-slate-400  mt-7" />
                        <p className="font-medium mt-6">Phụ kiện nổi bật</p>
                    </div>
                </Link>
                <Link to=''>
                    <div className="accessory">
                        <i className="fas fa-clone text-[36px] text-slate-400 mt-7" />
                        <p className="font-medium mt-6">Bao da ốp lưng</p>
                    </div>
                </Link>
                <Link to=''>
                    <div className="accessory">
                        <i className="fas fa-battery-three-quarters text-[36px] text-slate-400  mt-7" />
                        <p className="font-medium mt-6">Pin dự phòng</p>
                    </div>
                </Link>
                <Link to=''>
                    <div className="accessory">
                        <i className="fas fa-sd-card text-[36px] text-slate-400  mt-7" />
                        <p className="font-medium mt-6">Thẻ nhớ</p>
                    </div>
                </Link>
                <Link to=''>
                    <div className="accessory">
                        <i className="fab fa-apple text-[36px] text-slate-400  mt-7" />
                        <p className="font-medium mt-6">Phụ kiện Apple</p>
                    </div>
                </Link>
                <Link to=''>
                    <div className="accessory">
                        <i className="fas fa-mobile text-[36px] text-slate-400  mt-7" />
                        <p className="font-medium mt-6">Miếng dán màn hình</p>
                    </div>
                </Link>
                <Link to=''>
                    <div className="accessory">
                        <i className="fas fa-headphones text-[36px] text-slate-400  mt-7" />
                        <p className="font-medium mt-6">Tai nghe</p>
                    </div>
                </Link>
                <Link to=''>
                    <div className="accessory">
                        <i className="fas fa-print text-[36px] text-slate-400  mt-7" />
                        <p className="font-medium mt-6">Mực in</p>
                    </div>
                </Link>
            </div>
            <div className="box-accessory">
                <Link to=''>
                    <div className="accessory">
                        <i className="fas fa-volume-up text-[36px] text-slate-400  mt-7" />
                        <p className="font-medium mt-6">Loa</p>
                    </div>
                </Link>
                <Link to=''>
                    <div className="accessory">
                        <i className="fas fa-hdd text-[36px] text-slate-400  mt-7" />
                        <p className="font-medium mt-6">USB - Ổ cứng</p>
                    </div>
                </Link>
                <Link to=''>
                    <div className="accessory">
                        <i className="fab fa-usb text-[36px] text-slate-400  mt-7" />
                        <p className="font-medium mt-6">Sạc cáp</p>
                    </div>
                </Link>
                <Link to=''>
                    <div className="accessory">
                        <i className="fas fa-mouse text-[36px] text-slate-400  mt-7" />
                        <p className="font-medium mt-6">Chuột</p>
                    </div>
                </Link>
                <Link to=''>
                    <div className="accessory">
                        <i className="fas fa-keyboard text-[36px] text-slate-400  mt-7" />
                        <p className="font-medium mt-6">Bàn phím</p>
                    </div>
                </Link>
                <Link to=''>
                    <div className="accessory">
                        <i className="fas fa-suitcase text-[36px] text-slate-400  mt-7" />
                        <p className="font-medium mt-6">Balo - Túi xách</p>
                    </div>
                </Link>
                <Link to=''>
                    <div className="accessory">
                        <i className="fas fa-tv text-[36px] text-slate-400  mt-7" />
                        <p className="font-medium mt-6">TV BOX</p>
                    </div>
                </Link>
                <Link to=''>
                    <div className="accessory">
                        <i className="fas fa-ellipsis-h text-[36px] text-slate-400  mt-7" />
                        <p className="font-medium mt-6">Phụ kiện khác</p>
                    </div>
                </Link>
            </div>
        </div>

    )
}

export default Hot