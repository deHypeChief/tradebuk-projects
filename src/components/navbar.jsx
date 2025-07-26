import { Icon } from "@iconify-icon/react/dist/iconify.js"

export default function Navbar() {
    const links = [
        { name: "Tradebuk", path: "/" },
        { name: "Advisory", path: "/about" },
        { name: "Updates & Insights", path: "/contact" }
    ]
    return (
        <nav className="pt-6 md:pt-0 ">
            <div className="flex justify-between items-center">
                <div className="pl-5 md:pl-12 w-24 md:w-28">
                    <img src="/logo.png" alt="" />
                </div>
                <div className="hidden md:block space-x-8 text-white">
                    {
                        links.map((link, index) => (
                            <a key={index} href={link.path} className="">
                                {link.name}
                            </a>
                        ))
                    }
                </div>
                <div className="hidden md:block">
                    <button className="bg-[#2278BA]  px-12 text-white py-7">
                        Get in touch
                    </button>
                </div>
                <div className="mr-5 relative block md:hidden">
                    <Icon icon="ic:round-menu" width="40" height="40" className="text-white"/>

                    <div className="hidden absolute top-full w-max -right-0 bg-black/50 rounded-2xl overflow-clip mt-5">
                        <div className="text-white text-right px-10 pt-5 py-10 space-y-5">
                            <div>
                                <p className="text-2xl">Tradebuk</p>
                            </div>
                            <div>
                                <p className="text-2xl">Advisory</p>
                            </div>
                            <div>
                                <p className="text-2xl">Updates & Insight</p>
                            </div>
                        </div>
                        <div className="rounded-b-2xl bg-[#2278BA]">
                            <p className="text-xl font-medium text-white px-10 py-5 text-center">Get in touch</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}