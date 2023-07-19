import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Email() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cnfPassword, setCNFPassword] = useState("")
    const emailRegex = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/);
    const [warningEmail, setWarningEmail] = useState(null)
    const [warningPass, setWarningPass] = useState(null)
    const [warningCNFPass, setWarningCNFPass] = useState(null)

    return (
        <div className="signup">
            <div className="signup--wrap">
                <div className="signup--progress">
                    <div onClick={() => navigate(-1)}>
                        <ion-icon name="arrow-back-outline" id='arrow-back-outline-signup'></ion-icon>
                    </div>
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
                        id="signup--email"
                        placeholder="Email"
                        name="email"
                        onChange={(e) => {
                            setEmail(e.target.value)
                            setWarningEmail(null)
                        }}
                        value={email}
                        style={email ? emailRegex.test(email) ?
                            { borderBottomColor: "#12d18e" } :
                            { borderBottomColor: '#eb5168' } :
                            { borderBottomColor: '#000' }}
                    />
                    {warningEmail}
                    <div className="signup--form--wrap">
                        <label htmlFor="signup--input">
                            Password
                        </label>
                        <input
                            type="password"
                            id="signup--pass"
                            placeholder="Password"
                            name="password"
                            onChange={(e) => {
                                setPassword(e.target.value)
                                setWarningPass(null)
                            }}
                            value={password}
                            style={password ? password.length > 4 ?
                                { borderBottomColor: "#12d18e" } :
                                { borderBottomColor: '#eb5168' } :
                                { borderBottomColor: '#000' }}
                        />
                        {warningPass}
                    </div>
                    <div className="signup--form--wrap">
                        <label htmlFor="signup--cnfpass">
                            Re-enter Password
                        </label>
                        <input
                            type="password"
                            id="signup--input"
                            placeholder="Confirm Password"
                            name="cnfPassword"
                            onChange={(e) => {
                                setCNFPassword(e.target.value)
                                setWarningCNFPass(null)
                            }}
                            value={cnfPassword}
                            style={cnfPassword ? cnfPassword === password ?
                                { borderBottomColor: "#12d18e" } :
                                { borderBottomColor: '#eb5168' } :
                                { borderBottomColor: '#000' }}
                        />
                        {warningCNFPass}
                    </div>
                </div>
            </div>
            <div className="signup--button">
                <button onClick={() => emailRegex.test(email) ?
                    password.length > 4 ?
                        cnfPassword === password ?
                            navigate("/signupVerification") :
                            setWarningCNFPass(warningMessageCNFPassword) :
                        setWarningPass(warningMessagePassword) :
                    setWarningEmail(warningMessageEmail)}>Continue</button>
            </div>
        </div>
    )
}
const warningMessageEmail = (
    <p className="signin--email--warning">Please enter valid email</p>
)

const warningMessagePassword = (
    <p className="signin--email--warning">Please enter a password with minimum 5 characters</p>
)

const warningMessageCNFPassword = (
    <p className="signin--email--warning">Passwords do not match</p>
)