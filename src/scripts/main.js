// Pet Sounds exercises!

// Represent your Pet
// Create an object that represents your pet.

// Pet Sounds
// Now that you have an object that represents your pet, it's time to add some behavior. Pick three behaviors that your pet has and add three kys to your pet object. Each key's value should be a function that logs to the console or displays a window alert. Your choice.

// For example, if your pet is a dog, you could add a bark property, and the function would window.alert("WOOF!").

// Once you have define the properties, invoke each behavior.

const pet = {
    name: "Daphne",
    species: "cat",
    nicknames: ["Daphodil", "Sweet Girl"],
    age: 5,
    meow: function () {
        window.alert("MEOW!")
    },
    hiss: function () {
        window.alert("HSSSSSS!!!!")
    },
    purr: function () {
        console.log("PRRRRRR :)")
    }
}

pet.meow()
pet.hiss()
pet.purr()

