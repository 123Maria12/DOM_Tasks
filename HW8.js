let myMap = new Map()
myMap.set("plural", "excluding");
myMap.set("theft", "yearningly");
myMap.set("app",    "aboard");
myMap.set("ouch",    "hope");
  
// for (let name of myMap.keys()){
//     console.log('Key - ' + name);
// }
// for (let name2 of myMap.values()){
//     console.log('Value - ' + name2);
// }
// let name1 = myMap.keys();
// let name2 = myMap.values();
for (var [key, value] of myMap) {
    console.log('Key - ' + key + " , " +'Value - ' + value);
    }





