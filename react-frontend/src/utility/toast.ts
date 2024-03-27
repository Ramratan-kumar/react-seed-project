import React from "react"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

class Toasts {

  notify(message: string, type: string = "success", position: any = "top-right", theme: any = "dark") {
    switch (type) {
      case "success": toast.success(message, {
        "position": position,
        "theme": theme,
        // className: 'foo-bar'
      });
        break;
      case "warn": toast.warn(message, {
        "position": position,
        "theme": theme
      });
        break;
      case "error":
        toast.error(message, {
          "position": position,
          "theme": theme
        });
        break;
      case "info":
        toast.info(message, {
          "position": position,
          "theme": theme
        });
        break;
      default: toast(message);
    }
  };
}

export default Toasts;