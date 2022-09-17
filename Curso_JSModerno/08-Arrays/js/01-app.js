const car = []

const producto = {
    label: 'Monitor',
    price: 400
}

const producto2 = {
    label: 'SmartPhone',
    price: 800
}

const producto3 = {
    label: 'Keyboard',
    price: 50
}

let result;

result = [...car, producto]

result = [...result, producto2]

result = [producto3, ...result]


console.table(result)