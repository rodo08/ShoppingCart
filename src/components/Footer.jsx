const Footer = () => {
  return (
    <div className="py-3 bg-dark d-flex justify-content-center fixed-bottom">
      <p className="fw-bolder text-white">
        Copyright &copy; {new Date().getFullYear()} - rodo08
      </p>
    </div>
  );
};

export default Footer;
