import { Link } from "react-router-dom"

export default function Signin() {
    return (
        <div className="signup">
            <div className="signup--wrap">
                <div className="signup--progress">
                    <Link to='/'>
                        <ion-icon name="arrow-back-outline" id='arrow-back-outline-signup'></ion-icon>
                    </Link>
                </div>
                <h1 className="signup--question">
                    Hello👋
                </h1>
                <div className="signin--qu">
                    Please enter your email address registered
                </div>
                <div className="signup--form">
                    <label htmlFor="signup--input">
                        Email
                    </label>
                    <input
                        type="email"
                        id="signup--input"
                        placeholder="Email"
                    />
                </div>
            </div>
            <div className="signup--button">
                <button>Send OTP</button>
            </div>
        </div>
    )
}