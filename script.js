"use strict";

const translations = {
  pt: {
    eyebrow: "SABOR MARCANTE",
    heroTitle: "Escolha seu favorito.",
    heroSubtitle: "Nomes originais e tradução de cada prato em uma experiência feita para celular.",
    searchPlaceholder: "Buscar prato ou ingrediente",
    sectionKicker: "CARDÁPIO PRINCIPAL",
    allDishes: "Todos os pratos",
    favoritesTitle: "Meus favoritos",
    itemSingular: "item",
    itemPlural: "itens",
    availability: "Consulte a unidade",
    openDetails: "Abrir detalhes",
    favoriteAdd: "Adicionar aos favoritos",
    favoriteRemove: "Remover dos favoritos",
    emptyTitle: "Nenhum prato encontrado",
    emptyText: "Tente outro nome, ingrediente ou categoria.",
    resetButton: "Limpar filtros",
    disclaimer: "Desenvolvido por Marco Aurelio Silva. Uso exclusivo por Laecyo Brandão, dados do cardápio obtidos na internet",
    officialMenu: "Consultar cardápio oficial",
  },
  en: {
    eyebrow: "BOLD FLAVOUR",
    heroTitle: "Choose your favourite.",
    heroSubtitle: "Original dish names and their translations in a mobile-first menu experience.",
    searchPlaceholder: "Search dish or ingredient",
    sectionKicker: "MAIN MENU",
    allDishes: "All dishes",
    favoritesTitle: "My favourites",
    itemSingular: "item",
    itemPlural: "items",
    availability: "Ask your local restaurant",
    openDetails: "Open details",
    favoriteAdd: "Add to favourites",
    favoriteRemove: "Remove from favourites",
    emptyTitle: "No dishes found",
    emptyText: "Try another name, ingredient or category.",
    resetButton: "Clear filters",
    disclaimer: "Developed by Marco Aurelio Silva. For exclusive use by Laecyo Brandão; menu data obtained from the internet",
    officialMenu: "View official menu",
  }
};

const categories = [
  { id: "all", pt: "Todos", en: "All" },
  { id: "favorites", pt: "Favoritos", en: "Favourites", special: true },
  { id: "starters", pt: "Aperitivos", en: "Starters" },
  { id: "ribs", pt: "Costelas", en: "Ribs" },
  { id: "steaks", pt: "Steaks", en: "Steaks" },
  { id: "pasta", pt: "Massas", en: "Pasta" },
  { id: "chicken-fish", pt: "Frangos e peixes", en: "Chicken & fish" },
  { id: "burgers", pt: "Burgers", en: "Burgers" },
  { id: "sides", pt: "Acompanhamentos", en: "Sides" },
  { id: "desserts", pt: "Sobremesas", en: "Desserts" },
  { id: "drinks", pt: "Bebidas", en: "Drinks" }
];

