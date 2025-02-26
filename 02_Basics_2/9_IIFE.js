// IMMEDIATELY INVOKED FUNCTION EXPRESSION :---

// Syntax: (<function declaration & deefinition>)();


// Named IIFI...
(function chai(){
    console.log(`DB CONNECTED`);
})();
 // we do this when we dont want our finction to gert polluted by any global scope variable...



// UNnamed IIFI...
(() => {
    console.log(`DB2 CONNECTED`);
})();


// Parameter passing in IIFI...
((name) => {
    console.log(`DB3 CONNECTED for ${name}`);
})("Vivek");
