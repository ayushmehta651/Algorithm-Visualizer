
  export function getBubbleSortAnimations(array){
      const animations = [];
      if(array.length <= 1) return array;
      const auxiliaryArray = array.slice();
      doBubbleSort(animations,auxiliaryArray);

      return animations;
  }

  export function doBubbleSort(animations,auxiliaryArray){

      for(let i=0;i<auxiliaryArray.length-1;i++) {
          for(let j=0;j<auxiliaryArray.length-i-1;j++) {
              if(auxiliaryArray[j] > auxiliaryArray[j+1]) {
                    var temp = auxiliaryArray[j];
                    auxiliaryArray[j] = auxiliaryArray[j+1];
                    auxiliaryArray[j+1] = temp;

                    animations.push([j,j+1]);
              }
          }
      }

      return auxiliaryArray;
  }