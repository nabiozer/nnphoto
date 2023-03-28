// import FusionCharts from 'fusioncharts';
// import Charts from 'fusioncharts/fusioncharts.charts';
// import ReactFC from 'react-fusioncharts';
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
// import { FC } from 'react';

import { FC } from "react";

// ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

// interface IChart {
//     theme: string;
//     bgColor?: string;
//     usePlotGradientColor?: string;
//     palettecolors?: string;
//     PlotGradientColor?: string;
//     showLegend?: string;
//     outCnvBaseFontColor?: string;
// }
// interface IDataSource {
//     chart: IChart;
//     data: any;
// }
// interface IProps {
//     type: string;
//     width: string;
//     height: string;
//     dataFormat: string;
//     dataSource: IDataSource;
// }

const Chart: FC<any> = ({ ...props }: any) => {
    return (
        <div className="chart-box">
           x
        </div>
    );
};

export default Chart;