const menuItems = [
  {
    id: "bloomin-onion",
    category: "starters",
    name: "Bloomin’ Onion®",
    translation: { pt: "Cebola florescendo", en: "Blooming onion" },
    description: {
      pt: "Cebola gigante empanada, aberta em formato de pétalas e servida com molho Bloom. Ideal para compartilhar.",
      en: "A giant battered onion cut into petals and served with Bloom sauce. Made for sharing."
    },
    visual: ["#b66a20", "#7f2b15"]
  },
  {
    id: "aussie-cheese-fries",
    category: "starters",
    name: "Aussie Cheese Fries®",
    translation: { pt: "Fritas australianas com queijo", en: "Australian-style cheese fries" },
    description: {
      pt: "Batatas fritas cobertas com queijo derretido e bacon, acompanhadas de molho cremoso.",
      en: "French fries topped with melted cheese and bacon, served with a creamy dipping sauce."
    },
    visual: ["#d29b32", "#8b3d16"]
  },
  {
    id: "kookaburra-wings",
    category: "starters",
    name: "Kookaburra Wings®",
    translation: { pt: "Asinhas Kookaburra", en: "Kookaburra chicken wings" },
    description: {
      pt: "Asinhas de frango empanadas com tempero marcante, disponíveis em diferentes níveis de picância.",
      en: "Seasoned, breaded chicken wings available in different heat levels."
    },
    visual: ["#a93522", "#4f1712"]
  },
  {
    id: "big-five-boomerang",
    category: "starters",
    name: "Big Five Boomerang",
    translation: { pt: "Bumerangue dos cinco favoritos", en: "Boomerang of five favourites" },
    description: {
      pt: "Seleção para compartilhar com wings, cheese fries, ribs, camarões e pétalas de Bloomin’ Onion.",
      en: "A sharing platter with wings, cheese fries, ribs, shrimp and Bloomin’ Onion petals."
    },
    visual: ["#76503d", "#2f211c"]
  },
  {
    id: "ribs-on-the-barbie",
    category: "ribs",
    name: "Ribs On The Barbie",
    translation: { pt: "Costelas na churrasqueira", en: "Ribs on the barbecue" },
    description: {
      pt: "Costela suína preparada lentamente e finalizada em chama aberta, servida com molho e acompanhamentos.",
      en: "Slow-cooked pork ribs finished over an open flame and served with sauce and side dishes."
    },
    visual: ["#7a241c", "#26110f"]
  },
  {
    id: "junior-ribs",
    category: "ribs",
    name: "Junior Ribs",
    translation: { pt: "Costela júnior", en: "Junior-size ribs" },
    description: {
      pt: "Versão menor da tradicional costela da casa, indicada para uma refeição individual.",
      en: "A smaller serving of the restaurant’s signature ribs, suitable for one person."
    },
    visual: ["#9b3c27", "#4a1712"]
  },
  {
    id: "victorias-filet",
    category: "steaks",
    name: "Victoria’s Filet",
    translation: { pt: "Filé Victoria", en: "Victoria’s filet steak" },
    description: {
      pt: "Corte macio de filé-mignon grelhado no ponto escolhido e servido com acompanhamentos.",
      en: "A tender filet mignon steak grilled to your preferred doneness and served with sides."
    },
    visual: ["#6d3626", "#24120d"]
  },
  {
    id: "outback-special",
    category: "steaks",
    name: "The Outback Special",
    translation: { pt: "O especial da casa", en: "The house special" },
    description: {
      pt: "Steak temperado com a mistura de especiarias da casa, grelhado e acompanhado de guarnições.",
      en: "A steak seasoned with the house spice blend, grilled and served with side dishes."
    },
    visual: ["#8c4d2e", "#2c1710"]
  },
  {
    id: "toowoomba-pasta",
    category: "pasta",
    name: "Toowoomba Pasta",
    translation: { pt: "Massa à moda de Toowoomba", en: "Toowoomba-style pasta" },
    description: {
      pt: "Massa com molho cremoso e sabor marcante, combinada com ingredientes selecionados da casa.",
      en: "Pasta in a rich, creamy sauce combined with selected house ingredients."
    },
    visual: ["#d38f43", "#6a321b"]
  },
  {
    id: "chicken-pasta-primavera",
    category: "pasta",
    name: "Chicken Pasta Primavera",
    translation: { pt: "Massa primavera com frango", en: "Chicken primavera pasta" },
    description: {
      pt: "Massa com frango grelhado, legumes e molho cremoso equilibrado.",
      en: "Pasta with grilled chicken, vegetables and a balanced creamy sauce."
    },
    visual: ["#b3773e", "#5b2f1f"]
  },
  {
    id: "alice-springs-chicken",
    category: "chicken-fish",
    name: "Alice Springs Chicken®",
    translation: { pt: "Frango de Alice Springs", en: "Alice Springs chicken" },
    description: {
      pt: "Peito de frango grelhado coberto com bacon, champignons e queijos gratinados, com molho honey mustard.",
      en: "Grilled chicken breast topped with bacon, mushrooms and melted cheese, served with honey mustard."
    },
    visual: ["#c47633", "#6b2918"]
  },
  {
    id: "chicken-on-the-barbie",
    category: "chicken-fish",
    name: "Chicken On The Barbie",
    translation: { pt: "Frango na churrasqueira", en: "Barbecued chicken" },
    description: {
      pt: "Peito de frango temperado e grelhado, servido com molho e acompanhamentos escolhidos.",
      en: "Seasoned grilled chicken breast served with sauce and your selected side dishes."
    },
    visual: ["#b85e2e", "#542316"]
  },
  {
    id: "south-american-salmon",
    category: "chicken-fish",
    name: "South American Salmon",
    translation: { pt: "Salmão sul-americano", en: "South American salmon" },
    description: {
      pt: "Filé de salmão grelhado e temperado, servido com acompanhamentos.",
      en: "A seasoned grilled salmon fillet served with side dishes."
    },
    visual: ["#d66f58", "#753044"]
  },
  {
    id: "outbacker-burger",
    category: "burgers",
    name: "The Outbacker Burger",
    translation: { pt: "O hambúrguer Outbacker", en: "The Outbacker burger" },
    description: {
      pt: "Hambúrguer bovino com queijo, salada e molho da casa, servido em pão macio.",
      en: "A beef burger with cheese, salad and house sauce, served on a soft bun."
    },
    visual: ["#9c4a20", "#422014"]
  },
  {
    id: "picanha-bloomin-burger",
    category: "burgers",
    name: "Picanha Bloomin’ Burger",
    translation: { pt: "Burger de picanha com pétalas de cebola", en: "Picanha burger with onion petals" },
    description: {
      pt: "Burger de picanha com queijo e pétalas crocantes de Bloomin’ Onion em pão brioche.",
      en: "A picanha burger with cheese and crispy Bloomin’ Onion petals on a brioche bun."
    },
    visual: ["#a92f23", "#4b1813"]
  },
  {
    id: "aussie-mac-cheese",
    category: "sides",
    name: "Aussie Mac N’ Cheese",
    translation: { pt: "Macarrão australiano com queijo", en: "Australian-style macaroni and cheese" },
    description: {
      pt: "Macarrão curto envolvido em molho cremoso de queijo, servido como acompanhamento.",
      en: "Short pasta coated in a creamy cheese sauce and served as a side dish."
    },
    visual: ["#d5a640", "#7b451c"]
  },
  {
    id: "garlic-mashed-potato",
    category: "sides",
    name: "Garlic Mashed Potato",
    translation: { pt: "Purê de batata com alho", en: "Garlic mashed potato" },
    description: {
      pt: "Purê de batatas cremoso com toque de alho.",
      en: "Creamy mashed potatoes with a touch of garlic."
    },
    visual: ["#c6a866", "#725e35"]
  },
  {
    id: "chocolate-thunder",
    category: "desserts",
    name: "Chocolate Thunder From Down Under®",
    translation: { pt: "Trovão de chocolate australiano", en: "Australian chocolate thunder" },
    description: {
      pt: "Sobremesa intensa de chocolate, servida com sorvete e cobertura cremosa.",
      en: "A rich chocolate dessert served with ice cream and a creamy topping."
    },
    visual: ["#5a291d", "#1e0f0a"]
  },
  {
    id: "cinnamon-oblivion",
    category: "desserts",
    name: "Cinnamon Oblivion",
    translation: { pt: "Delírio de canela", en: "Cinnamon indulgence" },
    description: {
      pt: "Sobremesa com maçã, canela, sorvete e elementos crocantes.",
      en: "A dessert combining apple, cinnamon, ice cream and crunchy elements."
    },
    visual: ["#b36b2e", "#5c2a18"]
  },
  {
    id: "pink-lemonade",
    category: "drinks",
    name: "Pink Lemonade",
    translation: { pt: "Limonada rosa", en: "Pink lemonade" },
    description: {
      pt: "Bebida cítrica e refrescante com coloração rosada.",
      en: "A refreshing citrus drink with a pink colour."
    },
    visual: ["#d65a78", "#8f274d"]
  },
  {
    id: "iced-tea",
    category: "drinks",
    name: "Iced Tea",
    translation: { pt: "Chá gelado", en: "Iced tea" },
    description: {
      pt: "Chá servido gelado, disponível na versão tradicional ou com sabores.",
      en: "Tea served chilled, available plain or flavoured."
    },
    visual: ["#a45d27", "#5a2d16"]
  }
];

