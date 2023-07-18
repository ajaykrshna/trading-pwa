import { Link, useNavigate } from "react-router-dom"
import Pin from "./Pin"
import { useState } from "react"

export default function Signin() {
    const emailRegex = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/);
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [warning, setWarning] = useState(null)
    return (
        <div className="signup">
            <div className="signup--wrap">
                <div className="signup--progress">
                    <div onClick={() => navigate(-1)}>
                        <ion-icon name="arrow-back-outline" id='arrow-back-outline-signup'></ion-icon>
                    </div>
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
                        name="email"
                        onChange={(e) => {
                            setEmail(e.target.value)
                            setWarning(null)
                        }}
                        value={email}
                        style={email ? emailRegex.test(email) ? { borderBottomColor: "#12d18e" } : { borderBottomColor: '#eb5168' } : { borderBottomColor: '#000' }}
                    />
                    {warning}
                </div>
            </div>
            <div className="signup--button">
                <button
                    onClick={() => {
                        emailRegex.test(email) ?
                        navigate('/signinverification') :
                        setWarning(warningMessage)
                    }}>Send OTP</button>
            </div>
        </div>
    )
}

const warningMessage = (
    <p className="signin--email--warning">Please enter valid email</p>
)