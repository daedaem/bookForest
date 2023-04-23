import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { getToken } from "../utils/token";
import { useEffect } from "react";

interface GeneralLayoutProps {
  children: any;
  withAuth?: boolean;
}

const GeneralLayout = ({ withAuth, children }: GeneralLayoutProps) => {
  const isToken = getToken();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (withAuth && !isToken) {
      navigate("/login");
    } else if (
      (location.pathname === "/login" || location.pathname === "/signup") &&
      isToken
    ) {
      navigate("/");
    }
  }, [isToken, withAuth, children.type.name, navigate]);

  return (
    <>
      <Header />
      <section>{children}</section>
    </>
  );
};
export default GeneralLayout;
