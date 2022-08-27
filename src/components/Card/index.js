import React from "react";
import image from '../../assets/images/user1.jpg'

import { BsInstagram, BsGithub } from 'react-icons/bs'

import './styles.css'

export default function Card() {

    return (
        <div className="cardContainer">
            <img src={image} alt={"Foto do usuário"} />
            <h3>Felippe Rian</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est obcaecati voluptatibus minima quia vitae maxime suscipit quae? Molestiae ex quam possimus tempora ratione praesentium veniam suscipit, reprehenderit explicabo quia? Id!
            </p>

            <section className="socialNetworksContainer">
                <a>
                    <BsInstagram className="socialNetworksIcon" />
                </a>
                <a>
                    <BsGithub className="socialNetworksIcon" />
                </a>
            </section>
        </div>
    )

}