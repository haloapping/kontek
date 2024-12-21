function showAllContacts(contacts) {
  if (contacts.length === 0) {
    const mainElement = document.getElementById("main");
    mainElement.innerHTML = `<p>Contact is empty.</p>`;
    return;
  }

  const tableHTMLString = `
    <table>
      <caption>
        List Contacts
      </caption>
      <thead>
        <tr>
          <td>Full Name</td>
          <td>Phone</td>
          <td>Email</td>
          <td>Company</td>
          <td>Job Title</td>
          <td>Address</td>
          <td>Birthdate</td>
          <td>Note</td>
          <td>Label</td>
          <td>Favorited</td>
          <td>Action</td>
        </tr>
      </thead>

      <tbody id="table-body">
        <!-- Table Rows -->
      </tbody>
    </table>
    `;

  const mainElement = document.getElementById("main");
  mainElement.innerHTML += tableHTMLString;

  const tableBodyElement = document.getElementById("table-body");

  const contactItemElements = contacts.map(
    (contact) =>
      `<tr>
        <td>${contact.fullName}</td>
        <td>${contact.phone}</td>
        <td>${contact.email}</td>
        <td>${contact.company}</td>
        <td>${contact.jobTitle}</td>
        <td>${contact.address}</td>
        <td>${contact.birthdate}</td>
        <td>${contact.note}</td>
        <td>${contact.label}</td>
        <td>${contact.isFavorited == "yes" ? "✅️" : "❌️"}</td>
        <td>
          <a href="/view-contact/?id=${contact.ID}" class="btn-action">View</a>
          <a href="/update-contact/?id=${contact.ID}" class="btn-action">Update</a>
          <button onclick="deleteContactById(${contact.ID})">Delete</button>
        </td>
      </tr>`
  );

  const contactItems = contactItemElements.join("");
  tableBodyElement.innerHTML = contactItems;
}

document.getElementById("search-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const searchFormData = new FormData(this);
  const keyword = searchFormData.get("search");
  const contacts = loadContacts();

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.fullName.toLowerCase().includes(keyword.toLowerCase()) ||
      contact.phone.toLowerCase().includes(keyword.toLowerCase()) ||
      contact.email.toLowerCase().includes(keyword.toLowerCase()) ||
      contact.company.toLowerCase().includes(keyword.toLowerCase()) ||
      contact.jobTitle.toLowerCase().includes(keyword.toLowerCase()) ||
      contact.address.toLowerCase().includes(keyword.toLowerCase()) ||
      contact.birthdate.toLowerCase().includes(keyword.toLowerCase()) ||
      contact.note.toLowerCase().includes(keyword.toLowerCase()) ||
      contact.label.toLowerCase().includes(keyword.toLowerCase())
  );
});

function deleteContactById(ID) {
  const isDeleted = confirm("Are you sure to delete?");
  if (isDeleted) {
    const contacts = loadContacts();
    filteredContacts = contacts.filter((contact) => contact.ID !== ID);
    saveContacts(filteredContacts);
    window.location.href = "/index.html";
  }
}

window.addEventListener("load", function () {
  const contacts = loadContacts();

  showAllContacts(contacts);
});
