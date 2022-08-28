import React from "react";

import './styles.css'

export default function Comment({ name, type, description, phrase }) {
    const topPhrase = phrase.replaceAll("'", '"');

    return (
        <section className="commentContainer">
            <div>
                <h4>{name}</h4>
                <label style={{ backgroundColor: type.color }}>{type.name}</label>
            </div>

            <p className="commentDescription">{description}</p>
            <p className="commentTopPhrase">{topPhrase}</p>
        </section>
    )
}