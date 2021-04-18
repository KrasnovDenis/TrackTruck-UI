import React, {Component} from 'react';
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import Select from 'react-select';
import DateFnsUtils from '@date-io/date-fns';
import {DateTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import LineChart from "./LineChart";
import GraphicsRepo from "../repository/GraphicsRepo";


class AllParksDiagram extends Component {

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


    onSubmitChangeHandler = async () => {
        try {
            let state = this.state;
            await GraphicsRepo.getSeriesForParks(
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
            "parameter": "",
            "park": {
                "parkName": "Выберите парк и параметры",
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
                    <Form
                        onSubmit={this.onSubmit}>
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
                                                options={this.props.parks.map(
                                                    park => ({value: park.id, label: park.name}))}
                                                className="basic-multi-select"
                                                classNamePrefix="select"
                                                isRequired={true}
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col>
                                        <Select
                                            onChange={this.onChangeParameter}
                                            options={this.parameterItems}
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
                            </Container>
                            <Button onClick={this.onSubmitChangeHandler} onSubmit={false}> Применить</Button>

                            <Container>

                                <Row>
                                    <Col sm="6">
                                        {diagramData.responseEntities !== undefined ?
                                            diagramData.responseEntities.map(park => <LineChart data={
                                                {
                                                    parameter: diagramData.parameter,
                                                    park: park
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

    parameterItems = [
        {value: "Vehicle distance", label: "Vehicle distance"},
        {value: "location", label: "Location"},
        {value: "errors", label: "Errors"}
    ]
}

export default AllParksDiagram;