function getRandomInt(max) {
    return Math.floor( Math.random() * max );
}

function ellenoriz() {
    probalkozasok = probalkozasok + 1;
    document.getElementById('probak').innerHTML = probalkozasok;


    let ellenorzendo = parseInt (
        document.getElementById('tippem').value 
    );

    if (Number.isInteger(ellenorzendo)) {
        console.log("Remek szám");

        if(ellenorzendo === veletlenSzam) {
            alert("Gratulálok, kitaláltad(" + probalkozasok + " lépésből)");
            location.reload();
        } else{
            if (ellenorzendo < veletlenSzam) {
                console.log("nagyobb számra gondoltam");
                document.getElementById('tanacs').innerHTML = "nagyobb számra gondoltam";
            }else{
                console.log("kisebb számra gondoltam");
                document.getElementById('tanacs').innerHTML = "kisebb számra gondoltam";
            }
        }
        let meglevo = document.getElementById('tippek').innerHTML;
        meglevo += ellenorzendo + ", ";
        document.getElementById('tippek').innerHTML = meglevo;
        

    } else {
        console.log("A számod rossz", typeof ellenorzendo);
    }
}

let veletlenSzam = getRandomInt(100);
let probalkozasok = 0;