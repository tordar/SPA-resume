import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params){
        super(params)
        this.setTitle("Projects")
    }
    async getHtml(){
        return `
        <div class="cards">
            <div class="card">
                <div class="title">
                    <h4>JavaScript Playground</h4>
                
                    <p>This project was first started when I got into writing JavaScript. This has been my go-to
                    place for exploring different JS skills. It mainly consists of different types of DOM manipulation
                    techniques, a couple of simple games and some experimentation with fetch and Ajax by utilising 
                    different APIs. Very informal project that I use to play around with.</p>
                </div>
                <div class="icons">
                     <a href="https://github.com/tordar/Javascript-Playground"><i class="fab fa-github-alt fa-2x"></i></a>
                     <a href="https://tordar.github.io/Javascript-Playground/"><i class="fab fa-chrome fa-2x"></i></a>
                </div>
            </div>
            <div class="card">
                <div class="title">
                    <h4>Rest API Book Database </h4>
                
                    <p>Project I have worked on </p>
                </div>
                <div class="icons">
                     <a href="https://github.com/tordar/Rest-API-Book-Repo"><i class="fab fa-github-alt fa-2x"></i></a>
                </div>
            </div>
        </div>
        
        `;
    }
}