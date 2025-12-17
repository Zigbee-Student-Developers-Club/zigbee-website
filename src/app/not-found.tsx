import ErrorPage from "@/components/commons/ErrorPage";

const NotFound = () => {
  return (
    <ErrorPage
      description="Sorry, but we can't find the page you are looking for..."
      statusCode={404}
      title="Page Not Found"
    />
  );
};

export default NotFound;
