function retrieveEmployeeInformation(){

return  document.querySelector('input').value;

}

function addNewElementAsLi(fn){
var A =  retrieveEmployeeInformation();

var B =document.querySelector('.employee-list');

var element = document.createElement('li');
  element.innerHTML = A ;

B.appendChild(element);
}

function addNewLiOnClick(){
  var A =  document.querySelector('input').value;

  var C =document.querySelector('.employee-list');

var element = document.createElement('li');
  element.innerHTML = A ;

  C.appendChild(element);
document.querySelector('input').value = "";
}

function clearEmployeeListOnLinkClick(){
  let list = document.querySelector('.employee-list')
    let button = document.querySelector('a');

    button.addEventListener('click',function(){
     list.innerHTML="";

    })
  }
