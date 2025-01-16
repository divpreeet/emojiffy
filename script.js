const emojiCategories = {
    faces: {
        name: "Faces & People",
        emojis: [
            { codePoint: '1f600', display: '😀', description: 'grinning face' },
            { codePoint: '1f603', display: '😃', description: 'grinning face with big eyes' },
            { codePoint: '1f604', display: '😄', description: 'grinning face with smiling eyes' },
            { codePoint: '1f601', display: '😁', description: 'beaming face with smiling eyes' },
            { codePoint: '1f606', display: '😆', description: 'grinning squinting face' },
            { codePoint: '1f605', display: '😅', description: 'grinning face with sweat' },
            { codePoint: '1f923', display: '🤣', description: 'rolling on the floor laughing' },
            { codePoint: '1f602', display: '😂', description: 'face with tears of joy' },
            { codePoint: '1f642', display: '🙂', description: 'slightly smiling face' },
            { codePoint: '1f643', display: '🙃', description: 'upside-down face' },
            { codePoint: '1f609', display: '😉', description: 'winking face' },
            { codePoint: '1f60a', display: '😊', description: 'smiling face with smiling eyes' },
            { codePoint: '1f607', display: '😇', description: 'smiling face with halo' },
            { codePoint: '1f970', display: '🥰', description: 'smiling face with hearts' },
            { codePoint: '1f60d', display: '😍', description: 'smiling face with heart-eyes' },
            { codePoint: '1f929', display: '🤩', description: 'star-struck' },
            { codePoint: '1f618', display: '😘', description: 'face blowing a kiss' },
            { codePoint: '1f617', display: '😗', description: 'kissing face' },
            { codePoint: '1f61a', display: '😚', description: 'kissing face with closed eyes' },
            { codePoint: '1f619', display: '😙', description: 'kissing face with smiling eyes' }
        ]
    },
    emotions: {
        name: "Emotions",
        emojis: [
            { codePoint: '1f97a', display: '🥺', description: 'pleading face' },
            { codePoint: '1f62c', display: '😬', description: 'grimacing face' },
            { codePoint: '1f614', display: '😔', description: 'pensive face' },
            { codePoint: '1f62a', display: '😪', description: 'sleepy face' },
            { codePoint: '1f924', display: '🤤', description: 'drooling face' },
            { codePoint: '1f634', display: '😴', description: 'sleeping face' },
            { codePoint: '1f637', display: '😷', description: 'face with medical mask' },
            { codePoint: '1f912', display: '🤒', description: 'face with thermometer' },
            { codePoint: '1f915', display: '🤕', description: 'face with head-bandage' },
            { codePoint: '1f922', display: '🤢', description: 'nauseated face' }
        ]
    },
    nature: {
        name: "Nature",
        emojis: [
            { codePoint: '1f981', display: '🦁', description: 'lion' },
            { codePoint: '1f436', display: '🐶', description: 'dog face' },
            { codePoint: '1f431', display: '🐱', description: 'cat face' },
            { codePoint: '1f437', display: '🐷', description: 'pig face' },
            { codePoint: '1f428', display: '🐨', description: 'koala' },
            { codePoint: '1f98d', display: '🦍', description: 'gorilla' },
            { codePoint: '1f43c', display: '🐼', description: 'panda' },
            { codePoint: '1f984', display: '🦄', description: 'unicorn' },
            { codePoint: '1f340', display: '🍀', description: 'four leaf clover' },
            { codePoint: '1f338', display: '🌸', description: 'cherry blossom' }
        ]
    },
    food: {
        name: "Food & Drink",
        emojis: [
            { codePoint: '1f355', display: '🍕', description: 'pizza' },
            { codePoint: '1f354', display: '🍔', description: 'hamburger' },
            { codePoint: '1f35f', display: '🍟', description: 'french fries' },
            { codePoint: '1f366', display: '🍦', description: 'soft ice cream' },
            { codePoint: '1f382', display: '🎂', description: 'birthday cake' },
            { codePoint: '1f36a', display: '🍪', description: 'cookie' },
            { codePoint: '1f37f', display: '🍿', description: 'popcorn' },
            { codePoint: '1f369', display: '🍩', description: 'doughnut' },
            { codePoint: '1f36d', display: '🍭', description: 'lollipop' },
            { codePoint: '1f363', display: '🍣', description: 'sushi' }
        ]
    },
    objects: {
        name: "Objects",
        emojis: [
            { codePoint: '1f525', display: '🔥', description: 'fire' },
            { codePoint: '2b50', display: '⭐', description: 'star' },
            { codePoint: '1f308', display: '🌈', description: 'rainbow' },
            { codePoint: '2764', display: '❤️', description: 'red heart' },
            { codePoint: '1f49b', display: '💛', description: 'yellow heart' },
            { codePoint: '1f49a', display: '💚', description: 'green heart' },
            { codePoint: '1f499', display: '💙', description: 'blue heart' },
            { codePoint: '1f49c', display: '💜', description: 'purple heart' },
            { codePoint: '1f4a5', display: '💥', description: 'collision' },
            { codePoint: '2728', display: '✨', description: 'sparkles' }
        ]
    }
};

