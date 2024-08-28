let keys = ['ai', 'enter', 'imes', 'ober', 'ufat'];
let values = 'aeiou';
let result = document.querySelector('#result');
let str = document.querySelector('#text');

function encode() {
    if(!str.value) {
        return
    }

    let newStr = str.value.split('').map(letter => {
        return values.indexOf(letter) == -1? letter : keys[values.indexOf(letter)];
    }).join('');
    showResult(newStr);
}

function decode() {
    if(!str.value) {
        return
    }

    let newStr = str.value.split("");
    for (let i = 0; i < newStr.length; i++) {
        
        if(newStr.join("").slice(i, i+2) == keys[0]) {
            newStr.splice(i, 2, values[0]);
         } else if (newStr.join("").slice(i, i+5) == keys[1]) {
            newStr.splice(i, 5, values[1]);
        } else if (newStr.join("").slice(i, i+4) == keys[2]) {
            newStr.splice(i, 4, values[2]);
        } else if (newStr.join("").slice(i, i+4) == keys[3]) {
            newStr.splice(i, 4, values[3]);
        } else if (newStr.join("").slice(i, i+4) == keys[4]) {
            newStr.splice(i, 4, values[4]);
        }
    }

    showResult(newStr.join(''));
    
}

function showResult(newStr) {
    result.innerHTML = `<p>${newStr}</p>`;
    result.removeAttribute('class');
    result.setAttribute('class','show-result');
    
    let copy = createButton('Copy', newStr);
    
    result.appendChild(copy);
}

function createButton(buttonName, newStr) {
    let button = document.createElement('button');
    button.textContent = buttonName;
    button.setAttribute('class', 'button');

    button.addEventListener('click', () => {
        navigator.clipboard.writeText(newStr)
        str.value = '';
        result.innerHTML = '<p class="show-message">Nenhuma mensagem</p>';
    });

    return button;
}