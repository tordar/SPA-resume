import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super()
        this.setTitle("Dashboard")
    }
    async getHtml(){
        return `
        <div class="cards">
            <div class="card">
                This is a single page application
            </div>
            <div class="card">
                Here are several posts
            </div>
        </div>
        <div class="cards">
            <div class="card">
                This is a single page application
            </div>
            <div class="card">
                Here are several posts
            </div>
        </div><div class="cards">
        <div class="card">
            This is a single page application
        </div>
        <div class="card">
            Here are several posts
        </div>
    </div><div class="cards">
    <div class="card">
        This is a single page application
    </div>
    <div class="card">
        Here are several posts
    </div>
</div><div class="cards">
<div class="card">
    This is a single page application
</div>
<div class="card">
    Here are several posts
</div>
</div><div class="cards">
<div class="card">
    This is a single page application
</div>
<div class="card">
    Here are several posts
</div>
</div><div class="cards">
<div class="card">
    This is a single page application
</div>
<div class="card">
    Here are several posts
</div>
</div><div class="cards">
<div class="card">
    This is a single page application
</div>
<div class="card">
    Here are several posts
</div>
</div><div class="cards">
<div class="card">
    This is a single page application
</div>
<div class="card">
    Here are several posts
</div>
</div><div class="cards">
<div class="card">
    This is a single page application
</div>
<div class="card">
    Here are several posts
</div>
</div>  
        
       
        `;
    }
}
{/* <div class="row">
<div class="col s6 ">
  <div class="card">
    <div class="card-image">
      <img src="https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80">
      <span class="card-title">Card Title</span>
    </div>
    <div class="card-content">
      <p>Some information can go here</p>
    </div>
    <div class="card-action">
      <a href="/posts">This is the link for posts</a>
    </div>
  </div>
</div>
<div class="col s6 ">
  <div class="card">
    <div class="card-image">
      <img src="https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80">
      <span class="card-title">Card Title</span>
    </div>
    <div class="card-content">
      <p>Some information can go here</p>
    </div>
    <div class="card-action">
      <a href="/posts">This is the link for posts</a>
    </div>
  </div>
</div>
</div>
</div> */}