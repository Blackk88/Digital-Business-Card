import React from "react"
import Photo from "../images/my-photo.jpeg"

export default function Info() {
    return (
        <div class="info-wrapper">
        <img src={Photo} className="info--photo" />
        <div className="info-container">
            <h1 className="info--name">Aleksandr Trofimov</h1>
            <p>Frontend Developer</p>
            <div className="info--btn-container">
                <a className="email-btn" href="mailto:trofimovalexandr88@gmail.com"><i class="fa-solid fa-envelope"></i> Email</a>
                <a className="linkedIn-btn" href="https://www.linkedin.com/in/aleksandr-trofimov/" target="_blank"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
            </div>
        </div>
        </div>
    )
}