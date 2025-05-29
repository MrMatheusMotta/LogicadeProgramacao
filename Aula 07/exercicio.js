

function recursiva (n) {
    if(n > 10){
        return;
    }
    else{
        console.log("Essa é a minha função recursiva")
    }
    recursiva(n + 1)
}

recursiva(1)