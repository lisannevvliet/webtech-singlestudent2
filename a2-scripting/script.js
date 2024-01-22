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
        const div = document.querySelector("fieldset div")
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
            })
        }
    }
}

const overlay = document.querySelector(".overlay")
const modal = document.querySelector(".modal")

document.querySelector("div button").addEventListener("click", open)
document.querySelector(".modal button").addEventListener("click", close)
overlay.addEventListener("click", close)

function open() {
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}

function close() {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}

const form = document.querySelector("form")

form.addEventListener("submit", async event => {
    event.preventDefault()
    close()

    await fetch("https://webtech.labs.vu.nl/api24/f81597a7", {
        method: "POST",
        body: new URLSearchParams(new FormData(form))
    })
    load()
})

document.querySelector("input[type=reset]").addEventListener("click", async () => {
    await fetch("https://webtech.labs.vu.nl/api24/f81597a7/reset")
    load()
})

document.querySelector("fieldset button").addEventListener("click", () => {
    const input = document.querySelector("input[name=year]:checked")

    if (input) {
        input.checked = false
        load()
    }
})