import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Buy() {
    const navigate = useNavigate()
    const [price, setPrice] = useState("")
    return (
        <div className="buy">
            <div className="buy--head--details">
                <div className="buy--head">
                    <div className="buy--head--wrap">
                        <div onClick={() => navigate(-1)}>
                            <ion-icon name="arrow-back-outline" id='arrow-back-outline-signup'></ion-icon>
                        </div>
                        <h2>Buy</h2>
                    </div>
                    <ion-icon name="options-outline" id="options-outline"></ion-icon>
                </div>
                <div className="buy--details">
                    <div className="buy--details--name">
                        <h2>Spotify</h2>
                        <p>SPOT</p>
                    </div>
                    <div className="buy--details--price">
                        <p>Market Price</p>
                        <h2>INR 75.23</h2>
                    </div>
                </div>
                <div className="buy--input">
                    <div className="buy--input--type">Buy in INR</div>
                    <input
                        type="number"
                        placeholder="0"
                        id="price"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        style={price ? price === 0 ? { borderColor: "#000" } : { borderColor: "#12d18e" } : { borderColor: "#000" }}
                    />
                    <p>Balance Available : INR 55,555</p>
                </div>
            </div>
            <div className="buy--button">
                <button onClick={navigate("/buy/preview")}>Continue</button>
            </div>
        </div>
    )
}