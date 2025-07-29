export default function Leadership() {
    return (
        <div>
            <div>
                <div className="h-[60vh] md:h-[80vh] text-white px-10 md:px-40 flex flex-col justify-end pb-10 items-start bg-[url('/vonte.png')] bg-cover bg-center relative">
                    <div className="absolute inset-0 bg-black/50" />

                    <div className="relative">
                        <h1>Leadership</h1>
                        <p className="md:w-[41vw] mt-10">
                            Tradebuk is a financial service company that engages in business finance, consulting, capacity building, asset management, research services, procurement service, project management and general supplies.                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white pt-2 md:pt-10 py-10">
                <LList img="/dfdfdfs.png"/>
                <LList flip noColor img="/mmoca.png"/>
                <LList noColor img="/bmen.png"/>
            </div>


        </div>
    )
}

function LList({ flip, noColor, img }) {
    return (
        <div className={`my-40   ${noColor ? "bg-transparent text-black " : "bg-[#39414B] text-white"} md:flex ${flip ? "md:flex-row" : "md:flex-row-reverse"} md:items-center md:mx-40 md:h-[76vh]`}>
            <div className="relative flex-1/2">
                <div className={`w-5 h-40 md:h-38 md:top-[60%] bg-[#2278BA] absolute ${!flip ? "right-0" : "left-0"} top-10`} />

                <div className={`p-10 px-6 md:ml-10 md:w-[500px] ${flip ? "flex flex-col items-end text-right" :""}`}>
                    <div className="space-y-14 border-b-2 border-white mb-5 md:w-[280px] ">
                        <h2>Some <br /> Name</h2>
                        <h3 className="specFont ">Chairman</h3>
                        {/* <div /> */}
                    </div>
                    <div>
                        Our Management Team is the driving force behind our company’s success, bringing together a group of dedicated and experienced professionals who are committed to executing our vision and strategy. Each member of the team is a leader in their field, with a proven track record of achieving results and fostering innovation.
                    </div>
                </div>
            </div>
            <div className="h-[70vh] mr-8 md:mr-5 translate-y-14 md:translate-y-10 md:-translate-x-10 relative md:w-[550px] md:h-[80vh] ">
                <div className="bg-[#111A26]/80 w-[80%] h-full float-right" />
                <div className={`absolute -top-10 w-[90%] h-full`}  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    background: `url('${img}')`
                }}/>
            </div>
        </div>
    )
}