import React from "react";
import Chart from "react-google-charts";

export function LineGraph() {
    return (<Chart
        width={900}
        height={800}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={[
            [
                { id: 'i0', type: 'number', label: 'values' },
                { id: 'i1',  type: 'number', label: 'values' },

            ],
            [1,2],
            [2,3],
            [3,4],
            [4,5]


        ]}
        options={{
            intervals: { style: 'sticks' },
            legend: 'none',
        }}
    />)

}