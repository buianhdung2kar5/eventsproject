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
export const Button = ({
  onClick,
  name,
  type = 'button',
  fullWidth = false,
  variant = 'primary',
  icon = null,
  confirmRobot,
}) => {
  const baseClasses =
    'px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2'

  const variants = {
    primary: 'bg-[#5FA9F0] text-white ',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  }

  const widthClass = fullWidth ? 'w-full' : ''

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${widthClass} `}
    >
      {icon && icon}
      {name}
    </button>
  )
}
