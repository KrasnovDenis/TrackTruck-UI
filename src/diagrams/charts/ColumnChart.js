import React, {Component} from 'react';
import {Chart} from "react-google-charts";


class ColumnChart extends Component {

    render() {
        const height = this.props.height | 500;
        const width= this.props.width  | 500;

        return (
            <div style={{ display: 'flex', maxWidth: 900 }}>
                <Chart
                    width={width}
                    height={height}
                    chartType="ColumnChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['City', '2010 Population', '2000 Population'],
                        ['New York City, NY', 8175000, 8008000],
                        ['Los Angeles, CA', 3792000, 3694000],
                        ['Chicago, IL', 2695000, 2896000],
                        ['Houston, TX', 2099000, 1953000],
                        ['Philadelphia, PA', 1526000, 1517000],
                    ]}
                    options={{
                        title: 'Population of Largest U.S. Cities',
                        chartArea: { width: '30%' },
                        hAxis: {
                            title: 'Total Population',
                            minValue: 0,
                        },
                        vAxis: {
                            title: 'City',
                        },
                    }}
                    legendToggle
                />

            </div>
        );
    }

}

export default ColumnChart;