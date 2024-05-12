
import img from "../assets/temple1.jpg"
import img1 from "../assets/rect4.webp"

const Events = () => {
  return (
    
<main className="flex flex-col">
<section className="w-full bg-[#f5f5f5]  py-20 md:py-32">
  <div className="container mx-auto px-4 md:px-6">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <div className="inline-block bg-[#fde2e2]  px-4 py-2 rounded-full text-white  text-sm font-medium">
          Upcoming Event
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Neem Karoli Baba Ashram Celebration</h1>
        <p className="text-gray-500  text-lg">
          Join us for a special celebration at the Neem Karoli Baba Ashram on June 15th, 2023 at 7:00 PM.
        </p>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
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
              className="h-6 w-6 text-gray-500 "
            >
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
            <span className="text-gray-500 ">June 15, 2023</span>
          </div>
          <div className="flex items-center space-x-2">
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
              className="h-6 w-6 text-gray-500 "
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span className="text-gray-500 ">7:00 PM</span>
          </div>
        </div>
        <a
          className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-white font-medium shadow-sm hover:bg-[#1464d2] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 dark:bg-[#4da6ff] dark:hover:bg-[#3d8ae6] dark:focus:ring-[#4da6ff]"
          href="#"
        >
          Learn More
        </a>
      </div>
      <div className="hidden md:block">
        <img
          src={img}
          width="600"
          height="400"
          alt="Neem Karoli Baba Ashram"
          className="rounded-lg"
         style={{ aspectRatio: '600 / 400', objectFit: 'cover' }}
        />
      </div>
    </div>
  </div>
</section>
<section className="w-full py-20 md:py-32">
  <div className="container mx-auto px-4 md:px-6">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <div className="inline-block bg-[#e6f0ff]  px-4 py-2 rounded-full text-white  text-sm font-medium">
          Our Mission
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Inspired by Neem Karoli Baba</h2>
        <p className="text-gray-500  text-lg">
          The Neem Karoli Trust is a non-profit organization founded by followers of Neem Karoli Baba, a revered
          spiritual teacher and guru. Our mission is to promote the teachings and legacy of Neem Karoli Baba, and
          to provide a space for spiritual growth and community.
        </p>
        <p className="text-gray-500  text-lg">
          We believe in the power of love, service, and devotion to the divine. Through our programs and events,
          we aim to inspire individuals to find their own spiritual path and to cultivate a deeper connection with
          the divine.
        </p>
      </div>
      <div className="hidden md:block">
        <img
          src={img1}
          width="600"
          height="400"
          alt="Neem Karoli Baba"
          className="rounded-lg"
         style={{ aspectRatio: '600 / 400', objectFit: 'cover' }}
        />
      </div>
    </div>
  </div>
</section>
<section className="w-full bg-[#f5f5f5]  py-20 md:py-32">
  <div className="container mx-auto px-4 md:px-6">
    <div className="space-y-6">
      <div className="inline-block bg-[#e6f0ff]  px-4 py-2 rounded-full text-white  text-sm font-medium">
        Upcoming Events
      </div>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Join Us for Upcoming Events</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
              Neem Karoli Baba Birthday Celebration
            </h3>
            <p className="text-sm text-muted-foreground">
              Join us as we celebrate the birthday of Neem Karoli Baba with devotional music, prayers, and a
              special discourse.
            </p>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
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
                  className="h-6 w-6 text-gray-500 "
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                <span className="text-gray-500 ">September 24, 2023</span>
              </div>
              <div className="flex items-center space-x-2">
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
                  className="h-6 w-6 text-gray-500 "
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span className="text-gray-500 ">7:00 PM</span>
              </div>
            </div>
          </div>
          <div className="flex items-center p-6">
            <a
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-white font-medium shadow-sm hover:bg-[#1464d2] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 dark:bg-[#4da6ff] dark:hover:bg-[#3d8ae6] dark:focus:ring-[#4da6ff]"
              href="#"
            >
              RSVP
            </a>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
              Kirtan and Meditation Retreat
            </h3>
            <p className="text-sm text-muted-foreground">
              Immerse yourself in a weekend of devotional chanting, guided meditation, and spiritual teachings.
            </p>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
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
                  className="h-6 w-6 text-gray-500 "
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                <span className="text-gray-500 ">November 10-12, 2023</span>
              </div>
              <div className="flex items-center space-x-2">
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
                  className="h-6 w-6 text-gray-500 "
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span className="text-gray-500 ">All Day</span>
              </div>
            </div>
          </div>
          <div className="flex items-center p-6">
            <a
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-white font-medium shadow-sm hover:bg-[#1464d2] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 dark:bg-[#4da6ff] dark:hover:bg-[#3d8ae6] dark:focus:ring-[#4da6ff]"
              href="#"
            >
              Register
            </a>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
              Satsang and Spiritual Discourse
            </h3>
            <p className="text-sm text-muted-foreground">
              Join us for a satsang (spiritual gathering) with a discourse on the teachings of Neem Karoli Baba.
            </p>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
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
                  className="h-6 w-6 text-gray-500 "
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                <span className="text-gray-500 ">December 2, 2023</span>
              </div>
              <div className="flex items-center space-x-2">
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
                  className="h-6 w-6 text-gray-500 "
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span className="text-gray-500 ">6:00 PM</span>
              </div>
            </div>
          </div>
          <div className="flex items-center p-6">
            <a
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-white font-medium shadow-sm hover:bg-[#1464d2] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 dark:bg-[#4da6ff] dark:hover:bg-[#3d8ae6] dark:focus:ring-[#4da6ff]"
              href="#"
            >
              RSVP
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="w-full py-20 md:py-32">
  <div className="container mx-auto px-4 md:px-6">
    <div className="space-y-6">
      <div className="inline-block bg-[#e6f0ff]  px-4 py-2 rounded-full text-white  text-sm font-medium">
        About Us
      </div>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Who We Are</h2>
      <p className="text-gray-500  text-lg">
        The Neem Karoli Trust is a non-profit organization dedicated to promoting the teachings and legacy of Neem
        Karoli Baba, a revered spiritual teacher and guru. Our mission is to provide a space for spiritual growth,
        community, and the cultivation of love, service, and devotion to the divine.
      </p>
      <p className="text-gray-500  text-lg">
        We believe that Neem Karoli Baba's message of unconditional love, compassion, and service to others is
        more relevant than ever in today's world. Through our programs, events, and community initiatives, we aim
        to inspire individuals to find their own spiritual path and to deepen their connection with the divine.
      </p>
      <div className="flex items-center space-x-4">
        <a
          className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-white font-medium shadow-sm hover:bg-[#1464d2] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 dark:bg-[#4da6ff] dark:hover:bg-[#3d8ae6] dark:focus:ring-[#4da6ff]"
          href="#"
        >
          Learn More
        </a>
        <a
          className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-white font-medium shadow-sm hover:bg-[#e6f0ff] hover:text-[#1464d2] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 dark:border-[#4da6ff]  dark:hover:bg-[#222] dark:hover:text-[#3d8ae6] dark:focus:ring-[#4da6ff]"
          href="#"
        >
          Contact Us
        </a>
      </div>
    </div>
  </div>
</section>
<section className="w-full bg-[#f5f5f5]  py-20 md:py-32">
  <div className="container mx-auto px-4 md:px-6">
    <div className="space-y-6">
      <div className="inline-block bg-[#e6f0ff]  px-4 py-2 rounded-full text-white  text-sm font-medium">
        Our Programs
      </div>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Explore Our Offerings</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
              Meditation and Yoga Retreats
            </h3>
            <p className="text-sm text-muted-foreground">
              Immerse yourself in the practice of meditation and yoga, and deepen your spiritual connection.
            </p>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
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
                  className="h-6 w-6 text-gray-500 "
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                <span className="text-gray-500 ">Monthly</span>
              </div>
              <div className="flex items-center space-x-2">
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
                  className="h-6 w-6 text-gray-500 "
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span className="text-gray-500 ">3 Days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</main>
  )
}

export default Events