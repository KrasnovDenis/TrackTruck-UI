import React, {Component} from "react";
import Chart from "react-google-charts";
import {PDFExport} from '@progress/kendo-react-pdf';
import {Col, Container, Row} from "reactstrap";
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import IconButton from "@material-ui/core/IconButton";
import {Tooltip} from "@material-ui/core";

class LineChart extends Component {

    constructor(props) {
        super(props);
        this.pdfExportComponent = React.createRef()
        this.state = {
            chartName: "",
            metricValues: [],
            timeValues: [],
            height: 0,
            width: 0
        }

    }

    handleExportWithComponent = (event) => {
        this.pdfExportComponent.current.save();
    }

    render() {
        const height = this.state.height | 450;
        const width = this.state.width | 450;

        console.log(this.props.data);
        let entityName = this.props.data.entity.entityName;
        let parameterName = this.props.data.parameter;

        let time = this.props.data.entity.metricList.map(i => {
            return new Date(i.time)
        });

        let metrics = this.props.data.entity.metricList.map(i => {
            return i.value
        });

        let values = [[
            {id: 'i0', type: 'date', label: 'values'},
            {id: 'i1', type: 'number', label: 'values'}
        ]]

        for (let i = 0; i < metrics.length; i++) {
            values.push([time[i], metrics[i]]);
        }

        return (

            <PDFExport ref={this.pdfExportComponent} paperSize="A4">
                <Container style={{border:"0px"}}>
                    <Row>
                        <Col lg={9}>
                            <Chart
                                width={width}
                                height={height}
                                options={{
                                    title: entityName,
                                    hAxis: {title: 'Дата'},
                                    vAxis: {title: parameterName},
                                    bubble: {textStyle: {fontSize: 26}},
                                    intervals: {style: 'sticks'},
                                    legend: 'none',
                                }}
                                chartType="LineChart"
                                loader={<div>Loading Chart</div>}
                                data={values}
                            />
                        </Col>
                        <Col>
                            <Tooltip title="Скачать в PDF">
                                <IconButton
                                    onClick={this.handleExportWithComponent}
                                    color="primary">
                                    <GetAppOutlinedIcon/>
                                </IconButton>
                            </Tooltip>
                        </Col>
                    </Row>
                </Container>

            </PDFExport>
        )

    }

}

export default LineChart;