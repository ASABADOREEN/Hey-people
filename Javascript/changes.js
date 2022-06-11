const paragraph = document.createElement('p');
paragraph.textContent = 'Am brand new paragraph';
paragraph.style.border = '2px solid blue';
console.log(paragraph);
const body = document.querySelector('body');
body.appendChild(paragraph)
paragraph.innerHTML = 'am a paragraph with <strong>bold</strong> text';
paragraph;

const todolist = document.querySelector('ul');
const newtodolist = document.createElement('li');
const newtodolist1 = document.createElement('li');
const newtodolist2 = document.createElement('li');
const newtodolist3 = document.createElement('li');
 newtodolist.textContent = 'do homework';
 todolist.appendChild(newtodolist)
 newtodolist1.textContent = 'shower';
 todolist.appendChild(newtodolist1)
newtodolist2.textContent = 'eat';
todolist.appendChild(newtodolist2)


 var anothertodo = document.createElement('li')
  anothertodo.textContent = 'pay bills';
  
 todolist.insertBefore(anothertodo,todolist,firstElementChild);

