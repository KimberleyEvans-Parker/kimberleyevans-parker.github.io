import { Link } from "react-router-dom";

type ALinkUnderlineProps = {
  text: string;
  href: string;
  width: string;
  popout?: string;
};

export const AUnderline = ({ text, href, width, popout }: ALinkUnderlineProps) => (
  <a className={`link ${popout ? "popout-link" : ""}`} href={href} style={{ width: width}}>
    {popout && <i className={`fa fa-${popout} popout`} aria-hidden="true" />}
    <p className="link-text">
      {text}
    </p>
    <div className="link-underline"></div>
  </a>
);

export const LinkUnderline = ({ text, href, width, popout }: ALinkUnderlineProps) => (
  <Link className={`link ${popout ? "popout-link" : ""}`} to={href} style={{ width: width}}>
    {popout && <i className={`fa fa-${popout} popout`} aria-hidden="true" />}
    <p className="link-text">
      {text}
    </p>
    <div className="link-underline"></div>
  </Link>
);
