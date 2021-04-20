import React, {Component} from "react";
import Chart from "react-google-charts";

class LineChart extends Component {


    state = {
        chartName: "",
        metricValues: [],
        timeValues: [],
        height: 0,
        width: 0
    }

    render() {
        const height = this.state.height | 500;
        const width = this.state.width | 500;

        console.log(this.props.data);
        let entityName = this.props.data.entity.entityName;
        let parameterName = this.props.data.parameter;

        let time = this.props.data.entity.metricList.map(i=>{
            return new Date(i.time)
        });

        let metrics = this.props.data.entity.metricList.map(i=>{
            return i.value
        });

        let values = [[
            {id: 'i0', type: 'date', label: 'values'},
            {id: 'i1', type: 'number', label: 'values'}
        ]]

        for(let i = 0; i < metrics.length; i++){
            values.push( [time[i], metrics[i]]);
        }

        return (<Chart
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
        />)

    }

}

export default LineChart;