import "./navbar.css";
import logo from "../../assets/neem.png";
import video from "../../assets/18721-295718397.mp4";
function Navbar() {
  return (
    <div className="relative">
      <video className="hero-video absolute " autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className=" flex px-8 py-4 flex-wrap items-center z-10">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 z-10">
          <img src={logo} className="  h-25 w-20 md:h-30 md:w-22  " />
        </a>
        <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center  gap-9 z-10">
          <a className="mr-5 text-[#AE402D] text-xl" href="#">
            First Link
          </a>
          <a className="mr-5 text-[#AE402D] text-xl" href="#">
            Second Link
          </a>
          <a className="mr-5 text-[#AE402D] text-xl" href="#">
            Third Link
          </a>
          <a className="mr-5 text-[#AE402D] text-xl" href="#">
            Fourth Link
          </a>
        </div>
        <button className="Btn items-center"></button>
      </div>
    </div>
  );
}

export default Navbar;
