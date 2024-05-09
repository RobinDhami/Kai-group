import { Link } from "react-router-dom";

function ServiceSection() {


  const services = [
    {
      url:'/program',
      title: 'Earthquake:Needy Essentials',
      imageUrl: 'https://www.wfp.org/sites/default/files/styles/media_embed/public/2023-11/Nepal_food_Distribution_earthquake_WFP.png?itok=4lZdPaBK',
      description: `Natural disasters can devastate communities, leaving people without access to basic necessities. In times of crisis, Neem Karoli Trust stands in solidarity with those affected by earthquakes and other disasters. Through our relief efforts, we provide essential goods such as food, water, shelter, and medical supplies to affected individuals and families. Our team works tirelessly to ensure that aid reaches those who need it most, offering hope and support in the face of adversity. By coming together and lending a helping hand, we demonstrate the power of compassion and solidarity in rebuilding communities and restoring hope for a better tomorrow.`,
      
    },
    {
      title: 'Senior Citizen Day Care',
      imageUrl: 'https://smf.org.np/wp-content/uploads/2018/07/day-care-meal.jpg',
      description: 'At Neem Karoli Trust, we believe in honoring and supporting our elders. Our Senior Citizen Day Care program offers a nurturing and engaging environment for seniors to spend their days. With trained staff and a range of activities tailored to their interests and needs, we ensure that our elders receive the care and companionship they deserve. From socializing with peers to participating in recreational activities and receiving assistance with daily tasks, we strive to enhance their quality of life and promote their well-being.',
    },
    {
      title: 'Small Orphanage in Kathmandu',
      imageUrl: 'https://volunteerworknepal.com/wp-content/uploads/2019/08/volunteer-work-nepal.jpg',
      description: 'Every child deserves a loving and supportive environment to thrive in. Through our "Help a Small Orphanage" initiative, we extend our hand to smaller orphanages in need of support. From providing financial assistance for basic necessities like food, clothing, and shelter to organizing educational and recreational activities for the children, we aim to create a safe and nurturing space where every child feels valued and cared for. By collaborating with these orphanages, we work towards building brighter futures for orphaned children and empowering them to reach their full potential',
    },
    {
      title: 'Charity',
      imageUrl: 'https://pastor.crystalpro.net/wp-content/uploads/2016/05/Volunteering-as-a-helping-hand-in-NGO.jpg',
      description: 'During times of crisis, our disaster relief efforts provide immediate assistance to those affected by natural disasters such as floods, earthquakes, and hurricanes. We mobilize resources quickly to provide emergency aid, including food, shelter, and medical supplies, to affected communities. By offering timely support and relief, we help communities recover and rebuild in the aftermath of disasters, restoring hope and resilience in the face of adversity.',
    },
   
  ];

    return (
      <div className="bg-white py-[12%]" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
            {/* Map through services array */}
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                <img src={service.imageUrl} alt={service.title} className="w-full h-56 object-cover rounded-t-lg" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-red-600 mb-2">{service.title}</h3>
                  {/* Render description */}
                  <p className="text-gray-600">{service.description}</p>
                  {/* Render Read More button */}
                  <Link to={service.url}>
                    <button className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default ServiceSection;