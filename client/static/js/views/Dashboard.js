import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super()
        this.setTitle("Dashboard")
    }
    async getHtml(){
        return `
        This is a single page application
        <p>Go to <a href="/posts">this link</a> for posts</p>
        <p>Go to <a href="/about">this link</a> for more information</p>
        
        `;
    }
}