// İlk soru için 5 saniye sonra gösterim
setTimeout(function() {
    var questionDiv = document.getElementById('questionDiv');
    var answerDiv = document.getElementById('answerDiv');
    questionDiv.style.display = 'block'; // Soruyu göster

    // Soruya tıklama olayını dinleyelim
    questionDiv.addEventListener('click', function() {
        answerDiv.style.display = 'block'; // Cevabı göster
        setTimeout(function() {
            showNextQuestion('questiondiv_two', 'answerDiv_two');
        }, 2000); // Cevap gösterildikten sonra 2 saniye bekle
    });
}, 2000); // 2 saniye sonra

function showNextQuestion(nextQuestionId, nextAnswerId) {
    var nextQuestionDiv = document.getElementById(nextQuestionId);
    var nextAnswerDiv = document.getElementById(nextAnswerId);
    nextQuestionDiv.style.display = 'block'; // Bir sonraki soruyu göster

    // Soruya tıklama olayını dinleyelim
    nextQuestionDiv.addEventListener('click', function() {
        nextAnswerDiv.style.display = 'block'; // Cevabı göster
        var nextTimeout = getNextTimeout(nextQuestionId);
        if (nextTimeout) {
            setTimeout(function() {
                showNextQuestion(nextTimeout.nextQuestionId, nextTimeout.nextAnswerId);
            }, nextTimeout.delay); // Bir sonraki sorunun gösterimini geciktir
        }
    });
}

function getNextTimeout(currentQuestionId) {
    var mapping = {
        'questionDiv': { nextQuestionId: 'questiondiv_two', nextAnswerId: 'answerDiv_two', delay: 2000 },
        'questiondiv_two': { nextQuestionId: 'questiondiv_three', nextAnswerId: 'answerDiv_three', delay: 2000 },
        'questiondiv_three': { nextQuestionId: 'questiondiv_four', nextAnswerId: 'answerDiv_four', delay: 2000 },
        'questiondiv_four': { nextQuestionId: 'questiondiv_five', nextAnswerId: 'answerDiv_five', delay: 2000 },
        'questiondiv_five': { nextQuestionId: 'questiondiv_six', nextAnswerId: 'answerDiv_six', delay: 2000 },
        'questiondiv_six': { nextQuestionId: 'questiondiv_seven', nextAnswerId: 'answerDiv_Seven', delay: 2000 },
        'questiondiv_seven': { nextQuestionId: 'questiondiv_eight', nextAnswerId: 'answerDiv_eight', delay: 2000 },
        'questiondiv_eight': { nextQuestionId: 'questiondiv_nine', nextAnswerId: 'answerDiv_Nine', delay: 2000 },
        'questiondiv_nine': { nextQuestionId: 'questiondiv_ten', nextAnswerId: 'answerDiv_Ten', delay: 2000 },
    };
    return mapping[currentQuestionId] || null;
}

