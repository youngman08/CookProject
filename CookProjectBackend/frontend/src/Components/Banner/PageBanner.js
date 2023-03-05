import { Link } from "react-router-dom";
import background from "../../images/hero-search.jpg";
import { Link as Links } from "@mui/material/Link";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const PageBanner = ({ pageTitle, pageName }) => {
  return (
    <div className="page-banner-area rel z-1 text-white text-center">
      <div className="container">
        <div className="banner-inner rpt-10">
          <h2 className="page-title wow fadeInUp delay-0-2s">
            {pageTitle ? pageTitle : pageName}
          </h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb wow fadeInUp delay-0-4s">
              <li className="breadcrumb-item">
                <Link to="/">
                  <a>خانه</a>
                </Link>
              </li>
                <ArrowBackIcon fontSize="small" />
              <li className="breadcrumb-item active">{pageName}</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default PageBanner;
