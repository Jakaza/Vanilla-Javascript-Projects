
const listContainer = document.querySelector('.list');
const formContainer = document.getElementById('form-container')
const addButton = document.querySelector('.add')
const updateButton = document.querySelector('.update')

let items;

// load data from localstorage
(function () {
    let listItems = JSON.parse(localStorage.getItem('list'))

    if (listItems) {
        items = [...listItems]
        displayAllItems(items)
    } else {
        items = []
    }
}())


formContainer.addEventListener('submit', function (el) {
    el.preventDefault();
    const snipet = formContainer['text'].value;

    if (validateInput(snipet)) {

        const data = newItem(snipet)
        addNewItem(data)

        //load store data to localstorage
        items.push(data)
        console.log(items);
        localStorage.setItem('list', JSON.stringify(items));
        formContainer.reset();

    } else {
        alert('Invalid text... max length of 4')
    }
})



function validateInput(snipet) {
    if (snipet && snipet.length > 3)
        return true

    return false
}

function newItem(snipet) {
    const data = {
        id: generateItemId(),
        text: snipet,
        time: new Date()
    }
    return data;
}


const select = document.getElementById('sort-option')

// Sort items
select.addEventListener('change', function () {

    sort(items, parseInt(this.value))
    listContainer.innerHTML = ""
    displayAllItems(items)
    localStorage.setItem('list', JSON.stringify(items));

})


// select.onchange = sortListBy

function addNewItem(item) {
    const li = document.createElement('li')
    const p = document.createElement('p')
    li.setAttribute('data-id', item.id)
    p.textContent = item.text;
    li.appendChild(p)
    const span = document.createElement('span')
    span.classList.add('delete')
    p.textContent = item.text;
    span.textContent = "delete";
    li.appendChild(span)
    listContainer.append(li);

    span.addEventListener('click', deleteItem);
}

function displayAllItems(items) {
    items.forEach(data => {
        const li = document.createElement('li')
        const p = document.createElement('p')
        li.setAttribute('data-id', data.id)
        p.textContent = data.text;
        li.appendChild(p)
        const span = document.createElement('span')
        p.textContent = data.text;
        span.textContent = "delete";
        li.appendChild(span)
        listContainer.append(li);

        span.addEventListener('click', deleteItem);
    })
}

function deleteItem() {
    const li = this.parentElement;
    listContainer.removeChild(li);
    const elementID = li.getAttribute('data-id')

    let newItems = items.filter(data => data.id != elementID)
    items = [...newItems]

    localStorage.setItem('list', JSON.stringify(items));
}


function generateItemId() {
    let id = "";
    const alp = 'ABCDEFGHIJKLNMOPQRSTUVWXWZ';
    for (let i = 0; i < 8; i++)
        id += alp[Math.floor(Math.random() * 9)];

    return id;
}

function sort(data, option) {
    let temp;
    for (let inner = 0; inner < data.length; inner++) {
        for (let k = 0; k < data.length - 1; k++) {
            let currentValue = data[k].text.toLowerCase();
            let nextValue = data[k + 1].text.toLowerCase();
            if (option == 1) {
                if (currentValue > nextValue)
                    swap(temp, data, k)
            } else {
                if (currentValue < nextValue)
                    swap(temp, data, k)
            }

        }
    }
}

function swap(temp, data, k) {
    temp = data[k];
    data[k] = data[k + 1]
    data[k + 1] = temp
}


