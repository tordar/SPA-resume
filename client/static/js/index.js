import dashboard from "./views/Dashboard.js"
import posts from "./views/Posts.js"
import settings from "./views/Settings.js"
import skills from "./views/Skills.js"

const navigateTo = url => {
    history.pushState(null, null, url)
    router()
}

const router = async () => {
    const routes = [ 
        { path: '/', view: dashboard},
        { path: '/posts', view: posts},
        { path: '/about', view: settings},
        { path: '/skills', view: skills},

    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route, 
            isMatch: location.pathname === route.path
        }
    })

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)
    
    if (!match){
        match = {
            route: routes[0], isMatch: true
        }
    }

    const view = new match.route.view()

    document.querySelector('#app').innerHTML = await view.getHtml()

}

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