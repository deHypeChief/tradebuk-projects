import { Icon } from "@iconify-icon/react/dist/iconify.js"
import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom";

export default function Navbar() {
    const links = [
        {
            name: "Tradebuk", path: "#", dropdown: {
                items: [
                    { name: "About Us", path: "/aboutus" },
                    { name: "Leadership", path: "/leadership" }
                ]
            }
        },
        { name: "Advisory", path: "/" },
        { name: "Updates & Insights", path: "/update" }
    ];
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpenF, setDropdownOpenF] = useState(null);
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

    const dropdownRefF = useRef(null);

    useEffect(() => {
        if (dropdownOpenF === null) return;
        function handleClickOutsideF(event) {
            if (dropdownRefF.current && !dropdownRefF.current.contains(event.target)) {
                setDropdownOpenF(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutsideF);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideF);
        };
    }, [dropdownOpenF]);

    return (
        <nav className="pt-6 md:pt-0 pb-6 md:pb-0 fixed w-full z-50 bg-[#0D2A3E]">
            <div className="flex justify-between items-center">
                <div className="pl-5 md:pl-12 w-20 md:w-28">
                    <Link to="/">
                        <img src="/logo.png" alt="Tradebuk Logo" className="w-full h-full object-cover" />
                    </Link>
                </div>
                <div className="hidden md:block relative space-x-8 text-white" ref={dropdownRefF}>
                    {
                        links.map((link, index) => (
                            <>
                                {
                                    link.dropdown ? (
                                        <button
                                            key={index}
                                            onClick={() => setDropdownOpenF(dropdownOpenF === index ? null : index)}
                                            className="relative"
                                        >
                                            {link.name}
                                        </button>
                                    ) : (
                                        <Link key={index} to={link.path}>
                                            {link.name}
                                        </Link>
                                    )
                                }

                                {link.dropdown && (
                                    <div className={`absolute top-full mt-7 bg-[#111A26] left-0  ${dropdownOpenF === index ? "block" : "hidden"}`}>
                                        <div className="p-4 ">
                                            {link.dropdown.items.map((item, idx) => (
                                                <Link
                                                    key={idx}
                                                    to={item.path}
                                                    className="block px-4 py-2 "
                                                    onClick={() => setDropdownOpenF(null)}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </>
                        ))
                    }

                </div>
                <div className="hidden md:block">
                    <Link to="/contactus">
                        <button className="bg-[#2278BA]  px-12 text-white py-7">
                            Get in touch
                        </button>
                    </Link>
                </div>
                <div className="mr-5 relative block md:hidden">
                    <button onClick={() => setDropdownOpen((open) => !open)} aria-label="Open menu">
                        <Icon icon="ic:round-menu" width="40" height="40" className="text-white" />
                    </button>
                    {dropdownOpen && (
                        <div ref={dropdownRef} className="absolute top-full w-max -right-0 bg-black/50 backdrop-blur-lg rounded-2xl overflow-clip mt-5 z-50">
                            <div className="text-white text-right px-10 pt-5 py-10 space-y-5">
                                {links.map((link, idx) => (
                                    <>
                                        <div key={idx}>
                                            <Link to={link.path} className="text-2xl block" onClick={() => setDropdownOpen(false)}>{link.name}</Link>
                                        </div>
                                        <div>
                                            {link.dropdown && link.dropdown.items.map((item, itemIdx) => (
                                                <Link
                                                    key={itemIdx}
                                                    to={item.path}
                                                    className="block text-lg mt-1"
                                                    onClick={() => setDropdownOpen(false)}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                ))}
                            </div>
                            <div className="rounded-b-2xl bg-[#2278BA]">

                                <Link to="/contactus">
                                    <button className="text-xl font-medium text-white px-10 py-5 text-center w-full" onClick={() => setDropdownOpen(false)}>
                                        Get in touch
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}