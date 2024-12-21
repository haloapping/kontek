function saveContacts(contacts) {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function loadContacts() {
  return JSON.parse(localStorage.getItem("contacts")) || [];
}
