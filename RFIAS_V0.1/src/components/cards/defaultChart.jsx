import React from 'react';
import {LineChart} from '@mui/x-charts/LineChart';

function DefaultChart() {

    return (
        <LineChart
            xAxis={[{data: [1, 2, 3, 5, 8, 10]}]}
            series={[
                {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                    color: '#664898'
                },
            ]}
        />
    );
}


export default DefaultChart;