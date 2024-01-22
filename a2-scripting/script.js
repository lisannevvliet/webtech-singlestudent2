load()

async function load(year = null) {
    const response = await fetch("https://webtech.labs.vu.nl/api24/f81597a7")
    const result = await response.json()
    const tbody = document.querySelector("tbody")
    tbody.innerHTML = ""
    const years = []

    result.forEach(element => {
        if (!year || year == element["year"]) {
            const tr = document.createElement("tr")
            tr.innerHTML = `
                <td><img src="${element["poster"]}" alt="Poster ${element["name"]}"></td>
                <td>${element["name"]}</td>
                <td>${element["year"]}</td>
                <td>${element["genre"]}</td>
                <td>${element["description"]}</td>
            `
            tbody.appendChild(tr)

            if (!years.includes(element["year"])) {
                years.push(element["year"])
            }
        }
    })

    if (!year) {
        years.sort()
        const div = document.querySelector("div")
        div.innerHTML = ``

        for (const element of years) {
            const input = document.createElement("div")
            input.innerHTML = `
                <input type="radio" id="${element}" name="year" value="${element}">
                <label for="${element}">${element}</label>
            `
            div.appendChild(input)

            input.addEventListener("change", () => {
                load(element)
                window.scrollTo(0, 0)
            })
        }
    }
}

const form = document.querySelector("form")

form.addEventListener("submit", async event => {
    event.preventDefault()

    const formData = new FormData(form)
    await fetch("https://webtech.labs.vu.nl/api24/f81597a7", {
        method: "POST",
        body: new URLSearchParams(formData)
    })
    
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
    await fetch("https://webtech.labs.vu.nl/api24/f81597a7/reset")
    load()
})

document.querySelector("button").addEventListener("click", () => {
    const input = document.querySelector("input[name=year]:checked")

    if (input) {
        input.checked = false
        load()
        window.scrollTo(0, 0)
    }
})