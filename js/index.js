import { imgArray } from "./data.js";

const imgSection = document.getElementById('photo-section')
const pictureModal = document.getElementById('modal-wrapper')
const rdmBtn = document.getElementById('rdm-btn')


document.addEventListener("click", e => {
    e.target.dataset.uuid ? displaySelectedImg(filterArray(e.target))  + console.log(filterArray(e.target)):
    e.target === pictureModal  ? popupDisplayToggle() : 
    [...e.target.classList].includes('x-btn') ? popupDisplayToggle() :
    e.target === rdmBtn ? imgSection.innerHTML = photoCardsArr.sort(() => Math.random() - .5).join('') 
    : ''
})


const photoCardsArr = imgArray.map(photo => {
    return `
        <div class="photo-container ${randomizePictureDisplay(photo.style)}" tabindex="1" data-uuid="${photo.id}">
            <img class="photo " src="${photo.src}" data-uuid="${photo.id}" alt="${photo.desc}" loading="lazy"/>
        </div>
        `
})
function renderImages() {
   imgSection.innerHTML = photoCardsArr.join('')
   initShuffle(photoCardsArr)
}

function filterArray(eventTarget) {
    return imgArray.find(photo => eventTarget.dataset.uuid === photo.id)
}

function displaySelectedImg(i) {
    popupDisplayToggle()
    pictureModal.innerHTML = `
    <div class="pop-up">
        <button class="x-btn">X</button>
        <img class="modal-img" src="${i.src}" alt="${i.desc}">
        <p class="photo-desc">${i.desc}</p>
        </div>`
}

function popupDisplayToggle() {
    pictureModal.classList.toggle('hidden')
}

function randomizePictureDisplay(style) {

    const r = Math.floor(Math.random() * 3) // Obtain random number 0-3

    r === 1 ? style = 'wide' :
    r === 2 ? style = 'tall' :
    r === 3 ? style = 'large' : 
    style = `` // Plug in random number, return value as picture style class, used in photoCardsArr

    return style
}

function initShuffle(arr) {

    const arrShuffled = Array.from(arr)

    setTimeout(() => {imgSection.innerHTML = arrShuffled.join('')}, 2000)
    setTimeout(() => imgSection.innerHTML = arr.sort(() => Math.random() -.5).join(''))
    setTimeout(() => {imgSection.innerHTML = arr.join('')}, 4000)
    console.log(arrShuffled, arr)
}



renderImages()