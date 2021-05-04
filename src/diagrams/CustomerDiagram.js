import React, {Component} from 'react';
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import {DateTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Select from "react-select";
import {parameterItems} from "../application-config.json";
import LineChart from "./charts/LineChart";
import GraphicsRepo from "../repository/GraphicsRepo";


class CustomerDiagram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diagramType: "lineDiagram",
            parameter: [],
            dateFrom: new Date((new Date()).valueOf() - 1000 * 60 * 60 * 24).getTime(),
            dateTo: new Date().getTime(),
            diagramData: []
        }
    }

    async componentDidMount() {

    }

    onChangeParameter = (e) => {
        this.setState({parameter: e.value});
    }

    handleDateFromChange = (e) => {
        this.setState({dateFrom: new Date(e).getTime()});
    }

    handleDateToChange = (e) => {
        this.setState({dateTo: new Date(e).getTime()});
    }

    onChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});

        console.log(e.target);

    }

    onSubmit = async () => {
        if(this.state.parameter.length === 0){
            alert("Проверьте параметры графика");
            return;
        }

        const url = window.location.pathname;
        const carId = url.substr(url.lastIndexOf('/') + 1);

        try {
            let state = this.state;
            await GraphicsRepo.getSeriesForCars(
                [carId],
                state.parameter,
                state.dateFrom,
                state.dateTo)
                .then(r => this.setState({diagramData: r}))
        } catch (rejectedValue) {
            alert(rejectedValue);
            console.log(rejectedValue);
        }
    }

    render() {
        let diagramData = this.state.diagramData;
        let diagramDataStub = {
            "parameter": "",
            "entity": {
                "entityName": "Выберите парк и параметры",
                "metricList": [
                    {
                        "time": new Date(),
                        "value": 0
                    }
                ]
            }
        }

        return (
            <div>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Form>
                        <FormGroup>
                            <Container>
                                <Row>
                                    <Col>
                                        <FormGroup check>
                                            <Label check>
                                                <Input onChange={this.onChangeParameter}
                                                       type="radio"
                                                       value="lineDiagram"
                                                       name="lineDiagram"
                                                       defaultChecked/>{'Линейная диаграмма'}
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <Select
                                            onChange={this.onChangeParameter}
                                            options={parameterItems}
                                        />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md="3">
                                        <FormGroup>
                                            Дата начала
                                            <DateTimePicker
                                                value={this.state.dateFrom}
                                                onChange={this.handleDateFromChange}/>
                                        </FormGroup>
                                    </Col>
                                    <Col md="3">
                                        <FormGroup>
                                            Дата конца
                                            <DateTimePicker
                                                value={this.state.dateTo}
                                                onChange={this.handleDateToChange}/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="2">
                                        <Button onClick={this.onSubmit}
                                                onSubmit={false}> Применить</Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm="6">
                                        {diagramData.responseEntities !== undefined ?
                                            diagramData.responseEntities.map(car =>
                                                <LineChart data={
                                                    {
                                                        parameter: diagramData.parameter,
                                                        entity: car
                                                    }
                                                }/>) :
                                            <LineChart data={diagramDataStub}/>}
                                    </Col>
                                </Row>
                            </Container>
                        </FormGroup>
                    </Form>
                </MuiPickersUtilsProvider>
            </div>
        );
    }
}

export default CustomerDiagram;