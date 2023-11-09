import React, { useEffect } from "react";
import classes from "./MainPage.module.scss";
import Header from "../../components/GlobalComponents/Header/Header";
import First from "../../components/MainPage/First/First";
import Second from "../../components/MainPage/Second/Second";
import Three from "../../components/MainPage/Three/Three";

import desk1 from "../../assets/img/4/1.png";
import Four from "../../components/MainPage/Four/Four";
const MainPage = () => {
  const deskTables = [
    {
      id: 1,
      img: desk1,
      item1: "Buy",
      item2: "15 Lot",
      item3: "98 300$",
      item4: "600$",
      item5: "760$",
      item6: "73 500$",
    },
  ];
  const mobTables = [
    {
      id: 1,
      title: "Direct",
      text: "Buy",
    },
    {
      id: 2,
      title: "Volume",
      text: deskTables[0].item2,
    },
    {
      id: 3,
      title: "Margin",
      text: deskTables[0].item3,
    },
    {
      id: 4,
      title: "S/L",
      text: deskTables[0].item4,
    },
    {
      id: 5,
      title: "T/P",
      text: deskTables[0].item5,
    },
    {
      id: 6,
      title: "Profit",
      text: deskTables[0].item6,
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={[classes.main, "bg"].join(" ")}>
      <Header />
      <First ammount={"100 000 $"} profit={"157 %"} term={"60"} />

      <Three deskTables={deskTables} mobTables={mobTables} />
      <Four title="BlackRock" />
    </div>
  );
};

export default MainPage;
