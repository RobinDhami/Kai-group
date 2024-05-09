import img from "../assets/baba1.png"
import img1 from "../assets/bab3.jpg"
import img2 from "../assets/baba.webp"
import img3 from "../assets/logo.png"
import img4 from "../assets/bab4.jpg"
import rect1 from "../assets/rect1.jpg"
import rect2 from "../assets/rect2.jpg"
import rect3 from "../assets/rect3.avif"
import rect4 from "../assets/rect4.webp"
const Maharaja = () => {
  const quotes = [
    {
      text: "Love everyone, serve everyone, remember God, and tell the truth.",
      author: "Neem Karoli Baba"
    },
    {
      text: "The quieter you become, the more you are able to hear.",
      author: "Neem Karoli Baba"
    },
    {
      text: "Do not be led by others, awaken your own mind, amass your own experience, and decide for yourself your own path.",
      author: "Neem Karoli Baba"
    },
    {
      text: "Whatever comes, let it come, what stays let stay, what goes let go.",
      author: "Neem Karoli Baba"
    }
  ];
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 my-16 bg-gray-100">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Baba Neem Karoli Maharaj</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src={img} alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Story</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src={img1} alt="Alexa featured Img" />
                            <img className="md:hidden block" src={rect1} alt="Alexa featured Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4"></p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src={img2} alt="Olivia featured Img" />
                            <img className="md:hidden block" src={rect2} alt="Olivia featured Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4"></p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src={img3} alt="Liam featued Img" />
                            <img className="md:hidden block" src={rect3} alt="Liam featued Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4"></p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src={img4} alt="Elijah featured img" />
                            <img className="md:hidden block" src={rect4} alt="Elijah featured img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4"></p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Inspirational Quotes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {quotes.map((quote, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <blockquote className="text-lg italic mb-4">{quote.text}</blockquote>
              <p className="text-sm text-gray-600 text-right">- {quote.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
        </div>
    );
};

export default Maharaja;
