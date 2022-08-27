import React from "react";
import Typewriter from "typewriter-effect";

import { HiChevronDoubleDown } from 'react-icons/hi'
import './styles.css'

export default function Header() {
    return (
        <>
            <header>
                <section className="labelTypewriter">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(`Olá! Nos chamamos`)
                                .stop()
                                .start()
                        }}
                        options={{
                            loop: false,
                            cursor: "",
                            
                        }}
                    />
                </section>

                <section className="mainTypewriter">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(2500)
                                .typeString(`Breno Soares`)
                                .pauseFor(1500)
                                .deleteChars(12)
                                .typeString(`Felippe Rian`)
                                .pauseFor(1500)
                                .deleteChars(12)
                                .typeString(`Jose Neto`)
                                .pauseFor(1500)
                                .deleteChars(9)
                                .start();
                        }}
                        options={{
                            loop: true,
                        }}
                    />
                </section>

                <section className="descriptionContainer">
                    <p>Somos estudantes do 3° período de Análise e Desenvolvimento de Sistemas (A.D.S) do Instituto Federal do Rio Grande do Norte (IFRN) - Campus Pau dos Ferros. </p>
                </section>

            </header>
            <HiChevronDoubleDown className="downIcon" color="white" size={32} />
        </>
    )
}