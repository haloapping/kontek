document
  .getElementById("add-contact-from")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const addContactFormData = new FormData(this);
    const localStorageContacts = loadContacts();
    let newID;
    if (localStorageContacts.length === 0) {
      newID = 1;
    } else {
      newID =
        parseInt(localStorageContacts[localStorageContacts.length - 1].ID) + 1;
    }

    const newContact = {
      ID: newID,
      fullName: addContactFormData.get("full-name"),
      phone: addContactFormData.get("phone"),
      email: addContactFormData.get("email"),
      company: addContactFormData.get("company"),
      jobTitle: addContactFormData.get("job-title"),
      address: addContactFormData.get("address"),
      birthdate: addContactFormData.get("birthdate"),
      note: addContactFormData.get("notes"),
      label: addContactFormData.get("label"),
      isFavorited: addContactFormData.get("is-favorited"),
      createdAt: new Date(),
      updatedAt: null,
    };

    localStorageContacts.push(newContact);
    saveContacts(localStorageContacts);

    window.location.href = "/";
  });
