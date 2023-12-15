import React from "react"
import { Link } from "react-router-dom"

export default function Menu() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100vh"
            }}
        >
            <nav>
                <ul>
                    <li>
                        <Link to="/Game1">Oyun 1</Link>
                    </li>
                    <p>Oyunun amacı rastgele belirlenmiş ve 0-100 aralıgında olan bir sayıyı 7 tahminde bulabilmektir.</p>
                    <li>
                        <Link to="/Game2">Oyun 2</Link>
                    </li>
                    <p>Oyunun amacı rastgele belirlenmiş 0-100 aralıgında bir sayıyı 7 tahminde bulabilmektir.</p>
                </ul>
            </nav>
        </div>
    )
}