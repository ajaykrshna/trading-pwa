import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Pin() {
    const navigate = useNavigate()
    const firstInRef = useRef()
    const secondInRef = useRef()
    const thirdInRef = useRef()
    const fortInRef = useRef()
    const [OTP, setOTP] = useState({
        1: 0,
        2: 0,
        3: 0,
        4: 0
    })

    const [seconds, setSeconds] = useState(29)

    useEffect(() => {
        const interval = setInterval(() => {
            seconds !== 0 && setSeconds(seconds - 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [seconds])
    return (
        <div className="signup">
            <div className="signup--wrap">
                <div className="signup--progress">
                    <div onClick={() => navigate(-1)}>
                        <ion-icon name="arrow-back-outline" id='arrow-back-outline-signup'></ion-icon>
                    </div>
                </div>
                <div className="signup--question">
                    You got a mail!
                </div>
                <div className="signup--form--pin">
                    <label htmlFor="signup--input">
                        Enter the code sent to your email
                    </label>
                    <div className="signup--form--pin--in">
                        <input autoFocus
                            type="number"
                            ref={firstInRef}
                            id="signup--input--pin1"
                            name="1"
                            onChange={(e) => {
                                setOTP(
                                    {
                                        ...OTP,
                                        [e.target.name]: e.target.value
                                    }
                                );
                                secondInRef.current.focus();
                            }
                            }
                        />
                        <input
                            type="number"
                            ref={secondInRef}
                            id="signup--input--pin2"
                            name="2"
                            onChange={(e) => {
                                setOTP(
                                    {
                                        ...OTP,
                                        [e.target.name]: e.target.value
                                    }
                                );
                                thirdInRef.current.focus();
                            }
                            }
                        />
                        <input
                            type="number"
                            ref={thirdInRef}
                            id="signup--input--pin3"
                            name="3"
                            onChange={(e) => {
                                setOTP(
                                    {
                                        ...OTP,
                                        [e.target.name]: e.target.value
                                    }
                                );
                                fortInRef.current.focus();
                            }
                            }
                        />
                        <input
                            type="number"
                            ref={fortInRef}
                            id="signup--input--pin4"
                            name="4"
                            onChange={(e) => {
                                setOTP(
                                    {
                                        ...OTP,
                                        [e.target.name]: e.target.value
                                    }
                                );
                            }
                            }
                        />
                    </div>
                </div>
                <div className="signup--resend--wrap">
                    <div className="signup--resend">
                        Didnt get the code?
                    </div>
                    <div className="signup--resend--b">
                        {seconds !== 0 ? <p>Resend in <span>{seconds}</span> s</p> :
                            <p><button onClick={() => { console.log("Send otp again"); setSeconds(29) }}>Resend</button>the code</p>}
                    </div>
                </div>
            </div>
            <div className="signup--button">
                <button onClick={() => navigate('/stocks')}>Confirm</button>
            </div>
        </div >
    )
}