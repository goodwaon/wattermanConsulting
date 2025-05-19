const timeline = [
    {
      name: 'Mastering Large Group Insurance Sales',
      description:
        'Brandon began his career selling insurance to companies of all sizes, gaining in-depth knowledge of sales and account management.',
      date: '2005',
      dateTime: '2005-08',
    },
    {
      name: 'Expanding into Life and Disability Insurance',
      description:
        'Transitioning into a broader market and rounding out his vast product knowledge, Brandon was a trusted partner for non-medical products. Working through broker distribution channels, he developed a strong network and deepened his industry insight.',
      date: '2012',
      dateTime: '2021-12',
    },
    {
      name: 'Specializing in Vision Insurance',
      description:
        'Taking a deeper dive into vision insurance, Brandon worked with large groups of several thousand employees, providing tailored solutions across the country. His hands-on approach and client-first mindset earned him a reputation for excellence in the industry among his broker partners and direct clients.',
      date: '2015 ',
      dateTime: '2022-02',
    },
    {
      name: 'Founding Watermann Consulting and Benefits',
      description:
        'With 15 years of experience across all employee benefit products, Brandon launched Watermann Consulting. His mission is simple: to provide exceptional customer service to every client, whether an individual or national organization.',
      date: '2018 - Present',
      dateTime: '2022-12',
    },
  ]
  
  export default function TimeLine() {
    return (
      <div className="bg-white sm:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-rows">
            {timeline.map((item) => (
              <div key={item.name}>
                <time
                  dateTime={item.dateTime}
                  className="flex items-center text-sm font-semibold leading-6 text-blue-950 md:flex-row xs:flex-col"
                >
                  <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 h-1 w-1 flex-none">
                    <circle r={2} cx={2} cy={2} fill="currentColor" />
                  </svg>
                  {item.date}
                  
                </time>
                <p className="text-lg font-semibold tracking-tight text-black">{item.name}</p>
                <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  