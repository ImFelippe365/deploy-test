import React, { useState } from "react";

import { BsInstagram, BsGithub } from 'react-icons/bs'

import './styles.css'

export default function Card({ name, description, image, socialNetworks, hidden, expanded, ...rest }) {

    if (hidden) return <></>
    if (expanded) return (
        <div className="cardRowContainer" {...rest}>
            <img src={require(`./../../assets/images/${image}`)} alt={"Foto do usuário"} />

            <h3>{name}</h3>
        </div>
    )
    return (
        <div className="cardContainer" {...rest}>
            <img src={require(`./../../assets/images/${image}`)} alt={"Foto do usuário"} />

            <h3>{name}</h3>
            <p>{description}</p>

            <section className="socialNetworksContainer">
                <a target="__blank" href={socialNetworks.instagram}>
                    <BsInstagram className="socialNetworksIcon" />
                </a>
                <a target="__blank" href={socialNetworks.gitHub}>
                    <BsGithub className="socialNetworksIcon" />
                </a>
            </section>
        </div>
    )

}