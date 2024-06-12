import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  let title = "An error occured!";
  let message = "Failed to fetch events";
  const error = useRouteError();
  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "File not found";
    message = "could not locate URL";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>{message}</PageContent>
    </>
  );
}
