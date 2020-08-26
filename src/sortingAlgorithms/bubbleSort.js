export function getBubbleSortAnimations(array) {
    let animations  = [];
    let auxiliaryArray = array.slice();
    bubbleSort(auxiliaryArray, animations);
    array = auxiliaryArray;
    return [animations, array];
}

function bubbleSort(auxiliaryArray, animations) {
    let i,j;
    for(j=0;j<auxiliaryArray.length-1;j++){
        for(i=0;i<auxiliaryArray.length-1-j;i++){
    
            animations.push(["comparision1",i,i+1]);
            animations.push(["comparision2",i,i+1]);

            if(auxiliaryArray[i]>auxiliaryArray[i+1]){
                animations.push(["swap",i,auxiliaryArray[i+1]]);
                animations.push(["swap",i+1,auxiliaryArray[i]]);
                
                   let temp=auxiliaryArray[i];
                   auxiliaryArray[i]=auxiliaryArray[i+1];
                   auxiliaryArray[i+1]=temp;
            }
        }
    }
}