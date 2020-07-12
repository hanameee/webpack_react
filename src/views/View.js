export default class View {
    constructor(el) {
        if (!el) throw el;
        this.el = el;
        return this;
    }
}
