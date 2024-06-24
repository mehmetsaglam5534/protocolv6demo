// İlk soru için 5 saniye sonra gösterim
setTimeout(function() {
    var questionDiv = document.getElementById('questionDiv');
    var answerDiv = document.getElementById('answerDiv');
    questionDiv.style.display = 'block'; // Soruyu göster

    // Soruya tıklama olayını dinleyelim
    questionDiv.addEventListener('click', function() {
        answerDiv.style.display = 'block'; // Cevabı göster
    });
}, 2000); // 2 saniye sonra

// İkinci soru için 10 saniye sonra gösterim
setTimeout(function() {
    var questionDivTwo = document.getElementById('questiondiv_two'); // ID düzeltildi
    var answerDivTwo = document.getElementById('answerDiv_two');
    questionDivTwo.style.display = 'block'; // Soruyu göster

    // Soruya tıklama olayını dinleyelim
    questionDivTwo.addEventListener('click', function() {
        answerDivTwo.style.display = 'block'; // Cevabı göster
    });
}, 4000); // 4 saniye sonra

// üçüncü soru için 10 saniye sonra gösterim
setTimeout(function() {
    var questionDivThree = document.getElementById('questiondiv_three'); // ID düzeltildi
    var answerDivThree = document.getElementById('answerDiv_three');
    questionDivThree.style.display = 'block'; // Soruyu göster

    // Soruya tıklama olayını dinleyelim
    questionDivThree.addEventListener('click', function() {
        answerDivThree.style.display = 'block'; // Cevabı göster
    });
}, 6000); // 6 saniye sonra



