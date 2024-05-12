import img5 from "../assets/char1.jpg";
import img1 from "../assets/char2.jpg";
import img2 from "../assets/char3.jpg";
import img3 from "../assets/char4.png";
import img4 from "../assets/1.webp";

const Sewa = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 py-[12%] bg-white md:grid-cols-[3fr_1fr] md:gap-12 lg:gap-16 ">
      <main>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white shadow-md  ">
            <img
              src={img5}
              alt="Product image"
              width="400"
              height="225"
              className="h-48 w-full rounded-t-lg object-cover"
              style={{ aspectRatio: "400 / 225", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 ">
                <a href="#">Neem Leaf Extract</a>
              </h3>
              <p className="mt-2 text-gray-600 ">
                Discover the powerful benefits of neem leaf extract for your health and wellness.
              </p>
              <div className="mt-4">
                <a className="text-[#AE402D] hover:underline d" href="#">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white shadow-md  ">
            <img
              src={img1}
              alt="Product image"
              width="400"
              height="225"
              className="h-48 w-full rounded-t-lg object-cover"
              style={{ aspectRatio: "400 / 225", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 ">
                <a href="#">Neem Leaf Extract</a>
              </h3>
              <p className="mt-2 text-gray-600 ">
                Discover the powerful benefits of neem leaf extract for your health and wellness.
              </p>
              <div className="mt-4">
                <a className="text-[#AE402D] hover:underline d" href="#">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white shadow-md  ">
            <img
              src={img2}
              alt="Product image"
              width="400"
              height="225"
              className="h-48 w-full rounded-t-lg object-cover"
              style={{ aspectRatio: "400 / 225", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 ">
                <a href="#">Neem Leaf Extract</a>
              </h3>
              <p className="mt-2 text-gray-600 ">
                Discover the powerful benefits of neem leaf extract for your health and wellness.
              </p>
              <div className="mt-4">
                <a className="text-[#AE402D] hover:underline d" href="#">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white shadow-md  ">
            <img
              src={img3}
              alt="Product image"
              width="400"
              height="225"
              className="h-48 w-full rounded-t-lg object-cover"
              style={{ aspectRatio: "400 / 225", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 ">
                <a href="#">Senior citizen day care</a>
              </h3>
              <p className="mt-2 text-gray-600 ">
                Discover the powerful benefits of neem leaf extract for your health and wellness.
              </p>
              <div className="mt-4">
                <a className="text-[#AE402D] hover:underline d" href="#">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white shadow-md  ">
            <img
              src={img4}
              alt="Product image"
              width="400"
              height="225"
              className="h-48 w-full rounded-t-lg object-cover"
              style={{ aspectRatio: "400 / 225", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 ">
                <a href="#">Neem Leaf Extract</a>
              </h3>
              <p className="mt-2 text-gray-600 ">
                Discover the powerful benefits of neem leaf extract for your health and wellness.
              </p>
              <div className="mt-4">
                <a className="text-[#AE402D] hover:underline d" href="#">
                  Read more
                </a>
              </div>
            </div>
          </div>
          {/* Add similar code blocks for other products */}
        </div>
      </main>
      <aside className="space-y-8">
        <div className="rounded-lg bg-gray-100 p-6 shadow-md  ">
          <h3 className="text-xl font-semibold text-gray-900 ">About Neem Karoli</h3>
          <div className="mt-4 text-gray-600 ">
            <p>
              Neem Karoli is a charitable trust that provides support and assistance to those in need, including
              orphans, senior citizens, and victims of natural disasters. Our mission is to empower and uplift the lives
              of the underprivileged through various initiatives and programs.
            </p>
            <p className="mt-2">
              Neem, a versatile tree native to India, has been used for centuries in Ayurvedic medicine and traditional
              remedies. We believe in harnessing the power of neem to create products that are gentle, safe, and
              beneficial for your body and the environment, while also using the proceeds to fund our charitable work.
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-gray-100 p-6 shadow-md  ">
          <h3 className="text-xl font-semibold text-gray-900 ">Donate to Our Cause</h3>
          <p className="mt-2 text-gray-600 ">
            Your donation can make a significant difference in the lives of those we serve. Help us continue our mission
            of providing aid and support to those in need.
          </p>
          <div className="mt-4">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-[#AE402D] text-white hover:bg-[#AE402D] :bg-[#AE402D]  ">
              Donate Now
            </button>
          </div>
        </div>
        <div className="rounded-lg bg-gray-100 p-6 shadow-md  ">
          <h3 className="text-xl font-semibold text-gray-900 ">Newsletter</h3>
          <p className="mt-2 text-gray-600 ">
            Subscribe to our newsletter to stay up-to-date with the latest product updates and special offers.
          </p>
          <form className="mt-4 space-y-2">
            <input
              className="flex h-10 border border-input text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-md bg-gray-100 px-4 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#AE402D]   :focus:ring-[#AE402D]"
              placeholder="Enter your email"
              type="email"
            />
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-[#AE402D] text-white hover:bg-[#AE402D]  "
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </aside>
    </div>
  );
};

export default Sewa;
