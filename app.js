let menuUL = document.getElementById("menuUL")
let btnStarters = document.getElementById("btnStarters")
let btnDesserts = document.getElementById("btnDesserts")
let btnEntrees = document.getElementById("btnEntrees")

// let starterDishes = dishes.filter(function(dish){
//     return 
// })

// startersArray = []
btnStarters.addEventListener('click',function(){
    let starterDishes = dishes.filter(function(dish){
            return dish.course == "Starters"
    }) 
    let liItems = starterDishes.map(function(dish) {
        return `<li class="dishElement">
                <h1 class="dishTitle">${dish.title}  -  $${dish.price}</h1>
                <div class="divclass">
                <img src=${dish.imageURL}></img>
                <p>${dish.description}</p>
                </div>
                </li>`
    })
    menuUL.innerHTML = liItems.join('')
})

btnEntrees.addEventListener('click',function(){
    let entreeDishes = dishes.filter(function(dish){
            return dish.course == "Entrees"
    }) 
    let liItems = entreeDishes.map(function(dish) {
        return `<li class="dishElement">
                <h1 class="dishTitle">${dish.title}  -  $${dish.price}</h1>
                <p>${dish.description}</p>
                <img src=${dish.imageURL}></img>
                </li>`
    })
    menuUL.innerHTML = liItems.join('')
})

btnDesserts.addEventListener('click',function(){
    let dessertDishes = dishes.filter(function(dish){
            return dish.course == "Desserts"
    }) 
    let liItems = dessertDishes.map(function(dish) {
        return `<li class="dishElement">
                <h1 class="dishTitle">${dish.title}  -  $${dish.price}</h1>
                <p>${dish.description}</p>
                <img src=${dish.imageURL}></img>
                </li>`
    })
    menuUL.innerHTML = liItems.join('')
})


// deleteButton.addEventListener('click',function(){
    
// })

// deleteButton.addEventListener('click',function(){
//     unorderedTaskList.removeChild(this.parentElement)
//     completedTaskList.removeChild(this.parentElement)
//     //unorderedTaskList.removeChild(itemElement)
    
// })

// let liItems = dishes.map(function(dish) {
//     return `<li class="dishElement">
//             <h1 class="dishTitle">${dish.title}  -  $${dish.price}</h1>
//             <p>${dish.description}</p>
//             <img src=${dish.imageURL}></img>
//             </li>`
// })


console.log(liItems)



// let liItems = dishes.map(function(post) {

//     return `<li>
//             <h1>Title: ${dish.Title}</h1>
//             <h3>${post.title}</h3>
//             <p>${post.body}</p>
//             </li>`
//   })