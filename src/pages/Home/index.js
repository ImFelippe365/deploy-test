import React, { useState } from "react";
import Card from "../../components/Card";
import './styles.css'

export default function Home() {

  return (
    <>

      <main>
        <section className="aboutUsContainer">
          <h2>Sobre nós</h2>

          <section className="aboutUsContent">
            <Card />
            <Card />
            <Card />
          </section>
        </section>

        <section>
          <h2>Instituções frequentadas</h2>
        </section>
      </main>
    </>

  )
}

