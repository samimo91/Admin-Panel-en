import React from "react";
import Features from "../../Components/Features/Features";
import Chart from "../../Components/Chart/Chart";
import WidgetSm from "../../Components/WidgetSm/WidgetSm";
import WidgetLg from "../../Components/WidgetLg/WidgetLg";
import { xAxisData } from "../../data";

import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Features />
      <Chart grid title="Month Sale" data={xAxisData} dataKey="sale" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
