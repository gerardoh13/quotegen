import React from "react";
import { Card, Button, Col, Row } from 'react-bootstrap';
//import { getQuotes } from '../services/quoteService';
import * as catService from "../services/catService";
import quotes from "./quotes";

class QuoteCard extends React.Component {

    state = {
        qs: [...quotes],
        currentQuote: {},
        images: {}
    };

    componentDidMount() {
        this.getNewQuote();
    }
    getCats = () => {
        catService.getCatPics()
            .then(this.onGetCatsSuccess)
            .catch(this.onError);
    };
    onGetCatsSuccess = response => {
        this.setState({
            images: response[0]
        });
    };
    onError = error => {
        console.log(error);
    };
    getNewQuote = () => {
        let random = Math.floor(Math.random() * 49)
        this.setState({
            currentQuote: this.state.qs[random],
            imgSrc: ''
        })
        this.getCats()
    }
    render() {
        let tweet = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + this.state.currentQuote.q + '" ' + this.state.currentQuote.a)
        return (
            <div >
                <Card  id="quote-box" className="m-auto" style={{ width: '25rem' }}>
                    <Card.Img variant="top" src={this.state.images.url} />
                    <Card.Body>
                        <Card.Text id="text">{this.state.currentQuote.q}</Card.Text>
                        <Card.Title id="author">-{this.state.currentQuote.a}</Card.Title>
                        <br />
                        <Row>
                            <Col>
                                <a id="tweet-quote" className="btn btn-primary" href={tweet}>T</a>
                            </Col>
                            <Col style={{ textAlign: "right" }}>
                                <Button id="new-quote" variant="primary" onClick={this.getNewQuote.bind(this)}>New Quote</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <p className="text-center">by gerardoh13</p>
            </div>
        );
    }
}
export default QuoteCard