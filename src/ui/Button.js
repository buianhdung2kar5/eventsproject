// export const Button = ({onClick,name}) =>{
//     const cssButton ={
//         formLogin: ''
//     }
//     return <button
//     onClick={onClick}
//     >
//         {name}
//     </button>
// }
export const Button = ({ onClick, name, type = "button", fullWidth = false, variant = "primary" }) => {
    const baseClasses = "px-6 py-3 rounded-lg font-medium transition-colors duration-200"
    
    const variants = {
        primary: "bg-[#1E90FF] text-white hover:bg-[#006FDD]",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300"
    }
    
    const widthClass = fullWidth ? "w-full" : ""
    
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseClasses} ${variants[variant]} ${widthClass}`}
        >
            {name}
        </button>
    )
}