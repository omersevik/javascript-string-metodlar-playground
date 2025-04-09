// Modern JavaScript ile String Metodları

// String Metodları Veri Yapısı
const stringMethods = [
    // Basic String Methods
    {
        name: 'length',
        icon: 'fa-ruler',
        category: 'basic',
        description: 'Metnin karakter sayısını verir',
        example: 'Örnek: "hello" → 5',
        inputs: [],
        method: (text) => text.length.toString()
    },
    {
        name: 'charAt',
        icon: 'fa-at',
        category: 'basic',
        description: 'Belirtilen konumdaki karakteri döndürür',
        example: 'Örnek: "hello" (1) → "e"',
        inputs: [
            { id: 'charAtPosition', type: 'number', placeholder: 'Konum', small: true }
        ],
        method: (text, position) => text.charAt(position)
    },
    {
        name: 'charCodeAt',
        icon: 'fa-keyboard',
        category: 'basic',
        description: 'Belirtilen konumdaki karakterin Unicode değerini döndürür',
        example: 'Örnek: "A" (0) → 65',
        inputs: [
            { id: 'charCodeAtPosition', type: 'number', placeholder: 'Konum', small: true }
        ],
        method: (text, position) => text.charCodeAt(position).toString()
    },
    {
        name: 'at',
        icon: 'fa-arrow-pointer',
        category: 'basic',
        description: 'Belirtilen konumdaki karakteri döndürür (negatif index destekler)',
        example: 'Örnek: "hello" (-1) → "o"',
        inputs: [
            { id: 'atPosition', type: 'number', placeholder: 'Konum', small: true }
        ],
        method: (text, position) => text.at(position)
    },
    {
        name: 'slice',
        icon: 'fa-scissors',
        category: 'basic',
        description: 'Belirtilen aralıktaki karakterleri alır',
        example: 'Örnek: "hello world" (2,5) → "llo"',
        inputs: [
            { id: 'sliceStart', type: 'number', placeholder: 'Başlangıç', small: true },
            { id: 'sliceEnd', type: 'number', placeholder: 'Bitiş', small: true }
        ],
        method: (text, start, end) => text.slice(start, end)
    },
    {
        name: 'substring',
        icon: 'fa-text-width',
        category: 'basic',
        description: 'İki index arasındaki metni alır',
        example: 'Örnek: "hello world" (0,5) → "hello"',
        inputs: [
            { id: 'substringStart', type: 'number', placeholder: 'Başlangıç', small: true },
            { id: 'substringEnd', type: 'number', placeholder: 'Bitiş', small: true }
        ],
        method: (text, start, end) => text.substring(start, end)
    },
    {
        name: 'substr',
        icon: 'fa-text-height',
        category: 'basic',
        description: 'Belirtilen konumdan itibaren belirtilen sayıda karakter alır',
        example: 'Örnek: "hello world" (6,5) → "world"',
        inputs: [
            { id: 'substrStart', type: 'number', placeholder: 'Başlangıç', small: true },
            { id: 'substrLength', type: 'number', placeholder: 'Uzunluk', small: true }
        ],
        method: (text, start, length) => text.substr(start, length)
    },
    {
        name: 'toUpperCase',
        icon: 'fa-arrow-up',
        category: 'basic',
        description: 'Tüm karakterleri büyük harfe çevirir',
        example: 'Örnek: "hello" → "HELLO"',
        inputs: [],
        method: (text) => text.toUpperCase()
    },
    {
        name: 'toLowerCase',
        icon: 'fa-arrow-down',
        category: 'basic',
        description: 'Tüm karakterleri küçük harfe çevirir',
        example: 'Örnek: "HELLO" → "hello"',
        inputs: [],
        method: (text) => text.toLowerCase()
    },
    {
        name: 'concat',
        icon: 'fa-link',
        category: 'basic',
        description: 'İki veya daha fazla metni birleştirir',
        example: 'Örnek: "hello".concat(" ", "world") → "hello world"',
        inputs: [
            { id: 'concatText1', type: 'text', placeholder: 'Metin 1' },
            { id: 'concatText2', type: 'text', placeholder: 'Metin 2' }
        ],
        method: (text, text1, text2) => text.concat(text1, text2)
    },
    {
        name: 'trim',
        icon: 'fa-scissors',
        category: 'basic',
        description: 'Başındaki ve sonundaki boşlukları temizler',
        example: 'Örnek: "  hello  " → "hello"',
        inputs: [],
        method: (text) => text.trim()
    },
    {
        name: 'trimStart',
        icon: 'fa-arrow-right-long',
        category: 'basic',
        description: 'Başındaki boşlukları temizler',
        example: 'Örnek: "  hello  " → "hello  "',
        inputs: [],
        method: (text) => text.trimStart()
    },
    {
        name: 'trimEnd',
        icon: 'fa-arrow-left-long',
        category: 'basic',
        description: 'Sonundaki boşlukları temizler',
        example: 'Örnek: "  hello  " → "  hello"',
        inputs: [],
        method: (text) => text.trimEnd()
    },
    {
        name: 'padStart',
        icon: 'fa-indent',
        category: 'basic',
        description: 'Metni başından belirtilen uzunluğa kadar doldurur',
        example: 'Örnek: "5" (3, "0") → "005"',
        inputs: [
            { id: 'padStartLength', type: 'number', placeholder: 'Uzunluk', small: true },
            { id: 'padStartChar', type: 'text', placeholder: 'Dolgu karakteri' }
        ],
        method: (text, length, char) => text.padStart(length, char)
    },
    {
        name: 'padEnd',
        icon: 'fa-outdent',
        category: 'basic',
        description: 'Metni sonundan belirtilen uzunluğa kadar doldurur',
        example: 'Örnek: "5" (3, "0") → "500"',
        inputs: [
            { id: 'padEndLength', type: 'number', placeholder: 'Uzunluk', small: true },
            { id: 'padEndChar', type: 'text', placeholder: 'Dolgu karakteri' }
        ],
        method: (text, length, char) => text.padEnd(length, char)
    },
    {
        name: 'repeat',
        icon: 'fa-redo',
        category: 'basic',
        description: 'Metni belirtilen sayıda tekrarlar',
        example: 'Örnek: "ha" (3) → "hahaha"',
        inputs: [
            { id: 'repeatCount', type: 'number', placeholder: 'Tekrar sayısı', small: true }
        ],
        method: (text, count) => text.repeat(count)
    },
    {
        name: 'replace',
        icon: 'fa-exchange-alt',
        category: 'basic',
        description: 'Metindeki bir kısmı başka bir metinle değiştirir',
        example: 'Örnek: "hello world" ("world", "javascript") → "hello javascript"',
        inputs: [
            { id: 'replaceSearch', type: 'text', placeholder: 'Aranacak' },
            { id: 'replaceWith', type: 'text', placeholder: 'Yeni değer' }
        ],
        method: (text, search, replace) => text.replace(search, replace)
    },
    {
        name: 'replaceAll',
        icon: 'fa-sync',
        category: 'basic',
        description: 'Metindeki tüm eşleşmeleri değiştirir',
        example: 'Örnek: "ha ha ha" ("ha", "he") → "he he he"',
        inputs: [
            { id: 'replaceAllSearch', type: 'text', placeholder: 'Aranacak' },
            { id: 'replaceAllWith', type: 'text', placeholder: 'Yeni değer' }
        ],
        method: (text, search, replace) => text.replaceAll(search, replace)
    },
    {
        name: 'split',
        icon: 'fa-th-list',
        category: 'basic',
        description: 'Metni belirtilen ayırıcıya göre böler',
        example: 'Örnek: "a,b,c" (",") → ["a", "b", "c"]',
        inputs: [
            { id: 'splitSeparator', type: 'text', placeholder: 'Ayırıcı (örn: ,)' }
        ],
        method: (text, separator) => JSON.stringify(text.split(separator))
    },
    // Search Methods
    {
        name: 'indexOf',
        icon: 'fa-search-location',
        category: 'search',
        description: 'Aranan metnin başlangıç konumunu bulur',
        example: 'Örnek: "hello world" ("world") → 6',
        inputs: [
            { id: 'indexOfSearch', type: 'text', placeholder: 'Aranacak metin' }
        ],
        method: (text, search) => text.indexOf(search).toString()
    },
    {
        name: 'lastIndexOf',
        icon: 'fa-search-location fa-flip-horizontal',
        category: 'search',
        description: 'Aranan metnin son bulunduğu konumu döndürür',
        example: 'Örnek: "hello world world" ("world") → 12',
        inputs: [
            { id: 'lastIndexOfSearch', type: 'text', placeholder: 'Aranacak metin' }
        ],
        method: (text, search) => text.lastIndexOf(search).toString()
    },
    {
        name: 'search',
        icon: 'fa-magnifying-glass',
        category: 'search',
        description: 'Regular expression ile arama yapar',
        example: 'Örnek: "hello world" (/World/i) → 6',
        inputs: [
            { id: 'searchRegex', type: 'text', placeholder: 'Regular expression' }
        ],
        method: (text, regex) => text.search(new RegExp(regex, 'i')).toString()
    },
    {
        name: 'match',
        icon: 'fa-equals',
        category: 'search',
        description: 'Regular expression ile eşleşmeleri bulur',
        example: 'Örnek: "hello world" (/o/g) → ["o", "o"]',
        inputs: [
            { id: 'matchRegex', type: 'text', placeholder: 'Regular expression' }
        ],
        method: (text, regex) => JSON.stringify(text.match(new RegExp(regex, 'g')))
    },
    {
        name: 'matchAll',
        icon: 'fa-equals',
        category: 'search',
        description: 'Regular expression ile tüm eşleşmeleri bulur',
        example: 'Örnek: "hello world" (/[a-z]/g) → Iterator',
        inputs: [
            { id: 'matchAllRegex', type: 'text', placeholder: 'Regular expression' }
        ],
        method: (text, regex) => JSON.stringify([...text.matchAll(new RegExp(regex, 'g'))].map(m => m[0]))
    },
    {
        name: 'includes',
        icon: 'fa-search',
        category: 'search',
        description: 'Metnin içinde arama yapar',
        example: 'Örnek: "hello world" ("world") → true',
        inputs: [
            { id: 'includesSearch', type: 'text', placeholder: 'Aranacak metin' }
        ],
        method: (text, search) => text.includes(search).toString()
    },
    {
        name: 'startsWith',
        icon: 'fa-step-forward fa-rotate-270',
        category: 'search',
        description: 'Metnin belirtilen ifadeyle başlayıp başlamadığını kontrol eder',
        example: 'Örnek: "hello world" ("hello") → true',
        inputs: [
            { id: 'startsWithText', type: 'text', placeholder: 'Kontrol edilecek metin' }
        ],
        method: (text, search) => text.startsWith(search).toString()
    },
    {
        name: 'endsWith',
        icon: 'fa-step-forward fa-rotate-90',
        category: 'search',
        description: 'Metnin belirtilen ifadeyle bitip bitmediğini kontrol eder',
        example: 'Örnek: "hello world" ("world") → true',
        inputs: [
            { id: 'endsWithText', type: 'text', placeholder: 'Kontrol edilecek metin' }
        ],
        method: (text, search) => text.endsWith(search).toString()
    }
];

