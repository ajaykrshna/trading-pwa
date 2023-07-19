import { useNavigate } from "react-router-dom"

export default function Notification() {
    const navigate = useNavigate()
    return (
        <div className="notification">
            <div className="notification--head">
                <div className="notification--head--wrap">
                    <div onClick={() => navigate(-1)}>
                        <ion-icon name="arrow-back-outline" id='arrow-back-outline-signup'></ion-icon>
                    </div>
                    <h2>Notification</h2>
                </div>
                <ion-icon name="settings-outline" id='settings-outline'></ion-icon>
            </div>
            <div className="notification--nots">
                <h2>Empty</h2>
                <p>You don't have any notifications</p>
            </div>
        </div>
    )
}