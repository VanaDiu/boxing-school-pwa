if (
  "serviceWorker" in navigator &&
  (location.protocol === "http:" || location.protocol === "https:")
) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then(registration => {
        console.log(
          "Service Worker зарегистрирован:",
          registration.scope
        );
      })
      .catch(error => {
        console.error(
          "Ошибка регистрации Service Worker:",
          error
        );
      });
  });
}