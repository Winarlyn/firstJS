{
    let a, b, mul;
    a = 5;
    b = 6;
    mul = a * b;
    console.log(mul);
    
}

{
    // let photosInFolder, photosOnPage, numberOfPage;
    // photosInFolder = parseInt(prompt("Введите кол-во фото в папке", 10))
    // photosOnPage = parseInt(prompt("Введите кол-во фото на одной странице", 10))
    // numberOfPage = Math.ceil(photosInFolder / photosOnPage);

    // alert("кол-во страниц = " + numberOfPage);
}

{
    let a = 1,b;
    b = a++;
    console.log(a,b);
}

{
    let a = 15 % 4;
    let b = Math.floor(14 % 5);
    console.log(a,b);

    let number,d1,d2,d3,d4;
    number = parseInt(prompt("Введите 4-значное число"))
    d1 = number % 10;
    d2 = Math.floor(number/10) % 10;
    d3 = Math.floor(number/100) % 10;
    d4 = Math.floor(number/1000) % 10;
    console.log(d1,d2,d3,d4);
    
}
