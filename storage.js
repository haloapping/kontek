function loadContacts() {
  const localStorageContacts = localStorage.getItem("contacts");

  if (localStorageContacts === null) {
    return [];
  }

  return JSON.parse(localStorageContacts);
}

function saveContacts(contacts) {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}