const state = {
  language: localStorage.getItem("outback-menu-language") || "pt",
  category: "all",
  search: "",
  favorites: new Set(JSON.parse(localStorage.getItem("outback-menu-favorites") || "[]")),
  activeModalItemId: null
};

const elements = {
  languageToggle: document.querySelector("#languageToggle"),
  languageLabels: document.querySelectorAll("[data-language-label]"),
  searchInput: document.querySelector("#searchInput"),
  clearSearch: document.querySelector("#clearSearch"),
  categoryList: document.querySelector("#categoryList"),
  menuGrid: document.querySelector("#menuGrid"),
  resultCount: document.querySelector("#resultCount"),
  resultsTitle: document.querySelector("#resultsTitle"),
  emptyState: document.querySelector("#emptyState"),
  resetFilters: document.querySelector("#resetFilters"),
  template: document.querySelector("#menuCardTemplate"),
  modal: document.querySelector("#detailsModal"),
  modalCategory: document.querySelector("#modalCategory"),
  modalTitle: document.querySelector("#modalTitle"),
  modalTranslation: document.querySelector("#modalTranslation"),
  modalDescription: document.querySelector("#modalDescription")
};

function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function getInitials(name) {
  return name
    .replace(/[®’']/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function getCategory(categoryId) {
  return categories.find((category) => category.id === categoryId);
}

function currentCopy(key) {
  return translations[state.language][key];
}

function updateStaticTranslations() {
  document.documentElement.lang = state.language === "pt" ? "pt-BR" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (currentCopy(key)) element.textContent = currentCopy(key);
  });

  elements.searchInput.placeholder = currentCopy("searchPlaceholder");
  elements.searchInput.setAttribute("aria-label", currentCopy("searchPlaceholder"));
  elements.languageToggle.dataset.language = state.language;

  elements.languageLabels.forEach((label) => {
    label.classList.toggle("is-active", label.dataset.languageLabel === state.language);
  });
}

