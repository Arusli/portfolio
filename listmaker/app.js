let addItemInput = document.querySelector('.addItemInput');
let addButton = document.querySelector('.addButton');
let list = document.querySelector('ul');
let clearButton = document.querySelector('.clearButton');
let li = document.querySelector('li');
let ul = document.querySelector('.ul');

//focuses field

addItemInput.focus();

//click//

addButton.addEventListener('click', (e) => {
    if (addItemInput.value !== "" && e.type === 'click') {
    let itemText = addItemInput.value;
    let newItem = document.createElement('li')
    newItem.innerHTML = '<button class="newButton"></button>' + itemText;
    list.appendChild(newItem);
    addItemInput.value = "";
    
    // newItem.addEventListener('click', () => {
    //     // newItem.innerHTML = '<s>' + itemText + '</s>';
    //     newItem.style.color = 'grey';
    //     newItem.style.fontSize = '1.25rem';
    //     newItem.firstElementChild.style.backgroundColor = 'grey';
    // });
    }
});

//keydown//

addItemInput.addEventListener('keydown', (e) => {
    if (addItemInput.value !== "" && e.keyCode === 13) {
        let itemText = addItemInput.value;
        let newItem = document.createElement('li')
        newItem.innerHTML = '<button class="newButton"></button>' + itemText;
        list.appendChild(newItem);
        addItemInput.value = "";
        
        // newItem.addEventListener('click', () => {
        //     newItem.innerHTML = '<s>' + itemText + '</s>';
        //     newItem.style.color = 'grey';
        //     newItem.style.fontSize = '1.25rem';
        //     newItem.firstElementChild.style.backgroundColor = 'grey';
        // });
        // somehow this lets you check off list items with the return key... can't figure out another way.
    }
});

//moved the check items listener outside of the add items function using e.target
ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.style.color = 'grey';
        e.target.style.fontSize = '1.25rem'
        e.target.firstElementChild.style.backgroundColor = 'grey';
    }
});

//attempting to use return key to check off list items. dont understand. something to do with event bubbling?
ul.addEventListener('keydown', (e) => {
    if (e.keycode === 13 && e.target.tagName === 'LI') {
        e.target.style.color = 'grey';
        e.target.style.fontSize = '1.25rem'
        e.target.firstElementChild.style.backgroundColor = 'grey';
    }
});


//clear//

clearButton.addEventListener('click', () => {
    list.innerHTML = "";
});

//somehow this works with return key even though it is not set to have an event listener for return key... because it is a button?
