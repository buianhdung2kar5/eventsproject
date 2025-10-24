export const Button = ({onClick,name}) =>{
    const cssButton ={
        formLogin: ''
    }
    return <button
    onClick={onClick}
    >
        {name}
    </button>
}