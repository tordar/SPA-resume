import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params){
        super(params)
        this.setTitle("Dashboard")
    }
    async getHtml(){
        return `
        <div class="cards">
            <div class="card">
                This website is a portfolio, based on a single page application build structure
            </div>
            <div class="card">
                Here are several posts
            </div>
        </div>
        `;
    }
}