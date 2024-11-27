import { imgArray } from "./data.js";

const imgSection = document.getElementById('photo-section')
const pictureModal = document.getElementById('modal-wrapper')
const rdmBtn = document.getElementById('rdm-btn')

document.addEventListener("click", e => {
    e.target.dataset.uuid ? displaySelectedImg(filterArray(e.target))  + console.log(filterArray(e.target)):
    e.target === pictureModal ? popupDisplayToggle() : 
    e.target === rdmBtn ? imgSection.innerHTML = photoCardsArr.sort(() => Math.random() - .5).join('') 
    : ''
})

const photoCardsArr = imgArray.map(photo => {
    return `
        <div class="photo-container ${photo.style}" tabindex="1" data-uuid="${photo.id}">
            <img class="photo " src="${photo.src}" data-uuid="${photo.id}" alt="${photo.desc}"/>
            <div class="photo-info" >
                
            </div>
        </div>
        `
    })

function filterArray(eventTarget) {
    return imgArray.filter(photo => eventTarget.dataset.uuid === photo.id)[0]
}

function renderImages() {
   imgSection.innerHTML = photoCardsArr.join('')
}

function displaySelectedImg(i) {
    popupDisplayToggle()
    pictureModal.innerHTML = `
    <div class="pop-up">
        <img class="modal-img" src="${i.src}" alt="one">
        <p class="photo-desc">${i.desc}</p>
        </div>`
}

function popupDisplayToggle() {
    pictureModal.classList.toggle('hidden')
}

// function randomizePictureDisplay(style) {

//     const r = Math.floor(Math.random() * 3)

//     if ( r === 0) {
//         style = ''
//     } else if ( r === 1) {
//         style = 'wide'
//     } else if (r === 2) {
//         style = 'tall'
//     } else {
//         style = 'large'
//     }

//     return style
// }

renderImages()