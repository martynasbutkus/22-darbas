const carBrands = ["BMW", "VW", "AUDI", "MB"]

const cars = (app) => {
    const carList = document.createElement('ul')

    carList.innerHTML = carBrands.map((car) => `<li>${car}</li>`).join('')
    
    app.appendChild(carList)
}

export default cars