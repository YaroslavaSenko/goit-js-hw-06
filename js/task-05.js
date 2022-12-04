const inputEl = document.querySelector('#name-input')
const spanEl = document.querySelector('#name-output')

inputEl.addEventListener("input", (event) => {
    if (spanEl.textContent = event.currentTarget.value) {
        return event.currentTarget.value
    }
    return spanEl.textContent = "Anonymous"
  });

