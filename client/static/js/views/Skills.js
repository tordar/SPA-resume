import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params){
        super(params)
        this.setTitle("Skills")
    }

    


    async getHtml(){
        function resolveAfter2Seconds() {
            return new Promise(resolve => {
              setTimeout(() => {
                // let x = document.getElementsByClassName('tiles')
                let information = document.querySelector('.information')
                information.addEventListener('click', ()=>{
                    information.innerHTML = 'hello'
                })
                // for(let i = 0; i<x.length; i++){
                    
                // }
                resolve('resolved');
              }, 100);
            });
          }
          
          async function asyncCall() {
            console.log('calling');
            const result = await resolveAfter2Seconds();
            console.log(result);
          }
          asyncCall();
          
        
        return `
        <div class="skills">
            <div class="tiles" id="1">
                <p class="information">HTML</p>
            </div>
            <div class="tiles" id="2">
                <p>CSS</p>
            </div>
            <div class="tiles" id="3">
                <p>JavaScript</p>
            </div>
            <div class="tiles" id="4">
                <p>Python</p>
            </div>
            <div class="tiles" id="5">
                <p>Web development</p>
            </div>
            <div class="tiles" id="6">
                <p>Design</p>
            </div>
            <div class="tiles" id="7">
                <p>Git</p>
            </div>
            <div class="tiles" id="8">
                <p>Azure</p>
            </div>
            <div class="tiles" id="9">
                <p>Cloud</p>
            </div>
        </div>
        `;
    }
}