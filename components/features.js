import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Group Health Insurance",
    description:
      "Choosing the right health plan for your employees can be a balancing act considering network coverage, pharmacy options, and staying within your budget.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Fully Insured",
    description:
      "Any state, any carrier, anytime. We provide a broad range of plans with flexible options to meet the needs of any business.",
    icon: LockClosedIcon,
  },
  {
    name: "Self Insured",
    description:
      "Health plans that allow employers to share in both the risks and rewards have not only been a go-to for larger groups (100+ employees), but have increased in popularity for smaller businesses",
    icon: ArrowPathIcon,
  },
  {
    name: "Professional Employer Organization (PEO)",
    description:
      "When entering into a partnership with a PEO (Professional Employer Organization), a co-employment arrangement is established between the business and PEO.",
    icon: FingerPrintIcon,
  },
  {
    name: "Health Savings Account (HSA)",
    description:
      "An HSA is like your personal health piggy bank! You can stash away pre-tax dollars to cover qualified medical expenses, giving you more bang for your buck.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Health Reimbursement Arrangement (HRA)",
    description:
      "A Health Reimbursement Arrangement (HRA) is like a helpful boost for those out-of-pocket expenses that your employer’s insurance doesn’t fully cover. Instead of handling the whole deductible yourself, your employer jumps in to share the load!",
    icon: ServerIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-green-1050 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base/7 font-semibold text-indigo-400">
          Why Choose Me?
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
          Expert Guidance, Personalized Service
          </p>
          <p className="mt-6 text-lg/8 text-gray-300">
          Navigating insurance can be overwhelming, but you don’t have to do it alone. I provide expert advice and customized coverage solutions to ensure you get the protection you need—without the hassle.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
          {features.map((feature) => (
            <div key={feature.name} className="flex  relative pr-9">
              <feature.icon aria-hidden="true" className="text-indigo-500" />
              <div className="pl-4">
                <dt className="inline font-semibold text-white">
                  {feature.name}
                </dt>{" "}
                <dd className="inline">{feature.description}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
