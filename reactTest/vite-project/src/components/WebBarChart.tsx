import React from 'react';

interface WebBarChartProps {
    data: {
        seriesData: number[];
        xAxisData: string[];
    };
}

export const WebBarChart: React.FC<WebBarChartProps> = ({ data }) => {
    return React.createElement('web-bar-chart', { data });
}; 