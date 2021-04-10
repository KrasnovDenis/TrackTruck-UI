import React, {Component} from 'react';
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import CarRepo from "../repository/CarRepo";

const carId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

class CarDiagram extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    async componentDidMount() {
        // await ParkRepo
        //     .getAllParksByOwner(this.state.userId)
        //     .then((resp) => (
        //         this.setState({
        //             allUsersParks: resp.data
        //         })
        //     ))
        //
        // await CarRepo
        //     .getCarById(carId)
        //     .then((resp) => (
        //         this.setState({})
        //     ))
    }


    onChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});

        console.log(e.target);

    }

    onSubmit = async (e) => {
        e.preventDefault();
        let car = {
            id: carId,
        }
        try {
            await CarRepo.updateCar(car);
            alert("Машина изменена!");
            window.location.reload();
        } catch (rejectedValue) {
            alert("Проверьте введенные параметры");
        }
    }

    render() {
        return (
            <div>
                <Form
                    onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Container>
                            <Row>
                                <Col>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="lineDiagram" defaultChecked />{'Линейная диаграмма'}
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>

                                        {/*todo:красивое оформление + динамическая подгрузка парков и машин*/}
                                        <Label for="typeObject">Предмет мониторинга</Label>
                                        <Input type="select" name="typeObject" id="typeObject" multiple>
                                            <option>dsfd </option>
                                        </Input>
                                    </FormGroup>
                                </Col>

                                <Col>
                                    <label htmlFor="metrics">Метрика</label>
                                    <select name="metrics" id="metrics">
                                        <option value="fuel">Расход топлива</option>
                                        <option value="location">Маршруты движения</option>
                                        <option value="errors">Список ошибок</option>
                                    </select>
                                </Col>
                            </Row>

                        </Container>
                        <Button type="submit"> Применить</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default CarDiagram;