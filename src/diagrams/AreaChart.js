import React, {Component} from 'react';
import {Chart} from "react-google-charts";

class AreaChart extends Component {


    render() {
        const height = this.props.height | 500;
        const width = this.props.width | 500;

        return (
            <div>
                <Chart
                    width={width}
                    height={height}
                    chartType="AreaChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Year', 'Sales', 'Expenses'],
                        ['2013', 1000, 400],
                        ['2014', 1170, 460],
                        ['2015', 660, 1120],
                        ['2016', 1030, 540],
                    ]}
                    options={{
                        title: 'Company Performance',
                        hAxis: {title: 'Year', titleTextStyle: {color: '#333'}},
                        vAxis: {minValue: 0},
                        // For the legend to fit, we make the chart area smaller
                        chartArea: {width: '50%', height: '70%'},
                        // lineWidth: 25
                    }}
                    // For tests
                    rootProps={{'data-testid': '1'}}
                />
            </div>
        );
    }

}

export default AreaChart;
