import "./styles/index.css";

function getController() {
    return import(
        /* webpackChunkName: "controller" */ "./controllers/MainController.js"
    ).then((m) => {
        return m.default;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    getController().then((controller) => {
        controller.init(document.querySelector("#app"));
    });
});
