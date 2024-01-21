const form = document.querySelector("form")

form.addEventListener("submit", async event => {
    event.preventDefault()

    const formData = new FormData(form)
    const response = await fetch("https://webtech.labs.vu.nl/api24/f81597a7", {
        method: "POST",
        body: new URLSearchParams(formData)
    })
    const result = await response.json()
    console.log(result)
    
    const tr = document.createElement("tr")
    tr.innerHTML = `
        <td><img src="${formData.get("poster")}" alt="Poster ${formData.get("name")}"></td>
        <td>${formData.get("name")}</td>
        <td>${formData.get("year")}</td>
        <td>${formData.get("genre")}</td>
        <td>${formData.get("description")}</td>
    `
    document.querySelector("tbody").appendChild(tr)
})

form.addEventListener("reset", async () => {
    const response = await fetch("https://webtech.labs.vu.nl/api24/f81597a7/reset")
    const result = await response.text()
    console.log(result)
})