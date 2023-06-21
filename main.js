(() => {
  function radioButton(target) {
    console.log(target)
  }
  document.addEventListener("click", (event) => {
    radioButton(event);
  })
})