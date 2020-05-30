function prime_position(x){
    var w = 0; //Counts how many primes there have been.
    var tempCheck = true; //Checks if a number is prime.
    for (var z = 2; z < 101;z++){
        tempCheck = true;
        for(var i = 2; i < z; i++){
            if(z % i === 0){
                tempCheck = false;
            }
        }
        if (tempCheck === true){
            w++;
        }
        if(w === x){
            return i;
        }
    }
}

//You were asking to figure out a few primes, but Codebat wanted an equation for the nth prime.
//I couldn't make one without it crashing, and I'm not sure how to make it anyway.

function sort_subtract(int){
    var arrA = [];
    var arrB = [];
    var str = int.toString();
    for (var i = 0; i < str.length; i++){
        arrA.push(str[i]);
    }
    arrB = arrA;
    arrB.sort((a,b) => a-b);
    var strB = arrB.join("");
    var strC = arrB.join("");
    strC = strC.split("").reverse().join("");
    var intB = parseInt(strB);
    var intC = parseInt(strC);
    return (intC - intB);
}

