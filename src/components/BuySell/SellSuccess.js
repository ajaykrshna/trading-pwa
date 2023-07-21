import { useNavigate } from 'react-router-dom'
import popperimg from '../../images/popper.webp'

export default function SellSuccess() {
    const navigate = useNavigate()
    return (
        <div className="buysuccess">
            <div className="buysuccess--head">
                <h1>Spotify</h1>
                <h3>SPOT</h3>
            </div>
            <div className="buysuccess--body">
                <img src={popperimg} />
                <h2>INR 8,000</h2>
                <h3>Sell Order Done!</h3>
                <p>Your order has been placed</p>
            </div>
            <div className='buysuccess--buttons'>
                <button onClick={() => navigate("/spotify")}>Back to Spotify</button>
            </div>
        </div>
    )
}