const item = document.querySelector('.item');  //получаю елемент item
const placeholders = document.querySelectorAll('.placeholder'); //получаю массив из 3х элементов с классом placeholder


//создаем подписку на событие старта движения элемента
item.addEventListener('dragstart', dragstart);  

//создаем подписку на событие завершения движения элемента
item.addEventListener('dragend', dragend);

//  
for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}


// функция начала движения элемента
function dragstart(event) {
    event.target.classList.add('hold') //добавляем параметру Событие класс hold, а также функцию чтобы элемент не пропадал 
    setTimeout(() => event.target.classList.add('hide'), 0) 
}

// функция окончания движения элемента
function dragend(event) {
    event.target.className = 'item'; //перезатираем объявленные классы в функции dragstart, прописав имя класса элемента
    
    // эти записи также можно использовать для похожего функционала
    // event.target.classList.remove('hold', 'hide') 
    // event.target.classList.remove('hold')
    // event.target.classList.remove('hide')
}

//создаем для каждого события в массиве placeholders свои функции
function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    event.target.classList.add('hovered') 
}

function dragleave(event) {
    event.target.classList.remove('hovered') 
}

function dragdrop(event){
    event.target.classList.remove('hovered')
    event.target.append(item)
}