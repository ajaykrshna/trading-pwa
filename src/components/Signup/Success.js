import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Success() {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate('/stocks')
        }, 5000)
    }, [])
    return (
        <div className="signup--success">
            <h1>Successful!</h1>
            <p>Your account has been created</p>
            <p>Preparing...</p>
            <h3 className="signup--loading">
                Trade!
            </h3>
        </div>
    )
}