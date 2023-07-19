import { useNavigate } from "react-router-dom"

export default function Buy() {
    const navigate = useNavigate()
    return (
        <div className="buy">
            <div className="buy--head">
                <div className="buy--head--wrap">
                    <div onClick={() => navigate(-1)}>
                        <ion-icon name="arrow-back-outline" id='arrow-back-outline-signup'></ion-icon>
                    </div>
                    <h2>My Stocks</h2>
                </div>
                <ion-icon name="arrow-back-outline" id='arrow-back-outline-signup'></ion-icon>
            </div>
        </div>
    )
}