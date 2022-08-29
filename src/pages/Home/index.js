import React, { useState } from "react";
import Card from "../../components/Card";
import users from '../../assets/data/users-data.json'
import './styles.css'
import Comment from "../../components/Comment";

import { IoMdClose } from 'react-icons/io'
export default function Home() {

    const [showGames, setShowGames] = useState(false);
    const [cardActive, setCardActive] = useState();
    const [cardData, setCardData] = useState('')

    const [cardSection, setCardSection] = useState("recommends")

    const handleToggleShowGames = (data, index) => {
        setShowGames(true)
        setCardActive(index)
        setCardData(data)
    }

    const closeShowingSections = () => {
        setCardSection('recommends');
        setShowGames(false)
    }


    return (
        <>

            <main>
                <section className="aboutUsContainer">
                    <h2>Sobre nós</h2>

                    <section className="aboutUsContent">
                        {
                            users.map((user, index) =>
                                <Card
                                    hidden={showGames && cardActive !== index}
                                    expanded={false}
                                    name={user.name}
                                    description={user.autobiography}
                                    image={user.image}
                                    socialNetworks={user.socialNetworks}
                                    onClick={() => handleToggleShowGames({ recommends: user.recommends, games: user.games }, index)}
                                />)
                        }

                        {
                            showGames &&
                            <div className="gamesContainer">
                                <div className="gamesTabs">
                                    <section>
                                        <h3
                                            role="button"
                                            onClick={() => setCardSection('recommends')}
                                            className={cardSection === "recommends" ? "activeTab" : "tab"}
                                        >
                                            Recomendações
                                        </h3>
                                        <h3
                                            role="button"
                                            onClick={() => setCardSection('games')}
                                            className={cardSection === "games" ? "activeTab" : "tab"}
                                        >
                                            Jogos
                                        </h3>
                                    </section>

                                    <div className="closeButton" role={"button"} onClick={closeShowingSections}>
                                        <IoMdClose role={"button"} size={26} color="#20bcc7" />
                                    </div>
                                </div>

                                {
                                    cardSection === "recommends" ?
                                        cardData.recommends.map((midia) =>
                                            <Comment
                                                name={midia.name}
                                                description={midia.description}
                                                type={midia.type}
                                                phrase={midia['top-phrase']}
                                            />
                                        ) : <section className="gamesList">
                                            <h4>
                                                Jogos que curto
                                            </h4>

                                            <ul>
                                                {
                                                    cardData.games.map((game) =>
                                                        <li>{game}</li>
                                                    )
                                                }
                                            </ul>
                                        </section>
                                }
                            </div>
                        }
                    </section>

                </section>
            </main>
        </>

    )
}

