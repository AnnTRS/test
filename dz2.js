const obj = [

    arr1 = [1, 2, 3],
  
    arr2 = [4, 5, 6],
  
    arr3 = [7, 8, 9],
  
  ];
  
  
  
  
  let SumRow = 0;
  
  arr1.forEach((item) => {
  
      SumRow += item;
  
    });
  
  
  
  
  
  function getSumColumn(arr, column) {
  
    let sumColumn = 0;
  
    arr.forEach((item) => (sumColumn += item[column]));
  
    return sumColumn;
  
  }
  
  
  
  
  console.log(getSumColumn(obj, 1), SumRow);