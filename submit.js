const scriptURL = 'https://script.google.com/macros/s/AKfycbxPWSqKTAQvg_oDdAreE40HwIbEbdIbstHAcM6zwwQjEEH08sVcFwt6MGUokWv46jHn/exec'
const form = document.querySelector('#form')
const btn = document.querySelector('#submit')

form.addEventListener('submit', e => {
  e.preventDefault()
  btn.disabled = true
  btn.innerHTML = "Loading..."

  console.log(form)
  const formData = new FormData(form)
  const fileInput = document.querySelector('#file')
  formData.append('File', fileInput.files[0])
  fetch(scriptURL, { method: 'POST', body: formData })
    .then(response => { 
      btn.disabled = false
      btn.innerHTML = "Submit"
      alert('Success!', response) 
    })
    .catch(error => {
      btn.disabled = false
      btn.innerHTML = "Submit"
      alert('Error!', error.message)
    })
})
