import { Route, Routes } from "react-router-dom";

import Contacts from "../../app/Contact/Contact";
import Home from "../../app/home/home";
import ObjectPage from "../../app/Objects/Objects";
import Services from "../../app/Services/Services";
import NewsPage from "../../app/News/News"
import Object from "../../app/object/Object"
import routes from "../../shared/constants/routes";
import AboutUs from "../../app/AboutUs/AboutUs";
import Help from "../../app/Help/Help";
import { useEffect, useState } from "react";
import { GetAboutUs } from "../../shared/api/aboutUs";
import { GetService } from "../../shared/api/service";
import { GetObjects } from "../../shared/api/object";
import { GetNews } from "../../shared/api/news";
import ServicePage from "../../app/Service/Service";
import ObjectOnePage from "../../app/ObjectOne/News";




export default function AppRouter() {

  const [aboutus, setAboutus] = useState([])
  const [service, setService] = useState([])
  const [object, setObject] = useState([])
  const [news, setNews] = useState([])
  useEffect(() => {
    const fetchNews = async () => {
      const data = await GetAboutUs();

      setAboutus(data.aboutus[0])
    }
    const fetchService = async () => {
      const data = await GetService();
      setService(data?.service)

    }
    const fetchObjects = async () => {
      const data = await GetObjects();
      setObject(data?.object)

    }
    const fetchNew = async () => {
      const data = await GetNews();
      setNews(data?.news)

    }
    fetchNews()
      .then((err) => {
        console.log("err");
      })
    fetchService()
      .then((err) => {
        console.log("err");
      })
    fetchObjects()
      .then((err) => {
        console.log("err");
      })
    fetchNew()
      .then((err) => {
        console.log("err");
      })
  }, []);

  return (
    <Routes>
      <Route path={routes.HOME} element={<Home service={service} news={news} object={object} />} />
      <Route path={routes.SERVICES} element={<Services service={service} aboutus={aboutus} />} />
      <Route path={routes.SERVICES + '/:id'} element={<ServicePage object={object} />} />
      <Route path={routes.OBJECT} element={<Object object={object} aboutus={aboutus} />} />
      <Route path={routes.OBJECT + '/:id'} element={<ObjectOnePage object={object} />} />
      <Route path={routes.NEWS} element={<ObjectPage news={news} />} />
      <Route path={routes.NEWS + '/:id'} element={<NewsPage object={object} />} />
      <Route path={routes.CONTACT} element={<Contacts />} />
      <Route path={routes.ABOUTUS} element={<AboutUs aboutus={aboutus} object={object} />} />
      <Route path={routes.HELP} element={<Help />} />
    </Routes>
  );
}