let selectedEmoji1 = null;
let selectedEmoji2 = null;
let currentCategory = 'faces';
let history = JSON.parse(localStorage.getItem('emojiHistory') || '[]');
let favorites = JSON.parse(localStorage.getItem('emojiFavorites') || '[]');

function init() {
    setupCategories();
    displayEmojis();
    displayHistory();
    displayFavorites();
    setupSearch();
    setupEventListeners();
    generateChallenge();
}

function setupCategories() {
    const categorySelector = document.getElementById('categorySelector');
    Object.entries(emojiCategories).forEach(([key, category]) => {
        const btn = document.createElement('button');
        btn.className = `category-btn ${key === currentCategory ? 'active' : ''}`;
        btn.textContent = category.name;
        btn.onclick = () => {
            currentCategory = key;
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            displayEmojis();
        };
        categorySelector.appendChild(btn);
    });
}

function displayEmojis(filter = '') {
    const grid = document.getElementById('emojiGrid');
    grid.innerHTML = '';
    
    const emojisToShow = filter ? 
        Object.values(emojiCategories).flatMap(category => category.emojis) :
        emojiCategories[currentCategory].emojis;
    
    emojisToShow
        .filter(emoji => 
            !filter || 
            emoji.description.toLowerCase().includes(filter.toLowerCase()) ||
            emoji.display.includes(filter)
        )
        .forEach(emoji => {
            const div = document.createElement('div');
            div.className = 'emoji-item';
            div.textContent = emoji.display;
            div.title = emoji.description;
            div.onclick = () => selectEmoji(emoji);
            grid.appendChild(div);
        });
}

function selectEmoji(emoji) {
    if (!selectedEmoji1) {
        selectedEmoji1 = emoji;
        document.getElementById('emoji1Display').textContent = emoji.display;
    } else if (!selectedEmoji2 && emoji !== selectedEmoji1) {
        selectedEmoji2 = emoji;
        document.getElementById('emoji2Display').textContent = emoji.display;
    }

    updateCombineButton();
}

function updateCombineButton() {
    const button = document.getElementById('combineButton');
    button.disabled = !(selectedEmoji1 && selectedEmoji2);
}

async function combineEmojis() {
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const result = document.getElementById('result');
    const favoriteButton = document.getElementById('favoriteButton');
    const exportButton = document.getElementById('exportButton');

    loading.style.display = 'block';
    error.style.display = 'none';
    result.innerHTML = '';
    favoriteButton.disabled = true;
    exportButton.disabled = true;

    try {
        const url = `https://emojik.vercel.app/s/${selectedEmoji1.codePoint}_${selectedEmoji2.codePoint}?size=256`;
        
        const img = document.createElement('img');
        img.src = url;
        img.alt = `Combination of ${selectedEmoji1.description} and ${selectedEmoji2.description}`;
        
        img.onload = () => {
            result.appendChild(img);
            addToHistory({
                emoji1: selectedEmoji1,
                emoji2: selectedEmoji2,
                result: url
            });
            loading.style.display = 'none';
            favoriteButton.disabled = false;
            exportButton.disabled = false;
        };
        
        img.onerror = () => {
            const reverseUrl = `https://emojik.vercel.app/s/${selectedEmoji2.codePoint}_${selectedEmoji1.codePoint}?size=256`;
            img.src = reverseUrl;
            
            img.onerror = () => {
                error.style.display = 'block';
                error.textContent = 'Sorry, this combination isn\'t available! Try a different pair of emojis.';
                loading.style.display = 'none';
                favoriteButton.disabled = true;
                exportButton.disabled = true;
            };
        };

    } catch (err) {
        error.style.display = 'block';
        error.textContent = 'Sorry, this combination isn\'t available! Try a different pair of emojis.';
        loading.style.display = 'none';
        favoriteButton.disabled = true;
        exportButton.disabled = true;
    }
}

function addToHistory(combination) {
    history.unshift(combination);
    if (history.length > 12) history.pop();
    localStorage.setItem('emojiHistory', JSON.stringify(history));
    displayHistory();
}

function displayHistory() {
    const historyContainer = document.getElementById('history');
    historyContainer.innerHTML = '';

    history.forEach((combo, index) => {
        const div = document.createElement('div');
        div.className = 'history-item';
        div.innerHTML = `
            <div>${combo.emoji1.display} + ${combo.emoji2.display}</div>
            <img src="${combo.result}" alt="Emoji combination">
        `;
        div.onclick = () => {
            selectedEmoji1 = combo.emoji1;
            selectedEmoji2 = combo.emoji2;
            document.getElementById('emoji1Display').textContent = combo.emoji1.display;
            document.getElementById('emoji2Display').textContent = combo.emoji2.display;
            updateCombineButton();
            combineEmojis();
        };
        historyContainer.appendChild(div);
    });
}

