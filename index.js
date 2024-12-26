const mainElement = document.getElementById("main");

function search(contacts, keyword) {
  return contacts.filter(
    (contact) =>
      contact.firstName.toLowerCase().includes(keyword.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(keyword.toLowerCase()) ||
      contact.email.toLowerCase().includes(keyword.toLowerCase()) ||
      contact.phone.toLowerCase().includes(keyword.toLowerCase()) ||
      contact.company.toLowerCase().includes(keyword.toLowerCase()) ||
      contact.jobTitle.toLowerCase().includes(keyword.toLowerCase()) ||
      contact.address.toLowerCase().includes(keyword.toLowerCase()) ||
      contact.birthdate.toLowerCase().includes(keyword.toLowerCase()) ||
      contact.note.toLowerCase().includes(keyword.toLowerCase()) ||
      contact.label.toLowerCase().includes(keyword.toLowerCase()) ||
      contact.isFavorited.toLowerCase().includes(keyword.toLowerCase())
  );
}

function showAllContacts() {
  const urlParams = new URLSearchParams(window.location.search);
  const keyword = urlParams.get("keyword");
  const contacts = loadContacts();
  const renderContacts =
    keyword !== null ? search(contacts, keyword) : contacts;

  if (renderContacts.length === 0) {
    mainElement.innerHTML = `<p class="text-lg text-center">Contact is empty</p>`;
  } else {
    mainElement.innerHTML += `
    <table class="table-fixed border border-collapse">
    <thead class="text-center">
        <tr>
          <td class="border border-collapse font-medium">No</td>
          <td class="border border-collapse font-medium">First Name</td>
          <td class="border border-collapse font-medium">Last Name</td>
          <td class="border border-collapse font-medium">Email</td>
          <td class="border border-collapse font-medium">Phone</td>
          <td class="border border-collapse font-medium">Company</td>
          <td class="border border-collapse font-medium">Job Title</td>
          <td class="border border-collapse font-medium">Address</td>
          <td class="border border-collapse font-medium">Birthdate</td>
          <td class="border border-collapse font-medium">Note</td>
          <td class="border border-collapse font-medium">Label</td>
          <td class="border border-collapse font-medium">Favorited</td>
          <td class="border border-collapse font-medium">Action</td>
        </tr>
      </thead>

      <tbody id="table-body"></tbody>
      </table>`;

    const tableBodyElement = document.getElementById("table-body");

    let contactItemElements = renderContacts.map(
      (contact, index) =>
        `<tr class="hover:bg-slate-100">
          <td class="border border-collapse">${index + 1}</td>
          <td class="border border-collapse">${contact.firstName}</td>
          <td class="border border-collapse">${contact.lastName}</td>
          <td class="border border-collapse">${contact.email}</td>
          <td class="border border-collapse">${contact.phone}</td>
          <td class="border border-collapse">${contact.company}</td>
          <td class="border border-collapse">${contact.jobTitle}</td>
          <td class="border border-collapse">${contact.address}</td>
          <td class="border border-collapse">${contact.birthdate}</td>
          <td class="border border-collapse">${contact.note}</td>
          <td class="border border-collapse">${contact.label}</td>
          <td class="border border-collapse">${contact.isFavorited}</td>
          <td class="flex flex-wrap gap-3 border border-collapse">
          <a href="view-contact/?id=${contact.id}">
          <img class="w-6" src="icon/view.svg" alt="view action">
          </a>

            <a href="edit-contact/?id=${contact.id}">
              <img class="w-6" src="icon/edit.svg" alt="edit action">
            </a>
            
            <button onclick="deleteByID(${contact.id})">
            <img class="w-6" src="icon/delete.svg" alt="delete action">
            </button>
            </td>
            </tr>`
    );

    const contactItemString = contactItemElements.join("");
    tableBodyElement.innerHTML += contactItemString;
  }
}

function deleteByID(id) {
  const isDeleted = confirm("Are you sure to delete this data?");
  if (isDeleted) {
    const contacts = loadContacts();
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    saveContacts(filteredContacts);

    window.location.href = "/";
  }
}

window.addEventListener("load", function () {
  showAllContacts();
});
