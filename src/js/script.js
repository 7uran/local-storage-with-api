const BASE_URL = "https://northwind.vercel.app/api/suppliers";
const table = document.querySelector(".table tbody");
const saveBtn = document.querySelector(".save-changes")


async function getData(url, endpoint) {
    await fetch(`${url}/${endpoint}`).then((response) => response.json()).then(data => {
        localStorage.clear()
        localStorage.setItem("suppliers", JSON.stringify(data))
    })
}
getData(BASE_URL, "")
addTable()


function addTable() {
    try {
        storage = JSON.parse(localStorage.getItem('suppliers'))
        storage.forEach(data => {
            table.innerHTML += `<tr>
        <td>${data.id}</td>
        <td>${data.companyName}</td>
        <td>${data.contactName}</td>
        <td>${data.contactTitle}</td>
        <td>${data.address.city}</td>
        <td>${data.address.country}</td>
        <td>${data.address.phone}</td>
        <td>${data.address.postalCode}</td>
        <td>${data.address.region}</td>
        <td>${data.address.street}</td>
        <td><button class="deletebtn" data_id=${data.id}>DELETE</button></td>
    </tr>`
        });
    } catch (error) {
        console.log(error);
    }

}

let id_input = document.querySelector(".id-input");
let company_name_input = document.querySelector(".company-name-input");
let contact_name_input = document.querySelector(".contact-name-input")
let contact_title_input = document.querySelector(".contact-title-input")
let city_input = document.querySelector(".city-input")
let country_input = document.querySelector(".country-input")
let phone_input = document.querySelector(".phone-input")
let postal_input = document.querySelector(".postal-code")
let region = document.querySelector(".region")
let street = document.querySelector(".street")

saveBtn.addEventListener("click", () => {
    const data = {
        id: id_input.value,
        companyName: company_name_input.value,
        contactName: contact_name_input.value,
        contactTitle: contact_title_input.value,
        address: {
            city: city_input.value,
            country: country_input.value,
            phone: phone_input.value,
            postal: postal_input.value,
            region: region.value,
            street: street.value
        }
    }



    fetch("https://northwind.vercel.app/api/suppliers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            alert("Successfully posted!", data);

        })
        .catch((error) => {
            console.error("Error:", error);
        });
})



function deleteData() {

}

