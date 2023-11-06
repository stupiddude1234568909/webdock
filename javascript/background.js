var current_div = 0;

var backgroundImages = [
    "URL('billeder/Billeder til baggrund/Old Dresden.png')",  //sachen billeder her 
    "URL('billeder/zwinger/IMG20230920122615.jpg')", //dredesen billede her
    "URL('billeder/De 10 bydele generelt/10 bydele.png')", //10 bylde billede relative path
    "URL('billeder/zwinger/neustadt.jpg')",// neustadt billede path
    "URL('billeder/Golden rider og Karl Johann 1/IMG_2735.png')", // golden reither 
    "URL('billeder/zwinger/20230920_145651.jpg')", //karl johan billede her 
    "URL('billeder/zwinger/ZwingerMain.jpg')", //altstadt billede her 
    "URL('billeder/Residenschloss/residenschloss.png')", // Residenschloss
    "URL('billeder/zwinger/IMG20230920150447.jpg')" //zwinger
]


var baggrund = document.getElementById("bagrund-sachsen");
//referencer til de forskellige divs
var sachsen = document.getElementById("Sachsen");
var dredsen = document.getElementById("Dredsen");
var de_10_bydele = document.getElementById("De_10_bydele");
var neustadt = document.getElementById("Neustadt");
var golden_reiter = document.getElementById("Goldener_Reiter");
var karl_johann = document.getElementById("Karl_Johann_1");
var altstadt = document.getElementById("Altstadt");
var residenschloss = document.getElementById("Residenschloss");
var zwinger = document.getElementById("Zwinger");


window.onscroll = function(){
// alle scroll positon på afsnitene, de gør at vi bare kan ændre teksten og alt fungere 
    var heights = [sachsen.offsetHeight, dredsen.offsetHeight, de_10_bydele.offsetHeight, neustadt.offsetHeight, golden_reiter.offsetHeight, 
                    karl_johann.offsetHeight, altstadt.offsetHeight, residenschloss.offsetHeight, zwinger.offsetHeight];
    
    // tjekker vilket element man er i
    if(scrollY > sumToN(heights, current_div)){
        current_div += 1;
    }
    if(scrollY < sumToN(heights, current_div-1)){
        current_div -= 1; 
    }

    // vælger billede og wwidth
    baggrund.style.backgroundImage = backgroundImages[current_div];
    baggrund.style.width = '100%';
    baggrund.style.backgroundSize = 'cover';
    // lille fade 
    baggrund.style.opacity = 1 - Math.pow((scrollY - sumToN(heights, current_div - 1)) / heights[current_div],4)+0.07;


    console.log(current_div)

}

// bruges til at iterere gennem array siden at jeg ikke kunne finde en inbygget method til det 
var sumToN = function(list, N){
    sum = 0;
    for(var i = 0; i <= N; i++){
        sum += list[i]
    }
    return sum;
}


window.onload = function(){
    baggrund.style.backgroundImage = "URL('billeder/Billeder til baggrund/Old Dresden.png')"
}