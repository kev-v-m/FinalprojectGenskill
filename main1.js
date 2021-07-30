/*7 delcarations for each day of the week. only executes adding task,striking task and deleting task*****************/


let addToDoButton1 = document.getElementById('addToDo1');
let toDoContainer1 = document.getElementById('toDoContainer1');
let inputField1 = document.getElementById('inputField1');

addToDoButton1.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField1.value;
    toDoContainer1.appendChild(paragraph);
    inputField1.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer1.removeChild(paragraph);
    })
})

let addToDoButton2 = document.getElementById('addToDo2');
let toDoContainer2 = document.getElementById('toDoContainer2');
let inputField2 = document.getElementById('inputField2');

addToDoButton2.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField2.value;
    toDoContainer2.appendChild(paragraph);
    inputField2.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer2.removeChild(paragraph);
    })
})

let addToDoButton3 = document.getElementById('addToDo3');
let toDoContainer3 = document.getElementById('toDoContainer3');
let inputField3 = document.getElementById('inputField3');

addToDoButton3.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField3.value;
    toDoContainer3.appendChild(paragraph);
    inputField3.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer3.removeChild(paragraph);
    })
})

let addToDoButton4 = document.getElementById('addToDo4');
let toDoContainer4 = document.getElementById('toDoContainer4');
let inputField4 = document.getElementById('inputField4');

addToDoButton4.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField4.value;
    toDoContainer4.appendChild(paragraph);
    inputField4.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer4.removeChild(paragraph);
    })
})

let addToDoButton5 = document.getElementById('addToDo5');
let toDoContainer5 = document.getElementById('toDoContainer5');
let inputField5 = document.getElementById('inputField5');

addToDoButton5.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField5.value;
    toDoContainer5.appendChild(paragraph);
    inputField5.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer5.removeChild(paragraph);
    })
})

let addToDoButton6 = document.getElementById('addToDo6');
let toDoContainer6 = document.getElementById('toDoContainer6');
let inputField6 = document.getElementById('inputField6');

addToDoButton6.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField6.value;
    toDoContainer6.appendChild(paragraph);
    inputField6.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer6.removeChild(paragraph);
    })
})


let addToDoButton7 = document.getElementById('addToDo7');
let toDoContainer7 = document.getElementById('toDoContainer7');
let inputField7 = document.getElementById('inputField7');

addToDoButton7.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField7.value;
    toDoContainer7.appendChild(paragraph);
    inputField7.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer7.removeChild(paragraph);
    })
})

/*executes local storage*******************************************************************/

/*const inpValue=document.getElementById("inputField1");
const btnInsert=document.getElementById("addToDo1");
const lsoutput=document.getElementById("toDoContainer1");


btnInsert.onclick=function(){

const value=inpValue.value;
console.log(value);*/


/*if(inpvalue.value){
let k=1;
console.log(k);
localStorage.setItem(k,value);
k=k+1;
location.reload();

for(let i=0;i<localStorage.length;i++){
const key=localStorage.k(i);
const value=localStorage.getItem(value);
lsOutput.innerHTML+=`${key}:${value} </br>`;

}

}
}*/

/*const inpValue=document.getElementById("inputField1");
const btnInsert=document.getElementById("addToDo1");
const lsoutput=document.getElementById("toDoContainer1");
 let k=1;

btnInsert.onclick=function()
{
  
  const value=inpValue.value;
  console.log(value);
 
  if(!value)  
    {
    
    console.log(k);
      k=k+1;
      console.log(value);
    }
}*/

