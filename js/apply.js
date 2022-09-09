window.onload = () => {
  if (!localStorage.getItem('name')) {
    window.location = 'https://fkmypass.netlify.app/js/info.html'
  }

  const today = new Date()
  const todayStr = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`

  document.querySelector('.form_select .dOutStartDate').innerText = todayStr
  document.querySelector('.form_select .dOutEndDate').innerText = todayStr

  document.querySelector('input[name=sOutAddress]').value =
    localStorage.getItem('place')
  document.querySelector('textarea').innerText = localStorage.getItem('reason')
  document.querySelector('https://fkmypass.netlify.app/js/.info_list .name').innerText =
    localStorage.getItem('name')
  document.querySelector('.info_list .number').innerText =
    localStorage.getItem('number')
  document.querySelector('.info_list .school').innerText =
    localStorage.getItem('school')
  document.querySelector('.info_list .grade').innerText =
    localStorage.getItem('grade')
  document.querySelector('https://fkmypass.netlify.app/js/.info_list .type').innerText =
    localStorage.getItem('type')
}
