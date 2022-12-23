var arr = [];


for ( i = 0; i < 20; i++ ) {

    arr.push( Math.round( Math.random() * 100 ));

}
console.log(arr);

for ( i = 0; i < 20; i++ )
{
        if ( arr[i] != arr[i+1] ){
           console.log (false);
          
}
        else {
          console.log (true);
        }
}
