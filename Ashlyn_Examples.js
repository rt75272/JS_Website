
// Simple example that returns the backwords version of a string
function backwards(word){
    let ret = "";
    for(i = word.length - 1; i >= 0; i--){
        ret = ret + word[i];
    }
    return ret;
}

// example using a Promise
function addTen(amount){
    return amount + 10;
}

function subtractTen(amount){
    return amount - 10;
}

let promise = new Promise(function(success, failure){
    let amount = 21;

    if(amount >= 20){
      success(amount);
    }
    else {
      failure(amount);
    }
  });

  promise.then( 
    function(num){ console.log(subtractTen(num));},
    function(num){ console.log(addTen(num));}
  );
