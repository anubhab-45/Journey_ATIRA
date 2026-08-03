const lettersGrid = document.getElementById('lettersGrid');
const searchInput = document.getElementById('letterSearch');
const filterSelect = document.getElementById('letterSort');
const fancyFilter = document.getElementById('favoriteFilter');
const modal = document.getElementById('letterModal');
const closeModal = document.getElementById('letterClose');
const modalOverlay = document.getElementById('letterModalOverlay');
const modalCategory = document.getElementById('letterModalCategory');
const modalTitle = document.getElementById('letterModalTitle');
const modalDate = document.getElementById('letterModalMeta');
const modalBody = document.getElementById('letterModalBody');
const prevButton = document.getElementById('letterPrev');
const nextButton = document.getElementById('letterNext');
const counter = document.getElementById('letterCounter');
const favoriteButton = document.getElementById('letterModalFavorite');

let currentLetters = [];
let currentIndex = 0;
let favoritesOnly = false;

function formatDate(value) {
  if (!value) return 'Date pending';
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toISOString().split('T')[0];
}

function getFilteredLetters() {
  let items = Array.isArray(window.lettersData) ? [...window.lettersData] : [];

  if (searchInput && searchInput.value.trim()) {
    const query = searchInput.value.toLowerCase();
    items = items.filter(letter =>
      (letter.title || '').toLowerCase().includes(query) ||
      (letter.body || '').toLowerCase().includes(query) ||
      (letter.category || '').toLowerCase().includes(query)
    );
  }

  if (favoritesOnly) {
    items = items.filter(letter => letter.favorite);
  }

  if (filterSelect) {
    const value = filterSelect.value;
    if (value === 'oldest') {
      items.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (value === 'az') {
      items.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
    } else if (value === 'za') {
      items.sort((a, b) => (b.title || '').localeCompare(a.title || ''));
    } else if (value === 'newest') {
      items.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
      items.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
  }

  return items;
}

function updateModal(letter) {
  if (!letter || !modalCategory || !modalTitle || !modalDate || !modalBody || !counter) return;
  modalCategory.textContent = (letter.category || 'Letter').toUpperCase();
  modalTitle.textContent = letter.title || 'A Letter';
  modalDate.textContent = formatDate(letter.date);
  modalBody.textContent = letter.body || '';
  counter.textContent = `${currentIndex + 1} / ${currentLetters.length}`;
}

function renderLetters() {
  if (!lettersGrid) return;

  currentLetters = getFilteredLetters();
  lettersGrid.innerHTML = '';

  if (!currentLetters.length) {
    lettersGrid.innerHTML = '<div class="letters-empty">No letters found yet.</div>';
    return;
  }

  currentLetters.forEach((letter, index) => {
    const card = document.createElement('article');
    card.className = 'letter-card glass';
    card.style.animation = 'fadeUp 0.7s ease both';
    card.style.animationDelay = `${index * 0.08}s`;
    card.innerHTML = `
      <div class="letter-card-top">
        <span class="letter-category">${letter.category || 'Letter'}</span>
        ${letter.favorite ? '<span class="letter-favorite">★ Favorite</span>' : ''}
      </div>
      <h3>${letter.title || 'A Letter'}</h3>
      <p class="letter-date">${formatDate(letter.date)}</p>
      <p class="letter-preview">${(letter.body || '').slice(0, 120)}${(letter.body || '').length > 120 ? '...' : ''}</p>
      <button class="btn letter-open-btn">Read Letter</button>
    `;

    card.querySelector('.letter-open-btn').addEventListener('click', () => {
      openLetter(index);
    });

    lettersGrid.appendChild(card);
  });
}

function openLetter(index) {
  if (!modal) return;
  currentIndex = index;
  const letter = currentLetters[index];
  if (!letter) return;
  updateModal(letter);
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
}

function closeLetter() {
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
}

function showPrevLetter() {
  if (!currentLetters.length) return;
  currentIndex = (currentIndex - 1 + currentLetters.length) % currentLetters.length;
  updateModal(currentLetters[currentIndex]);
}

function showNextLetter() {
  if (!currentLetters.length) return;
  currentIndex = (currentIndex + 1) % currentLetters.length;
  updateModal(currentLetters[currentIndex]);
}

if (searchInput) {
  searchInput.addEventListener('input', renderLetters);
}

if (filterSelect) {
  filterSelect.addEventListener('change', renderLetters);
}

if (fancyFilter) {
  fancyFilter.addEventListener('click', () => {
    favoritesOnly = !favoritesOnly;
    fancyFilter.setAttribute('aria-pressed', String(favoritesOnly));
    renderLetters();
  });
}

if (closeModal) closeModal.addEventListener('click', closeLetter);
if (modalOverlay) modalOverlay.addEventListener('click', closeLetter);
if (prevButton) prevButton.addEventListener('click', showPrevLetter);
if (nextButton) nextButton.addEventListener('click', showNextLetter);
if (favoriteButton) {
  favoriteButton.addEventListener('click', () => {
    const letter = currentLetters[currentIndex];
    if (!letter) return;
    letter.favorite = !letter.favorite;
    favoriteButton.textContent = letter.favorite ? '★ Keeping this letter' : '♡ Keep this letter';
    renderLetters();
  });
}

document.addEventListener('DOMContentLoaded', renderLetters);
