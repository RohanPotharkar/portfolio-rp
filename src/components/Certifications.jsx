const posts = [
   {
      id: 101,
      title: 'Advanced JavaScript',
      href: '#',
      description:
         '●    Mastered advanced JavaScript concepts, including closures, prototypes, and asynchronous programming.',
      description2: "●     Gained hands-on experience in ES6+, functional programming, and performance optimization.",
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      author: {
         name: 'Udemy',
         role: 'January 2023',
         href: '#',
         imageUrl:
            '/images/ud.png',
      },
   },

   {
      id: 102,
      title: 'MongoDB Certified Developer Associate',
      href: '#',
      description:
         '●    Demonstrated expertise in MongoDB data modeling, aggregation, indexing, and performance optimization.',
      description2: "●     Certified in designing and deploying scalable NoSQL solutions using MongoDB.",
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      author: {
         name: 'Udemy',
         role: 'July 2023',
         href: '#',
         imageUrl:
            '/images/ud.png',
      },
   },
   {
      id: 103,
      title: 'AWS Certified Cloud Practitioner',
      href: '#',
      description:
         '●    Proficient in AWS cloud concepts, security, architecture, and cost management.',
      description2: "● 	   Validated ability to work with core AWS services like EC2, S3, Lambda, and IAM.",
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      author: {
         name: 'Udemy',
         role: 'January 2024',
         href: '#',
         imageUrl:
            '/images/ud.png',
      },
   },
]

export default function Certifications() {
   return (
      <div className="bg-white py-24 sm:py-8">
         <div className="mx-auto max-w-7xl px-6 lg:px-8 sm:pb-5">
            <div className="mx-auto max-w-2xl lg:mx-0">
               <p className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl">Certifications & Courses</p>
               <p className="mt-2 text-lg/8 text-gray-600">Some industry-recognized certifications which shows our expertise & credibility.</p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-7 lg:mx-0 lg:max-w-none lg:grid-cols-3">
               {posts.map((post) => (
                  <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                     <div className="group relative">
                        <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                           {post.title}
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
                        <p className="mt-2 line-clamp-3 text-sm/6 text-gray-600">{post.description2}</p>
                     </div>
                     <div className="relative mt-8 flex items-center gap-x-4">
                        <img alt="" src={post.author.imageUrl} className="size-10 rounded-full bg-gray-50" />
                        <div className="text-sm/6">
                           <p className="font-semibold text-gray-900">

                              <span className="absolute inset-0" />
                              {post.author.name}
                           </p>
                           <p className="text-gray-600">{post.author.role}</p>
                        </div>
                     </div>
                  </article>
               ))}
            </div>
         </div>
      </div>
   )
}
