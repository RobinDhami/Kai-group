
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faGlobe, faUsers } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section className="bg-gray-100 py-[20%]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Neem Karoli Trust</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The Neem Karoli Trust is a non-profit organization dedicated to promoting peace, love, and service to humanity and the planet. Our mission is inspired by the teachings of the revered spiritual master Neem Karoli Maharaj ji.
            </p>
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <div className="flex justify-around mt-8 lg:mt-0">
              <div className="text-center">
                <FontAwesomeIcon icon={faHeart} className="text-5xl text-red-500 mb-2" />
                <p className="text-lg text-gray-800">Promoting Peace & Love</p>
              </div>
              <div className="text-center">
                <FontAwesomeIcon icon={faGlobe} className="text-5xl text-green-500 mb-2" />
                <p className="text-lg text-gray-800">Serving Humanity & the Planet</p>
              </div>
              <div className="text-center">
                <FontAwesomeIcon icon={faUsers} className="text-5xl text-blue-500 mb-2" />
                <p className="text-lg text-gray-800">Fostering Unity & Community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
