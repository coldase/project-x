import React from "react";
import { Link } from 'react-router-dom'

const LandingView = () => {
    return (
        <div>
            <h1>The Landing Vjyy!</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default LandingView