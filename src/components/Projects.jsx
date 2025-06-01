import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Sorat Collection – Android App',
    id: 'tier-hobby',
    href: 'https://play.google.com/store/apps/details?id=com.rohanpotharkarofficial.soratcollection',
    description: "Tech Stack: React Native, JavaScript, Node.js, CSS, Expo, Google Play Console",
    features: ["Developed a fully functional Android app for a clothing business, allowing users to browse, track, and shop for ladies dress materials and readymades.",
      "Integrated four interactive modules: Shopping Notes, Dress Gallery, Calculator, Buy Policy Section",
      "Uploaded the app independently on Google Play Store and implemented multiple feature updates based on closed-user feedback.",
      "Improved user retention by providing a clean UI/UX, and offline product browsing without any login or payment hurdles",
    ],
    featured: false,
  },
  {
    name: 'Maharashtra Weather - Web App',
    id: 'tier-enterprise',
    href: 'https://maharashtra-weather-app.onrender.com/',
    priceMonthly: '$99',
    description: 'Tech Stack: HTML, CSS, JavaScript, Bootstrap, Node.js, Express.js, MongoDB, NoSQL, API, Render, Git, GitHub',
    features: [
      'Built a real-time weather application with 95% forecast accuracy using integrated APIs.',
      'Developed secure authentication system with signup/login validation to prevent unauthorized access to pages like /home, /about, /services and so on.',
      "Built a responsive, multi-page website with a navigation bar, ensuring smooth user experience across Home, About, Contact Us, and Event Listings pages.",
      "Optimized backend with Node.js & Express.js, ensuring seamless data flow between frontend and MongoDB database."
    ],
    featured: true,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Projects() {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-10 lg:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-4xl ">
        <p className="mt-2 text-5xl text-center font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
          Projects
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-pretty text-center text-gray-600 sm:text-xl/8">
      Explore our latest projects showcasing innovation, creativity, and excellence. From cutting-edge technology to impactful designs, each project reflects our dedication and expertise.
      </p>
      <div className="mx-auto mt-5 mb-10 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
              tier.featured
                ? ''
                : tierIdx === 0
                  ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                  : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
              'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
            )}
          >
            <h3
              id={tier.id}
              className={classNames(tier.featured ? 'text-white' : 'text-indigo-600', 'text-base/7 font-semibold')}
            >
              {tier.name}
            </h3>
            <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base/7')}>
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-600',
                'mt-8 space-y-3 text-sm/6 sm:mt-10',
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'h-6 w-5 flex-none')}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-indigo-500 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500'
                  : 'text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-indigo-600',
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
              )}
            >
              App Link
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
