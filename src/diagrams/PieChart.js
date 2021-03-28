import React, {Component} from 'react';
import {Chart} from "react-google-charts";

class PieChart extends Component {

    render() {
        const height = this.props.height | 500;
        const width = this.props.width | 500;

        return (
            <div>
                <Chart
                    width={width}
                    height={height}
                    chartType="PieChart"
                    loader={<div>Загрузка...</div>}
                    data={[
                        ['Pizza', 'Popularity'],
                        ['Pepperoni', 33],
                        ['Hawaiian', 26],
                        ['Mushroom', 22],
                        ['Sausage', 10], // Below limit.
                        ['Anchovies', 9], // Below limit.
                    ]}
                    options={{
                        title: 'Popularity of Types of Pizza',
                        sliceVisibilityThreshold: 0.2, // 20%
                    }}
                    rootProps={{'data-testid': '7'}}
                />
            </div>
        );
    }

}

export default PieChart;