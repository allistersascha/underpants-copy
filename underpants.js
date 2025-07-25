// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};

// template: _.key = function(){};

/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){
    if (Array.isArray(value)){
        return 'array';
    }else if (value === null){
        return "null";
    }else if (value instanceof Date){
        return "date";
    }else{
        return typeof value;
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function (arr, num){
    if ((Array.isArray(arr) === false) || (num < 0)){
        return [];
    }else if (num === Number.NaN || num === undefined){
        return arr[0];
    }else{
        return arr.slice(0, num);
    }
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function (arr, num){
    if ((Array.isArray(arr) === false) || (num < 0)){
        return [];
    }else if (num === Number.NaN || num === undefined){
        return arr[arr.length-1];
    }else if(num > arr.length){
        return arr;
    }else{
        return arr.slice(arr.length-num, arr.length);
    }
}
/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function (arr, value){
    if (arr.includes(value) === false){
        return -1;
    }else{
        for (let i=0; i<arr.length; i++){
            if (arr.at(i) === value){
                return i;
            }
        }
    }
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(arr, value){
   return arr.includes(value) ? true : false;
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func){
    if (Array.isArray(collection)){
        let funcArr = [];
        for (let i=0; i <collection.length; i++){
        funcArr.push(func(collection[i], i, collection)); 
        }
    }else{
        for (const key in collection){
            func(collection[key], key, collection);
        }
    }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(arr){
    const noDupes = [];
    for (let i=0; i<arr.length; i++){
        if (noDupes.includes(arr[i]) === false){
            noDupes.push(arr[i]);
        }
    }
    return noDupes;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(arr, func){
    let troof = [];
    for (let i=0; i<arr.length; i++){
        if (func(arr[i], i, arr)){
            troof.push(arr[i]);
        }
    }
    return troof;
}


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(arr, func){
    let lies = [];
    for (let i=0; i<arr.length; i++){
        if (func(arr[i], i, arr) === false){
            lies.push(arr[i]);
        }
    }
    return lies;
}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(arr, func){
    let twoArrs = [[],[]]
    for (let i=0; i<arr.length; i++){
        if (func(arr[i], i, arr)){
            twoArrs[0].push(arr[i]);
        }else{
            twoArrs[1].push(arr[i]);
        }
    }
    return twoArrs;
}


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func){
    const newArr = [];
    if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            newArr.push(func(collection[i], i, collection));
        }
    } else {
        let keys = Object.keys(collection);
        for (let i=0; i<keys.length; i++){
            newArr.push(func(Object.values(collection)[i], keys[i], collection));
        }
    }

    return newArr;
}



/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/


_.pluck = (arr, prop) => { 
    const vals = _.map(arr, function(current){
        if (Object.hasOwn(current, [prop])){
            return current[prop];
        }
    });
   
    /*
    const vals = [];
    for (let i=0; i<arr.length; i++){
        if (Object.hasOwn(arr[i], prop)){
            vals.push(arr[i][prop]);
        }
    }*/
    return vals;
}
    /*
    let vals = [];
    for (let i=0; i<arr.length; i++){
        _.map(arr[i], function (arr, prop){ 
            
                if (Object.hasOwn(arr[i], prop)){ 
                    vals.push(arr[i].find(arr[i].prop));
                    }
                
            });
        }
    return vals;
    */


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collect, func){
    //let collect
    //let func
    if (Array.isArray(collect)){
        if (func === undefined){ //if func not provided
            for (let i=0; i<collect.length; i++){
                //determine if current item is NOT true
                if (!collect[i]){
                    return false;
                }
            }
            return true;
          
        }else{
            for (let i=0; i<collect.length; i++){
                //determine if result of callback on current item is NOT true
                if (!func(collect[i], i, collect)){
                    return false;
                }
                
            }
            return true;
        } 

    }else{
        if (func === undefined){ //if func not provided
            for (const key in collect){
                if (!collect[key]){
                    return false;
                }
            }
            return true;
        }else {
            //iterate thru object for func provided
            for (const key in collect){
                if (!func(collect[key], key, collect)){
                    return false;
                }
            }
            return true;
        }   
    }
}


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function (collect, func){
    if (Array.isArray(collect)){
        if (func === undefined){ //if func not provided
            for (let i=0; i<collect.length; i++){
                //determine if current item is NOT true
                if (collect[i]){
                    return true;
                }
            }
            return false;
          
        }else{
            for (let i=0; i<collect.length; i++){
                //determine if result of callback on current item is NOT true
                if (func(collect[i], i, collect)){
                    return true;
                }
                
            }
            return false;
        } 

    }else{
        if (func === undefined){ //if func not provided
            for (const key in collect){
                if (collect[key]){
                    return true;
                }
            }
            return false;
        }else {
            //iterate thru object for func provided
            for (const key in collect){
                if (func(collect[key], key, collect)){
                    return true;
                }
            }
            return false;
        }   
    }
}


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function (arr, func, seed){
    // array.reduce ((accumulator, currentValue) => (accumulator + currentValue OR whataever callback func), initialValue);
    //initial value is seed
/*

*/
    let seedy;
    
        if (seed === undefined){
            seedy = arr[0];
            for (let i=1; i<arr.length; i++){
                seedy = func(seedy, arr[i], i);
            }
        }else{
            seedy = seed;
            for (let i=0; i<arr.length; i++){
                seedy = func(seedy, arr[i], i);
            }
        }
   return seedy;
}

/* reduce notes:
    //empty array to push into/return the last value of at the end
    const seedy = [];
    //if no seed, use the first item in the array
    if (seed === undefined){
        seed = arr[0];
        for (let i=seed; i<arr.length; i++){
            //make its own var so you can push it AND reuse it
            let prev = func(seed, arr[i], i){

            }
        }
    }

    return seedy[seedy.length-1];
    //loop thru the array
    //but don't loop over 0 twide!
    /*
    for (let i=0; i<arr.length; i++){
        //do i have to recursive the 'previous' var to make this work!?!
        let previous = func(seed, arr[i], i);
        seedy.push(previous);
        seedy.push(func(previous, arr[i], i));
        }
        */
    
    



/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = function(object, ...objects){
    let argArray = Array.from(arguments);
    for (let i=0; i<argArray.length; i++){
        console.log(object);
        Object.assign(object, argArray[i]);
        console.log(object);
        console.log(i);
        //console.log(Object.keys(newObj));
        //console.log(Object.values(newObj));
    }
    //console.log(argArray);
   // const newObj = Object.assign({}, arguments); //object made from the other objects
    return object; //object
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}