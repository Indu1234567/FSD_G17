// console.log(x)

try{
    console.log(x)
} catch(e){
    console.log(e)
}

function double(num){
    if(isNaN(num)){
        throw new Error(num + ' is not a number')
    }
    return num * 2
}

try{
    const result = double('hello')
    console.log(result)
} catch(e){
    console.log(e)
}

// ------------------

async function getUserWithFetch(){
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/useddrs')
        if(!res.ok){
            throw new Error('Request failed')
        }
        const data = await res.json()
        console.log(data)
    }
    catch(e){
        console.log(e)
    }
}
getUserWithFetch()

// --------------

async function getUserWithFetch2(){
    const res = await fetch('https://jsonplaceholder.typicode.com/useddrs')
    if(!res.ok){
        throw new Error('Request failed')
    }
    const data = await res.json()
    console.log(data)
}
getUserWithFetch2().catch(e => {
    console.log(e)
})


