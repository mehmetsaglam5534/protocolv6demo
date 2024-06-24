let is_watched = false;


function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}

async function playVideo() {
    var iframe = document.getElementById('youtubeVideo');
    iframe.style.display = 'block';
    iframe.src += "&autoplay=1";
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth'});

    // Protokol butonunu gizle
    var button = document.getElementById('button');
    button.style.display = 'none';

    // Button 2'yi göster
    var button2 = document.getElementById('button2');
    button2.style.display = 'block';

    // 15 sn bekle
    await sleep(15000); // 5 saniye bekle
    is_watched = true;
}

document.getElementById('button2').onclick = function() {
    // Yeni sayfaya yönlendir
    if(!is_watched)
        return;
    
    window.location.href = '../adam_asmaca/index.html';
}
