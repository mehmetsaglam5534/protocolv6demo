document.addEventListener("DOMContentLoaded", function() {
    const addParagraphBtn = document.getElementById('addParagraphBtn');
    const container = document.getElementById('container');
    const next_button = document.getElementById('next_button');
    let clicked = false;

    const metinler = [
        "bir sonraki katmana seni yönlendirmek istiyorum",
        "sana yardım etmek istiyorum",
        "program/lisa seni yönlendirmemi istedi.",
        "karşındaki katman zorlu olabilir, haberin olsun.",
        "her neyse... zaman yok.",
    ];

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    addParagraphBtn.addEventListener('click', async function() {
        if (clicked) {
            return;
        }
        clicked = true;

        addParagraphBtn.remove();


        for (let i = 0; i < metinler.length; i++) {
            const newParagraph = document.createElement('p');
            newParagraph.textContent = metinler[i];
            container.appendChild(newParagraph);
            await sleep(300); // 5 saniye bekle
        }

        // "Belki başlama zamanıdır?" düğmesini ekle
        const nxt = document.createElement('button');
        nxt.textContent = "Gidiyorum";
        nxt.addEventListener('click', function() {
            window.location.href = "../protokol_levi/index.html"; // yeni katman
        });
        next_button.appendChild(nxt);

        // iptal düğmesi
        const ret = document.createElement('button');
        ret.textContent = "İptal";
        ret.addEventListener('click', function() {
            window.location.href = "../gameover/index.html"; // önceki yere || farklı sayfaya
        });
        next_button.appendChild(ret);
    });

});
