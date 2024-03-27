import React from "react";
import "./home.scss"
const Home: React.FC = ()=>{
    console.log("welcome to home....")
    return (<div className="card-container">
        <div className="card-deck row">
            <Cards />
        </div>
    </div>)

}

function Cards() {
    let cards = [];
    for (let i = 0; i < 10; i++) {
        cards.push(
            <div className="card card-width border-primary mb-3 col-sm-3">
                <div className="card-header bg-transparent border-success">Header {i + 1}</div>
                <div className="card-body">
                    <h5 className="card-title">Card title - {i + 1}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>

        )
    }

    return (<>{cards}</>)

}

export default Home;