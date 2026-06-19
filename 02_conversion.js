// let score=99
// console.log(score)
// console.log(typeof score)

//====================if string converted to number================



// let score="99"
// console.log(score)
// console.log(typeof score)


// <-----NOTE:during conversion the first letter of that data type is converted to capital letter and rest of the letters are in small letter
// let score="99"
// let numberscore=Number(score)
// console.log(numberscore)
// console.log(typeof numberscore)




// let score="99abc"
// let numberscore=Number(score)
// console.log(numberscore) // op=Nan(not a number)
// console.log(typeof numberscore) // (op=number)

// NOTE: if we try to convert a string which has some non-numeric characters then the output will be NaN and the data type of that output will be number.




//NOTE: NaN is a special numeric value that represents an invalid or failed number conversion, which is why its data type remains 'number'.




//<===================null=> nmuber=================>


    // let score=null
    // let numberscore=Number(score)
    // console.log(numberscore) // op=0
    // console.log(typeof numberscore) // op=number

    //  let score=null
    //  let numberscore=Number(score)
    //  console.log(numberscore) // op=0
    //     console.log(typeof numberscore) // op=number

    //NOTE: if we try to convert null into number then the output will be 0 and the data type of that output will be number.

    //AND THIS THING IS SAME FOR UNDEFINED ALSO

    // let score=undefined
    // let numberscore=Number(score)
    // console.log(numberscore) // op=NaN
    // console.log(typeof numberscore) // op=number 


 //NOTE: if we try to convert undefined into number then the output will be NaN and the data type of that output will be number.


 //<===================boolean=> number=================>

    // let score=true
    // let numberscore=Number(score)
    // console.log(numberscore) // op=1
    // console.log(typeof numberscore) // op=number

    // TRUE=1; FALSE=0




    // <===================string=> boolean=================>

    // let isloggedin="true"
    // let booleanisloggedin=Boolean(isloggedin)
    // console.log(booleanisloggedin) // op=true
    // console.log(typeof booleanisloggedin) // op=boolean

    // NOTE: if we try to convert a non-empty string into boolean then the output will be true and the data type of that output will be boolean.
    // and empty string will be false


