import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super()
        this.setTitle("Skills")
    }


    async getHtml(){
        return `
        <div class="skills">
            <div class="tiles" id="1">HTML</div>
            <div class="tiles" id="2">CSS</div>
            <div class="tiles" id="3">JavaScript</div>
            <div class="tiles" id="4">Python</div>
            <div class="tiles" id="5">Web development</div>
            <div class="tiles" id="6">Cool shit</div>
            <div class="tiles" id="7">Git</div>
            <div class="tiles" id="8">Something</div>
            <div class="tiles" id="9">Else</div>
        </div>
        `;
    }
}