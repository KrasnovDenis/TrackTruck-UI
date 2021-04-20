import React, {Component} from 'react';
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import Select from "react-select";
import {DateTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import LineChart from "../charts/LineChart";
import GraphicsRepo from "../../repository/GraphicsRepo";
import DateFnsUtils from "@date-io/date-fns";
import {parameterItems} from "../../application-config.json";

class ParkDiagram extends Component {

    constructor(props) {
        super(props);
        this.state = {
            diagramType: "lineDiagram",
            parameter: [],
            parksSelected: [],
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

    handleChange = (e) => {
        this.setState({parksSelected: Array.isArray(e) ? e.map(x => x.value) : []});
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
        if (this.state.parksSelected.length === 0 ||
            this.state.parameter.length === 0) {
            alert("Проверьте параметры графика");
            return;
        }

        try {
            let state = this.state;
            await GraphicsRepo.getSeriesForCars(
                state.parksSelected,
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
            "parameter": "параметр не выбран",
            "entity": {
                "entityName": "Выберите автомобили и параметры",
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

                                        <FormGroup>

                                            <Select
                                                onChange={this.handleChange}
                                                isMulti
                                                name="colors"
                                                options={this.props.cars.map(
                                                    car => ({value: car.id, label: car.model}))}
                                                className="basic-multi-select"
                                                classNamePrefix="select"
                                                isRequired={true}
                                            />
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

export default ParkDiagram;