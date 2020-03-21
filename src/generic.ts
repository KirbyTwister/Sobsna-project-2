// // const cars: string [] = ['Ford', 'Audi']
// // const cars2: Array<string> = ['Ford', 'Audi']

// const promise: Promise<number> = new Promise(resolve => {
//     setTimeout(()=> {
//         resolve(42)
//     }, 2000)
// })

// promise.then(data => {
//     console.log(data.toFixed())
// })

function mergeObjects<T extends object, R extends object>(a: T, b: R) {
    return Object.assign( {}, a, b)
}

const merged = mergeObjects({name: 'Ortem'}, {age: 18})
const merged2 =mergeObjects ({model: 'Ford'}, {year: 2010})

// const merged3 = mergeObjects({a: 1}, 'bbb')
// console.log(merged3)

// console.log(merged.age)


// ==========

interface ILength{
    length: number
}

function withCount<T extends ILength>(value: T): {value: T, count: string}{
    return{
        value,
        count: `В этом объекте ${value.length} символов` 
    }
}

console.log(withCount('Привет TypeScript'))