function renderCategories() {
  elements.categoryList.innerHTML = "";

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-button";
    button.dataset.category = category.id;
    button.textContent = category[state.language];
    button.classList.toggle("is-active", category.id === state.category);
    button.setAttribute("aria-pressed", String(category.id === state.category));
    elements.categoryList.appendChild(button);
  });
}

function filterItems() {
  const query = normalizeText(state.search);

  return menuItems.filter((item) => {
    const matchesCategory =
      state.category === "all" ||
      (state.category === "favorites" && state.favorites.has(item.id)) ||
      state.category === item.category;

    if (!matchesCategory) return false;
    if (!query) return true;

    const searchableContent = normalizeText([
      item.name,
      item.translation.pt,
      item.translation.en,
      item.description.pt,
      item.description.en,
      getCategory(item.category)?.pt,
      getCategory(item.category)?.en
    ].join(" "));

    return searchableContent.includes(query);
  });
}

function updateHeading(itemCount) {
  const category = getCategory(state.category);
  const isFavorites = state.category === "favorites";

  elements.resultsTitle.textContent = isFavorites
    ? currentCopy("favoritesTitle")
    : state.category === "all"
      ? currentCopy("allDishes")
      : category[state.language];

  const itemWord = itemCount === 1 ? currentCopy("itemSingular") : currentCopy("itemPlural");
  elements.resultCount.textContent = `${itemCount} ${itemWord}`;
}

