const chunkArray = (arr, len) => {
    //init array
    const chunkArr = [];

    //loop through array 
    arr.forEach(element => {
        //'last' is a variable point to the 'last element' memory location
        const last = chunkArr[chunkArr.length - 1];

        //check 'last' length, if equal the len
        //the first last is undefined, last.length will get error, so add '!last'
        if( !last || last.length === len){
            //push array as element
            chunkArr.push([element]);
        }else{
            //push next element in to 'last element of chunArr' which last point to
            last.push(element);
        }
    });
    return chunkArr;
}

module.exports = chunkArray;