import ReactECharts from 'echarts-for-react';
import { useRef } from 'react';
import type { ECharts } from 'echarts';

interface ChartRef {
    getEchartsInstance: () => ECharts;
}

interface BarChartProps {
    data: {
        seriesData: number[];
        xAxisData: string[];
    };
}

const BarChart = ({ data }: BarChartProps) => {
    const chartRef = useRef<ChartRef | null>(null);

    return (
        <div>
            <ReactECharts
                ref={(e) => { chartRef.current = e; }}
                option={{
                    xAxis: {
                        type: 'category',
                        data: data.xAxisData,
                    },
                    yAxis: {
                        type: 'value',
                    },
                    series: [
                        {
                            data: data.seriesData,
                            type: 'bar'
                        }
                    ],
                }}
            />
        </div>
    );
};

export default BarChart;