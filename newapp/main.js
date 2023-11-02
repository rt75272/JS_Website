const root = document.getElementById('app');

const container = document.createElement('div');
container.setAttribute('class', 'display');
root.appendChild(container);


function makeReq(url) {
  const request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      const res = JSON.parse(this.response);
      let results = res.results;

      for (let i = 0; i < results.length; i++) {
        displayObj(results[i]);
        // console.log(results[i]); //
      }
      if (res.next) {
        makeReq(res.next);
      }
    }
    else {
      console.error(request.status);
    }
  }
  request.send();
}



function getLink(url) {
  const request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      const res = JSON.parse(this.response);
      let results = res.results;
      let link = results[0];
      return link;
    }
    else {
      console.error(request.status);
    }
  }
  request.send();
}


function displayObj(obj) {
  let card = document.createElement('div');
  card.setAttribute('class', 'card');
  container.appendChild(card);
  for (let key in obj) {
    // console.log(obj[key]);
    // console.log('key: ' + key);
    const row = document.createElement('div');
    row.setAttribute('class', 'row ' + key);
    card.appendChild(row);
    const label = document.createElement('span');
    label.setAttribute('class', 'label');
    label.textContent = key;
    row.appendChild(label);
    const val = document.createElement('span');
    val.setAttribute('class', 'value');

    if (obj[key].slice(0,4) === 'http' ) {
      val.textContent = getLink(obj[key]);
    } else {
      val.textContent = obj[key];
    }
    row.appendChild(val);
  }}

function displayRelations(arr) {

  for (let i = 0; i < arr.length; i++) {
    let link = document.createElement('a');
    link.setAttribute('href', obj[url]);
    link.textContent = obj[0];
  }
}

// function isValidUrl(url) {
//   console.log(url);
//   console.log(url.protocol);
//   try {
//     url = new URL(string);
//   } catch {
//     return false;
//   }
//   return url.protocol === "http:" || "https:";
// }

// function isUrl(url) {
//   if (typeof url !== "string" && url.slice(0,3) !== 'http') {
//     console.log('no');
//     return false;

//   } else {
//     console.log('YES!');
//     return true;
//   }
// }


//   try {
//     url = new URL(string);
//   } catch {
//     return false;
//   }
//   return url.protocol === "http:" || "https:";
// }




makeReq('http://swapi.dev/api/people/');





















// // Ryan will do
// // eye color comparision function
// function eye_compare(eye_search) {
//   const eye_info = document.getElementById('eyes');
//   eye_info.innerHTML = "";

//   const output_eyes = document.createElement('div');
//   output_eyes.setAttribute('class', 'characters');
//   output_eyes.textContent = "Character(s) with the eye color  of " + eye_search;

//   eye_info.appendChild(output_eyes);

//   // Searching through api provided list of character to try and
//   // find any characters with the eye color the user entered.
//   for (var i = 0; i < list.length; i++) {
//     character = list[i];
//     if (character.eye_color == eye_search) {
//       const eye_match = document.createElement('div');
//       eye_match.setAttribute('class', 'person');

//       const h3 = document.createElement('h3');
//       h3.textContent = character.name + " eye color: " + character.eye_color;

//       output_eyes.appendChild(eye_match);
//       eye_match.appendChild(h3);
//     }

//   }
// }

// // Sunny will do
// // less than comparison for height
// function selectedCharacter(select) {


//   const selectInfo = document.getElementById('select');
//   selectInfo.innerHTML = " ";
//   const output = document.createElement('div');
//   output.setAttribute('class', 'characters');
//   output.textContent = "You selected: " + select;

//   selectInfo.appendChild(output);

//   for (var i = 0; i < list.length; i++) {

//     character = list[i]


//     if (character.name == select) {

//       var logo = document.createElement('img')
//       switch (character.name) {
//         case "Luke Skywalker":
//           logo.src = 'luke.jpg';
//           break;
//         case "C-3PO":
//           logo.src = 'StarWarsImages/c3po.jpg';
//           break;
//         case "R2-D2":
//           logo.src = 'StarWarsImages/r2d2.jpg';
//           break;
//         case "Darth Vader":
//           logo.src = 'StarWarsImages/darthvader.jpg';
//           break;
//         case "Lei Organa":
//           logo.src = 'StarWarsImages/leia.jpg';
//           break
//         case "Owen Lars":
//           logo.src = 'StarWarsImages/owen.jpg';
//           break;
//         case "Beru Whitesun lars":
//           logo.src = 'StarWarsImages/beru.png';
//           break;
//         case "R5-D4":
//           logo.src = 'StarWarsImages/r5d4.jpg';
//           break;
//         case "Biggs Darklighter":
//           logo.src = 'StarWarsImages/biggs.jpg';
//           break;
//         case "Obi-Wan Kenobi":
//           logo.src = 'StarWarsImages/obiwan.jpg';
//           break;
//         default:
//       }
//       const selectedPerson = document.createElement('div');
//       selectedPerson.setAttribute('class', 'person');

//       const h3 = document.createElement('h3');
//       h3.textContent = character.name + ": ";
//       output.appendChild(selectedPerson);
//       h3.appendChild(logo);
//       selectedPerson.appendChild(h3);
//     }
//   }
// }





// function heightComp(userHeight) {
//   const heightInfo = document.getElementById('height');
//   heightInfo.innerHTML = "";
//   const output = document.createElement('div');
//   output.setAttribute('class', 'characters');
//   output.textContent = "Character(s) with height less than: " + userHeight;
//   heightInfo.appendChild(output);
//   for (var i = 0; i < list.length; i++) {
//     character = list[i]
//     if (parseInt(character.height) < parseInt(userHeight)) {
//       const shorterPerson = document.createElement('div');
//       shorterPerson.setAttribute('class', 'person');

//       const h3 = document.createElement('h3');
//       h3.textContent = character.name + " height: " + character.height + " cm";
//       output.appendChild(shorterPerson);
//       shorterPerson.appendChild(h3);
//     }
//   }
// }

// // Ashlyn will do
// // greater than comparison for mass
// function massComparison(userMass) {
//   // make the html attributes
//   const massInfo = document.getElementById('mass');
//   massInfo.innerHTML = "";
//   const output = document.createElement('div');
//   output.setAttribute('class', 'characters');
//   output.textContent = "Character(s) with mass greater than: " + userMass;
//   massInfo.appendChild(output);
//   // iterates through the people and compares their mass to what the user entered in
//   // if the characters mass is greater, it will be displayed on the screen
//   for (var i = 0; i < list.length; i++) {
//     character = list[i];
//     if (parseInt(character.mass) > parseInt(userMass)) {
//       const biggerPerson = document.createElement('div');
//       biggerPerson.setAttribute('class', 'person');

//       const h3 = document.createElement('h3');
//       h3.textContent = character.name + " mass: " + character.mass + " kg";

//       output.appendChild(biggerPerson);
//       biggerPerson.appendChild(h3);
//     }

//   }}}
