const contacts = loadContacts();

const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get("id"));

const contactById = contacts.find((contact) => contact.id === id);

const fullNameInputElement = document.getElementById("first-name");
fullNameInputElement.setAttribute("value", contactById.firstName);

const lastNameInputElement = document.getElementById("last-name");
lastNameInputElement.setAttribute("value", contactById.lastName);

const emailInputElement = document.getElementById("email");
emailInputElement.setAttribute("value", contactById.email);

const phoneInputElement = document.getElementById("phone");
phoneInputElement.setAttribute("value", contactById.phone);

const companyInputElement = document.getElementById("company");
companyInputElement.setAttribute("value", contactById.company);

const jobTitleInputElement = document.getElementById("job-title");
jobTitleInputElement.setAttribute("value", contactById.jobTitle);

const addressTextAreaElement = document.getElementById("address");
addressTextAreaElement.textContent = contactById.address;

const birtdateInputElement = document.getElementById("birthdate");
birtdateInputElement.setAttribute("value", contactById.birthdate);

const noteTextAreaElement = document.getElementById("note");
noteTextAreaElement.textContent = contactById.note;

const labelOptionElement = document.getElementById("label");
labelOptionElement.value = contactById.label;

const isFavoritedOptionElement = document.getElementById("is-favorited");
isFavoritedOptionElement.value = contactById.isFavorited;

const editContactFormElement = document.getElementById("edit-contact-form");
editContactFormElement.addEventListener("submit", function (event) {
  event.preventDefault();

  const editContactFormData = new FormData(this);
  const editedContact = {
    id: id,
    firstName: editContactFormData.get("first-name"),
    lastName: editContactFormData.get("last-name"),
    email: editContactFormData.get("email"),
    phone: editContactFormData.get("phone"),
    company: editContactFormData.get("company"),
    jobTitle: editContactFormData.get("job-title"),
    address: editContactFormData.get("address"),
    birthdate: editContactFormData.get("birthdate"),
    note: editContactFormData.get("note"),
    label: editContactFormData.get("label"),
    isFavorited: editContactFormData.get("is-favorited"),
    createdAt: contactById.createdAt,
    updatedAt: new Date(),
  };

  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].id === id) {
      contacts[i] = editedContact;
      break;
    }
  }

  saveContacts(contacts);

  window.location.href = "/";
});