function renderMenu() {
  const visibleItems = filterItems();
  elements.menuGrid.innerHTML = "";

  visibleItems.forEach((item, index) => {
    const fragment = elements.template.content.cloneNode(true);
    const card = fragment.querySelector(".menu-card");
    const visual = fragment.querySelector(".food-visual");
    const favoriteButton = fragment.querySelector(".favorite-button");
    const category = getCategory(item.category);
    const isFavorite = state.favorites.has(item.id);

    card.dataset.itemId = item.id;
    card.setAttribute("aria-label", `${item.name} — ${currentCopy("openDetails")}`);
    card.style.animationDelay = `${Math.min(index * 35, 280)}ms`;
    visual.style.setProperty("--visual-1", item.visual[0]);
    visual.style.setProperty("--visual-2", item.visual[1]);

    fragment.querySelector(".food-initials").textContent = getInitials(item.name);
    fragment.querySelector(".food-label").textContent = category[state.language];
    fragment.querySelector(".category-badge").textContent = category[state.language];
    fragment.querySelector(".item-name").textContent = item.name;
    fragment.querySelector(".item-translation").textContent = item.translation[state.language];
    fragment.querySelector(".item-description").textContent = item.description[state.language];
    fragment.querySelector(".availability").textContent = currentCopy("availability");

    favoriteButton.classList.toggle("is-favorite", isFavorite);
    favoriteButton.setAttribute(
      "aria-label",
      isFavorite ? currentCopy("favoriteRemove") : currentCopy("favoriteAdd")
    );

    elements.menuGrid.appendChild(fragment);
  });

  updateHeading(visibleItems.length);
  elements.emptyState.hidden = visibleItems.length !== 0;
  elements.menuGrid.hidden = visibleItems.length === 0;
}

function render() {
  updateStaticTranslations();
  renderCategories();
  renderMenu();
  refreshModal();
}

function setLanguage(language) {
  state.language = language;
  localStorage.setItem("outback-menu-language", language);
  render();
}

function toggleLanguage() {
  setLanguage(state.language === "pt" ? "en" : "pt");
}

function setCategory(category) {
  state.category = category;
  renderCategories();
  renderMenu();
}

function toggleFavorite(itemId) {
  if (state.favorites.has(itemId)) {
    state.favorites.delete(itemId);
  } else {
    state.favorites.add(itemId);
  }

  localStorage.setItem("outback-menu-favorites", JSON.stringify([...state.favorites]));
  renderCategories();
  renderMenu();
}

function openModal(itemId) {
  state.activeModalItemId = itemId;
  refreshModal();
  elements.modal.hidden = false;
  document.body.classList.add("modal-open");
  elements.modal.querySelector(".modal-close").focus();
}

function refreshModal() {
  if (!state.activeModalItemId) return;

  const item = menuItems.find((entry) => entry.id === state.activeModalItemId);
  if (!item) return;

  const category = getCategory(item.category);
  elements.modalCategory.textContent = category[state.language];
  elements.modalTitle.textContent = item.name;
  elements.modalTranslation.textContent = item.translation[state.language];
  elements.modalDescription.textContent = item.description[state.language];
}

function closeModal() {
  elements.modal.hidden = true;
  document.body.classList.remove("modal-open");
  state.activeModalItemId = null;
}

function resetFilters() {
  state.category = "all";
  state.search = "";
  elements.searchInput.value = "";
  elements.clearSearch.hidden = true;
  renderCategories();
  renderMenu();
  elements.searchInput.focus();
}

elements.languageToggle.addEventListener("click", toggleLanguage);

elements.categoryList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  setCategory(button.dataset.category);
});

elements.searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  elements.clearSearch.hidden = !state.search;
  renderMenu();
});

elements.clearSearch.addEventListener("click", () => {
  state.search = "";
  elements.searchInput.value = "";
  elements.clearSearch.hidden = true;
  renderMenu();
  elements.searchInput.focus();
});

elements.menuGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".menu-card");
  if (!card) return;

  if (event.target.closest(".favorite-button")) {
    toggleFavorite(card.dataset.itemId);
    return;
  }

  openModal(card.dataset.itemId);
});

elements.menuGrid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  if (event.target.closest(".favorite-button")) return;

  const card = event.target.closest(".menu-card");
  if (!card) return;

  event.preventDefault();
  openModal(card.dataset.itemId);
});

elements.modal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-modal]")) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !elements.modal.hidden) closeModal();
});

elements.resetFilters.addEventListener("click", resetFilters);

render();
