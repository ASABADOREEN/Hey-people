function changeText(){
    var p = document.querySelector('p')
    p.textContent = 'i changed because of an event handler'
}
//a new way of defining functions;arrow function
let arrowChange = ()=>{
    const paragraph = document.querySelector('change');
    paragraph.style.border.border = '2px solid red';
    paragraph.textContent = 'i will change because of an arrow funtion';

}
