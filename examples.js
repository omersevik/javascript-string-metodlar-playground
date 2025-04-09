// DOM Elements
const spaceInput = document.getElementById('spaceInput');
const countSpacesBtn = document.getElementById('countSpaces');
const spaceCount = document.getElementById('spaceCount');
const totalSpaces = document.getElementById('totalSpaces');
const leadingSpaces = document.getElementById('leadingSpaces');
const trailingSpaces = document.getElementById('trailingSpaces');
const middleSpaces = document.getElementById('middleSpaces');

// Boşluk sayma fonksiyonu
function countAllSpaces() {
    // Metni al
    let text = spaceInput.value;
    
    // Toplam boşluk sayısı
    let total = 0;
    for(let i = 0; i < text.length; i++) {
        if(text[i] === ' ') {
            total++;
        }
    }
    
    // Baştaki boşlukları say
    let leading = 0;
    for(let i = 0; i < text.length; i++) {
        if(text[i] === ' ') {
            leading++;
        } else {
            break;
        }
    }
    
    // Sondaki boşlukları say
    let trailing = 0;
    for(let i = text.length - 1; i >= 0; i--) {
        if(text[i] === ' ') {
            trailing++;
        } else {
            break;
        }
    }
    
    // Ortadaki boşlukları hesapla
    let middle = total - (leading + trailing);

    // Sonuçları göster
    totalSpaces.textContent = total;
    leadingSpaces.textContent = leading;
    trailingSpaces.textContent = trailing;
    middleSpaces.textContent = middle;
    
    spaceCount.textContent = total + ' boşluk';

    // Sonuç değerlerine animasyon ekle
    let resultValues = document.querySelectorAll('.result-value');
    for(let i = 0; i < resultValues.length; i++) {
        let element = resultValues[i];
        element.style.animation = 'none';
        element.offsetHeight;
        element.style.animation = 'successPulse 0.5s ease-out';
    }
}

// Event Listeners
countSpacesBtn.addEventListener('click', countAllSpaces);

// Sayfa yüklendiğinde başlangıç değerini ayarla
document.addEventListener('DOMContentLoaded', function() {
    spaceCount.textContent = '0 boşluk';
}); 