export default function About() {
    return (
        <div>
            <div>
                <div className="h-[60vh] md:h-[80vh] text-white px-10 md:px-40 flex flex-col justify-end pb-10 items-start bg-[url('/vv.png')] bg-cover bg-center relative">
                    <div className="absolute inset-0 bg-black/90" />

                    <div className="relative">
                        <h1>About Us</h1>
                        <p className="md:w-[41vw] mt-10">
                            Tradebuk is a financial service company that engages in business finance, consulting, capacity building, asset management, research services, procurement service, project management and general supplies.
                        </p>
                    </div>
                </div>

                <div className="bg-white py-20 md:py-40 md:pb-40 md:flex md:items-center md:justify-between px-5 md:px-40 gap-20">
                    <div className="space-y-10 px-10 md:w-[60vw]">
                        <div className="space-y-5">
                            <h2>Our Approach</h2>
                            <p>TRADEBUK offers comprehensive consulting services designed to enhance organizational performance and drive sustainable growth. Our strategic approach helps businesses identify opportunities, optimize operations, and achieve measurable results in a competitive landscape.</p>
                        </div>
                        <div className="space-y-5">
                            <h2>Our Mission</h2>
                            <p>To provide solution driven products and services that will add value to our clients’ operations and deliver a first class customer service experience.</p>
                        </div>
                    </div>

                    <div className="h-[90vh] w-[85vw] bg-[url('/md.png')] bg-cover bg-center mt-16" />

                </div>

                <div className="relative h-[80vh] md:h-[100vh] flex items-end md:items-center md:px-[10vw] bg-[url('/vbm.png')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-black/50" />

                    <div className="w-[80vw] px-5 mb-10 md:w-[35vw] relative">
                        <h2 className="text-white">
                            “An investment in knowledge pays the best interest.”
                        </h2>
                    </div>
                </div>


                <div className="bg-[#39414B] text-white px-10 py-20  space-y-10 text-center md:text-left md:flex md:items-center md:justify-between md:px-40 ">
                    <h1>
                        Quality <br />Research
                    </h1>
                    <div className="space-y-5 md:w-[40vw] md:mb-36">
                        <h2 className="mt-20">The Core of Sound Investment Decisions</h2>

                        <div className="border-b-2 flex-1/2 w-[80vw] md:w-[30vw]" />
                        <p>
                            At Tradebuk Capital Advisors Limited, we believe quality research is the foundation of our strategic moves. Good investment decisions rely on insights, not just gut feelings. Our research team provides detailed, forward-looking analysis that helps our clients confidently navigate complex markets.
                            <br /><br />
                            We take a careful and independent approach to research. We combine macroeconomic trends with specific industry information and data from the field. Whether it’s stocks, bonds, alternative investments, or new opportunities, our research is designed to find value, manage risk, and predict changes before they happen.
                            <br /><br />
                            You can count on our research to help you: identify opportunities others may overlook, reduce risk with a deep understanding of the market, support your planning with accurate data, and stay ahead of global financial trends and changes.
                            <br /><br />
                            Every report we produce shows our commitment to precision, fairness, and useful information. At Tradebuk, we understand that quality research means making informed decisions that lead to lasting wealth.
                        </p>

                    </div>
                </div>

                <div className="bg-white  py-20 pb-0 space-y-10">
                    <h2 className="text-center">What We Deliver</h2>

                    <div className="md:flex md:justify-between md:items-center md:px-40 space-y-10 md:space-y-0">
                        <div className="px-10">
                            <h2>Industry & Market <br /> Research</h2>

                            <h5 className="mt-5">We produce deep-dive sectoral reports that evaluate:</h5>
                            <ul className="mt-5">
                                <li className="list-disc">
                                    Market size and growth forecasts
                                </li>
                                <li className="list-disc">
                                    Competitive landscape analysis
                                </li>
                                <li className="list-disc">
                                    Consumer behavior and demand trends
                                </li>
                                <li className="list-disc">
                                    Barriers to entry and trade challenges
                                </li>
                                <li className="list-disc">
                                    Emerging opportunities and innovation outlooks
                                </li>
                            </ul>
                        </div>
                        <div className="h-[60vh] md:h-[600px] md:w-[500px] bg-[url('bmen.png')] bg-cover bg-center" />
                    </div>
                </div>

                <div className="py-20 md:py-40 bg-white text-center flex flex-col justify-center space-y-10 px-10 md:px-80">
                    <h2>
                        Empowering Growth <br />
                        Through Financial <br />
                        Expertise
                    </h2>

                    <div className="border-b-2 flex-1/2 w-[80vw] md:w-[30vw] mx-auto" />

                    <p>
                        At Tradebuk, we provide personalized financial strategies designed to help you grow, manage, and protect your wealth. Backed by years of industry experience and a team of seasoned professionals, we help individuals and institutions navigate the complexities of modern finance.
                    </p>
                </div>

                <div className="py-20 px-10 bg-white text-center md:text-left md:flex md:items-center md:space-x-10">

                    <div>
                        <h2>Want to know more?</h2>
                        <p>Download our brochure here</p>
                    </div>
                    <div className="py-10 bg-[url('/biom.png')] bg-contain bg-center bg-no-repeat mt-10 md:mt-0  md:w-32" />
                </div>
            </div>
        </div>
    )
}