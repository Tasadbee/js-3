var elWrapper = document.querySelector('.wrapper')
var elMShadow = document.querySelector('.modal__shadow')
var elBody = document.querySelector('body')
function openModal(){
    elWrapper.classList.add('modal__wrapper__open')
    elMShadow.classList.add('modal__shadow__box')
    elBody.style = 'overflow: hidden;'
}
function closeModal(){
    elWrapper.classList.remove('modal__wrapper__open')
    elMShadow.classList.remove('modal__shadow__box')
    elBody.style = 'overflow: auto;'

}