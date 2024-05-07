import video from "../../assets/18721-295718397.mp4";
import logo from "../../assets/trust.png";
import "./navbar.css";

function Navbar() {
  return (
    <div className="lg:relative lg:columns-1">
    
      <video className="hero-video absolute hidden lg:block" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      
      <div className="flex px-8 py-4 flex-wrap lg:items-center lg:z-10">
        <a className="lg:flex title-font font-medium lg:items-center text-gray-900 mb-4 lg:mb-0 lg:z-10">
          <img src={logo} className="h-25 w-20 md:h-30 md:w-22" alt="Trust Logo" />
        </a>
        <div className="lg:ml-auto hidden lg:mr-auto lg:flex lg:flex-wrap lg:items-center text-base lg:justify-center lg:gap-9 lg:z-10">
          <a className="mr-5 text-[#AE402D] text-xl font-normal" href="#">Home</a>
          <a className="mr-5 text-[#AE402D] text-xl font-normal" href="#">About</a>
          <a className="mr-5 text-[#AE402D] text-xl font-normal" href="#">Services</a>
          <a className="mr-5 text-[#AE402D] text-xl font-normal" href="#">Community</a>
          <a className="mr-5 text-[#AE402D] text-xl font-normal" href="#">Movement</a>
        </div>
        <button className="Btn items-center"></button>
        <div className="relative lg:z-10 lg:flex pt-20 px-10 w-[40%]">
        <div>
          <h1 id="welcome" className="font-black text-3xl text-[#AE402D] animated-text font-serif">
            Welcome to Neem Karoli Trust
          </h1>
          <p className="text-slate-600 p-2">
            The Neem Karoli Trust is a non-profit organization dedicated to promoting peace, 
            love, and service to humanity and planet. 
            Inspired by the teachings of the revered spiritual master Neem Karoli Maharaj ji,
            our trust strives to create a world where compassion, spirituality, and unity prevail.
          </p>
        </div>
      </div>
      </div>     
    </div>
  );
}

export default Navbar;
