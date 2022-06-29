import { NextPage } from "next";
import React, { useCallback, useEffect, useState } from "react";
import { HeroContent } from "../components/organisms/herocontent";
import { API } from "../lib/services";
export interface commonProps {
  sliders: silderProps[];
  services: serviceProps[];
  address: string;
  appNm: string;
  createdAt: string;
  descrption: string;
  email: string;
  id: string;
  logo: null;
  map: string;
  phone: string;
}
export interface silderProps {
  title: string;
  src: string;
}
export interface serviceProps {
  title: string;
  subTitle: string;
  src: string;
}
export interface rightProps {
  title: string;
  subtitle: string;
  description: string;
}
const HomePage: NextPage = () => {
  const [homeData, sethomeData] = useState<commonProps>();
  const getcommonData = useCallback(() => {
    API.get("/v1/setting")
      .then((res) => {
        if (res.data && res.data.statusCode === 200) {
          if (res.data.data && res.data.data.length > 0) {
            sethomeData(res.data.data[0]);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getcommonData();
  }, [getcommonData]);

  return homeData ? <HeroContent {...homeData} /> : <div>loading...</div>;
};

export default HomePage;
