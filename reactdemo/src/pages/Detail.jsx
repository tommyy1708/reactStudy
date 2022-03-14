import React from 'react'
import { useLocation } from 'react-router-dom';

export default function Detail() {
    let location = useLocation()
    return (
        <div>
            <h2>
                Detail content = {location.state ? location.state.username : ""}
            </h2>
        </div>
    )
}
