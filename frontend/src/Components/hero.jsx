import trust from "../assets/trust.png";
import "./hero.css";

const hero = () => {
  
  return (
    <div className="lg:flex lg:justify-between top-0 lg:pt-36 pt-36 px-8 lg:px-16 lg:py-[20px]  ">
      <div className="text_container text-black flex-1 mr-5 lg:w-1/5">
        <h1 className="text-3xl mb-6 lg:text-4xl text-[#AE402D] font-sans md:pt-2 text-effect ">
          Neem Karoli Trust
        </h1>
        <div className="text-5xl text-[#FFA302] md:pt-5">
          <p className="text-[#FFA302] font-bold" style={{ fontFamily: 'Yeseva One, serif' }}>
            &quot; Love everyone, serve everyone, remember God, and tell the
            truth &quot;
          </p>
          <br />
          <p className="text-red-500 font-semibold text-3xl">
            -Neem Karoli Baba
          </p>
        </div>{" "}
        <p className="text-xl lg:text-lg font-normal md:mt-10">
          The Neem Karoli Trust is a non-profit organization dedicated to
          promoting peace, love, and service to humanity and planet. Inspired by
          the teachings of the revered spiritual master Neem Karoli Maharaj ji,
          our trust strives to create a world where compassion, spirituality,
          and unity prevail.
        </p>
        <div className="md:mt-2 lg:block flex lg:justify-center lg:mb-8 mb-5">
          <button className="bg-[#FFB22B] rounded px-8 py-2 mt-8 text-white lg:text-xl hover:bg-[#AE402D] shadow-custom mr-8  " 
          >
            Explore
          </button>
          <button className="bg-none border-[#FFB22B] border-2 rounded px-8 py-2 mt-8  lg:text-xl shadow-custom hover:bg-[#AE402D] hover:text-white">
            Donate
          </button>
        </div>
      </div>

      <div className="hidden text-white lg:flex justify-center size-[500px]  ml-5    md:pt-12 md:text-center">
        <img src={trust} alt="" className="" />
      </div>
    </div>
  );
};

export default hero;
