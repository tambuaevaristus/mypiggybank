import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import { store } from "/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.$ = window.jQuery = require("jquery");

    import("bootstrap/dist/js/bootstrap");

    $(function () {
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
          $(".header").addClass("active");
        } else {
          //remove the background property so it comes transparent again (defined in your css)
          $(".header").removeClass("active");
        }
      });
    });

    $(".nav-link").on("click", function () {
      $(".nav-link.active-link").removeClass("active-link");
      $(this).addClass("active-link");
    });
  }, []);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
