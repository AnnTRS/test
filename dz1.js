function testArray(a, b) 
{
    let arr1 = 0;
    
    for(i = 0; i < a.length; i++) {
    arr1 += a [ i ] ;
    }
    
    let arr2 = 0;
    
    for(i = 0; i < b.length; i++) 
    {
    arr2 += b [ i ] ;
    }
    
    return arr1 + arr2;  
        
}
console.log(testArray([0, -1, 5, -3], [3, 0.5, 4, 20.3]))