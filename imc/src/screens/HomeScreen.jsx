import React, {useState} from 'react';
import{ Container, Row, Button, Card } from "react-bootstrap";
import Form from 'react-bootstrap/Form';


const interpretations = new Map();
interpretations.set(16.5, "dénutrition ou anorexie" );
interpretations.set(18.5, "maigreur" );
interpretations.set(25, "poisd normal");
interpretations.set(30, "surpoids");
interpretations.set(35, "obésité modérée");
interpretations.set(40, "obesité sévère");
interpretations.set("infinity", "obésité morbide ou massive");

const HomeScreen = () => {

let ourImcs = window.localStorage.getItem('imcs') ?
window.localStorage.getItem('imcs') : []

let [imcs, setImcs] = useState(
    window.localStorage.getItem('imcs') 
    ? JSON.parse(window.localStorage.getItem('imcs')) 
    : []
);

let [imc, setImc] = useState(undefined);

let handleChange = (evt) =>{
    let weight = document.querySelector('[name=weight]').value;
    let height = document.querySelector('[name=height]').value;

    if (!weight || !height) {
        return;
    } else {

        let imc = (weight / Math.pow(height, 2)).toFixed(1);

        let theInterpretation = null;

        interpretations.forEach((interpretation, imcKey) => {
            if (!theInterpretation && imc < imcKey) {
                theInterpretation = interpretation;
            }
        });


        setImc(new Date().toLocaleDateString('fr-FR') + "" + imc + " " + theInterpretation);
    }
};

let handleClick = evt => {
    evt.preventDefault();

    let newImcs = [imc, ...imcs];

    setImcs(newImcs);

    window.localStorage.setItem('imcs', JSON.stringify(newImcs))

};

  return (
    <>
    <Card>
        <Container className="container mt-5 mb-5">
            <Row className="row d-flex justify-content-center align-items-center">
                <Form className="col-lg-6 col-sm-12">
                    <section className="imc d-flex justify-content-center align-items-center flex-row">
                            <div className=" main_container ">
                                    <h1 className="text-center">Votre Indice de Masse Corporelle</h1>
                                <div className="weight_container">
                                    <Form.Label className="title_card">Votre poids(kg)</Form.Label>
                                     <input
                                        onChange={handleChange}
                                        size="lg"
                                        id="weight"
                                        name="weight"
                                        className="input_card"
                                        type="number">
                                     </input>
                                    
                                </div>
                                <div className="height_container">
                                    <Form.Label className="title_card">Votre taille(cm)</Form.Label>
                                    <input
                                        onChange={handleChange}
                                        size="lg"
                                        id="height"
                                        name="height"
                                        className="input_card"
                                        type="number">
                                    </input>
                                </div>
                                    <Button onClick={handleClick} className="calculate_button" type="submit">Sauvergarder</Button>
                                <div id="resultsContainer" className="show_results hidden d-flex justify-content-center align-items-center flex-column">
                                    <Form.Label>Résultat</Form.Label>
                                    <div className='interpretation'>
                                        {imc && <div>{imc}</div>}
                                    </div>
                            <ul>
                                {imcs.map(i => <li key={i}>{i}</li>)}
                            </ul>
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