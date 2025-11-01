// src/components/PortfolioManager.jsx

import React from 'react'
// Note: In a real project, you would need to ensure Tailwind CSS is configured.
import { FaFolderOpen } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../routes/path'
// Mock Icon Components (You would replace these with actual icons like from react-icons)
const FolderIcon = () => (
  <span className="text-xl mr-2">
    <FaFolderOpen />
  </span>
)
const PencilIcon = () => <span className="text-lg mr-2"></span>

const PortfolioManager = () => {
  const navigate = useNavigate()
  // Placeholder function for button clicks
  const handleClick = (action) => {
    navigate(PATH.PORTFOLIO)
    console.log(`${action} clicked!`)
    // Add your navigation or logic here
  }

  // Responsive classes explanation:
  // Mobile (Base): w-full, h-auto (height adjusts to content), flex-col
  // Tablet/Desktop (md:): max-w-3xl, h-40 (fixed height for desktop look), flex-row

  return (
    <div
      className={`
                relative
                w-full
                h-auto md:h-40 
                p-6 md:p-8 
                rounded-xl 
                overflow-hidden 
                text-white 
                shadow-xl 
                
                // Blue Gradient Background
                bg-gradient-to-r from-blue-400 to-blue-700
            `}
    >
      {/* --- 1. Background Graphic (Faded Folder) --- */}
      {/* The absolute positioning ensures it's placed behind the content */}
      <div
        className={`
                    absolute top-1/2 right-4 
                    transform -translate-y-1/2 
                    text-white/10 
                    text-[150px] md:text-[200px] 
                    font-extrabold 
                    pointer-events-none 
                    z-0
                `}
      >
        <FaFolderOpen />
      </div>

      {/* --- 2. Main Content Area --- */}
      <div className="relative z-10 flex flex-col md:flex-col md:justify-between md:items-start h-full">
        {/* Text Block */}
        <div className="flex flex-col flex-shrink-0 md:max-w-md">
          <div className="flex items-center mb-1">
            <FolderIcon />
            <h3 className="text-[18px] font-semibold m-0">Portfolio Manager</h3>
          </div>

          <p className="text-sm opacity-90 mb-4 md:mb-0">
            Tạo và chia sẻ hồ sơ hoạt động chuyên nghiệp
          </p>
        </div>

        {/* Button Group (Moves to the right on desktop, stacks on mobile) */}
        <div className="flex flex-col space-y-3 md:gap-4 md:space-y-0 md:space-x-4 md:flex-row md:items-center md:pt-1">
          {/* Primary Button */}
          <button
            onClick={() => handleClick('Quản lý hồ sơ')}
            className={`
                            flex items-center justify-center
                            px-8 py-2
                            bg-white 
                            text-[#5FA9F0] 
                            font-medium 
                            rounded-lg 
                            shadow-md 
                            hover:bg-gray-100 
                            transition duration-150
                            text-[14px]
                            // Responsive: Full width on mobile, auto width on desktop
                            w-full md:w-auto
                        `}
          >
            <PencilIcon />
            Quản lý hồ sơ
          </button>

          {/* Secondary/Empty Button */}
          {/* <button
                        onClick={() => handleClick('Second Button')}
                        className={`
                            // Empty button needs a visible width/height on mobile
                            px-4 py-2 
                            bg-white 
                            text-gray-600 
                            rounded-lg 
                            shadow-md 
                            hover:bg-gray-100 
                            transition duration-150
                            text-sm
                            w-full md:w-[120px] // Fixed width for desktop empty button
                            
                            // To make the button appear empty as in the image:
                            border border-gray-200 
                            text-transparent 
                            relative
                            // For visual effect, let's just make it a simple block
                            md:w-32 
                        `}
                        aria-label="Placeholder Button"
                    >
                    </button> */}
        </div>
      </div>
    </div>
  )
}

export default PortfolioManager
