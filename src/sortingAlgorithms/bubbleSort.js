
  export function getBubbleSortAnimations(array) {
    let animations  = [];
    let auxillaryArray = array.slice();
    doBubbleSort(animations,auxillaryArray);
    array = auxillaryArray;
    return [animations, array];
}

  function doBubbleSort(animations,auxillaryArray) {
    const N = auxillaryArray.length;
    let length = N - 1;
    while(length > 0) {
        let swapped = false;
        for(let i = 0; i < length; ++i) {
            animations.push(["comparision1", i, i + 1]);
            animations.push(["comparision2", i, i + 1]);
            if(auxillaryArray[i] > auxillaryArray[i + 1]) {
                swapped = true;
                animations.push(["swap", i, auxillaryArray[i + 1]]);
                animations.push(["swap", i + 1, auxillaryArray[i]]);
                swap(auxillaryArray, i, i + 1);
            }
        }
        if(swapped === false) 
            break;  //Alraedy sorted
        length--;
    }
}

function swap(auxillaryArray, firstIndex, secondIndex) {
    let temp = auxillaryArray[firstIndex];
    auxillaryArray[firstIndex] = auxillaryArray[secondIndex];
    auxillaryArray[secondIndex] = temp;
}



