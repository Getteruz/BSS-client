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



export default function AppRouter() {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.SERVICES} element={<Services />} />
      <Route path={routes.OBJECT} element={<Object />} />

      <Route path={routes.NEWS} element={<ObjectPage />} />
      <Route path={routes.ONENEW} element={<NewsPage />} />
      <Route path={routes.CONTACT} element={<Contacts />} />
      <Route path={routes.ABOUTUS} element={<AboutUs />} />
      <Route path={routes.HELP} element={<Help />} />

    </Routes>
  );
}
