import { Container, Logo, LogoutBtn } from '../index';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {

    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate();
    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]

    return (
        <header className="sticky top-0 z-50 border-b border-green-900/40 bg-[#0a0a0a]/95 backdrop-blur">
            <Container>
                <nav className="flex min-h-16 items-center justify-between gap-6">
                    <div className="shrink-0">
                        <Link to='/'>
                            <Logo />
                        </Link>
                    </div>
                    <ul className="flex flex-wrap items-center justify-end gap-1">
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-300 transition duration-200 hover:bg-green-500/10 hover:text-green-400"
                                        onClick={() => navigate(item.slug)}
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header;
