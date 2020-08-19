export function getInsertionSortAnimations(array) {
    let animations  = [];
    let auxiliaryArray = array.slice();
    insertionSort(auxiliaryArray, animations);
    array = auxiliaryArray;
    return [animations, array];
}

function insertionSort(auxiliaryArray, animations) {
    const N = auxiliaryArray.length;
    for (let i = 1; i < N; i++) {
        let key = auxiliaryArray[i];
        let j = i - 1;
        animations.push(["comparision1", j, i]);
        animations.push(["comparision2", j, i]);
        while(j >= 0 && auxiliaryArray[j] > key) {
            animations.push(["overwrite", j + 1, auxiliaryArray[j]]);
            auxiliaryArray[j + 1] = auxiliaryArray[j];
            j = j - 1;
            if(j >= 0) {
                animations.push(["comparision1", j, i]);
                animations.push(["comparision2", j, i]);
            }     
        }
        animations.push(["overwrite", j + 1, key]);
        auxiliaryArray[j + 1] = key;
    }
}