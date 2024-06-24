
let tik_say = 0;

function rollDice(){
    const numofDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const devil = document.getElementById('devil');
    const values = [];
    const images = [];

    

    
    if(numofDice==6){
        tik_say++;
    }
        
    if(tik_say==6){
        devil.innerHTML = `<button onclick="window.location.href='../snake/index.html'">protocol</button>`;

        for(let i=0;i<6;i++){
            images.push(`<img src="dice_image/dice6.png" alt="Dice 6">`);
            values.push(`<span>6</span>`);
        }


    }
    else{
        for(let i = 0; i < numofDice; i++){
            const value = Math.floor(Math.random() * 6) + 1;
            values.push(`<span>${value}</span>`);
            images.push(`<img src="dice_image/dice${value}.png" alt="Dice ${value} ">`);
        }
    }

    diceResult.innerHTML = values.join(',');
    diceImages.innerHTML = images.join('');
}
