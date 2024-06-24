const canvas = document.getElementById('game_canvas');
const canvas_content = canvas.getContext('2d');

// scor
const scor_el = document.getElementById('scor_el');

// popup
const popup = document.getElementById('popup-container');
const success = document.getElementById('success-message');
const retry_btn = document.getElementById('play-again');

// mobil
const mobil_div = document.getElementById('mobil_div');
const btn_mobildeyim = document.getElementById('btn_mobildeyim');

var game_size=20; // 20 kare
var valX=valY=0; // ilerleme degeri
var playerX=playerY=0; // yılanın şimidki konumu
var appleX=appleY=15;// 15. karede baslasin, elmanın konumu
const max_scor = 12;

var trail = [];
const defaut_tail_length=3;
var tail = defaut_tail_length; //yilan uzunlugu

retry_btn.addEventListener('click',function(){
    popup.style.display='none';
    tail=defaut_tail_length;
    valX=valY=0;
    playerX=playerY=0;
    appleX=appleY=15;
    trail =[];
    intervalID = setInterval(game,1000/10);
    scor_el.innerText=`scor: 0`;
    input_mobile.focus();
});

function game(){
    playerX+=valX;
    playerY+=valY;

    //          kenara çarpınca devam et
    // if(playerX<0) // sol kenara çarparsa
    //     playerX=game_size-1; // en sağın bir gerisinden başlasın
    // if(playerX>game_size) // sağ kenara çarparsa
    //     playerX=0; // en sola at
    // if(playerY<0) // yukarı çarparsa
    //     playerY=game_size-1;
    // if(playerY>game_size) // alta çarparsa
    //     playerY=0;

    //          kenara çarpınca oyun bitsin
    if((playerX<0) || (playerX>game_size) || (playerY<0) || (playerY>game_size)){ // kenarlardan herhangi birine çarparsa
        clearInterval(intervalID);
        popup.style.display='flex';
        success.innerText='Kaybettin.';
    }
    
    // globale alırsan eğlenceli oluyor.
    canvas_content.fillStyle = "black"; //renk
    canvas_content.fillRect(0,0,canvas.width, canvas.height);

    canvas_content.fillStyle = "lime"; 
    for(let i=0; i<trail.length;i++){
        canvas_content.fillRect(
            trail[i].x*game_size,
            trail[i].y*game_size,
            game_size-2,
            game_size-2); // yılanı doldur
        if(trail[i].x==playerX && trail[i].y==playerY) // elma çarptı mı
            tail=defaut_tail_length;
    }
    trail.push({x:playerX,y:playerY});
    while(trail.length>tail)
        trail.shift();

    canvas_content.fillStyle="red";
    canvas_content.fillRect(appleX*game_size,appleY*game_size,game_size-2,game_size-2);
    
    if(appleX==playerX && appleY==playerY){ //elmaya çarparsa
        tail++; 

        scor_el.innerText=`scor: ${tail-defaut_tail_length}`;
        appleX=Math.floor(Math.random()*game_size); // yeni elma
        appleY=Math.floor(Math.random()*game_size);
    }

    if(tail-defaut_tail_length>=max_scor){
        clearInterval(intervalID);
        mobil_div.innerHTML = `<input type="button" value="exploit" onclick="window.location.href='../zar/index.html'">`;
    }
}

function keyPush(e){

    const letter = e.data;

    if(letter=="w"){
        //yukarı
        valX=0;
        valY=-1;
    }
    if(letter=="a"){
        //sol
        valX=-1;
        valY=0;
    }
    if(letter=="s"){
        //asagi
        valX=0;
        valY=1;
    }
    if(letter=="d"){
        //sag
        valX=1;
        valY=0;
    }
}

btn_mobildeyim.addEventListener('click', function(){
    mobil_div.innerHTML = `<input type="text" placeholder="-------" id="input_mobile">`;
    const input_mobile = document.getElementById('input_mobile');
    input_mobile.focus();
    input_mobile.addEventListener('input',function(){
        input_mobile.value=``;
    })
});

var intervalID = setInterval(game,1000/10); // 15 msde bir oyunu guncelle
document.addEventListener('input',keyPush);
