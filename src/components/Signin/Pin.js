import { Link } from "react-router-dom"

export default function Pin() {
    return (
        <div className="signup">
            <div className="signup--wrap">
                <div className="signup--progress">
                    <Link to='/'>
                        <ion-icon name="arrow-back-outline" id='arrow-back-outline-signup'></ion-icon>
                    </Link>
                </div>
                <div className="signup--question">
                    You got a mail!
                </div>
                <div className="signup--form--pin">
                    <label htmlFor="signup--input">
                        Enter the code sent to your email
                    </label>
                    <div className="signup--form--pin--in">
                        <input
                            type="number"
                            id="signup--input--pin1"
                        />
                        <input
                            type="number"
                            id="signup--input--pin2"
                        />
                        <input
                            type="number"
                            id="signup--input--pin3"
                        />
                        <input
                            type="number"
                            id="signup--input--pin4"
                        />
                    </div>
                </div>
                <div className="signup--resend--wrap">
                    <div className="signup--resend">
                        Didnt get the code?
                    </div>
                    <div className="signup--resend--b">
                        Resend in <span>55</span> s
                        {/* <button>Resend</button> the code */}
                    </div>
                </div>
            </div>
            <div className="signup--button">
                <button>Confirm</button>
            </div>
        </div>
    )
}