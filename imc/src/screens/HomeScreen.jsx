import React from 'react';
import{ Container, Row, Button, Card } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

const HomeScreen = () => {
  return (
    <>
    <Card>
        <Container class="container mt-5 mb-5">
            <Row class="row d-flex justify-content-center align-items-center">
                <Form class="col-lg-6 col-sm-12">
                    <section class="imc d-flex justify-content-center align-items-center flex-row">
                            <div class=" main_container ">
                                    <h1 class="text-center">Votre Indice de Masse Corporelle</h1>
                                <div class="weight_container">
                                    <Form.Label class="title_card">Votre poids(kg)</Form.Label>
                                    <Form.Control size="lg" id="height" class="input_card" type="number" value="0" min="1" max="300"></Form.Control>
                                </div>
                                <div class="height_container">
                                    <Form.Label class="title_card">Votre taille(cm)</Form.Label>
                                    <Form.Control size="lg" id="height" class="input_card" type="number" value="0" min="1" max="300"></Form.Control>
                                </div>
                                    <Button class="calculate_button" type="submit" onclick="calculate()">Envoyer</Button>
                                <div id="resultsContainer" class="show_results hidden d-flex justify-content-center align-items-center flex-column">
                                    <Form.Label>Résultat</Form.Label>
                                    <Form.Control size="lg" as="textarea" id="resultsArea" cols="30" rows="1" readonly></Form.Control>
                                    <span id="condition" class="results_condition"></span>
                                </div>
                            </div>
                    </section>
                </Form>
            </Row>
        </Container>
    </Card>
    </>
  )
}

export default HomeScreen