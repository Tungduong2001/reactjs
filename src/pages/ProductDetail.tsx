import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { read } from '../api/product';
import { ProductType } from '../types/product';
import { currencyPrice } from '../utils/formatMoney'
type Props = {

}

const ProductDetail = (props: Props) => {
    const { id } = useParams();
    const [products, setProducts] = useState<ProductType[]>([])
    useEffect(() => {
        const getOneProduct = async () => {
            const { data } = await read(id)
            setProducts(data)
        }
        getOneProduct()
    }, [])

    return (
        <div className='bg-white'>
            <div className="mx-auto w-[1200px]">
                <div className="grid grid-cols-2 mb-3">
                    <h2 className="font-bold text-xl ">{products.name}</h2>
                    <div className="mt-2 flex justify-end">
                        <Link to='' className="mt-1"></Link>
                        <Link to='' className="ml-2 text-sky-600 hover:underline relative hover:font-semibold">13 đánh giá</Link>
                        <Link to='' className="ml-1 text-sky-600 hover:underline relative hover:font-semibold">| 4110 Hỏi &amp; đáp</Link>
                    </div>
                </div>
                <hr />
                <div className="grid grid-cols-2 mt-7">
                    <div className="mr-3">
                        <div className="border-[1px]">
                            <Link to=''>
                                <img src="https://res.cloudinary.com/asm-js-ecma/image/upload/v1645252799/bir5kxk3r5gihwyjjoc4.jpg" />
                            </Link>
                        </div>
                        <div className="flex mt-3 justify-center">
                            <div className="flex mr-2">
                                <i className="fas fa-award text-red-700  mr-2" />
                                <p className="text-sm">Hàng chính hãng - bảo hành 12 Tháng</p>
                            </div>
                            <div className="flex">
                                <i className="fas fa-shipping-fast text-red-700  mr-2" />
                                <p className="text-sm">Giao hàng toàn quốc</p>
                            </div>
                        </div>
                        <div className="w-[65%] mx-auto border-[1px] rounded-2xl mt-4">
                            <strong className="flex justify-center border-b-[1px] bg-red-700 text-lg text-white py-2 rounded-t-2xl">Tình
                                trạng máy</strong>
                            <p className="mx-2 text-sm">Máy mới nguyên seal Fullbox chính hãng VN/A, chưa Active. Bảo hành 12 tháng tại
                                trung tâm bảo hành ủy quyền chính hãng.</p>
                        </div>
                    </div>
                    <div className="detail">
                        <div className="flex ">
                            <span className="text-red-700 font-semibold text-2xl mr-5 mt-2">{currencyPrice(products.price)}</span>
                            <span className="font-semibold text-lg line-through mt-3"></span>
                            <span className="ml-52">Trả góp chỉ từ 3.000.500₫/tháng</span>
                        </div>
                        <div className="mt-2 bg-slate-100 grid grid-cols-4 rounded-md">
                            <label className="radio">
                                <input type="radio" className="form-radio" name="GB" />
                                <span className="ml-1 font-bold">128GB</span>
                                <span className="block">30.990.000₫</span>
                            </label>
                            <label className="radio">
                                <input type="radio" className="form-radio" name="GB" />
                                <span className="ml-1 font-bold">256GB</span>
                                <span className="block">33.490.000₫</span>
                            </label>
                            <label className="radio">
                                <input type="radio" className="form-radio" name="GB" />
                                <span className="ml-1 font-bold">512GB</span>
                                <span className="block">40.990.000₫</span>
                            </label>
                            <label className="radio">
                                <input type="radio" className="form-radio" name="GB" />
                                <span className="ml-1 font-bold">1TB</span>
                                <span className="block">45.990.000₫</span>
                            </label>
                        </div>
                        <div className="box-Promo">
                            <div className="border-b-[1px] py-2 pl-2 font-bold">Chọn 1 trong 2 khuyến mãi sau</div>
                            <ul className="boxPromo-list">
                                <li className="promo-radio">
                                    <label className=''>
                                        <input type="radio" className='' name="GB" defaultValue="personal" />
                                        Lì xì ngay 3.000.000đ áp dụng đến 31/01
                                    </label>
                                </li>
                                <li className="promo-radio">
                                    <label className=''>
                                        <input type="radio" className='' name="GB" defaultValue="busines" />
                                        Trả góp 0%
                                    </label>
                                </li>
                            </ul>
                            <div className="endow">
                                <span className="bg-[#e9ecef] px-3 font-bold">Ưu đãi thêm</span>
                            </div>
                            <ul className="content-promo">
                                <li className="inline-flex">
                                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2" />
                                    <div>
                                        <span>
                                            Tặng gói iCloud 50GB miễn phí 3 tháng
                                        </span>
                                        <Link to='' className="text-blue-600 hover:underline">Xem chi tiết</Link>
                                    </div>
                                </li>
                                <li className="inline-flex">
                                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2" />
                                    <div>
                                        <span>
                                            Giảm sốc 50% cho gói bảo hành vàng chỉ từ 550.000đ
                                        </span>
                                        <Link to='' className="text-blue-600 hover:underline">Xem chi tiết</Link>
                                    </div>
                                </li>
                                <li className="inline-flex">
                                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2" />
                                    <div>
                                        <span>
                                            Thu cũ đổi mới trợ giá 15%
                                        </span>
                                        <Link to='' className="text-blue-600 hover:underline">Xem chi tiết</Link>
                                    </div>
                                </li>
                                <li className="inline-flex">
                                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2" />
                                    <div>
                                        <span>
                                            Bảo hành 2 năm chính hãng
                                        </span>
                                        <Link to='' className="text-blue-600 hover:underline">Xem chi tiết</Link>
                                    </div>
                                </li>
                                <li className="inline-flex">
                                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2" />
                                    <div>
                                        <span>
                                            Tặng PMH 200.000đ mua Sạc Magsafe
                                        </span>
                                        <Link to='' className="text-blue-600 hover:underline">Xem chi tiết</Link>
                                    </div>
                                </li>
                                <li className="inline-flex">
                                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2" />
                                    <div>
                                        <span>
                                            Tặng PMH 300.000đ mua Ốp lưng chính hãng
                                        </span>
                                        <Link to='' className="text-blue-600 hover:underline">Xem chi tiết</Link>
                                    </div>
                                </li>
                                <li className="inline-flex">
                                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2" />
                                    <div>
                                        <span>
                                            Cơ hội trúng 22 Hổ Vàng trị giá 6 triệu
                                        </span>
                                        <Link to='' className="text-blue-600 hover:underline">Xem chi tiết</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="box-Feature mt-3">
                            <ul>
                                <li className="flex ">
                                    <img className="w-[60px] h-[60px] border-[1px] p-2 rounded-md mt-1" src="https://fptshop.com.vn/Uploads/Originals/2021/12/29/637763828066069271_logo-Masster-card.jpg" />
                                    <div className="form-check absolute">
                                        <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-re focus:outline-none transition duration-200 mt-10 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer ml-2 " type="checkbox" id="flexCheckDefault" />
                                    </div>
                                    <div className="ml-3">
                                        <p className="font-bold">Ưu đãi dành cho chủ thẻ Master Card</p>
                                        <div className="text-sm">
                                            <span>Giảm thêm 150.000đ khi khách hàng thanh toán Online 100% giá trị đơn hàng trên 2
                                                triệu qua thẻ Master Card</span>
                                            <Link className="text-blue-600 hover:underline" to=''>Xem chi tiết</Link>
                                        </div>
                                    </div>
                                </li>
                                <li className="flex mt-2">
                                    <img className="w-[60px] h-[60px] border-[1px] p-2 rounded-md mt-1" src="https://fptshop.com.vn/Uploads/Originals/2020/12/1/637424313308028550_vnpay.jpg" />
                                    <div className="form-check absolute">
                                        <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-re focus:outline-none transition duration-200 mt-10 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer ml-2 " type="checkbox" id="flexCheckDefault" />
                                    </div>
                                    <div className="ml-3">
                                        <p className="font-bold">Thanh toán VNPAY-QR</p>
                                        <div className="text-sm">
                                            <span>Nhập mã FPTIP13 giảm ngay 5% tối đa 500.000đ khi thanh toán qua
                                                VNPAY-QR</span><br />
                                            <Link className="text-blue-600 hover:underline" to=''>Xem chi tiết</Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="btn-buy ">
                            <button className="w-full bg-red-700 mt-4 rounded-md text-white hover:bg-red-800">
                                <div>
                                    <strong>MUA NGAY</strong>
                                </div>
                                <p className="text-sm">Giao hàng miễn phí hoặc nhận tại shop</p>
                            </button>
                            <div className="flex mt-3">
                                <Link to='' className="bg-blue-600 w-[50%] mr-3 rounded-md text-center text-white hover:bg-blue-700">
                                    <div>
                                        <strong>TRẢ GÓP 0%</strong>
                                    </div>
                                    <p className="text-sm">Duyệt nhanh qua điện thoại</p>
                                </Link>
                                <Link to='' className="bg-blue-600 w-[50%]  rounded-md text-center text-white hover:bg-blue-700">
                                    <div>
                                        <strong>TRẢ GÓP QUA THẺ</strong>
                                    </div>
                                    <p className="text-sm">Visa, Master Card, JCB</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto w-[1200px]  flex">
                <div className="info-product w-[800px] border-[1px] px-2 pt-3">
                    <h2 className="font-bold text-[18px] mb-3">iPhone 13 Pro Max – siêu phẩm được mong chờ nhất ở nửa cuối năm 2021 đến từ Apple. Máy có thiết kế không mấy
                        đột phá khi so với người tiền nhiệm, bên trong đây vẫn là một sản phẩm có màn hình siêu đẹp, tần số quét
                        được nâng cấp lên 120 Hz mượt mà, cảm biến camera có kích thước lớn hơn, cùng hiệu năng mạnh mẽ với sức mạnh
                        đến từ Apple A15 Bionic, sẵn sàng cùng bạn chinh phục mọi thử thách.</h2>
                    <h3 className="font-bold text-[18px] mb-2">Thiết kế đẳng cấp hàng đầu</h3>
                    <p className="text-[14px] leading-[1.8] mb-3">iPhone mới kế thừa thiết kế đặc trưng từ iPhone 12 Pro Max khi sở hữu khung viền vuông vức, mặt lưng kính
                        cùng màn hình tai thỏ tràn viền nằm ở phía trước.
                    </p><p className="text-[14px] leading-[1.8] mb-3">Với iPhone 13 Pro Max phần tai thỏ đã được thu gọn lại 20% so với thế hệ trước, không chỉ giải phóng nhiều
                        không gian hiển thị hơn mà còn giúp mặt trước chiếc điện thoại trở nên hấp dẫn hơn mà vẫn đảm bảo được hoạt
                        động của các cảm biến.</p>
                    <span id="dots">...</span>
                    <span id="more-content" className="hidden">
                        <img className="my-3" src="https://uqoojcos5nobj.vcdn.cloud/uploads/2021/09/iphone-moi-2021-04.jpg" />
                        <p className="leading-[1.8] mb-3">Điểm thay đổi dễ dàng nhận biết trên iPhone 13 Pro Max chính là kích thước của cảm biến camera sau
                            được làm to hơn và để tăng độ nhận diện cho sản phẩm mới thì Apple cũng đã bổ sung một tùy chọn màu sắc
                            Sierra Blue (màu xanh dương nhạt hơn so với Pacific Blue của iPhone 12 Pro Max).</p>
                        <p className="leading-[1.8] mb-3">Máy vẫn tiếp tục sử dụng khung viền thép cao cấp cho khả năng chống trầy xước và va đập một cách vượt
                            trội, kết hợp với khả năng kháng bụi, nước chuẩn IP68.</p>
                        <img src="https://uqoojcos5nobj.vcdn.cloud/uploads/2021/09/iphone-moi-2021-09.jpg" />
                        <h3 className="font-bold text-[18px] my-3">Màn hình giải trí siêu mượt cùng tần số quét 120 Hz</h3>
                        <p className="leading-[1.8] mb-3">iPhone 13 Pro Max được trang bị màn hình kích thước 6.7 inch cùng độ phân giải 1284 x 2778 Pixels, sử
                            dụng tấm nền OLED cùng công nghệ Super Retina XDR cho khả năng tiết kiệm năng lượng vượt trội nhưng vẫn
                            đảm bảo hiển thị sắc nét sống động chân thực.</p>
                        iPhone Pro Max năm nay đã được nâng cấp lên tần số quét 120 Hz, mọi thao tác chuyển cảnh khi lướt ngón tay
                        trên màn hình trở nên mượt mà hơn đồng thời hiệu ứng thị giác khi chúng ta chơi game hoặc xem video cũng cực
                        kỳ mãn nhãn.<p />
                        <p className="leading-[1.8] mb-3">Cùng công nghệ ProMotion thông minh có thể thay đổi tần số quét từ 10 đến 120 lần mỗi giây tùy thuộc vào
                            ứng dụng, thao tác bạn đang sử dụng, nhằm tối ưu thời lượng sử dụng pin và trải nghiệm của bạn.</p>
                        <img className="my-3" src="https://uqoojcos5nobj.vcdn.cloud/uploads/2021/09/iphone-moi-2021-06.jpg" />
                        <p className="leading-[1.8] mb-3">Nếu bạn dùng iPhone 13 Pro Max để chơi game, tần số quét 120 Hz kết hợp hiệu suất đồ họa tuyệt vời của
                            GPU sẽ khiến máy trở nên vô cùng hoàn hảo khi trải nghiệm.</p>
                        <p className="leading-[1.8] mb-3">Cụm camera được nâng cấp toàn diện</p>
                        <p className="leading-[1.8] mb-3">iPhone 13 Pro Max vẫn sẽ có bộ camera 3 ống kính xếp xen kẽ thành một cụm vuông, đặt ở góc
                            trên bên trái của lưng máy gồm camera telephoto, camera góc siêu rộng và camera chính góc rộng với
                            khẩu độ f/1.5 siêu lớn.</p>
                        <p className="leading-[1.8] mb-3">Bên cạnh đó, cảm biến LiDAR vẫn sẽ hiện diện trên iPhone 13 Pro Max nhằm mang đến trải nghiệm
                            thực tế tăng cường (AR) tốt nhất cho tất cả người dùng cũng như hỗ trợ cho cụm camera lấy nét
                            trong môi trường ánh sáng yếu.</p>
                        <p className="leading-[1.8] mb-3">Đây cũng là chiếc điện thoại thông minh đầu tiên cung cấp quy trình làm việc chuyên nghiệp “end-to-end”
                            cho phép bạn ghi và chỉnh sửa video ở định dạng nén ProRes hoặc Dolby Vision ngay trên chính chiếc điện
                            thoại của mình.</p>
                        <h3 className="font-bold text-[18px] mb-3">Hiệu năng đầy hứa hẹn với Apple A15 Bionic</h3>
                        <p className="leading-[1.8] mb-3">iPhone 13 Pro Max sẽ được trang bị bộ vi xử lý Apple A15 Bionic mới nhất của hãng, được sản xuất trên
                            tiến trình 5nm+, đảm bảo mang lại hiệu năng vận hành ấn tượng mà vẫn tiết kiệm điện tốt nhất cùng khả
                            năng hỗ trợ mạng 5G tốc độ siêu cao.</p>
                        <p className="leading-[1.8] mb-3">Theo Apple công bố, A15 Bionic là chipset nhanh nhất trong thế tới smartphone (9/2021), có tốc độ nhanh
                            hơn 50% so với các chip khác trên thị trường, có thể thực hiện 15.8 nghìn tỉ phép tính mỗi giây, giúp
                            hiệu năng CPU nhanh hơn bao giờ hết.</p>
                        <img src="https://uqoojcos5nobj.vcdn.cloud/uploads/2021/09/iphone-moi-2021-02.jpg" />
                        <p className="leading-[1.8] mb-3">Máy sở hữu bộ nhớ trong 128 GB, vừa đủ với nhu cầu sử dụng của một người dùng cơ bản, không có nhu cầu
                            quay video quá nhiều, ngoài ra năm nay cũng có thêm phiên bản bộ nhớ trong lên đến 1TB, bạn có thể cân
                            nhắc nếu có nhu cầu lưu trữ cao.</p>
                        <p className="leading-[1.8] mb-3">Ngoài ra, máy còn được tích hợp công nghệ Wi-Fi 6, chuẩn kết nối không dây mới, dự kiến sẽ cùng với 5G
                            giúp đưa trải nghiệm internet của người dùng lên tầm cao mới.</p>
                        <img className="my-3" src="https://uqoojcos5nobj.vcdn.cloud/uploads/2021/09/iphone-moi-2021-08.jpg" />
                        <p className="leading-[1.8] mb-3">Apple đã không ngừng cải tiến đem đến cho người dùng sản phẩm tốt nhất, iPhone 13 Pro Max 128GB vẫn giữ
                            được các điểm nổi bật của người tiền nhiệm, nổi bật với cải tiến về cấu hình, thời lượng pin cũng như
                            camera và nhiều điều còn chờ bạn khám phá.</p>
                    </span>
                    <button id="read-more">Đọc thêm</button>
                </div>
                <div className="product-parameter">
                    <h2 className="uppercase text-[16px] font-bold border-b-[1px] mt-2 pl-1">Thông số kĩ thuật</h2>
                    <ul>
                        <li className="parameter">
                            <p className="content-prameter">Kích thước màn hình</p>
                            <span className="detail-items">6.7 inches</span>
                        </li>
                        <li className="parameter border-y-[1px] bg-[#d8d8d8]">
                            <p className="content-prameter">Độ phân giải màn hình</p>
                            <span className="detail-items">2778 x 1284 pixel</span>
                        </li>
                        <li className="parameter">
                            <p className="content-prameter">CPU</p>
                            <span className="detail-items">Apple A15</span>
                        </li>
                        <li className="parameter border-y-[1px] bg-[#d8d8d8]">
                            <p className="content-prameter">Bộ nhớ trong</p>
                            <span className="detail-items">128 GB</span>
                        </li>
                        <li className="parameter">
                            <p className="content-prameter">Camera chính</p>
                            <span className="detail-items">Camera góc rộng: 12MP, ƒ/1.5, Camera góc siêu rộng: 12MP, ƒ/1.8, Camera tele : 12MP, /2.8</span>
                        </li>
                        <li className="parameter border-y-[1px] bg-[#d8d8d8]">
                            <p className="content-prameter">Camera phụ</p>
                            <span className="detail-items">12MP, ƒ/2.2</span>
                        </li>
                        <li className="parameter">
                            <p className="content-prameter">Hệ điều hành</p>
                            <span className="detail-items">IOS 15</span>
                        </li>
                        <li className="parameter border-y-[1px] bg-[#d8d8d8]">
                            <p className="content-prameter">Thẻ sim</p>
                            <span className="detail-items">1 nano SIM + 1 eSIM</span>
                        </li>
                        <li className="parameter">
                            <p className="content-prameter">Dung lượng pin</p>
                            <span className="detail-items">4,325mAh</span>
                        </li>
                        <li className="parameter border-y-[1px] bg-[#d8d8d8]">
                            <p className="content-prameter">Tính năng đặc biệt</p>
                            <span className="detail-items">Hỗ trợ 5G, Kháng nước, kháng bụi, Sạc không dây, Nhận diện khuôn mặt</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default ProductDetail