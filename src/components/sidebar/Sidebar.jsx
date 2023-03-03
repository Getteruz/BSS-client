import { Link } from "react-router-dom";
import routes from "../../shared/constants/routes";


export default function Sidebar() {
  return (
    <ul className="SiteBar_list">
      <li className="SiteBar_list-item"> <Link className="SiteBar_list-link" to={routes.ABOUTUS}>О компании</Link></li>
      <li className="SiteBar_list-item"> <Link className="SiteBar_list-link" to={routes.SERVICES}>Услуги</Link></li>
      <li className="SiteBar_list-item"> <Link className="SiteBar_list-link" to={routes.OBJECT}>Объекты</Link></li>
      <li className="SiteBar_list-item"> <Link className="SiteBar_list-link" to={routes.NEWS}>Новости</Link></li>
      <li className="SiteBar_list-item"> <Link className="SiteBar_list-link" to={routes.CONTACT}>Контакты</Link></li>
    </ul>

  );
}
<li className="SiteBar_list-item"> <Link className="SiteBar_list-link" to={routes.NEWS}>Новости</Link></li>
