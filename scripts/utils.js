import Card from "./card.js";

const modal = document.querySelector(".modal");
const body = document.querySelector(".body");
const modalFigurePhoto = document.querySelector("#modal__figure-photo");
const modalFigureCaption = document.querySelector("#modal__figure-caption");
const modalBox = document.querySelector("#modal__box");
const modalFigure = document.querySelector("#modal__figure");

const inputCardTitle = document.querySelector("#modal__input-title");
const inputCardPhoto = document.querySelector("#modal__input-photo");
const profileName = document.querySelector("#profile__name");
const profileAbout = document.querySelector("#profile__about");

const inputName = document.querySelector("#modal__input-name");
const inputAbout = document.querySelector("#modal__input-about");

const modalOverlay = document.querySelector("#modal-overlay");

const elementsList = document.querySelector(".elements");

export function addCard(name, link) {
  const newElement = new Card(name, link);
  elementsList.prepend(newElement.getCardElement());
}

export function openFigureModal(link, name) {
  modal.classList.add("popup__opened");
  body.classList.add("stop-scroll");
  modalBox.style.display = "none";
  modalFigure.style.display = "block";
  modalFigurePhoto.src = link;
  modalFigureCaption.textContent = name;
}

export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  body.classList.remove("stop-scroll");
  modal.classList.remove("popup__opened");
}

export function handleAddCardSubmit(evt) {
  evt.preventDefault();

  addCard(inputCardTitle.value, inputCardPhoto.value);
  body.classList.remove("stop-scroll");
  modal.classList.remove("popup__opened");
}

function closeModalEsc(evt) {
  if (evt.key === "Escape") {
    closeModal();
  }
}

function closeModalOverlay(evt) {
  if (evt.target === modalOverlay) {
    closeModal();
  }
}

export function addCloseModalEventListener() {
  modalOverlay.addEventListener("click", closeModalOverlay);
  document.addEventListener("keydown", closeModalEsc);
}

function removeCloseModalEventListener() {
  modalOverlay.removeEventListener("click", closeModalOverlay);
  document.removeEventListener("keydown", closeModalEsc);
}

export function closeModal() {
  body.classList.remove("stop-scroll");
  modal.classList.remove("popup__opened");
  removeCloseModalEventListener();
}
