import KeywordView from "../views/KeywordView";
import KeywordModel from "../models/KeywordModel";

export default class MainController {
    constructor() {
        const keywordViewEl = document.querySelector("#search-keyword");
        this.keywordView = new KeywordView(keywordViewEl);
        this.renderView();
    }
    async renderView() {
        const data = await KeywordModel.list();
        this.keywordView.mount(data);
    }
}
