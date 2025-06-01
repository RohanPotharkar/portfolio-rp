export default function Education() {
   return (
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-10 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
               <div className="mx-auto max-w-2xl lg:mx-0">
                  <p className=" mx-auto text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl">Education</p>
                  <p className="mt-2 text-lg/8 text-gray-600">Mumbai University, Bachelor’s Degree in Information Technology <span className="text-lg/6">| 2017 - 2020</span></p>
               </div>
               <figure className="mt-10">
                  <figcaption className="mt-10">
                     <img
                        alt=""
                        src="/images/dp.png"
                        className="mx-auto size-10 rounded-full"
                     />
                     <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                        <div className="font-semibold text-gray-900">Rohan Potharkar</div>
                        <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                           <circle r={1} cx={1} cy={1} />
                        </svg>
                        <div className="text-gray-600">Software Developer</div>
                     </div>
                  </figcaption>
               </figure>
            </div>
      </section>
   )
}
