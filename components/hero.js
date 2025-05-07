
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import ContactFeatures from './contactFeatures';


function Hero() {

    return (
        <div className="bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
          <p className="text-base/7 font-semibold text-blue-950">Watermann Consulting</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          Group Health Insurance 
          </h1>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
        Made Simple
          </h1>
          <p className="mt-6 text-xl/8">
          Navigating the complexities of group health insurance doesn’t have to be overwhelming. With a dedicated Kansas-based broker, businesses can access tailored health coverage solutions designed to support their teams and simplify compliance. Whether you're a small business or a growing organization, the right guidance ensures you get plans that fit both your budget and employee needs.
          </p>
          <div className="mt-10 max-w-2xl">
            <p>
            At the heart of our service is personalized support. We work directly with you—no call centers or confusing networks—so you always have a real person to answer your questions. Our Kansas roots mean we understand local market dynamics and regional carrier options, providing you with plans that deliver real value.
            </p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <CheckCircleIcon aria-hidden="true" className="w-[8%] mt-1 size-5 flex-none text-blue-950" />
                <span>
                  <strong className="font-semibold text-gray-900">Deep Market Insight</strong> We know the local providers, networks, and regulations inside and out—so you get plans that work best for your team, right here in your community.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon aria-hidden="true" className="w-[8%] mt-1 size-5 flex-none text-blue-950" />
                <span>
                  <strong className="font-semibold text-gray-900"> Hands-On, Year-Round Support </strong> From onboarding to claims, we offer personal service—not call centers. We’re your single point of contact whenever you need help.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon aria-hidden="true" className="w-[8%] mt-1 size-5 flex-none text-blue-950" />
                <span>
                  <strong className="font-semibold text-gray-900"> Smart, Affordable Plan Strategies</strong> We help you control costs with competitive group rates, tax-advantaged options, and custom plan designs that balance coverage and budget.
                </span>
              </li>
            </ul>
            <p className="mt-8">
            We focus on making the enrollment process smooth and stress-free. From plan selection and onboarding to ongoing service, we handle the details so you can focus on running your business. With competitive rates, strong carrier relationships, and a commitment to clear communication, your company is in good hands.
            </p>
            <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-gray-900">
            Ready to Simplify Your Group Health Insurance?
            </h2>
            <p className="mt-6">
            Whether you're offering benefits for the first time or looking to improve your current plan, we're here to make the process easy, affordable, and personalized. As your local Midwest broker, we take pride in delivering clarity, care, and custom solutions that national providers simply can’t match.
            <br />
            <br />
            Let’s have a quick, no-pressure conversation about what your business needs—and how we can help.
            </p>

            <ContactFeatures />


            <figure className="mt-10 border-l border-indigo-600 pl-9">
              <blockquote className="font-semibold text-gray-900">
                <p>
                  “Working with our local broker was a game-changer. We went from feeling overwhelmed by confusing plan options to having a clear, affordable solution that our employees actually appreciate. They handled everything—explained the options, managed enrollment, and even helped one of our team members resolve a tricky claim. It feels like having a true partner in our corner.”
                </p>
              </blockquote>
              <figcaption className="mt-6 flex gap-x-4">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="w-[10%] flex-none rounded-full bg-gray-50"
                />
                <div className="text-sm/6">
                  <strong className="font-semibold text-gray-900">Sarah M.</strong> – Operations Manager, Wichita, KS
                </div>
              </figcaption>
            </figure>
            <p className="mt-10">
            We don’t just offer plans—we build lasting partnerships. Here’s how one local business describes their experience working with us:
            </p>
          </div>
         
          <div className="mt-16 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900">
            Let’s Talk About What Group Health Insurance Can Do for Your Business
            </h2>
            <p className="mt-6">
            Offering the right health benefits can help you attract top talent, retain great employees, and build a healthier, more motivated team. But choosing a plan doesn’t have to be complicated—or expensive.
            <br />
            Watermann Consulting specializes in helping small and mid-sized businesses find smart, affordable group health insurance solutions tailored to their needs.
            </p>
            <br/>
            <b> No pressure. No jargon. Just real answers from a broker who lives and works in your community.</b>

          </div>
        </div>
      </div>

    )
}

export default Hero;