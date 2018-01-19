document.querySelector('.btn-add').onclick = formCheck;

let listCount = 0;

function formCheck() {
    let name = document.querySelector('.name');
    let sureName = document.querySelector('.sure-name');
    let mail = document.querySelector('.mail');
    let phone = document.querySelector('.phone');
    let bday = document.querySelector('.bday');

    if (name.value && sureName.value && mail.value && mail.value) {
        console.log('OK');
        listCount++;
        addParticipant(name, sureName, mail, phone, bday, listCount);
    } else {
        console.log('K.O.');
    }
}

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
    partList.appendChild(liNum);
    partList.appendChild(partName);
    partList.appendChild(partSureName);
    partList.appendChild(partMail);
    partList.appendChild(partPhone);
    partList.appendChild(partBday);

    document.body.appendChild(partList);

}

document.querySelector('.btn-win').onclick = winnerCheck;

function winnerCheck(params) {
    let winList = document.querySelectorAll('li');
    let rndm = Math.floor(Math.random() * (winList.length) + 1);
    for (let i = 1; i <= winList.length; i++) {
        winList[i].style.background = 'none';
        winList[rndm].style.background = 'green';

    }
}