import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHelping, faQuestionCircle, faDonate } from '@fortawesome/free-solid-svg-icons';

const Section = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faHandsHelping} className="text-4xl text-[#FFA302] mb-4" />
            <h3 className="text-xl font-bold text-[#AE402D] mb-2">Programs and Initiatives</h3>
            <p className="text-gray-700">Explore our various programs and initiatives aimed at making a positive impact in the community.</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faQuestionCircle} className="text-4xl text-[#FFA302] mb-4" />
            <h3 className="text-xl font-bold text-[#AE402D] mb-2">FAQ</h3>
            <p className="text-gray-700">Find answers to commonly asked questions about our organization, activities, and more.</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faDonate} className="text-4xl text-[#FFA302] mb-4" />
            <h3 className="text-xl font-bold text-[#AE402D] mb-2">Donate</h3>
            <p className="text-gray-700">Support our cause by making a donation. Every contribution helps us make a difference.</p>
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faHandsHelping} className="text-4xl text-[#FFA302] mb-4" />
            <h3 className="text-xl font-bold text-[#AE402D] mb-2">Get Involved</h3>
            <p className="text-gray-700">Learn how you can get involved and become a part of our efforts to create positive change.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
