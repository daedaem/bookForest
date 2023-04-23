import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

const ErrorPage = () => {
  const error: any = useRouteError();
  let title = "에러가 발생했습니다!";
  let message = "문제가 발생하였습니다.";
  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "404 에러";
    message = "요청 하신 페이지는 찾을 수 없습니다.";
  }

  return (
    <>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
