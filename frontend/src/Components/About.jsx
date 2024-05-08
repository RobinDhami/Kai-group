import img1 from "../assets/1.jpg"
import img2 from "../assets/2.webp"
import img3 from "../assets/3.webp"

const AboutSection = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">About Neem Karoli Trust</h2>
          <p className="text-lg text-center text-[#AE402D] mb-8">Empowering communities, transforming lives</p>
          <p className="text-lg text-gray-700 mb-8">Neem Karoli Trust is inspired by the teachings and compassion of the revered saint Neem Karoli Baba, also known as Maharaj-ji. Born in [year], Neem Karoli Baba devoted his life to serving humanity and spreading love and wisdom.</p>
          <p className="text-lg text-gray-700 mb-8">Neem Karoli Trust, founded in [year], carries forward the legacy of Maharaj-ji by undertaking various charitable initiatives aimed at uplifting the underprivileged, providing education, healthcare, and spiritual guidance.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum, quam quis pulvinar lobortis, mi justo pharetra urna, eget fermentum turpis erat vel nulla. Nullam bibendum scelerisque arcu ut pulvinar.</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-700 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum, quam quis pulvinar lobortis, mi justo pharetra urna, eget fermentum turpis erat vel nulla. Nullam bibendum scelerisque arcu ut pulvinar.</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Goals and Objectives</h3>
            <p className="text-lg text-gray-700 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum, quam quis pulvinar lobortis, mi justo pharetra urna, eget fermentum turpis erat vel nulla. Nullam bibendum scelerisque arcu ut pulvinar.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <img src={img1} alt="Image 1" className="rounded-lg shadow-md" />
          <img src={img2} alt="Image 2" className="rounded-lg shadow-md" />
          <img src={img3} alt="Image 3" className="rounded-lg shadow-md" />
          {/* Add more images as needed */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
