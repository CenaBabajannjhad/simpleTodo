let addButton = document.getElementById('add');
let input = document.getElementById('input');
let root = document.getElementById('root');


addButton.addEventListener('click' , init)


function init(){
    let inputValue = input.value;
    Dom(inputValue)
    resetInput()
}


function Dom(value){

    let li = document.createElement('li');
    let valueContainer = document.createElement('input');
    let deleteBtn = document.createElement('button');
    let editBtn = document.createElement('button');
    let compliteBtn = document.createElement('button');

    // append
    root.appendChild(li);
    li.appendChild(valueContainer);
    li.classList.add('li');
    valueContainer.value = value;
    valueContainer.classList.add('value-container')
    valueContainer.setAttribute('readonly' , 'readonly')
    li.appendChild(deleteBtn);
    deleteBtn.textContent = 'delete'
    deleteBtn.id = 'delete'
    li.appendChild(editBtn);
    editBtn.textContent = 'edit'
    editBtn.id = 'edit'
    li.appendChild(compliteBtn);
    compliteBtn.textContent = 'complite'
    compliteBtn.id = 'complite'
}

document.getElementById('root').addEventListener('click' , (event) => {
    if(event.target.id === 'delete'){
        event.target.parentElement.remove()


    }else if(event.target.id === 'edit'){
        let doneBtn = document.createElement('button')
        doneBtn.textContent = 'DONE'
        doneBtn.classList.add('done')
        root.appendChild(doneBtn)
        
        event.target.previousElementSibling.previousElementSibling.removeAttribute('readonly' , 'readonly')
        event.target.previousElementSibling.previousElementSibling.focus();
        doneBtn.addEventListener('click' , () => {
            event.target.previousElementSibling.previousElementSibling.setAttribute('readonly' , 'readonly');
            doneBtn.remove()
        })


    }else if(event.target.id === 'complite'){
        event.target.previousElementSibling.previousElementSibling.previousElementSibling.classList.toggle('complite')
    }

})




function resetInput(){
    document.getElementById('input').value = '';
}