'use strict'

// alert('Hello! If here');

var confirm = confirm('Are u Serious?')
var bool01 = true;
var n01 = 18; 

// Relational Operators
    // Upper: >
    // Lower: <
    // Equal: ==
    // Upper or Equal: >=
    // Lower or Equal: <=
    // Different: !=

// Logical Operators
    // And: &&
    // Or:  ||
    // Negation: if(! ........instructions.......)


if ( false ){

    alert('Electronic Music');

}

if ( bool01 ){

    console.log('Checked: ' + confirm)

}

if ( confirm == true ){

    alert('The number is: ' + n01);

    if ( n01 < 18 ){

        console.log('HAHAHa');

    } else if ( n01 == 18){

        console.log('jejejejeje');

    } else {

        console.log(':c');

    }

} else {

    if ( (n01 != 20) && bool01 == true ){

        alert('Nope');

    }

}