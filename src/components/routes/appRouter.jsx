import { Route, Routes } from "react-router-dom";

import Contacts from "../../app/Contact/Contact";
import Home from "../../app/home/home";
import ObjectPage from "../../app/Objects/Objects";
import Services from "../../app/Services/Services";
import NewsPage from "../../app/News/News"

import routes from "../../shared/constants/routes";



export default function AppRouter() {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.SERVICES} element={<Services />} />
      <Route path={routes.OBJECT} element={<ObjectPage />} />
      <Route path={routes.NEWS} element={<NewsPage />} />
      <Route path={routes.CONTACT} element={<Contacts />} />
    </Routes>
  );
}
