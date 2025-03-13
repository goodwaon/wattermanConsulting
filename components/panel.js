import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'

const solutions = [
  { name: 'Professional Employer Organization', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'COBRA', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  { name: 'Group Health Insurance', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Fully Insured', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Self Insured', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
  { name: 'Health Reimbursement Arrangement', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  { name: 'Health Savings Account', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]


export default function Panel() {
  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 w-20 ">
        <span>Solutions</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
</svg>

      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
      >
        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 ring-1 shadow-lg ring-gray-900/5">
          <div className="p-4">
            {solutions.map((item) => (
              <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                </div>
                <div>
                  <a href={item.href} className="font-semibold text-gray-900">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </PopoverPanel>
    </Popover>
  )
}
