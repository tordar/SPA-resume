import AbstractView from "./AbstractView.js";



// Add technology symbols to each card (HTML, CSS, JS, API, DB etc.)



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
                     <a href="https://github.com/tordar/Javascript-Playground" target="_blank"><i class="fab fa-github-alt fa-2x"></i></a>
                     <a href="https://tordar.github.io/Javascript-Playground/" target="_blank"><i class="fab fa-chrome fa-2x"></i></a>
                </div>
            </div>
            <div class="card">
                <div class="title">
                    <h4>Rest API Book Database </h4>
                
                    <p>Database collection of books. Allowing the user to add their own favorite books. 
                    Basic CRUD app, with RestAPI, MongoDB integration, and several features to come.</p>
                </div>
                <div class="icons">
                     <a href="https://github.com/tordar/Rest-API-Book-Repo"><i class="fab fa-github-alt fa-2x"></i></a>
                </div>
            </div>
            <div class="card">
                <div class="title">
                    <h4>Tip Calculator</h4>
                
                    <p>This was a project from <a href='https://www.frontendmentor.io/'>Frontend Mentor<a>, where I
                    developed a tip calculator based on design images.</p>
                </div>
                <div class="icons">
                     <a href="https://github.com/tordar/tip-calculator-app-main" target="_blank"><i class="fab fa-github-alt fa-2x"></i></a>
                     <a href="https://tordar.github.io/tip-calculator-app-main/" target="_blank"><i class="fab fa-chrome fa-2x"></i></a>
                </div>
            </div>
            <div class="card">
                <div class="title">
                    <h4>SPA portfolio</h4>
                
                    <p>This website was created with Express, and is built as a Single Page application</p>
                </div>
                <div class="icons">
                     <a href="https://github.com/tordar/SPA-resume" target="_blank"><i class="fab fa-github-alt fa-2x"></i></a>
                </div>
            </div>
        </div>
        
        `;
    }
}