export default function Update() {
    return (
        <>
            <div>
                <div className="h-[70vh] md:h-[80vh] text-white px-10 md:px-20 flex flex-col justify-center  pb-10 text-center items-center bg-[url('/momo.png')] bg-cover bg-center relative">
                    <h1 className="mt-20">Updates & Insights</h1>
                </div>


                <div className="bg-white py-20">
                    <div className="ml-5 md:ml-40">
                        <div className="flex items-end gap-2">
                            <h2>Latest News</h2>
                            <div className="border-gray-400 border-b-2 flex-1/2 mb-3" />
                        </div>
                        <div className="mt-5">
                            <p className="md:w-[600px]">
                                Our Management Team is the driving force behind our company’s success, bringing together a group of dedicated and experienced professionals who are committed to executing our vision and strategy. Each member of the team is a leader in their field, with a proven track record of achieving results and fostering innovation.
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 md:m-40 md:mt-20 text-white">
                        <div className="relative h-[40vh] md:h-[60vh] p-5 md:p-14  flex flex-col justify-end bg-[url('/bomf.png')]  bg-cover bg-center">
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
                            <div className="relative z-10">
                                <h2>News Header</h2>
                                <p className="md:w-[300px]">Our Management Team is the driving force behind our company’s success, bringing together a group of dedicated </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="relative h-[40vh] md:h-[60vh] p-5 md:p-14 flex flex-col justify-end flex-1/2 bg-[url('/vrm.png')] bg-cover bg-center">
                                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
                                <div className="relative z-10">
                                    <h2>News Header</h2>
                                    <p className="md:w-[300px]">Our Management Team is the driving force behind our company’s success, bringing together a group of dedicated </p>
                                </div>
                            </div>
                            <div className="relative h-[40vh] md:h-[60vh] p-5 md:p-14 flex flex-col justify-end flex-1/2 bg-[url('/dfdf.png')] bg-cover bg-center">
                                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
                                <div className="relative z-10">
                                    <h2>News Header</h2>
                                <p className="md:w-[300px]">Our Management Team is the driving force behind our company’s success, bringing together a group of dedicated </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}