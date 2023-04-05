import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PageNotFound() {
    const nav = useNavigate();
    return (
        <div>

            <h1> Page Not Found !</h1>
            <button onClick={() => { nav("/Login") }}>Go To Login </button>

        </div>

    )
}
