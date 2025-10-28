// src/components/PortfolioManagerPage.jsx
import React from 'react';
import HeaderSection from './HeaderSection';
import SummaryCards from './SummaryCards';
import PortfolioItem from './PortfolioItem';

const PortfolioManagerPage = () => {
    // Dữ liệu mẫu cho các mục hồ sơ
    const portfolioData = [
        {
            id: 1,
            title: "Nguyễn Văn A - Sự kiện công nghệ 2025",
            description: "Hồ sơ tổng hợp các hoạt động và sự kiện tham gia liên quan đến Công nghệ",
            status: "Đã xuất bản",
            activities: 2,
            date: "20/10/2025",
            views: 6,
            downloads: 3,
        },
        {
            id: 2,
            title: "Tech Skills Portfolio - Học bổng VINIF 2025",
            description: "Bộ hồ sơ tập trung vào các hoạt động công nghệ và lập trình để nộp học bổng",
            status: "Đã xuất bản",
            activities: 3,
            date: "22/10/2025",
            views: 6,
            downloads: 2,
        },
        {
            id: 3,
            title: "Hồ sơ Sinh viên 5 Tốt 2025",
            description: "Tổng hợp các hoạt động phục vụ đánh giá sinh viên 5 tốt",
            status: "Bản nháp",
            activities: 4,
            date: "26/10/2025",
            views: null, // Bản nháp có thể không có lượt xem
            downloads: null, // Bản nháp có thể không có lượt tải
        },
    ];

    return (
        <div className="min-h-screen  p-4 sm:p-6 lg:p-8 w-[60%] mx-auto">
            <div className="max-w-7xl mx-auto">
                <HeaderSection />
                <SummaryCards />
                
                <div className="mt-8">
                    {portfolioData.map(item => (
                        <PortfolioItem key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioManagerPage;