const devs= [
    {name: "friday", stack: "frontend", company: "dowhoo"},
    {name: "samuel", stack: "fullstack", company: "Quake"},
    {name: "Victor", stack: "frontend", company: "piedtech"},
    {name: "Isaiah", stack: "devop", company: "vibes"},
    {name: "Benedith", stack: "devop", company: "microsoft"},
    {name: "grace", stack: "data science", company: "Unicef"},
    {name: "Abraham", stack: "Backend", company: "Kia"},
    {name: "Wale", stack: "frontend", company: "Ekwute"} 
];

const ages=[20, 15, 30, 32, 50, 41, 18, 12, 21, 19,5, 61, 70, 55];

// for loop
// for(let i = 0; i <= ages.length; i++)
// {
//     console.log(ages[i]);
// }

//forEach
// ages.forEach(function(age){
//    console.log(age);
// });

// devs.forEach(function(dev){
//        console.log(dev.stack);
// });

//filer get 21 age and over
// let canDrink = [];
// for (let index = 0; index <= ages.length; index++) {
//     if (ages[index] >= 21) {
//         canDrink.push(ages[index]);
//     }    
// }
// console.log(canDrink);

// const canDrink = ages.filter(function(age){
//     if (age >= 21) {
//         return true;
          
// }});
// console.log(canDrink);
// const canDrink = ages.filter(age => age >= 21 );
// console.log(canDrink);

// const devStack = devs.filter(dev => dev.stack === "frontend" );
// console.log(devStack);

//maps create a new array for you
const testMap = devs.map(dev => `${dev.name} - ${dev.stack}` );
console.log(testMap);

//sort
// const sortDev = devs.sort((a,B) => a.name < B.name ? 1 : -1 );
// console.log(sortDev);

const sortAges= ages.sort((a,b)=> a-b);
console.log(sortAges);

//reduce
// const sumAges= ages.reduce(function (total, age) {
//      return total + age;
    
// }, 0);
// console.log(sumAges);
//gets sum
// const sumAges= ages.reduce( (total, age) => total + age, 0);
// console.log(sumAges);

//combine

const sumAges= ages
.filter(age => age>= 21)
.sort((a,b)=> a-b )
.reduce( (total, age) => total + age, 0)


console.log(sumAges);
