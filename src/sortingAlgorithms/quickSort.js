export function getQuickSortAnimations(array){
    let animations=[];
    let auxiliaryArray=array.slice();
    doquickSort(auxiliaryArray,animations,0,auxiliaryArray.length-1);
    array=auxiliaryArray;
    return [animations,array];
}

function doquickSort(auxiliaryArray,animations,low,high){
    
    if(low<high){
        let pi=partition(auxiliaryArray,animations,low,high);

        doquickSort(auxiliaryArray,animations,low,pi-1);
        doquickSort(auxiliaryArray,animations,pi+1,high);
    }
}

function partition(auxiliaryArray,animations,low,high){
    let i=low-1;
    let pivot=auxiliaryArray[high];
    let j;
      for(j=low;j<high;j++){
          animations.push(["comparision1",j,high]);
          animations.push(["comparision2",j,high]);
          if(auxiliaryArray[j]<pivot){
              i++;
              animations.push(["swap",i,auxiliaryArray[j]]);
              animations.push(["swap",j,auxiliaryArray[i]]);
              swap(auxiliaryArray,i,j);
          }
      }
      animations.push(["swap",i+1,auxiliaryArray[high]]);
      animations.push(["swap",high,auxiliaryArray[i+1]]);

      swap(auxiliaryArray,i+1,high);
      return i+1;
}

function swap(auxiliaryArray,first_index,second_index) {
    let temp = auxiliaryArray[first_index];
    auxiliaryArray[first_index] = auxiliaryArray[second_index];
    auxiliaryArray[second_index] = temp;
}