import { Link } from "react-router-dom";
import Logo from "../logo";

function Footer() {
    return (
        <footer className="border-t border-green-900/40 bg-[#0d0d0d] py-10">
            <div className="mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="100px" />
                            </div>
                            <p className="text-sm text-slate-500">
                                &copy; {new Date().getFullYear()} Jenish&apos;s Blog. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-green-500">
                                Company
                            </h3>
                            <ul className="space-y-3">
                                <li><Link className="text-sm text-slate-400 transition hover:text-green-400" to="/">Features</Link></li>
                                <li><Link className="text-sm text-slate-400 transition hover:text-green-400" to="/">Pricing</Link></li>
                                <li><Link className="text-sm text-slate-400 transition hover:text-green-400" to="/">Affiliate Program</Link></li>
                                <li><Link className="text-sm text-slate-400 transition hover:text-green-400" to="/">Press Kit</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-green-500">
                                Support
                            </h3>
                            <ul className="space-y-3">
                                <li><Link className="text-sm text-slate-400 transition hover:text-green-400" to="/">Account</Link></li>
                                <li><Link className="text-sm text-slate-400 transition hover:text-green-400" to="/">Help</Link></li>
                                <li><Link className="text-sm text-slate-400 transition hover:text-green-400" to="/">Contact Us</Link></li>
                                <li><Link className="text-sm text-slate-400 transition hover:text-green-400" to="/">Customer Support</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-green-500">
                                Legals
                            </h3>
                            <ul className="space-y-3">
                                <li><Link className="text-sm text-slate-400 transition hover:text-green-400" to="/">Terms &amp; Conditions</Link></li>
                                <li><Link className="text-sm text-slate-400 transition hover:text-green-400" to="/">Privacy Policy</Link></li>
                                <li><Link className="text-sm text-slate-400 transition hover:text-green-400" to="/">Licensing</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
