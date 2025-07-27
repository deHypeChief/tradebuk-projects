import { Icon } from "@iconify-icon/react/dist/iconify.js"
import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom";

export default function Navbar() {
    const links = [
        { name: "Tradebuk", path: "/aboutus" },
        { name: "Advisory", path: "/" },
        { name: "Updates & Insights", path: "/contact" }
    ];
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        if (!dropdownOpen) return;
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownOpen]);
    return (
        <nav className="pt-6 md:pt-0 pb-6 md:pb-0">
            <div className="flex justify-between items-center">
                <div className="pl-5 md:pl-12 w-20 md:w-28">
                    <Link to="/">
                        <img src="/logo.png" alt="Tradebuk Logo" className="w-full h-full object-cover" />
                    </Link>
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
                    <button onClick={() => setDropdownOpen((open) => !open)} aria-label="Open menu">
                        <Icon icon="ic:round-menu" width="40" height="40" className="text-white" />
                    </button>
                    {dropdownOpen && (
                        <div ref={dropdownRef} className="absolute top-full w-max -right-0 bg-black/50 rounded-2xl overflow-clip mt-5 z-50">
                            <div className="text-white text-right px-10 pt-5 py-10 space-y-5">
                                {links.map((link, idx) => (
                                    <div key={idx}>
                                        <a href={link.path} className="text-2xl block" onClick={() => setDropdownOpen(false)}>{link.name}</a>
                                    </div>
                                ))}
                            </div>
                            <div className="rounded-b-2xl bg-[#2278BA]">
                                <button className="text-xl font-medium text-white px-10 py-5 text-center w-full" onClick={() => setDropdownOpen(false)}>
                                    Get in touch
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}