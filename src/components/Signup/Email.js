import { Link } from "react-router-dom"

export default function Email() {
    return (
        <div className="signup">
            <div className="signup--wrap">
                <div className="signup--progress">
                    <Link to='/'>
                        <ion-icon name="arrow-back-outline" id='arrow-back-outline-signup'></ion-icon>
                    </Link>
                    <p>Progress</p>
                </div>
                <div className="signup--question">
                    Set up your account
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
                    <div className="signup--form--wrap">
                        <label htmlFor="signup--input">
                            Password
                        </label>
                        <input
                            type="password"
                            id="signup--input"
                            placeholder="Password"
                        />
                    </div>
                    <div className="signup--form--wrap">
                        <label htmlFor="signup--input">
                            Re-enter Password
                        </label>
                        <input
                            type="password"
                            id="signup--input"
                            placeholder="Confirm Password"
                        />
                    </div>
                </div>
            </div>
            <div className="signup--button">
                <button>Continue</button>
            </div>
        </div>
    )
}