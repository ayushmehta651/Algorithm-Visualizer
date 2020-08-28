import React from 'react';
import { Navbar, Button } from 'reactstrap';
import { getBubbleSortAnimations } from '../sortingAlgorithms/bubbleSort.js';
import {getMergeSortAnimations} from '../sortingAlgorithms/mergeSort.js';
import {getInsertionSortAnimations} from '../sortingAlgorithms/insertionSort.js';
import {getSelectionSortAnimations} from '../sortingAlgorithms/selectionSort.js';
import {getQuickSortAnimations} from '../sortingAlgorithms/quickSort.js';
import './SortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 20;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 92;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'limegreen';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 600));
    }
    this.setState({array});
  }

  insertionSort() {
    const [animations,sortArray] = getInsertionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
        const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
        const arrayBars = document.getElementsByClassName('array-bar');
        if(isColorChange === true) {
            const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
            const [temp, barOneIndex, barTwoIndex] = animations[i];
            const barOneStyle = arrayBars[barOneIndex].style;
            const barTwoStyle = arrayBars[barTwoIndex].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            },i * ANIMATION_SPEED_MS);
        }
        else {
            const [temp, barIndex, newHeight] = animations[i];
            const barStyle = arrayBars[barIndex].style;
            setTimeout(() => {
                barStyle.height = `${newHeight}px`;
            },i * ANIMATION_SPEED_MS);  
        }
    }
    
  }

  bubbleSort() {
    const [animations,sortArray] = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
        const isColorChange = animations[i][0] === "comparision1" || animations[i][0] === "comparision2";
        const arrayBars = document.getElementsByClassName('array-bar');
        if(isColorChange === true) {
            const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
            const [comparision, barOneIndex, barTwoIndex] = animations[i];
            const barOneStyle = arrayBars[barOneIndex].style;
            const barTwoStyle = arrayBars[barTwoIndex].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            },i * ANIMATION_SPEED_MS);
        }
        else {
            const [swap, barIndex, newHeight] = animations[i];
            const barStyle = arrayBars[barIndex].style;

            setTimeout(() => {
                barStyle.height = `${newHeight}px`;
            },i * ANIMATION_SPEED_MS);  
        }
    }
  }

  selectionSort() {
    const [animations,sortArray] = getSelectionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
        const isColorChange = (animations[i][0] === "comparision1") || (animations[i][0] === "comparision2");
        const arrayBars = document.getElementsByClassName('array-bar');
        if(isColorChange === true) {
            const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
            const [temp, barOneIndex, barTwoIndex] = animations[i];
            const barOneStyle = arrayBars[barOneIndex].style;
            const barTwoStyle = arrayBars[barTwoIndex].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            },i * ANIMATION_SPEED_MS);
        }
        else {
            const [temp, barIndex, newHeight] = animations[i];
            const barStyle = arrayBars[barIndex].style;
            setTimeout(() => {
                barStyle.height = `${newHeight}px`;
            },i * ANIMATION_SPEED_MS);  
        }
    }
}

  mergeSort() {
    const [animations,sortArray] = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const isColorChange = animations[i][0] === "comparision1" || animations[i][0] === "comparision2";
            const arrayBars = document.getElementsByClassName('array-bar');
            if(isColorChange === true) {
                const [comparision, barOneIndex, barTwoIndex] = animations[i];
                const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                //If we don't multiply by the index then every animations[i] wait for exactly ANIMATION_SPEED_MS and immediately change into final state
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);
                
            }
            else {
                setTimeout(() => {
                    const [overwrite, barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                  },i * ANIMATION_SPEED_MS);
            }
        }
  }

  quickSort() {
    const [animations,sortArray] = getQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
        const isColorChange = animations[i][0] === "comparision1" || animations[i][0] === "comparision2";
        const arrayBars = document.getElementsByClassName('array-bar');
        if(isColorChange === true) {
            const color = (animations[i][0] === "comparision1") ? SECONDARY_COLOR : PRIMARY_COLOR;
            const [comparision, barOneIndex, barTwoIndex] = animations[i];
            const barOneStyle = arrayBars[barOneIndex].style;
            const barTwoStyle = arrayBars[barTwoIndex].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            },i * ANIMATION_SPEED_MS);
        }
        else {
            const [swap, barIndex, newHeight] = animations[i];
            const barStyle = arrayBars[barIndex].style;

            setTimeout(() => {
                barStyle.height = `${newHeight}px`;
            },i * ANIMATION_SPEED_MS);  
        }
    }
  }

  // NOTE: This method will only work if your sorting algorithms actually return
  // the sorted arrays; if they return the animations (as they currently do), then
  // this method will be broken.

  render() {
    const {array} = this.state;

    return (
        
      <div className="array">
           <Navbar dark>
        <Button className="buttons" onClick={() => this.resetArray()}>Generate New Array</Button>
        <Button className="buttons" onClick={() => this.bubbleSort()}>Bubble Sort O(n^2))</Button>
        <Button className="buttons" onClick={() => this.selectionSort()}>Selection Sort (O(n^2))</Button>
        <Button className="buttons" onClick={() => this.insertionSort()}>Insertion Sort (O(n^2))</Button>
        <Button className="buttons" onClick={() => this.mergeSort()}>Merge Sort (O(nlogn))</Button>
        <Button className="buttons" onClick={() => this.quickSort()}>Quick Sort (O(nlogn))</Button>
        </Navbar>
        <div className="container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}></div>
        ))}
       </div>
      </div>
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}