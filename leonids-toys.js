// const stuffedAnimal = {
//     id:1,
//     name: 'Sle losttuffed bear',
//     color: 'brown',
//     sex: 'Uni',
//     weight: 50,
//     price: 12
// }

// const actionFigure = {
//     id: 2,
//     name: 'Power Ranger',
//     color: 'red',
//     sex: 'male',
//     weight: 10,
//     price: 15
// }

// const doll = {
//     id: 3,
//     name: 'Barbie',
//     color: 'pink',
//     sex: 'female',
//     weight: 11,
//     price: 16
// }

const toys = [
    {
        id:1,
        name: 'Stuffed bear',
        color: 'brown',
        sex: 'Uni',
        weight: 50,
        price: 12
    },{
        id: 2,
        name: 'Power Ranger',
        color: 'red',
        sex: 'male',
        weight: 10,
        price: 15
    },{
        id: 3,
        name: 'Barbie',
        color: 'pink',
        sex: 'female',
        weight: 11,
        price: 16
    }

]

const toyCar = {
    id:4,
    name:'toy car',
    color:'black',
    sex:'male',
    weight: 1,
    price: 30
}

const ball = {
    id:5,
    name:'ball',
    color:'red',
    sex: 'male',
    weight: 10,
    price: 50
}

toys.push(toyCar,ball);
console.log(toys);
for (const toy of toys) {
    console.log(`The ${toy.name} costs ${toy.price} at leonids toy store.`)
    
    
};