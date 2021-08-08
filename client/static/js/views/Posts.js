import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super()
        this.setTitle("Dashboard")
    }
    async getHtml(){
        return `
        Here are several posts
        `;
    }
}