const loadHeader = (app) => {
    const header = document.createElement("header")
    header.innerHTML =
    `
    <h1>Header</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius optio sunt numquam repellendus libero accusantium, assumenda in aliquid voluptatum non incidunt dolorum. Provident autem quis ab perspiciatis veniam, iure alias!</p>
    `
    app.append(header);
}

export default loadHeader