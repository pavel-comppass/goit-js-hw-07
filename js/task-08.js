const controlsEl = document.querySelector('#controls')
const boxesEl = document.querySelector('#boxes')

const input = controlsEl.childNodes[1]
const renderBtn = controlsEl.childNodes[3]
const clearBtn = controlsEl.childNodes[5]

renderBtn.addEventListener('click', onRenderBtnClick)
clearBtn.addEventListener('click', destroyBoxes)

function colorRandomRGB() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256,
  )}, ${Math.floor(Math.random() * 256)})`
}

function onRenderBtnClick() {
  createBoxes(Number(input.value))
}

let sizeBoxes = 30

function createBoxes(amount) {
  const collectionOfNewBoxes = []
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement('div')
    newDiv.style.backgroundColor = colorRandomRGB()
    newDiv.style.width = `${sizeBoxes}px`
    newDiv.style.height = `${sizeBoxes}px`
    sizeBoxes += 10
    collectionOfNewBoxes.push(newDiv)
  }
  boxesEl.append(...collectionOfNewBoxes)
}

function destroyBoxes() {
  boxesEl.innerHTML = ''
  sizeBoxes = 30
  input.value = ''
}
