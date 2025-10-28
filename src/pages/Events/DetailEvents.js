import RegisterEvent from '../../components/Events/ResgiterEvents'
import { useParams } from 'react-router-dom'
import { DetailEvents } from '../../data/events/DetailEvents'
import {PATH} from '../../routes/path'
import { useNavigate } from 'react-router-dom'
export default function DetaileEvents () {
    const { id } = useParams()
    // Lấy sự kiện đầu tiên tìm được
    const event = DetailEvents.find((item) => String(item.id) === id)
    const navigate= useNavigate()
    // Nếu không tìm thấy sự kiện, hiển thị thông báo hoặc quay về trang chủ
    if (!event) {
        return <div className='w-[60%] mx-auto py-10'>Không tìm thấy sự kiện!</div>
    }

    // Destructure dữ liệu sự kiện để sử dụng dễ dàng hơn
    const { 
        name, 
        img, 
        category, 
        certificate, 
        price, 
        school,
        speakers,
        aboutEvent,
        mainContent,
        targetAudience,
        benefits 
    } = event;

    // Chuyển đổi giá trị price và certificate để hiển thị phù hợp với ảnh
    const priceDisplay = price.toLowerCase() === 'free' || price === 'Miễn phí' ? 'Miễn phí' : price + ' VNĐ';
    const certificateDisplay = certificate === 'Chứng chỉ có 5 điểm tốt' ? 'Chứng chỉ 5 tốt' : certificate;
    const isPublic = event.date !== 'Đang công bố' ? 'Đã công bố' : 'Đang công bố';

    return (
        <div className='w-[60%] mx-auto max-w-screen-lg py-10 flex flex-col gap-4'>
            {/* Breadcrumb */}
            <div className='flex text-sm text-gray-500 mb-5'>
                <div
                className='flex gap-2'
                >
                <button className='hover:text-blue-600 transition duration-150'
                onClick={() =>navigate(PATH.HOME)}
                >
                    Trang chủ 
                </button>
                <p>/</p>
                <button className='hover:text-blue-600 transition duration-150'
                onClick={() => navigate(PATH.EVENTS)}
                >
                    Sự kiện
                </button>
                <p>/</p>
                </div>
                <p className='font-semibold text-gray-700 ml-1'>
                    {name}
                </p>
            </div>
           <div
           className='border-0 rounded-lg'
           >
           <img 
            src={process.env.PUBLIC_URL + img}
            alt={name}
            className='w-full object-cover rounded-lg' 
            />
           </div>
            {/* Main Content Area */}
            <div className='bg-white shadow-lg rounded-lg overflow-hidden mt-4'>
               
                
                <div className='p-6'>
                    {/* Tags Section */}
                    <div className='flex space-x-3 text-sm mb-4'>
                        <span className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium'>{category}</span>
                        <span className='px-3 py-1 bg-green-100 text-green-800 rounded-full font-medium'>{certificateDisplay}</span>
                        <span className='px-3 py-1 bg-gray-100 text-gray-800 rounded-full font-medium'>{priceDisplay}</span>
                        <span className='px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full font-medium'>{isPublic}</span>
                    </div>

                    <h1 className='text-3xl font-bold mb-2'>{name}</h1>
                    <p className='text-gray-600 mb-6'>
                        <i className='fas fa-university mr-2'></i> {school}
                    </p>
                    
                    {/* Diễn giả / Chủ trì */}
                    <h2 className='text-xl font-semibold mb-3 border-b pb-2'>Diễn giả / Chủ trì</h2>
                    <div className='space-y-3 mb-6'>
                        {speakers && speakers.map((speaker, index) => (
                            <div key={index} className='flex items-center p-3 border rounded-md bg-gray-50'>
                                <span className='font-bold text-lg text-blue-700 mr-3'>T</span>
                                <div>
                                    <p className='font-medium'>{speaker.name}</p>
                                    <p className='text-sm text-gray-600'>{speaker.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Về sự kiện này */}
                    <h2 className='text-xl font-semibold mb-3 border-b pb-2'>Về sự kiện này</h2>
                    <p className='text-gray-700 mb-6'>{aboutEvent}</p>

                    {/* Chi tiết nội dung */}
                    <h2 className='text-xl font-semibold mb-3 border-b pb-2'>Chi tiết nội dung</h2>
                    <ul className='list-disc list-inside space-y-1 text-gray-700 mb-6'>
                        {mainContent && mainContent.map((content, index) => (
                            <li key={index}>{content}</li>
                        ))}
                    </ul>

                    {/* Đối tượng tham gia */}
                    <h2 className='text-xl font-semibold mb-3 border-b pb-2'>Đối tượng tham gia</h2>
                    <p className='text-gray-700 mb-6'>{targetAudience}</p>

                    {/* Quyền lợi khi tham gia */}
                    <h2 className='text-xl font-semibold mb-3 border-b pb-2'>Quyền lợi khi tham gia</h2>
                    <ul className='space-y-2 text-gray-700 mb-6'>
                        {benefits && benefits.map((benefit, index) => (
                            <li key={index} className='flex items-start'>
                                <i className='fas fa-check-circle text-green-500 mt-1 mr-2'></i> 
                                <span>{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='mt-8 w-full'>
                        <RegisterEvent
                        event={event} />
                    </div>
        </div>
    )
}