const changeText = ()=>{
    var p = document.querySelector('p')
    p.textContent = 'I changed because of an event listener';
}

//listen for click event

const button = document.querySelector('button');
button.addEventListener('click ', changeText)