export default function Home() {
    const serveContent = [
        {
            title: "Financial Advisory",
            content: "At Tradebuk Capital, we provide expert financial advice designed to create a lasting impact on your wealth and future. Our seasoned advisors offer personalized strategies to help you achieve your financial goals with confidence and clarity. Trust us to guide you through every step of your financial journey.",
            img: "/"
        },
        {
            title: "Asset Management",
            content: "Our asset management solutions are tailored to help you build and protect long-term wealth. Through disciplined investment strategies and ongoing monitoring, we strive to meet your financial aspirations.",
            img: "/"
        }
    ]
    return (
        <>
            <div className="text-white px-5 h-[100vh]">
                <div className="mt-20">
                    <div className="flex items-center gap-3 w-[70vw]">
                        <div className="border-b-2 flex-1/2" />
                        <p className="specFont text-lg">ESTD</p>
                        <div className="border-b-2 flex-1/2" />
                    </div>
                    <h1>FINANCIAL EXPERTS</h1>
                    <div className="flex items-center gap-3 w-[70vw]">
                        <div className="border-b-2 flex-1/2" />
                        <p className="specFont text-lg">2022</p>
                        <div className="border-b-2 flex-1/2" />
                    </div>
                    <p className="w-[70vw] mt-10"> Tradebuk Capital Advisors Limited is a premier financial advisory firm dedicated to delivering Exceptional Investment Advisory Services and Solutions</p>
                </div>
            </div>
            <div className="bg-[#EDEFF4] py-40 px-10 text-center space-y-8">
                <h2>Empowering Growth Through Financial Expertise</h2>
                <div className="border-b-2 flex-1/2" />
                <p>At Tradebuk, we provide personalized financial strategies designed to help you grow, manage, and protect your wealth. Backed by years of industry experience and a team of seasoned professionals, we help individuals and institutions navigate the complexities of modern finance.</p>
            </div>
            <div className="bg-[#EDEFF4] py-40 ">
                <div className="space-y-8 px-10 text-center">
                    <h2>What We Do</h2>
                    <div className="border-b-2 flex-1/2" />
                    <p>We provide holistic advisory services to help you make sound financial decisions. Whether you're planning for retirement, business expansion, or debt restructuring, our experts are ready to guide you.</p>
                </div>

                <div className="mt-40 space-y-40">
                    {
                        serveContent.map((item, index) => {
                            return (
                                <div key={"s" + index}>
                                    <div className={`flex flex-col  ${index % 2 === 0 ? "items-end text-right" : "items-start text-left"}`}>
                                        <h3 className="mx-5 mb-4 w-[50vw]">{item.title}</h3>
                                        <p className="mx-5">{item.content}</p>
                                    </div>
                                    <div className="h-[70vh] mt-20 bg-gray-500">

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="h-[80vh] flex items-end">
                <div className="w-[80vw] px-5 mb-10">
                    <h2 className="text-white">
                        “An investment in knowledge pays the best interest.”
                    </h2>
                    <h4 className="text-[#2278BA] specFont text-xl">— Benjamin Franklin</h4>
                </div>
            </div>


            <div className="bg-[#EDEFF4] py-40 ">
                <div className="space-y-8 px-10 text-center">
                    <h2>The Growth</h2>
                    <div className="border-b-2 flex-1/2" />
                    <p>Our teams focus on the overall picture, establishing priorities and coordinating activities and participants to ensure quality projects that are delivered safely, on time and within budget</p>
                </div>

                <div className="mt-40 grid grid-cols-[1fr_1fr] px-10 text-center justify-between gap-4">
                    <div>
                        <h1>220M+</h1>
                        <p>Assets Under Managment</p>
                    </div>
                    <div>
                        <h1>100+</h1>
                        <p>Happy Clients</p>
                    </div>
                    <div>
                        <h1>6</h1>
                        <p>Strategic Partners</p>
                    </div>
                    <div>
                        <h1>3+</h1>
                        <p>Experience Under the Belt</p>
                    </div>
                </div>
            </div>



            <div className="bg-[#EDEFF4] py-20 ">
                <div className="space-y-8 px-6 text-left w-[60vw]">
                    <h2>Milestones Achieved</h2>
                    <div className="border-b-2 flex-1/2" />
                    <p>Our teams focus on the overall picture, establishing priorities and coordinating activities and participants to ensure quality projects that are delivered safely, on time and within budget</p>
                </div>
                <div className="h-[70vh] mt-20 bg-gray-500" />

            </div>

        </>
    );
}