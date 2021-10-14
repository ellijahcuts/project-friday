import React from "react";
import s from "./Error404.module.css";

export const ErrorPage = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.errorCode}>404</div>
      <div className={s.errorText}>Not Found</div>
      <img
        src="http://pngimg.com/uploads/anchor/anchor_PNG5.png"
        alt="404 bro.."
        className={s.errorImg}
      />
    </div>
  );
};
