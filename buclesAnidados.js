for(var i=1; i<=10; i++) {
    if(i === 1) {
        console.log('Medalla de oro');
    }else if (i === 2) {
        console.log('Medalla de plata');
    }else if(i === 3){
        console.log('Medalla de bronce');
    }else{
        console.log(i); 
    }
}

for(var i = 1; i<=10; i++){
    switch(i) {
        case 1:
            console.log('Medalla de oro');
            break
        case 2:
            console.log('Medalla de plata');
            break
        case 3:
            console.log('Medalla de bronce');
            break
        default:
            console.log(i)
    }
}

for (i = 0; i < 2; i++) {
    for (var j = 0; j < 3; j++) {
        console.log(i);
    }
}
