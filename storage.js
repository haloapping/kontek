function saveContacts(contacts) {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function loadContacts() {
  const contacts = localStorage.getItem("contacts");
  if (!contacts) {
    saveContacts([]);
  }

  try {
    return JSON.parse(contacts);
  } catch (error) {
    console.error("Failed to load contacts", error);
  }
}
