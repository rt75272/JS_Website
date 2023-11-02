const page = document.getElementById('app');

const container = document.createElement('div');
container.setAttribute('class', 'display');
// container.textContent = "Star Wars Characters";
page.appendChild(container);

// create new request variable
var request = new XMLHttpRequest();

// create the connect to the website
request.open('GET', 'https://swapi.dev/api/people/', true);

// keeping original vars so I don't break functions
let list;
let people;
let character;


let items;
let person;
let personCard;

// handle the JSON data here
request.onload = function () {

    const res = people = JSON.parse(this.response);
    items = list = res.results;

    if (request.status >= 200 && request.status < 400) {
        // if request is good, search for what the user wanted

        for (var i = 0; i < items.length; i++) {
            // list = people.results;
            console.log(items[i]);
            createPerson(items[i]);
        }
    }
    else {
        console.error("Bad request"); // if request is bad, show error
    }
}

request.send();




function createPerson(p) {
  person = p;
  let row = trait = label = null;

  // card
  personCard = document.createElement('div');
  personCard.setAttribute('class', 'card person');
  container.appendChild(personCard);

  // name
  row = document.createElement('div');
  row.setAttribute('class', 'heading');
  personCard.appendChild(row);
  trait = document.createElement('h3');
  trait.setAttribute('class', 'name');
  trait.textContent = person.name;
  row.appendChild(trait);

  appendAttribute('birth-year', 'Birth Year', 'birth_year');
  appendAttribute('eye-color', 'Eye Color', 'eye_color');
  appendAttribute('gender', 'Gender', 'gender');
  appendAttribute('hair-color', 'Hair Color', 'hair_color');
  appendAttribute('height', 'Height', 'height');
  appendAttribute('mass', 'Mass', 'mass');
  appendAttribute('skin-color', 'Skin Color', 'skin_color');
}

function appendAttribute(className, labelName, key) {
  let k = key;
  row = document.createElement('div');
  row.setAttribute('class', 'row ' + className);
  personCard.appendChild(row);
  label = document.createElement('span');
  label.setAttribute('class', 'label');
  label.textContent = labelName;
  row.appendChild(label);
  trait = document.createElement('span');
  trait.setAttribute('class', 'value');
  trait.textContent = eval('person.' + key);
  row.appendChild(trait);
}


// Ryan will do
// eye color comparision function
function eye_compare(eye_search) {
    const eye_info = document.getElementById('eyes');
    eye_info.innerHTML = "";

    const output_eyes = document.createElement('div');
    output_eyes.setAttribute('class', 'characters');
    output_eyes.textContent = "Character(s) with the eye color  of " + eye_search;

    eye_info.appendChild(output_eyes);

    // Searching through api provided list of character to try and
    // find any characters with the eye color the user entered.
    for (var i = 0; i < list.length; i++) {
        character = list[i];
        if (character.eye_color == eye_search) {
            const eye_match = document.createElement('div');
            eye_match.setAttribute('class', 'person');

            const h3 = document.createElement('h3');
            h3.textContent = character.name + " eye color: " + character.eye_color;

            output_eyes.appendChild(eye_match);
            eye_match.appendChild(h3);
        }

    }
}

// Sunny will do
// less than comparison for height
function selectedCharacter(select){


    const selectInfo = document.getElementById('select');
    selectInfo.innerHTML = " ";
    const output = document.createElement('div');
    output.setAttribute('class', 'characters');
    output.textContent = "You selected: " + select;

    selectInfo.appendChild(output);

    for(var i = 0; i < list.length;i++){

        character = list[i]


            if(character.name == select) {

                var logo = document.createElement('img')
                switch(character.name) {
                    case "Luke Skywalker":
                        logo.src = 'luke.jpg';
                        break;
                    case "C-3PO":
                        logo.src = 'StarWarsImages/c3po.jpg';
                        break;
                    case "R2-D2":
                        logo.src = 'StarWarsImages/r2d2.jpg';
                        break;
                    case "Darth Vader":
                        logo.src = 'StarWarsImages/darthvader.jpg';
                        break;
                    case "Leia Organa":
                        logo.src = 'StarWarsImages/leia.jpg';
                        break
                    case "Owen Lars":
                        logo.src = 'StarWarsImages/owen.jpg';
                        break;
                    case "Beru Whitesun lars":
                        logo.src = 'StarWarsImages/beru.png';
                        break;
                    case "R5-D4":
                        logo.src = 'StarWarsImages/r5d4.jpg';
                        break;
                    case "Biggs Darklighter":
                        logo.src = 'StarWarsImages/biggs.jpg';
                        break;
                    case "Obi-Wan Kenobi":
                        logo.src = 'StarWarsImages/obiwan.jpg';
                        break;
                    default:
                }
                logo.height = 200;
                logo.width = 200;
                const selectedPerson = document.createElement('div');
                selectedPerson.setAttribute('class', 'person');

                const h3 = document.createElement('h3');
                output.appendChild(selectedPerson);
                h3.appendChild(logo);
                selectedPerson.appendChild(h3);
                }
            }
    }





function heightComp(userHeight){
    const heightInfo = document.getElementById('height');
    heightInfo.innerHTML = "";
    const output = document.createElement('div');
    output.setAttribute('class', 'characters');
    output.textContent = "Character(s) with height less than: " + userHeight;
    heightInfo.appendChild(output);
    for(var i = 0; i < list.length;i++){
        character = list[i]
        if(parseInt(character.height) < parseInt(userHeight)){
            const shorterPerson= document.createElement('div');
            shorterPerson.setAttribute('class', 'person');

            const h3 = document.createElement('h3');
            h3.textContent = character.name + " height: " + character.height + " cm";
            output.appendChild(shorterPerson);
            shorterPerson.appendChild(h3);
        }
    }
}

// Ashlyn will do
// greater than comparison for mass
function massComparison(userMass) {
    // make the html attributes
    const massInfo = document.getElementById('mass');
    massInfo.innerHTML = "";
    const output = document.createElement('div');
    output.setAttribute('class', 'characters');
    output.textContent = "Character(s) with mass greater than: " + userMass;
    massInfo.appendChild(output);
    // iterates through the people and compares their mass to what the user entered in
    // if the characters mass is greater, it will be displayed on the screen
    for (var i = 0; i < list.length; i++) {
        character = list[i];
        if(parseInt(character.mass) > parseInt(userMass)){
            
            const biggerPerson = document.createElement('div');
            biggerPerson.setAttribute('class', 'person');

            const h3 = document.createElement('h3');
            h3.textContent = character.name + " mass: " + character.mass + " kg";

            output.appendChild(biggerPerson);
            biggerPerson.appendChild(h3);
        }

    }
}
