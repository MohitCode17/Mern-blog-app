import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      {/* Header */}
      <Header />
      <div>{children}</div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Layout;
