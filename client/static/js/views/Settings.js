import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params){
        super(params)
        this.setTitle("About")
    }

    async getHtml(){
        return `
        <div class="cards">
            <div class="card">
                Generelt en snill gutt
            </div>
        </div>
        `;
    }
}