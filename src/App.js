import React from "react";
import routes from "./Routes";
import { useRoutes } from "react-router-dom";
import TopBar from "./Components/TopBar/TopBar";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";

export default function App() {
  let router = useRoutes(routes);
  return (
    <>
      <TopBar />
      <div className="container">
        <Sidebar />
        {router}
      </div>
    </>
  );
}