function resetSelection() {
    selectedEmoji1 = null;
    selectedEmoji2 = null;
    document.getElementById('emoji1Display').textContent = 'Select first emoji';
    document.getElementById('emoji2Display').textContent = 'Select second emoji';
    document.getElementById('favoriteButton').disabled = true;
    document.getElementById('exportButton').disabled = true;
    updateCombineButton();
    document.getElementById('result').innerHTML = '';
}

function setupSearch() {
    const searchInput = document.getElementById('emojiSearch');
    searchInput.addEventListener('input', (e) => {
        displayEmojis(e.target.value);
    });
}

function setupEventListeners() {
    document.getElementById('combineButton').addEventListener('click', combineEmojis);
    document.getElementById('resetButton').addEventListener('click', resetSelection);
    document.getElementById('randomButton').addEventListener('click', generateRandomCombination);
    document.getElementById('favoriteButton').addEventListener('click', toggleFavorite);
    document.getElementById('exportButton').addEventListener('click', exportToPNG);
    document.getElementById('newChallengeButton').addEventListener('click', generateChallenge);
}

function generateRandomCombination() {
    const allEmojis = Object.values(emojiCategories).flatMap(category => category.emojis);
    const randomEmoji1 = allEmojis[Math.floor(Math.random() * allEmojis.length)];
    const randomEmoji2 = allEmojis[Math.floor(Math.random() * allEmojis.length)];
    
    selectedEmoji1 = randomEmoji1;
    selectedEmoji2 = randomEmoji2;
    document.getElementById('emoji1Display').textContent = randomEmoji1.display;
    document.getElementById('emoji2Display').textContent = randomEmoji2.display;
    updateCombineButton();
    combineEmojis();
}

function toggleFavorite() {
    const currentCombination = {
        emoji1: selectedEmoji1,
        emoji2: selectedEmoji2,
        result: document.querySelector('#result img').src
    };

    const index = favorites.findIndex(fav => 
        fav.emoji1.codePoint === currentCombination.emoji1.codePoint && 
        fav.emoji2.codePoint === currentCombination.emoji2.codePoint
    );

    if (index === -1) {
        favorites.push(currentCombination);
    } else {
        favorites.splice(index, 1);
    }

    localStorage.setItem('emojiFavorites', JSON.stringify(favorites));
    displayFavorites();
}

function displayFavorites() {
    const favoritesContainer = document.getElementById('favorites');
    favoritesContainer.innerHTML = '';

    favorites.forEach((combo, index) => {
        const div = document.createElement('div');
        div.className = 'favorite-item';
        div.innerHTML = `
            <div>${combo.emoji1.display} + ${combo.emoji2.display}</div>
            <img src="${combo.result}" alt="Emoji combination">
        `;
        div.onclick = () => {
            selectedEmoji1 = combo.emoji1;
            selectedEmoji2 = combo.emoji2;
            document.getElementById('emoji1Display').textContent = combo.emoji1.display;
            document.getElementById('emoji2Display').textContent = combo.emoji2.display;
            updateCombineButton();
            combineEmojis();
        };
        favoritesContainer.appendChild(div);
    });
}

async function exportToPNG() {
    const resultImg = document.querySelector('#result img');
    if (!resultImg) return;

    const exportButton = document.getElementById('exportButton');
    const originalText = exportButton.textContent;
    exportButton.textContent = 'Exporting...';
    exportButton.disabled = true;

    try {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        
        const imageLoaded = new Promise((resolve, reject) => {
            img.onload = () => resolve();
            img.onerror = () => reject(new Error('Failed to load image'));
        });
        img.src = resultImg.src.replace('?size=256', '?size=512');
        await imageLoaded;

        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        
        const ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(img, 0, 0);

        const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));

        const filename = `emoji-kitchen-${selectedEmoji1.description}-${selectedEmoji2.description}.png`
            .toLowerCase()
            .replace(/[^a-z0-9-]/g, '-')
            .replace(/-+/g, '-');

        const link = document.createElement('a');
        link.download = filename;
        link.href = URL.createObjectURL(blob);
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(link.href);
    } catch (error) {
        console.error('Export failed:', error);
        alert('Failed to export image. Please try again.');
    } finally {
        // Reset button state
        exportButton.textContent = originalText;
        exportButton.disabled = false;
    }
}


function generateChallenge() {
    const allEmojis = Object.values(emojiCategories).flatMap(category => category.emojis);
    const randomEmoji1 = allEmojis[Math.floor(Math.random() * allEmojis.length)];
    const randomEmoji2 = allEmojis[Math.floor(Math.random() * allEmojis.length)];
    
    const challengeEmojis = document.getElementById('challengeEmojis');
    challengeEmojis.innerHTML = `
        <div class="selected-emojis">
            <div class="emoji-display">${randomEmoji1.display}</div>
            <div class="plus">+</div>
            <div class="emoji-display">${randomEmoji2.display}</div>
        </div>
    `;
}

init();