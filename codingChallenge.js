//coding challenge 2

const markWeight = 78;

const markHeight = 1.69;

const johnWeight = 92;

const johnHeight = 1.95;


markBmi = markWeight/markHeight ** 2;
JohnBmi = johnWeight/johnHeight ** 2;

const markHigherBMI = markBmi > JohnBmi;

if(markBmi> JohnBmi){
    console.log(`Mark has a higher BMI of ${markBmi} than John ${JohnBmi}.`);
}
else{
    console.log(`John has a higher BMI of ${JohnBmi}.`);
}



console.log(markBmi, markHigherBMI, JohnBmi);





//coding challenge 3 

const dolphinsAverage = ((96+108+89) / 3 );

const koalasAverage = ((88+91+110) / 3);
const minScore = 100;

if(dolphinsAverage > koalasAverage && dolphinsAverage >= minScore){
console.log(`The Dolphins wins with an average score of ${dolphinsAverage}.`);
} 

else if(koalasAverage > dolphinsAverage && koalasAverage >= minScore){
    console.log(`The Koalas wins with an average score of ${koalasAverage}.`);
}


else if(dolphinsAverage === koalasAverage && dolphinsAverage >= minScore  && koalasAverage>= minScore){
console.log("Its a draw!!!");
}


else{
    console.log("No one win the throphy");
}







//code challenge 4
const bill = 275;
tip1 = 0.15;
tip2 = 0.2;

const tipValue = bill >= 50 && bill <=300 ? tip1 *  bill:tip2 *  bill;

const finalBill = bill + tipValue;

console.log(`The bill was ${bill}, the tip was ${tipValue}, and the total value ${finalBill}`);