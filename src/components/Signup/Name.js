import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Name() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [warning, setWarning] = useState(null)
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
                        name="name"
                        value={name}
                        onChange={e => {
                            setName(e.target.value)
                            setWarning(null)
                        }}
                        style={name ? name.length > 0 ?
                            { borderBottomColor: "#12d18e" } :
                            { borderBottomColor: '#eb5168' } :
                            { borderBottomColor: '#000' }}
                    />
                    {warning}
                </div>
            </div>
            <div className="signup--button">
                <button onClick={() => {
                    name ? navigate('/signupSuccess') :
                        setWarning(warningMessage)
                }}>Confirm</button>
            </div>
        </div>
    )
}

const warningMessage = (
    <p className="signin--email--warning">Please enter your name</p>
)