const textRef = document.querySelector('#text')
const fontSizeRef = document.querySelector('#font-size-control')

fontSizeRef.addEventListener('input', onInputChange)

function onInputChange() {
  textRef.setAttribute('style', `font-size: ${fontSizeRef.value}px`)
}
