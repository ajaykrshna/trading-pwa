import { useNavigate } from "react-router-dom"

export default function BuyPreview() {
    const navigate = useNavigate()
    return (
        <div className="preview">
            <div className="preview--wrap">
                <div className="preview--head">
                    <div onClick={() => navigate(-1)}>
                        <ion-icon name="arrow-back-outline" id='arrow-back-outline-signup'></ion-icon>
                    </div>
                    <h2>Preview</h2>
                </div>
                <div className="buy--details">
                    <div className="buy--details--name">
                        <h2>Spotify</h2>
                        <p>SPOT</p>
                    </div>
                    <div className="buy--details--price">
                        <p>Buy in INR</p>
                    </div>
                </div>
                <div className="preview--details">
                    <div className="preview--details--market">
                        <div className="preview--details--market--price">
                            <p>Market Price</p>
                            <h2>INR 80.00</h2>
                        </div>
                        <div className="preview--details--market--price">
                            <p>Number of Shares</p>
                            <h2>0.001</h2>
                        </div>
                    </div>
                    <div className="preview--details--market">
                        <div className="preview--details--market--price">
                            <p>Amount</p>
                            <h2>INR 80.00</h2>
                        </div>
                        <div className="preview--details--market--price">
                            <p>Trading Fee</p>
                            <h2>INR 80.00</h2>
                        </div>
                    </div>
                    <div className="preview--details--total">
                        <p>Total cost</p>
                        <h2>INR 500.00</h2>
                    </div>
                </div>
            </div>
            <div className="buy--button">
                <button onClick={() => navigate("/buy/success")}>Buy Now</button>
            </div>
        </div>
    )
}