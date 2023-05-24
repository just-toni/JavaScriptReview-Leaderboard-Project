let body = document.querySelector('body');
let section = document.createElement('section');
section.setAttribute('id', 'buttonSection')
let leaderboard = document.createElement('section');
leaderboard.setAttribute('id', 'leaderboard');
body.appendChild(section);
body.appendChild(leaderboard);
let input1 = document.createElement('input');
input1.setAttribute('type', 'text');
input1.setAttribute('placeholder', 'First Name');

let input2 = document.createElement('input');
input2.setAttribute('type', 'text');
input2.setAttribute('placeholder', 'Last Name');

let input3 = document.createElement('input');
input3.setAttribute('type', 'text');
input3.setAttribute('placeholder', 'Country');

let input4 = document.createElement('input');
input4.setAttribute('type', 'number');
input4.setAttribute('placeholder', 'Player Score');

let addPlayerButton = document.createElement('button');
addPlayerButton.textContent = 'Add Player';

section.appendChild(input1);
section.appendChild(input2);
section.appendChild(input3);
section.appendChild(input4);
section.appendChild(addPlayerButton);

const month = (number) => {
    if(number === 0){
        return 'JAN'
    }
    else if(number === 1){
        return 'FEB'
    }
    else if(number === 2){
        return 'MAR'
    }
    else if(number === 3){
        return 'APR'
    }
    else if(number === 4){
        return 'MAY'
    }
    else if(number === 5){
        return 'JUN'
    }
    else if(number === 6){
        return 'JUL'
    }
    else if(number === 7){
        return 'AUG'
    }
    else if(number === 8){
        return 'SEPT '
    }
    else if(number === 9){
        return 'OCT'
    }
    else if(number === 10){
        return 'NOV'
    }
    else return 'DEC'
}
const hours = (hour) => {
    let result = '0'
    if(hour < 10){
        return result + hour
    }
    else return hour;
}
const minutes = (minute) => {
    let result = '0'
    if(minute < 10){
        return result + minute
    }
    else return minute;
}

addPlayerButton.addEventListener('click', e => {
    let text = document.createElement('p');
    if(input1.value.length === 0 && input2.value.length === 0 && input3.value.length === 0 && input4.value.length === 0){
        // find a way to remove this text when the user enters all the values
        text.textContent = 'All fields required';
        text.style.color = 'red';
        leaderboard.appendChild(text);
        input1.style.borderBlockColor = 'red';
        input2.style.borderBlockColor = 'red';
        input3.style.borderBlockColor = 'red';
        input4.style.borderBlockColor = 'red';
        // leaderboard.textContent = '';
    }
    else{
        leaderboard.style.color = 'black';
        let innerSection = document.createElement('section');
        innerSection.setAttribute('class', 'innerSection')
        let first = document.createElement('p');
        first.setAttribute('id', 'first');
        let second = document.createElement('p');
        second.setAttribute('id', 'second');
        let third = document.createElement('p')
        third.setAttribute('id', 'third');
        let fourth = document.createElement('section');
        fourth.setAttribute('id', 'fourth');
        let userName = document.createElement('p');
        let date = document.createElement('p');
        let deleteButton = document.createElement('button');
        let incrementButton = document.createElement('button');
        let decrementButton = document.createElement('button');
        let deleteButtonImage = document.createElement("img");
        /**
         * the delete icon was gotten from https://www.flaticon.com/free-icon/trash-can_4734087?term=delete&page=2&position=47&origin=search&related_id=4734087
         */
        deleteButtonImage.setAttribute('src', '../Day28_Leaderboard/img/delete.png');
        deleteButtonImage.setAttribute('alt', 'Delete Icon');
        deleteButton.appendChild(deleteButtonImage);
        userName.textContent = input1.value.toUpperCase() + " " + input2.value.toUpperCase();
        date.textContent = month(new Date().getMonth()) + " " + new Date().getDate() + ", " + new Date().getFullYear()
        + " " + hours(new Date().getHours()) + ":" + minutes(new Date().getMinutes());
        date.style.color = 'lightgray';
        first.appendChild(userName);
        first.appendChild(date);
        date.style.letterSpacing = '-1.5px';
        second.textContent = input3.value.toUpperCase();
        third.textContent = input4.value.toUpperCase();
        incrementButton.textContent = '+5';
        decrementButton.textContent = '-5';
        fourth.appendChild(deleteButton);
        fourth.appendChild(incrementButton);
        fourth.appendChild(decrementButton);
        innerSection.appendChild(first);
        innerSection.appendChild(second);
        innerSection.appendChild(third);
        innerSection.appendChild(fourth);
        leaderboard.appendChild(innerSection);

        deleteButton.addEventListener('click', e => {
            innerSection.textContent = '';
            innerSection.remove();
        });

        incrementButton.addEventListener('click', e => {
            third.textContent = Number.parseInt(third.textContent) + 5;
        });

        decrementButton.addEventListener('click', e => {
            third.textContent = Number.parseInt(third.textContent) - 5;
        });
    }
});
