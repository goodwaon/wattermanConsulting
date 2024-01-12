import react from 'react';

function Hero() {

    return (
        <div>
            <section className="bg-white">
                <div className="container px-6 py-16 mx-auto text-center">
                    <div className="max-w-xl mx-auto">
                        <h1 className="text-3xl font-semibold text-gray-800  lg:text-4xl">Employee Benefits and Consulting</h1>
                        <p className="mt-6 text-gray-500 ">Watermann Consulting & Employee Benefits is built on two core principles</p> 
                        <p className="text-gray-500 "> – Professionalism and Integrity - </p>
                        <a href='#contact'>
                        <button  className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-green-1050 rounded-lg hover:bg-green-950 lg:mx-0 lg:w-auto focus:outline-none">
                           Request A Free Quote Today
                        </button>
                        </a>
                    </div>

                    <div className="flex justify-center mt-10">
                        <img className="object-cover w-full h-96 rounded-xl lg:w-4/5" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Hero;