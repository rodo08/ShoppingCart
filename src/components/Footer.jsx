import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-3 bg-dark d-flex justify-content-center align-items-center fixed-bottom">
      <p className="fw-bolder text-white" style={{ margin: 0 }}>
        <Link
          to="https://github.com/rodo08"
          className="text-white text-decoration-none hover-link"
        >
          Copyright &copy; {new Date().getFullYear()} - rodo08
        </Link>
      </p>
    </div>
  );
};

export default Footer;
