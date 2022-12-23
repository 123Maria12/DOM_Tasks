let a = +prompt("Enter value: ");
if (typeof a == "number" && a % 2 === 0 ){
  console.log("The number is even")
}
else if (typeof a == "number" && a % 2 === 1 ){
  console.log("The number is not even")
}
else {
  console.log("Oops, looks like you made a mistake")
}


