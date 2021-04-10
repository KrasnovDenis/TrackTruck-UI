import React, {Component} from 'react';
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import Select from 'react-select';

class AllParksDiagram extends Component {

    constructor(props) {
        super(props);
        this.state = {
            diagramType: "lineDiagram",
            parameter: [],
            parksSelected: []
        }
    }

    onChangeParameter = (e) => {
        this.setState({parameter: e.value});
    }

    handleChange = (e) => {
        this.setState({parksSelected:Array.isArray(e) ? e.map(x => x.value) : []});
    }

    onSubmit = async (e) => {

        try {

            alert("Проверьте введенные параметры");
        } catch (rejectedValue) {
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
                                        {/*todo:красивое оформление + динамическая подгрузка парков и машин*/}

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

                        </Container>
                        <Button type="submit"> Применить</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }

    parameterItems = [
        {value: "fuelCharging", label: "Fuel charging"},
        {value: "location", label: "Location"},
        {value: "errors", label: "Errors"}
    ]
}

export default AllParksDiagram;