function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector('input')

function retrieveEmployeeInformation(){
  return input.value
}

function addNewElementAsLi(){
  let empName = retrieveEmployeeInformation()
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${empName}</li>`);
}

function addNewLiOnClick(){
  let submit = document.querySelector('input[type="submit"]')
  submit.addEventListener('click', function(event){
    addNewElementAsLi();
    clearValue();

  });
}
function clearValue(){
  document.querySelector('input').value = '';
}
function clearEmployeeListOnLinkClick(){
  let anchor = document.querySelector('a')
  let ul = document.querySelector('ul')
  anchor.addEventListener('click', function(event){
    ul.innerHTML = '';
  })
}
