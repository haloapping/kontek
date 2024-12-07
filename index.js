let contacts = [
  {
    id: 1,
    fullName: "Appang",
    phone: "081234567891",
    email: "appang@jamil.com",
    company: "Toko Pak Edi",
    jobTitle: "CRUD Engineer",
    address: "Jalan Jalan",
    birthday: "11-12-2012",
    notes: "notes",
    label: "Assistant",
  },
  {
    id: 2,
    fullName: "Apping",
    phone: "081234567891",
    email: "apping@jamil.com",
    company: "Toko Pak Edi",
    jobTitle: "CRUD Engineer",
    address: "Jalan Jalan",
    birthday: "11-12-2012",
    notes: "notes",
    label: "Partner",
  },
  {
    id: 3,
    fullName: "Appung",
    phone: "081234567891",
    email: "appung@jamil.com",
    company: "Toko Pak Edi",
    jobTitle: "CRUD Engineer",
    address: "Jalan Jalan",
    birthday: "11-12-2012",
    notes: "notes",
    label: "Brother",
  },
  {
    id: 4,
    fullName: "Appeng",
    phone: "081234567891",
    email: "appeng@jamil.com",
    company: "Toko Pak Edi",
    jobTitle: "CRUD Engineer",
    address: "Jalan Jalan",
    birthday: "11-12-2012",
    notes: "notes",
    label: "Brother",
  },
  {
    id: 5,
    fullName: "Appong",
    phone: "081234567891",
    email: "appong@jamil.com",
    company: "Toko Pak Edi",
    jobTitle: "CRUD Engineer",
    address: "Jalan Jalan",
    birthday: "11-12-2012",
    notes: "notes",
    label: "Child",
  },
];

function showAllContacts() {
  console.log("KonTek List:");
  for (let i = 0; i < contacts.length; i++) {
    console.log(`Id        : ${contacts[i].id}`);
    console.log(`Full Name : ${contacts[i].fullName}`);
    console.log(`Phone     : ${contacts[i].phone}`);
    console.log(`Email     : ${contacts[i].email}`);
    console.log(`Company   : ${contacts[i].company}`);
    console.log(`Job Title : ${contacts[i].jobTitle}`);
    console.log(`Birthday  : ${contacts[i].birthday}`);
    console.log(`Notes     : ${contacts[i].notes}`);
    console.log(`Label    : ${contacts[i].labels}`);
    console.log("========================================");
  }
}

showAllContacts();
