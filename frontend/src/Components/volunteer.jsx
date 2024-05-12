import img1 from "../assets/2.webp";
import img from "../assets/qr.png";
const volunteer = () => {
    return (
        <div className="flex flex-col " >
        <main className="bg-[#f5f5f5] w-full py-20 md:py-32">
        <section className="w-full py-12 md:py-10 lg:py-10 bg-gray-100 xl:py-48 bg-cover  flex justify-center mx-auto" >   
                 <div className="container px-4 md:px-6">
              <div className="flex flex-col  p-10 text-center justify-center items-center">
                <div className="space-y-2">
                  <h1  style={{ fontFamily: 'Yeseva One, serif' }} className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-black ">
                    "Give, and it will be given to you."
                  </h1>
                  <p className="mx-auto max-w-[700px] text-[#AE402D] md:text-xl lg:py-6">
                    Your donation can make a profound difference in the lives of those in need. Join us in our mission to
                    spread hope and compassion.
                  </p>
                </div>
                <div className="space-x-4 lg:py-2">
                  <button className="whitespace-nowrap ring-offset-background focus-visible:ring-offset-2 inline-flex h-9 items-center  justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#1F2937] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0F172A] disabled:pointer-events-none disabled:opacity-50   ">
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-4 lg:py-4 bg-white flex justify-center ">
            <div className="container px-4 md:px-6 ">
              <div className="grid  gap-6 lg:grid-cols-1 lg:gap-12">
                <div className="space-y-2 text-center">
                  <div className="  inline-block rounded-lg bg-[#fa7259] px-3 py-1 text-sm  ">Donate</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#111827]  text-center  pt-10 "  style={{ fontFamily: 'Yeseva One, serif' }}>
                    Make a Difference
                  </h2>
                  <div className="flex justify-center p-2">
                  <p className="max-w-[600px] text-[#6B7280] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed  ">
                  Your donation, no matter the amount, can have a profound impact on the lives of those in need. Join us
                  in our mission to spread hope and compassion.
                </p>
                  </div>
                 
                  <div className="grid gap-4">
                    <div className="space-y-1">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#6B7280] "
                        htmlFor="amount"
                      >
                        Donation Amount
                      </label>
                      <div className="flex items-center">
                        <span className="inline-flex items-center rounded-l-md border border-r-0 border-[#D1D5DB] bg-[#F5F5F5] px-3 text-[#6B7280]   ">
                          $
                        </span>
                        <input
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-l-none"
                          id="amount"
                          min="0"
                          step="1"
                          placeholder="Enter amount"
                          type="number"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label
                        className="text-sm  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#6B7280] "
                        htmlFor="message"
                      >
                        Personal Message
                      </label>
                      <textarea
                        className="flex w-full rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 p-4 min-h-[100px]"
                        id="message"
                        placeholder="Enter a personal message (optional)"
                      ></textarea>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <img
                          src={img}
                          width="200"
                          height="200"
                          alt="QR Code"
                          className="mx-auto"
                          style={{ aspectRatio: '200 / 200', objectFit: 'cover' }}
                        />
                        <p className="text-center text-[#6B7280]  mt-2">Scan to donate</p>
                      </div>
                      <div className=" flex  justify-center items-center ">
                        <p className="text-[#6B7280] ">Bank Account Details:</p> 
                        <p className="font-semibold text-[#111827] ">123-456-789</p> 
                        <p className="text-[#6B7280] ">Charity Donations Foundation</p>
                      </div>
                    </div>
                    <button className="whitespace-nowrap ring-offset-background focus-visible:ring-offset-2 inline-flex h-9 items-center justify-center rounded-md bg-[#111827] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#1F2937] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0F172A] disabled:pointer-events-none disabled:opacity-50   ">
                      Donate Now
                    </button>
                  </div>
                </div>
               
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F5F5F5] flex justify-center">
      <div className="container px-4 md:px-6 ">
        <div className="flex flex-col items-center space-y-4  text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#fa7259] px-3 py-1 text-sm ">Our Impact</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#111827] "  style={{ fontFamily: 'Yeseva One, serif' }}>
              Transforming Lives
            </h2>
            <p className="mx-auto max-w-[700px] text-[#6B7280] md:text-xl ">
              Your donations have helped us provide food, shelter, and medical care to thousands of individuals in
              need. See the impact we've made together.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
            <div className="bg-white  rounded-lg  shadow-md p-6 text-center ">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-12 w-12 text-[#FFA302]  mb-4 ml-[26%]"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" x2="9.01" y1="9" y2="9"></line>
                <line x1="15" x2="15.01" y1="9" y2="9"></line>
              </svg>
              <h3 className="text-2xl font-bold text-[#111827]  mb-2">10,000+</h3>
              <p className="text-[#6B7280] ">Individuals Helped</p>
            </div>
            <div className="bg-white  rounded-lg shadow-md p-6 text-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-12 w-12 text-[#FFA302]  mb-4 ml-[26%]"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path>
              </svg>
              <h3 className="text-2xl font-bold text-[#111827]  mb-2">$5M+</h3>
              <p className="text-[#6B7280] ">Funds Raised</p>
            </div>
            <div className="bg-white  rounded-lg shadow-md p-6 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-12 w-12 text-[#FFA302]  mb-4 ml-[26%]"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <h3 className="text-2xl font-bold text-[#111827]  mb-2">500+</h3>
              <p className="text-[#6B7280] ">Homes Provided</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-10 lg:py-10 bg-white flex justify-center">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-[#fa7259] px-3 py-1 text-sm ">Testimonials</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#111827] "  style={{ fontFamily: 'Yeseva One, serif' }}>
            Hear from Our Donors
          </h2>
          <p className="mx-auto max-w-[700px] text-[#6B7280] md:text-xl ">
            Read what our donors have to say about the impact of their contributions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white  rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <img
                src={img1}
                width="40"
                height="40"
                alt="Avatar"
                className="rounded-full mr-4"
                style={{ aspectRatio: '40 / 40', objectFit: 'cover' }}
              />
              <div>
                <h4 className="text-[#fa7259]  font-semibold">John Doe</h4>
                <p className="text-[#6B7280]  text-sm">Donor</p>
              </div>
            </div>
            <p className="text-[#6B7280]  leading-relaxed">
              "Donating to this organization has been one of the most rewarding experiences of my life. Knowing
              that my contribution is making a real difference in the lives of those in need is truly humbling."
            </p>
          </div>
          <div className="bg-white  rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <img
                src={img1}
                width="40"
                height="40"
                alt="Avatar"
                className="rounded-full mr-4"
                style={{ aspectRatio: '40 / 40', objectFit: 'cover' }}
              />
              <div>
                <h4 className="text-[#fa7259]  font-semibold">Jane Smith</h4> 
                <p className="text-[#6B7280]  text-sm">Donor</p>
              </div>
            </div>
            <p className="text-[#6B7280] leading-relaxed">
              "I'm so grateful to be a part of this organization's mission. Seeing the tangible impact of my
              donation has been truly inspiring. I encourage everyone to give what they can to support this
              important cause."
            </p>
          </div>
          <div className="bg-white  rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <img
                src={img1}
                width="40"
                height="40"
                alt="Avatar"
                className="rounded-full mr-4"
                style={{ aspectRatio: '40 / 40', objectFit: 'cover' }}
              />
              <div>
                <h4 className="text-[#fa7259]  font-semibold">Michael Johnson</h4>
                <p className="text-[#6B7280]  text-sm">Donor</p>
              </div>
            </div>
            <p className="text-[#6B7280]  leading-relaxed">
              "I've been supporting this organization for years, and I'm continually impressed by their dedication
              and the real-world impact they're making. Donating is the l
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

        </main>
      </div>
    );
  };
  
  export default volunteer;
  