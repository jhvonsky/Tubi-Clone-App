import { default as templating } from "./template.js";
import { default as defaultTemplate } from "./default.js";
const homeApiUrl = 'https:api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const img_url = 'https://image.tmdb.org/t/p/w1280';
const api_url = 'https://api.themoviedb.org/3/';
const api_key = '04c35731a5ee918f014970082a0088b1';
const wrapper = document.querySelector('main');
const input = document.querySelector('.form-control');

input.addEventListener('input', fetchData)

function fetchData() {
    const value = input.value
    fetch(`https://api.themoviedb.org/3/search/movie?&api_key=${api_key}&query=${value}`)
        .then(res => res.json())
        .then(res => {
            const returnValue = res.results
            document.querySelector('.main-header').style.display = 'none'
            wrapper.innerHTML = `
                <div class="container">
                    <div class="row my-3 m-auto">
                        <h6 class="card-subtitle mb-2 text-muted">Result for</h6>
                        <h1>${value}</h1>
                    </div>
                    <div class="row m-auto">
                        ${templating(returnValue) || `<h3 class="pb-3">Not Matches</h3>`}
                    </div>
                </div>
            `
        })
        .catch(res => {
            wrapper.innerHTML = defaultTemplate()
        })
}

export { wrapper, fetchData, img_url, input }