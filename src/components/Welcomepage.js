import { useNavigate } from "react-router-dom"
import Signin from "./Signin/Signin"
import Email from "./Signup/Email"

export default function Welcomepage() {
    const navigate = useNavigate()
    return (
        <div className="welcomepage">
            <div className="welcomepage--wrap">
                <p className="welcomepage--text">Welcome to</p>
                <p className="welcomepage--text--head">Trade!</p>
            </div>
            <div className="welcomepage--buttons">
                <button className="welcomepage--google">Continue with Google</button>
                <button className="welcomepage--signup" onClick={() => navigate('/signup')}>Sign up</button>
                <button className="welcomepage--signin" onClick={() => navigate("/signin")}>Sign in</button>
            </div>
        </div>
    )
}

/* const handleSignIn = () => {
    navigate(<Signin />)
}
const handleSignUp = () => {
    navigate(<Email />)
} */