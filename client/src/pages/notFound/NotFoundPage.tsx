import { Typography } from "@material-ui/core";
import styles from "./NotFoundPage.module.css";

export const NotFoundPage = () => {
  const { notFoundWrapper, pageNotFoundTitle } = styles;

  return (
    <div className={notFoundWrapper}>
      <Typography component="h1" className={pageNotFoundTitle}>Page not found</Typography>
      <Typography component="h1">What are you looking for?</Typography>
      <img src="logo.gif"/>
    </div>
  );
};
