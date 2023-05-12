import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import routes from "../../shared/constants/routes";


export default function Sidebar({ color }) {
  const { t } = useTranslation()

  return (
    <ul className="SiteBar_list ">
      <li className="SiteBar_list-item"> <Link className={`SiteBar_list-link ${color}`} to={routes.ABOUTUS}>{t('aboutCompany')}</Link></li>
      <li className="SiteBar_list-item"> <Link className={`SiteBar_list-link ${color}`} to={routes.SERVICES}>{t('service')}</Link></li>
      <li className="SiteBar_list-item"> <Link className={`SiteBar_list-link ${color}`} to={routes.OBJECT}>{t('object')}</Link></li>
      <li className="SiteBar_list-item"> <Link className={`SiteBar_list-link ${color}`} to={routes.NEWS}>{t('news')}</Link></li>
      <li className="SiteBar_list-item"> <Link className={`SiteBar_list-link ${color}`} to={routes.CONTACT}>{t('contact')}</Link></li>
    </ul>

  );
}
