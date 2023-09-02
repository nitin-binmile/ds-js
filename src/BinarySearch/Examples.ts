// find first and last index of the element within sorted array if not exists then print -1 -1

import { binarySearch, lowerBound, upperBound } from ".";

const sortedArray: number[] = [1,2,2,2,2,5,6,7,8,9,9,9];

const res=binarySearch({array:sortedArray,key:2,compare:(a,b)=>a-b})

if(res!=-1){
    const left=lowerBound({array:sortedArray,key:2,compare:(a,b)=>a-b,});
    const right=upperBound({array:sortedArray,key:2,compare:(a,b)=>a-b,})-1;
    console.log(left,right);
}else{
    console.log(-1,-1);
}



