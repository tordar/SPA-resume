import Dashboard from "./views/Dashboard.js"
import Posts from "./views/Posts.js"
import Settings from "./views/Settings.js"
import Skills from "./views/Skills.js"

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [ 
        { path: '/', view: Dashboard},
        { path: '/posts', view: Posts},
        { path: '/about', view: Settings},
        { path: '/skills', view: Skills},
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener('popstate', router)

document.addEventListener("DOMContentLoaded", () => {
    // This makes the website into an SPA, by preventing refreshing the site
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")){
            e.preventDefault()
            navigateTo(e.target.href)
        }
    })
    router()
})

const app = document.getElementById('glass')
const main = document.getElementById('main')
const dashboard = document.getElementById('dashboard')
let num = 1

const darkButton = document.getElementById('darkbutton')
darkButton.addEventListener('click', ()=>{
    num++
    console.log(num)
    if (num % 2 == 0){
        app.setAttribute("style", "background:gray;");
        main.setAttribute("style", "background:black;");
        dashboard.setAttribute("style", "background:rgb(34,34,36);");
    } 
    if (num % 2 != 0) {
        app.removeAttribute("style", "background:gray;");
        main.removeAttribute("style", "background:black;");
        dashboard.removeAttribute("style", "background:rgb(34,34,36);");
    }
})

