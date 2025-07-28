export default function Footer() {
    const footerContent = {
        quickLins: [
            { name: "Tradebuk", path: "/" },
            { name: "Advisory", path: "/about" },
            { name: "Updates & Insights", path: "/contact" },
        ],
        contact: [
            { name: "info@tradebuk.co", path: "mailto:info@tradebuk.co" },
            { name: "+234 (0) 803 668 8890", path: "tel:+234 (0) 803 668 8890" },
            { name: "27 Etang Obuli Crescent Jabi district, Abuja", path: "#" },
        ],
        base: [
            { name: "2025 Tradebuk. All Rights Reserved", path: "" },
            { name: "Powered by Tradebuk Investment ", path: "" },
            { name: "Privacy & Policy ", path: "" },
            { name: "Terms & Conditions ", path: "" },
        ]
    }
    return (
        <footer>
            <div className="text-white px-5 md:px-16 space-y-10 py-20">
                <div className="w-28 ">
                    <img src="/logo.png" alt="" className="w-40" />
                </div>
                <div className="md:flex justify-between items-start space-y-10 md:space-y-0">
                    <div>
                        <p className="md:w-[30vw]">Stay updated with the latest news & insights. Enter your email to subscribe.</p>
                        <div className="my-5 flex gap-2">
                            <div>
                                <input type="text" name="" id="" className="bg-white text-black py-3 px-6 rounded-l-full w-full md:w-[30vw]" placeholder="Email Address" />
                            </div>
                            <div>
                                <button className="py-3 pr-6 pl-10 bg-[#2278BA] rounded-r-full">Submit</button>
                            </div>
                        </div>
                        <p className="md:w-[30vw]">By subscribing you agree to our Privacy Policy and provide consent to receive updates from our company.</p>
                    </div>

                    <div className="md:flex gap-20 space-y-10 md:space-y-0">
                        <div className="space-y-4">
                            <p className="text-white font-bold text-xl">Quick links</p>
                            <div className="flex flex-col gap-3">
                                {
                                    footerContent.quickLins.map((link, index) => (
                                        <a key={index} href={link.path} className="text-white">
                                            {link.name}
                                        </a>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="space-y-4">
                            <p className="text-white font-bold text-xl">Get in Touch</p>
                            <div className="flex flex-col gap-3">
                                {
                                    footerContent.contact.map((contact, index) => (
                                        <a key={index} href={contact.path} className="text-white">
                                            {contact.name}
                                        </a>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white flex flex-col md:flex-row justify-between px-5 md:px-12 py-7 gap-5
            ">
                {
                    footerContent.base.map((item, index) => (
                        <a key={index} href={item.path} className="text-gray-700 hover:text-gray-900">
                            {item.name}
                        </a>
                    ))
                }
            </div>
        </footer>
    )
}