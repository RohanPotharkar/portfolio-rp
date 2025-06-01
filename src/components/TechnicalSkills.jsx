import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Frontend.',
    description:
      'HTML, CSS, JavaScript, Typescript, Bootstrap, Tailwind CSS, Next.js, React.js, React Native, NativeBase, React Native Paper',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Backend.',
    description: 'Node.js, Express.js, MongoDB, NoSQL, MongoDB Atlas, Cloud Services',
    icon: LockClosedIcon,
  },
  {
    name: 'Tools.',
    description: 'Git, GitHub, Visual Studio Code, NPM, Heroku, Render, Postman, Google Play Console',
    icon: ServerIcon,
  },
]

export default function TechnicalSkills() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-gray-900 sm:text-5xl">Our</p>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl">
          Technical Skills
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
              Proficient in programming languages, software development, and system architecture with expertise in below technologies.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="/images/bgt.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
