import { useDispatch } from "react-redux";
import authService from '../../appwrite/auth';
import {logout} from '../../store/authSlice';

function LogoutBtn() {

    const dispatch = useDispatch();
    const logoutHandler = async () => {
        await authService.logout().catch(() => null)
        dispatch(logout())
    }

    return (
        <button
            className="rounded-lg border border-green-500/50 bg-green-500/10 px-3 py-2 text-sm font-semibold text-green-400 transition duration-200 hover:bg-green-500 hover:text-black"
            onClick={logoutHandler}
        >
            Logout
        </button>
    )
}
export default LogoutBtn;
