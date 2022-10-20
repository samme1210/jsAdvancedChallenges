/*
    Q1 - star ratings

function showRatings(rating) {
    let ratings = ""

    for (i = 0; i < Math.floor(rating); i++) {
        ratings += "*";

        if (i !== Math.floor(rating) - 1) {
            ratings += " ";
        }
    }
    if (!Number.isInteger(rating)) {
        ratings += " .";
    }
    return ratings;
}

console.log(showRatings(8.5));
*/

/* 
    Q2 - sort low to high

function sortLowToHigh(number) {
    return number.sort((a, b) => a - b);
}

console.log(sortLowToHigh([45, 65, 3124, 56, 7564, 4, 3435]));
*/

/*
    Q3 - sort arrays high to low 

function highToLow(arr) {
    return arr.sort((a, b) => {
        return b.price - a.price
    });
}

console.log(highToLow([
    {
        id: 1, price: 345
    },
    {
        id: 2, price: 23
    },
    {
        id: 3, price: 34 
    }
]));
*/

/*
    Q4 - return all posts by user 4

async function postsByUser(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await promise.json();

    const posts = result.filter(elem => elem.userId === userId)

    console.log(posts)
}

console.log(postsByUser(4))
*/

/*
    Q6 - return the first six incomplete todo's  
    - first attempt 

async function firstSixIncompleteTodos(completed) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
    const result = await promise.json();

    const posts = await result.filter(elem => elem.completed === completed);

    let newArr = [];
    
    if (posts.length = 6) {
        newArr.push(posts)
    }
    console.log(newArr);
}

console.log(firstSixIncompleteTodos(false));

    - second attempt

async function firstSixIncomplete(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
    const result = await promise.json();

    const posts = await result.filter(elem => !elem.completed).slice(0, userId);

    console.log(posts)
}

firstSixIncomplete(6);
*/