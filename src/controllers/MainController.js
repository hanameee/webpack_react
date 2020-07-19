import KeywordView from "../views/KeywordView";
import KeywordModel from "../models/KeywordModel";

export default class MainController {
    constructor() {
        const keywordViewEl = document.querySelector("#search-keyword");
        this.keywordView = new KeywordView(keywordViewEl);
        this.renderView();
    }
    async renderView() {
        if (module.hot) {
            console.log("핫모듈 켜짐");
            module.hot.accept("../views/KeywordView.js", () => {});
            console.log("view 모듈 변경됨");
        }
        const data = await KeywordModel.list();
        this.keywordView.mount(data);
    }
}
