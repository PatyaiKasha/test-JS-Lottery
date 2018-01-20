//Проверка формы
document.querySelector('.btn-add').onclick = formCheck;

let listCount = 0;

function formCheck() {
    let name = document.querySelector('.name');
    let sureName = document.querySelector('.sure-name');
    let mail = document.querySelector('.mail');
    let phone = document.querySelector('.phone');
    let bday = document.querySelector('.bday');

    if (name.value && sureName.value && mail.value && mail.value) {
        listCount++;
        addParticipant(name, sureName, mail, phone, bday, listCount);
        // clearPart();
    } else {
        alert('Заполните обязательные поля');
    }
}

//Добавляем участника лотереи в таблицу
function addParticipant(name, sureName, mail, phone, bday, listCount) {

    let liNum = document.createElement('span');
    liNum.className = 'liNum';
    liNum.innerText = listCount;

    let partName = document.createElement('span');
    partName.className = 'partName';
    partName.innerText = name.value;

    let partSureName = document.createElement('span');
    partSureName.className = 'partSureName';
    partSureName.innerText = sureName.value;

    let partMail = document.createElement('span');
    partMail.className = 'partMail';
    partMail.innerText = mail.value;

    let partPhone = document.createElement('span');
    partPhone.className = 'partPhone';
    partPhone.innerText = phone.value;

    let partBday = document.createElement('span');
    partBday.className = 'partBday';
    partBday.innerText = bday.value;

    let partList = document.createElement('li');

    partList.className = 'partList';

    partList.appendChild(liNum);
    partList.appendChild(partName);
    partList.appendChild(partSureName);
    partList.appendChild(partMail);
    partList.appendChild(partPhone);
    partList.appendChild(partBday);
    document.body.appendChild(partList);
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
    let winner = document.createElement('span');
    winner.className = 'winner';
    winner.innerText = 'WINNER !!!';

    let winList = document.querySelectorAll('li');
    let rndm = Math.floor(Math.random() * (winList.length));

    for (let i = 0; i < winList.length; i++) {
        winList[i].style.background = 'none';
    }
    winList[rndm].style.background = 'green';
}

//Редактируем данные участника лотереи
document.onclick = function(event) {
    if (event.target.parentNode.className == 'partList') {
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