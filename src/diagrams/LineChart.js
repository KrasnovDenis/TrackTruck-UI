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

        console.log(this.props);
        const height = this.state.height | 500;
        const width = this.state.width | 500;
        let metricValues = this.props.data.metricValues;
        let time = this.props.data.timeValues.map(i=>{
            return new Date(i)
        });

        let values = [[
            {id: 'i0', type: 'date', label: 'values'},
            {id: 'i1', type: 'number', label: 'values'}
        ]]

        for(let i = 0; i < metricValues.length; i++){
            values.push( [time[i], metricValues[i]]);
        }

        return (<Chart
            width={width}
            height={height}
            options={{
                title:
                    'Количество затраченного топлива',
                hAxis: {title: 'Дата'},
                vAxis: {title: this.state.name},
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