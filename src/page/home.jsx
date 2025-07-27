import { Icon } from "@iconify-icon/react/dist/iconify.js";

export default function Home() {
    const serveContent = [
        {
            title: "Financial Advisory",
            content: "At Tradebuk Capital, we provide expert financial advice designed to create a lasting impact on your wealth and future. Our seasoned advisors offer personalized strategies to help you achieve your financial goals with confidence and clarity. Trust us to guide you through every step of your financial journey.",
            img: "/african-man-black-suit 2.png",
            action: "Learn More"
        },
        {
            title: "Asset Management",
            content: "Our asset management solutions are tailored to help you build and protect long-term wealth. Through disciplined investment strategies and ongoing monitoring, we strive to meet your financial aspirations.",
            img: "/c.png",
            action: "Processing"
        },
        {
            title: "Security Trading",
            content: "Access local and global markets through our secure trading platforms. Our team helps you make informed decisions with real-time market intelligence and comprehensive research.",
            img: "/analyzing-stock-market-data 2.png",
            action: "Processing"
        },
        {
            title: "Capital Raising",
            content: "From early-stage funding to large-scale capital projects, we provide strategic support in raising funds. Our deep network of investors and institutional partners ensures tailored capital solutions.",
            img: "/buildong-chart-up-tablet-3d-rendering_35719-1855_upscayl_4x_upscayl-standard-4x 2.png",
            action: "Processing"
        }
    ]
    return (
        <>
            <div className="text-white px-5 md:pl-40 h-screen relative flex md:items-center overflow-hidden">
                <div className="mt-20 mb-20">
                    <div className="flex items-center gap-3 w-[70vw] md:w-[30vw]">
                        <div className="border-b-2 flex-1/2" />
                        <p className="text-lg">ESTD</p>
                        <div className="border-b-2 flex-1/2" />
                    </div>
                    <h1>FINANCIAL <br /> EXPERTS</h1>
                    <div className="flex items-center gap-3 w-[70vw] md:w-[30vw]">
                        <div className="border-b-2 flex-1/2" />
                        <p className="text-lg">2022</p>
                        <div className="border-b-2 flex-1/2" />
                    </div>
                    <p className="w-[70vw] md:w-[31vw] mt-10"> Tradebuk Capital Advisors Limited is a premier financial advisory firm dedicated to delivering Exceptional Investment Advisory Services and Solutions</p>
                </div>
                <div className="absolute -bottom-10 right-0  w-[60vw] md:w-[30vw]">
                    <img className="w-full" src="a72ed2ecf5ef5912fe64cef5e09b65b9_upscayl_4x_upscayl-standard-4x.png" alt="" />
                </div>
            </div>
            <div className="bg-[#EDEFF4] py-40 px-10 md:px-40 text-center space-y-8 flex flex-col items-center">
                <h2>Empowering Growth Through Financial Expertise</h2>
                <div className="border-b-2 flex-1/2 w-[80vw] md:w-[30vw]" />
                <p className="md:w-[60vw]">At Tradebuk, we provide personalized financial strategies designed to help you grow, manage, and protect your wealth. Backed by years of industry experience and a team of seasoned professionals, we help individuals and institutions navigate the complexities of modern finance.</p>
            </div>
            <div className="bg-[#fff] py-40 pb-0 md:pb-40">
                <div className="space-y-8 px-10 text-center flex flex-col items-center">
                    <h2>What We Do</h2>
                    <div className="border-b-2 flex-1/2 w-[80vw] md:w-[30vw]" />
                    <p className="md:w-[60vw]">We provide holistic advisory services to help you make sound financial decisions. Whether you're planning for retirement, business expansion, or debt restructuring, our experts are ready to guide you.</p>
                </div>

                <div className="mt-40 space-y-40 md:px-40">
                    {
                        serveContent.map((item, index) => {
                            return (
                                <div key={"s" + index} className={`md:flex md:items-center md:justify-center md:gap-10  ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"} `}>
                                    <div className={`flex flex-col md:w-[400px]  ${index % 2 === 0 ? "items-end text-right md:text-left md:items-start" : "items-start md:items-end text-left md:text-right"} `}>
                                        {item.title.includes(' ') ? (
                                            <h3 className="mx-5 md:mx-0 mb-4 w-[50vw] md:w-[300px]">
                                                {item.title.split(' ').slice(0, Math.ceil(item.title.split(' ').length / 2)).join(' ')}<br />
                                                {item.title.split(' ').slice(Math.ceil(item.title.split(' ').length / 2)).join(' ')}
                                            </h3>
                                        ) : (
                                            <h3 className="mx-5 md:mx-0 mb-4 w-[50vw] md:w-[300px]">
                                                {item.title}
                                            </h3>
                                        )}
                                        <p className="mx-5 md:mx-0 md:mt-7">{item.content}</p>
                                        <div className={`mx-5 md:mx-0 flex items-center justify-end md:justify-start mt-5 ${item.action === "Processing" ? "text-gray-500" : ""}`}>
                                            <p>{item.action}</p>
                                            <Icon icon="ic:round-arrow-forward" width="20" height="20" className="inline-block ml-2" />
                                        </div>
                                    </div>
                                    <div className="w-full md:w-[600px] h-[70vh] md:h-[90vh] mt-20 bg-gray-500">
                                        <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="h-[80vh] md:h-[100vh] flex items-end md:items-center md:px-[10vw] bg-[url('/bo.png')] bg-cover bg-center">
                <div className="w-[80vw] px-5 mb-10 md:w-[35vw]">
                    <h2 className="text-white">
                        “An investment in knowledge pays the best interest.”
                    </h2>
                    <h4 className="text-[#2278BA] specFont text-2xl">— Benjamin Franklin</h4>
                </div>
            </div>


            <div className="bg-[#EDEFF4] py-40 md:flex md:items-center md:justify-between md:px-20">
                <div className="space-y-8 px-10 text-center md:text-left md:w-[30vw]">
                    <h2>The Growth</h2>
                    <div className="border-b-2 flex-1/2" />
                    <p>Our teams focus on the overall picture, establishing priorities and coordinating activities and participants to ensure quality projects that are delivered safely, on time and within budget</p>
                </div>

                <div className="mt-40 md:mt-0 grid grid-cols-[1fr_1fr] px-10 text-center items-center justify-between gap-4 spGrid">
                    <div style={{ gridArea: 'aa' }}>
                        <h1>220M+</h1>
                        <p>Assets Under Managment</p>
                    </div>
                    <div style={{ gridArea: 'bb' }}>
                        <h1>100+</h1>
                        <p>Happy Clients</p>
                    </div>
                    <div style={{ gridArea: 'cc' }}>
                        <h1>6</h1>
                        <p>Strategic Partners</p>
                    </div>
                    <div style={{ gridArea: 'dd' }}>
                        <h1>3+</h1>
                        <p>Experience Under the Belt</p>
                    </div>
                </div>
            </div>



            <div className="bg-[#152131] text-white py-20 md:py-0 pb-0 md:flex md:flex-row-reverse md:items-center md:justify-between">
                <div className="space-y-8 px-6 md:mx-20 text-left w-[60vw] md:w-[40vw]">
                    <h2>Milestones Achieved</h2>
                    <div className="border-b-2 flex-1/2" />
                    <p>Our teams focus on the overall picture, establishing priorities and coordinating activities and participants to ensure quality projects that are delivered safely, on time and within budget</p>
                </div>
                <div className="h-[70vh] md:h-screen md:w-[80vw] mt-20 md:mt-0">
                    <img src="/Happy-Investors-Complete-Controller 1.png" alt="Happy Investors" className="w-full h-full object-cover" />
                </div>

            </div>

            <div className="bg-[#EDEFF4] py-20 md:flex md:justify-center md:py-[40vh]">
                <div className="space-y-4 px-6 text-center md:text-left md:w-[30vw]">
                    <h2>We can help you</h2>
                    <p>Let's make the right match. Fill out the form to explore opportunities that align perfectly with your goals</p>
                </div>
                <div className=" mx-5  mt-10 md:mt-0 md:w-[40vw]">
                    <form>
                        <input type="text" className="bg-white text-black w-full px-5 py-3 text-sm" placeholder="Full Name" />
                        <div className="grid grid-cols-2 gap-4 mt-5">
                            <input type="text" className="bg-white text-black w-full px-5 py-3 text-sm" placeholder="Phone Number" />
                            <input type="text" className="bg-white text-black w-full px-5 py-3 text-sm" placeholder="Email" />
                        </div>
                        <textarea type="text" className="bg-white text-black w-full px-5 py-3 text-sm mt-5" placeholder="Your Message" />

                        <div className="flex items-center justify-center gap-3 w-full">
                            <button className="bg-[#2278BA] text-white px-5 py-3 mt-5 rounded-full w-[40vw] md:w-fit md:px-20">Submit</button>
                        </div>
                    </form>
                </div>

            </div>


            <div className=" md:px-20 md:pr-0 md:pt-0 bg-[#EDEFF4] py-20 md:flex md:items-center md:justify-between">
                <div className="space-y-4 px-6 text-left flex-1/2">
                    <h2>Explore <br />
                        Updates & Insights</h2>
                    <p>Don’t miss a thing with our monthly newsletter.</p>
                </div>
                <div className="overflow-x-scroll hideScrollbar">
                    <div className="mt-10 md:mt-0 grid grid-cols-[300px_300px_300px] md:grid-cols-[500px_500px_500px] ">
                        <div className="h-[60vh] md:h-[90vh] flex relative bg-[url('f260730ef86b6349b9a117f75f320f1c_upscayl_4x_upscayl-standard-4x.png')] bg-cover bg-center">
                            <div className="absolute inset-0 bg-black/50" />
                            <div className="w-[280px] mb-10 ml-10 absolute z-10 text-white bottom-0">
                                <h2>Investment <br />
                                    Planning </h2>
                                <p className="w-[80%] md:w-[100%]">Our teams focus on the overall picture, establishing priorities and coordinating activities and </p>
                            </div>
                        </div>
                        <div className="h-[60vh] md:h-[90vh] flex relative">
                            <img src="/Mask group.png" alt="Research" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/50" />
                            <div className="w-[280px] mb-10 ml-10 absolute z-10 text-white bottom-0">
                                <h2>Research </h2>
                                <p className="w-[80%] md:w-[100%]">Our teams focus on the overall picture, establishing priorities and coordinating activities </p>
                            </div>
                        </div>
                        <div className="h-[60vh] md:h-[90vh] flex relative bg-[url('/0932340d989178d3aac01bc9d2e7f542.png')] bg-cover bg-center">
                            <div className="absolute inset-0 bg-black/50" />
                            <div className="w-[280px] mb-10 ml-10 absolute z-10 text-white bottom-0">
                                <h2>Market <br />
                                    Analysis </h2>
                                <p className="w-[80%] md:w-[100%]">Our teams focus on the overall picture, establishing priorities and coordinating activities and </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}