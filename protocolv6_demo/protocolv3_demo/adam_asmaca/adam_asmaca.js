const world_el = document.getElementById('word');
const popup = document.getElementById('popup-container');

const success = document.getElementById('success-message');
const retry_btn = document.getElementById('play-again');

const wrong_letters_el = document.getElementById('wrong-letters');
const mobil_div = document.getElementById('mobil_div');
const btn_mobildeyim = document.getElementById('btn_mobildeyim');
const items = document.querySelectorAll('.item');

const correct_letters=[];
const wrong_letters=[];
let kazanma_durumu=false;
let selectedWord = getRandomWord();


function getRandomWord(){
    const words = ["exploit"];
    return words[Math.floor(Math.random() * words.length)]
}

function updateWrongLetters(){
    wrong_letters_el.innerHTML=`
    ${wrong_letters.length >0 ? '<h3>Hatalı Harfler</h3>' : ''}
    ${wrong_letters.map(letter => `<span>${letter}</span>`)}
    `;

    items.forEach((item,index)=>{
        const error_count = wrong_letters.length;
        if(index<error_count){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    })
    if(wrong_letters.length ===items.length){
        // oyunu kaybettin
        popup.style.display='flex';
        success.innerText='Kaybettin.';
    }
}



function displayWord(){
    
    world_el.innerHTML = `
    ${selectedWord.split('').map(letter => `
        <div class="letter">
            ${correct_letters.includes(letter) ? letter:``}
        </div>
        `).join(``)}
    `;

    const w = world_el.innerText.replace(/\n/g,``);
    if(w === selectedWord){
        // bildiniz
        popup.style.display='flex';
        success.innerText='Tebrikler Kazandın!';
        kazanma_durumu=true;
        
    }
}

function key_control(e){
    console.log(e)
    const letter = e.data;

    // Eğer son girilen karakter harf değilse, onu girişten kaldır
    if (letter && !letter.match(/[a-z]/)) {
        return;
    }

    if(wrong_letters.includes(letter)){
        // harfi zaten yanlış
        return;
    }

    if(correct_letters.includes(letter)){
        // harfi zaten ekledin
        return;
    }

    if(!selectedWord.includes(letter)){
        // wrong letter
        wrong_letters.push(letter);
        updateWrongLetters();
        return;
    }
    
    correct_letters.push(letter);
    displayWord();
}

window.addEventListener('input',key_control);

retry_btn.addEventListener('click',function(){
    

    correct_letters.splice(0);
    wrong_letters.splice(0);
    selectedWord=getRandomWord();
    displayWord();
    updateWrongLetters();
    popup.style.display='none';
    
    if(kazanma_durumu){
        // yeni katmanı aç
        mobil_div.style.display='none';
        wrong_letters_el.innerHTML=`<a href=../forum/index.html style="text-decoration: none; color: chartreuse;"><i class="fa-solid fa-key fa-2xl"></i></a> `;
        wrong_letters.style.display='true';
        kazanma_durumu=false;
    }

});

btn_mobildeyim.addEventListener('click', function(){
    mobil_div.innerHTML = `<input type="text" placeholder="-------" id="input_mobile">`;
    const input_mobile = document.getElementById('input_mobile');
    input_mobile.focus();
    input_mobile.addEventListener('input',function(){
        input_mobile.value=``;
    })
});

displayWord();
