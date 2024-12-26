const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get("id"));

const localStorageContacts = loadContacts();
const contactById = localStorageContacts.find((contact) => contact.id === id);

const detailContactElement = document.getElementById("detail-contact");
detailContactElement.innerHTML += `
    <li>First Name: ${contactById.firstName}</li>
    <li>Last Name: ${contactById.lastName}</li>
    <li>Email: ${contactById.email}</li>
    <li>Phone: ${contactById.phone}</li>
    <li>Company: ${contactById.company}</li>
    <li>Job Title: ${contactById.jobTitle}</li>
    <li>Address: ${contactById.address}</li>
    <li>Birthdate: ${contactById.birthdate}</li>
    <li>Note: ${contactById.note}</li>
    <li>Label: ${contactById.label}</li>
    <li>Favorited: ${contactById.isFavorited}</li>
`;
