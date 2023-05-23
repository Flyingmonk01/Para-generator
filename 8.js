const input  = document.querySelector("#numOfWords");
const container = document.querySelector(".container");


const generateWord = (n) =>{
    
    let text = "";

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i = 0; i < n; ++i){
        const random = (Math.random() * (letters.length-1)).toFixed(0);
        text += letters[random];
    }
    return text;
}
// console.log(generateWord(Number.input));


let numOfWOrds;
const generateParas = () =>{
    numOfWOrds = Number(input.value);
    
    const para = document.createElement("p");

    let data = "";
    for(let i = 0; i < numOfWOrds; i++){
        const randomNumber = (Math.random()*15).toFixed(0);
        data += generateWord(randomNumber);
        data += " "; 
    }

    para.innerText = data;

    para.setAttribute("class", "paras");

    container.append(para);
}