// DOM Elements
const testInput = document.getElementById('testInput');
const charCount = document.getElementById('charCount');
const clearInput = document.getElementById('clearInput');
const methodsContainer = document.getElementById('methodsContainer');
const categoryButtons = document.querySelectorAll('.category-btn');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const pageInfo = document.getElementById('pageInfo');

// State
let currentCategory = 'all';
let currentPage = 1;
const methodsPerPage = 6;

// Event Listeners
testInput.addEventListener('input', () => {
    updateCharCount();
    highlightRelevantMethods();
});

clearInput.addEventListener('click', () => {
    testInput.value = '';
    updateCharCount();
    clearResults();
});

categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
        currentPage = 1;
        renderMethods();
    });
});

prevPageBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderMethods();
    }
});

nextPageBtn.addEventListener('click', () => {
    const filteredMethods = getFilteredMethods();
    const maxPages = Math.ceil(filteredMethods.length / methodsPerPage);
    if (currentPage < maxPages) {
        currentPage++;
        renderMethods();
    }
});

// Utility Functions
function updateCharCount() {
    const count = testInput.value.length;
    charCount.textContent = `${count} karakter`;
}

function clearResults() {
    document.querySelectorAll('.result-box').forEach(box => {
        box.textContent = 'Sonuç burada görünecek';
        box.classList.remove('success');
    });
}

