import { Link } from "react-router-dom"

export default function Name() {
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
                    What is your name?
                </div>
                <div className="signup--form">
                    <label htmlFor="signup--input">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="signup--input"
                        placeholder="Full name"
                    />
                </div>
            </div>
            <div className="signup--button">
                <button>Confirm</button>
            </div>
        </div>
    )
}