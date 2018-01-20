//Проверка формы
document.querySelector('.btn-add').onclick = formCheck;

function formCheck() {
    let name = document.querySelector('.name');
    let sureName = document.querySelector('.sure-name');
    let mail = document.querySelector('.mail');
    let phone = document.querySelector('.phone');
    let bday = document.querySelector('.bday');

    if (name.value && sureName.value && mail.value && mail.value) {
        addParticipant(name, sureName, mail, phone, bday);
        clearPart();
    } else {
        alert('Заполните обязательные поля');
    }
}

//Добавляем участника лотереи в таблицу
function addParticipant(name, sureName, mail, phone, bday) {

    let wrapper = document.querySelector('.wrapper');

    let partName = document.createElement('td');
    partName.className = 'td-name';
    partName.innerText = name.value;

    let partSureName = document.createElement('td');
    partSureName.className = 'td-surename';
    partSureName.innerText = sureName.value;

    let partMail = document.createElement('td');
    partMail.className = 'td-mail';
    partMail.innerText = mail.value;

    let partPhone = document.createElement('td');
    partPhone.className = 'td-phone';
    partPhone.innerText = phone.value;

    let partBday = document.createElement('td');
    partBday.className = 'td-bday';
    partBday.innerText = bday.value;

    let trList = document.createElement('tr');
    trList.className = 'tr-list';

    trList.appendChild(partName);
    trList.appendChild(partSureName);
    trList.appendChild(partMail);
    trList.appendChild(partPhone);
    trList.appendChild(partBday);

    let table = document.querySelector('.table');

    table.appendChild(trList);
}

//Очищаем форму добавления участников
function clearPart() {
    let partVal = document.querySelectorAll('input');
    for (let i = 0; i < partVal.length; i++) {
        partVal[i].value = '';
    }
}

//Определяем победителя
document.querySelector('.btn-win').onclick = winnerCheck;

function winnerCheck() {

    let winList = document.querySelectorAll('tr');
    let rndm = Math.floor(Math.random() * (winList.length));

    if (!winList.length) {
        alert('Вы не ввели участников лотереи');
    } else {
        for (let i = 0; i < winList.length; i++) {
            winList[i].style.background = 'none';
        }
        winList[rndm].style.background = 'green';
    }
}

//Редактируем данные участника лотереи
document.onclick = function(event) {
    if (event.target.parentNode.className == 'tr-list') {
        editPartList(event.target);
    }
};

//Редактируем данные участника лотереи
function editPartList(data) {
    let partEdit = prompt('Редактировать данные', data.innerText);
    if (partEdit) {
        data.innerText = partEdit;
    }
}