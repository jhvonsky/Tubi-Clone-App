import * as getData from './script.js'

export default function (values) {
    let refill = ''
    let objectValue = values
    objectValue.forEach(value => {
        const year = value.release_date.split('').join('')[0] + value.release_date.split('').join('')[1] + value.release_date.split('').join('')[2] + value.release_date.split('').join('')[3];
        refill += `
                    <div class="col-sm-12 col-lg-4 col-xl-3 mx-2 ">
                        <div class="card my-5" style="width: 18rem;">
                            <img src="${getData.img_url+value.poster_path}" class="card-img-top" alt="${value.title} Image">
                                <div class="card-body">
                                    <h5 class="card-title">${value.original_title}</h5>
                                    <p class="card-text">(${year})</p>
                                    <h6 class="card-subtitle mb-2 text-muted">Vote average : ${value.vote_average}</h6>
                                    <h6 class="card-subtitle mb-2 text-muted">Vote count : ${value.vote_count}</h6>
                                </div>
                        </div>
                    </div>
                    `
    })
    return refill
}