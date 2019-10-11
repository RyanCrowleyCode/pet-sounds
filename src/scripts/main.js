// Pet Sounds exercises!

// Represent your Pet
// Create an object that represents your pet.

// Pet Sounds
// Now that you have an object that represents your pet, it's time to add some behavior. Pick three behaviors that your pet has and add three kys to your pet object. Each key's value should be a function that logs to the console or displays a window alert. Your choice.

// For example, if your pet is a dog, you could add a bark property, and the function would window.alert("WOOF!").

// Once you have define the properties, invoke each behavior.

// Practice: My Pet "This"
// Give your pet a new key named favoriteToys whose value is an empty array.
// Now define another new key named play whose value is a function with a single parameter named toy.
// The function should determine if your pet liked the toy, and if s/he does, then it should be added to the favoriteToys array using the this keyword (see example above).
// Here's an example. If your pet is a cat, then he likely only likes furry toys, so you could put an if..then condition in the play() method that checks if the word "fuzzy" is in the argument value. If it is, it gets added to the array.

const pet = {
    name: "Daphne",
    species: "cat",
    nicknames: ["Daphodil", "Sweet Girl"],
    age: 5,
    favoriteToys: [],
    meow: function () {
        window.alert("MEOW!")
    },
    hiss: function () {
        window.alert("HSSSSSS!!!!")
    },
    purr: function () {
        console.log("PRRRRRR :)")
    },
    play: function (toy) {
        if (toy.includes("fuzzy")) {
            this.favoriteToys.push(toy)
        }
    },
}


console.log(pet.favoriteToys)
pet.play("fuzzy socks")
console.log(pet.favoriteToys)
pet.play("the fuzzy bear")
console.log(pet.favoriteToys)
pet.play("a rock")
console.log(pet.favoriteToys)
pet.play("shoe")
console.log(pet.favoriteToys)
