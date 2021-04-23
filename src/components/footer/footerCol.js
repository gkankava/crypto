import { footerLinks } from "./footerLinks";
import { Link } from "react-router-dom";

let keys = Object.keys(footerLinks);

export const columns = keys.map((k, i) => (
  <div className="col col-container">
    <span className="col-title">{k}</span>
    <ul className="col-items">
      {footerLinks[k].map((item, key) => (
        <li key={key}>
          <Link to={item.path}>{item.title}</Link>
        </li>
      ))}
    </ul>
  </div>
));
