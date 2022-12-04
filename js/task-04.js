let counterValue = 0

const counter = document.querySelector('#value')
const minus = document.querySelector('button[data-action="decrement"]')
const plus = document.querySelector('button[data-action="increment"]')

minus.addEventListener('click', () => {
 counterValue--
 counter.textContent = counterValue
})

plus.addEventListener('click', () => {
 counterValue++
 counter.textContent = counterValue

})