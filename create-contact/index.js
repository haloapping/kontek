const createContactFormElement = document.getElementById("create-contact-form");

createContactFormElement.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(createContactFormElement);

  const newContact = {
    id: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
    firstName: formData.get("first-name"),
    lastName: formData.get("last-name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    company: formData.get("company"),
    jobTitle: formData.get("job-title"),
    address: formData.get("address"),
    birthdate: formData.get("birthdate"),
    note: formData.get("note"),
    label: formData.get("label"),
    isFavorited: formData.get("is-favorited"),
    createdAt: new Date(),
    updatedAt: null,
  };

  let contacts = loadContacts();
  contacts.push(newContact);

  saveContacts(contacts);

  window.location.href = "/";
});
