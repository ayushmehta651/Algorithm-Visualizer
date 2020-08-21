export function getSelectionSortAnimations(array) {
    let animations = [];
    let auxillaryArray = array.slice();
    doSelectionSort(auxillaryArray,animations);
    array = auxillaryArray;
    return [animations,array];
}

function doSelectionSort(auxillaryArray,animations) {
    const N = auxillaryArray.length;
    for (let i = 0; i < N - 1; i++) {
        let min_index = i;
        for (let j = i + 1; j < N; j++) {

            animations.push(["comparision1", j, min_index]);
            animations.push(["comparision2",j, min_index]);

            if(auxillaryArray[j] < auxillaryArray[min_index]) {
                min_index = j;
            }
        }
        
        animations.push(["swap",min_index,auxillaryArray[i]]);
        animations.push(["swap",i,auxillaryArray[min_index]]);

        swap(auxillaryArray,min_index,i);  //swapping found minimum elememnt and a[i]
    }
}

function swap(auxillaryArray, firstIndex, secondIndex) {
    let temp = auxillaryArray[firstIndex];
    auxillaryArray[firstIndex] = auxillaryArray[secondIndex];
    auxillaryArray[secondIndex] = temp;
}