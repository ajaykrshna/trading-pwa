export default function Welcomepage() {
    return (
        <div className="welcomepage">
            <div className="welcomepage--wrap">
                <p className="welcomepage--text">Welcome to</p>
                <p className="welcomepage--text--head">Trade!</p>
            </div>
            <div className="welcomepage--buttons">
                <button className="welcomepage--google">Continue with Google</button>
                <button className="welcomepage--signup">Sign up</button>
                <button className="welcomepage--signin">Sign in</button>
            </div>
        </div>
    )
}