function getFilteredMethods() {
    return stringMethods.filter(method => 
        currentCategory === 'all' || method.category === currentCategory
    );
}

function highlightRelevantMethods() {
    const text = testInput.value;
    document.querySelectorAll('.method-card').forEach(card => {
        const method = stringMethods.find(m => m.name === card.dataset.method);
        if (method && isMethodRelevant(method, text)) {
            card.classList.add('highlight');
        } else {
            card.classList.remove('highlight');
        }
    });
}

function isMethodRelevant(method, text) {
    if (!text) return false;
    
    switch (method.category) {
        case 'transform':
            return text !== text.toLowerCase() || text !== text.toUpperCase();
        case 'search':
            return text.length > 0;
        case 'extract':
            return text.length > 1;
        case 'modify':
            return text.trim() !== text || text.includes(' ');
        default:
            return false;
    }
}

function showResult(resultElement, result) {
    resultElement.textContent = result;
    resultElement.classList.add('success');
    
    resultElement.style.animation = 'none';
    resultElement.offsetHeight; // Reflow
    resultElement.style.animation = 'successPulse 0.5s ease-out';
}

// Render Functions
function createMethodCard(method) {
    const card = document.createElement('div');
    card.className = 'method-card';
    card.dataset.method = method.name;
    card.dataset.category = method.category;
    
    const header = document.createElement('div');
    header.className = 'method-header';
    
    const title = document.createElement('h3');
    title.innerHTML = `<i class="fas ${method.icon}"></i> ${method.name}()`;
    
    const badge = document.createElement('span');
    badge.className = 'method-badge';
    badge.textContent = method.category;
    
    header.appendChild(title);
    header.appendChild(badge);
    
    const description = document.createElement('p');
    description.className = 'description';
    description.textContent = method.description;

    const example = document.createElement('p');
    example.className = 'example';
    example.textContent = method.example;
    
    const exampleArea = document.createElement('div');
    exampleArea.className = 'example-area';
    
    if (method.inputs.length > 0) {
        const inputGroup = document.createElement('div');
        inputGroup.className = 'input-group';
        
        method.inputs.forEach(input => {
            const inputElement = document.createElement('input');
            inputElement.type = input.type;
            inputElement.id = input.id;
            inputElement.placeholder = input.placeholder;
            inputElement.className = `method-input${input.small ? ' small' : ''}`;
            inputGroup.appendChild(inputElement);
        });
        
        exampleArea.appendChild(inputGroup);
    }
    
    const resultBox = document.createElement('div');
    resultBox.className = 'result-box';
    resultBox.id = `${method.name}Result`;
    resultBox.textContent = 'Sonuç burada görünecek';
    
    const tryButton = document.createElement('button');
    tryButton.className = 'try-btn';
    tryButton.innerHTML = '<i class="fas fa-play"></i> Dene';
    tryButton.onclick = () => executeMethod(method);
    
    exampleArea.appendChild(resultBox);
    exampleArea.appendChild(tryButton);
    
    card.appendChild(header);
    card.appendChild(description);
    card.appendChild(example);
    card.appendChild(exampleArea);
    
    return card;
}

function renderMethods() {
    const filteredMethods = getFilteredMethods();
    const start = (currentPage - 1) * methodsPerPage;
    const end = start + methodsPerPage;
    const methodsToShow = filteredMethods.slice(start, end);
    
    methodsContainer.innerHTML = '';
    methodsToShow.forEach(method => {
        methodsContainer.appendChild(createMethodCard(method));
    });
    
    const maxPages = Math.ceil(filteredMethods.length / methodsPerPage);
    pageInfo.textContent = `Sayfa ${currentPage}/${maxPages}`;
    
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === maxPages;
    
    highlightRelevantMethods();
}

function executeMethod(method) {
    const text = testInput.value;
    const inputs = method.inputs.map(input => document.getElementById(input.id)?.value);
    const result = method.method(text, ...inputs);
    showResult(document.getElementById(`${method.name}Result`), result);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateCharCount();
    renderMethods();
});
    
