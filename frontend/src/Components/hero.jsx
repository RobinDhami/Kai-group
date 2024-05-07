import trust from "../assets/trust.png"

const hero = () => {
  return (
    <div className="relative flex  lg:pt-36 pt-36 px-8 lg:px-16 lg:py-[20px] justify-evenly  lg:h-[110vh] h-auto ">
<div className="text-black flex-1 mr-5">
  <div className="">

    <h1 className="text-5xl  mb-6 lg:text-5xl text-[#AE402D] font-sans md:pt-2 ">
      Neem   Karoli 
    </h1>
    <span className="text-4xl text-[#FFA302] md:pt-5">
    <span className="text-red-500">"</span>
    Love everyone, serve everyone, remember God, and tell the truth
    <span className="text-red-500">"</span>
  </span>    <p className="text-xl lg:text-lg font-normal md:mt-10">
    The Neem Karoli Trust is a non-profit organization dedicated to promoting peace, love, and service to humanity and planet. Inspired by the teachings of the revered spiritual master Neem Karoli Maharaj ji, our trust strives to create a world where compassion, spirituality, and unity prevail.
    </p>
    <div className="md:mt-2 lg:block flex lg:justify-center lg:mb-8 mb-5">
      <button className="bg-[#FFB22B] rounded px-8 py-2 mt-8 text-white lg:text-xl hover:bg-[#AE402D] shadow-custom mr-8 ">
        Explore
      </button>
      <button className="bg-none border-[#FFB22B] border-2 rounded px-8 py-2 mt-8  lg:text-xl shadow-custom hover:bg-[#AE402D] hover:text-white">
        Donate
      </button>
    </div>
  </div>
</div>
<div className="text-white flex-1 mb-8 ml-5 hidden lg:block h-24 md:pt-12 lg:pl-10 ">
  <img src={trust} alt="" className="" />
</div>
</div>
  )
}

export default hero
