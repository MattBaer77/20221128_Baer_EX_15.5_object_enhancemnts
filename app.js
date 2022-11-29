//

// Original

// createInstructor('Colt', 'Steele')

function createInstructor(firstname, lastname) {
    return {
        firstname: firstname,
        lastname: lastname,
    }
};

// ES2015 -

// createInstructorEnhanced('Colt', 'Steele')

function createInstructorEnhanced(firstname, lastname) {
    return {
        firstname,
        lastname,
    }
};

//

// Original

var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

// ES2015 -

let favoriteNumberWithEnhanced = 43;

const instructorEnhanced = {
    firstName: 'Colt',
    [favoriteNumberWithEnhanced] : 'That is my real favorite!'
}

// Original

var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  };
// ES2015 -

const instructorEnhancedSecond = {
    firstname: 'Colt',
    sayHi(){return 'Hi'},
    sayBye(){return this.firstname + ' says bye!'}
}

// REFERENCE

// const d = createAnimal("dog", "bark", "Woooof!")
// // {species: "dog", bark: ƒ}
// d.bark()  //"Woooof!"

// const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// // {species: "sheep", bleet: ƒ}
// s.bleet() //"BAAAAaaaa"

function createAnimal(species, noiseName, noiseSound) {
    return {
    species,
    [noiseName] : function(){return noiseSound}
    }
}