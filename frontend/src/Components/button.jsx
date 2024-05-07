
const Button = (props) => {
  return (
    <button className='bg-[#AE402D] text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-[#FFA302] 
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button