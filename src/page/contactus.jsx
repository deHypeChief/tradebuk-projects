export default function ContactUs() {
    return (
        <div>
            <div className="h-[50vh] md:h-[80vh] text-white px-10 md:px-20 flex flex-col justify-end pb-10 items-start bg-[url('/momo.png')] bg-cover bg-center relative">
                <h1>Get in Touch</h1>
                <p>
                    For further inquiries regarding our services, please don't hesitate to contact us.
                </p>
            </div>
            <div className="md:relative ">
                <div className="md:absolute md:w-fit bg-[#111A26] right-0 py-10 px-10 text-white space-y-5">
                    <h5 >
                        Contact Information
                    </h5>
                    <div className="space-y-5">
                        <div className="flex items-center space-x-2">
                            <div>
                                <img src="/Vector.svg" alt="" />
                            </div>
                            <h5>+234 (0) 803 668 8890</h5>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div>
                                <img src="/Page-1.svg" alt="" />
                            </div>
                            <h5>info@tradebuk.co</h5>
                        </div>
                        <div className="flex items-start space-x-2">
                            <div className="pt-1">
                                <img src="/path929.svg" alt="" />
                            </div>
                            <h5>27 Etang Obuli Crescent Jabi district, Abuja</h5>
                        </div>
                    </div>
                </div>
                <div className="bg-[#2F3642]">
                    <div className="h-[60vh] md:h-[80vh] bg-[url('/veionv.png')] bg-cover bg-center" />
                </div>
            </div>
        </div>
    )
}