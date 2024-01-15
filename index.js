for (let tahun = 1600; tahun <= 2404; tahun++) {

    if (tahun % 4 >= 1) {
            console.log("Tahun " + tahun + " bukan tahun kabisat");
         }
         else if (tahun % 100 >= 1) {
             console.log("Tahun " + tahun + " tahun kabisat");
         }
         else if (tahun % 400 >= 1) {
             console.log("Tahun " + tahun + " bukan tahun kabisat");
        }
         else {
             console.log("Tahun " + tahun + " tahun kabisat");
    }
}

let thn =1600; 

    while(thn<=2404){
    
    if (thn % 4 >= 1) {
                console.log("Tahun " + thn + " bukan tahun kabisat");
            }
            else if (thn % 100 >= 1) {
                console.log("Tahun " + thn + " tahun kabisat");
            }
            else if (thn % 400 >= 1) {
                console.log("Tahun " + thn + " bukan tahun kabisat");
            }
            else {
                console.log("Tahun " + thn + " tahun kabisat");
          }
    thn++
}

let year =1600;

        do{
            if (year % 4 >= 1) {
                console.log("Tahun " + year + " bukan tahun kabisat");
            }
            else if (year % 100 >= 1) {
                console.log("Tahun " + year + " tahun kabisat");
            }
            else if (year % 400 >= 1) {
                console.log("Tahun " + year + " bukan tahun kabisat");
            }
            else {
                console.log("Tahun " + year + " tahun kabisat");
            }
        
        year ++;
    }while(year<=2404);