
/**
 * A generic priority queue class that allows pushing and popping elements with a custom comparison function.
 *
 * @template T - The type of elements stored in the priority queue.
 */
export class priority_queue<T>{

     /**
     * The comparison function used to determine the priority of elements in the queue.
     *
     * @private
     * @type {(a: T, b: T) => boolean}
     */

    #compareFun: (a: T, b: T) => boolean;

     /**
     * An array that stores the elements of the priority queue.
     *
     * @private
     * @type {T[]}
     */
    #array:T[] = [];

    /**
     * Creates a new PriorityQueue instance with the specified comparison function.
     *
     * @param {(a: T, b: T) => boolean} compare - A comparison function that determines the priority of elements.
     */
    constructor(compare: (a: T, b: T) =>boolean){
     this.#compareFun = compare;
    }


    /**
     * Pushes an element onto the priority queue.
     *
     * @param {T} data - The element to be added to the queue.
     */
    push (data : T){
        this.#array.push(data);
        let curr=this.#array.length-1;
        while(curr>=0){
         let parent = Math.floor(curr / 2);
          if(this.#compareFun(this.#array[curr],this.#array[parent])){
              let temp=this.#array[curr];
              this.#array[curr]=this.#array[parent];
              this.#array[parent]=temp;
              curr = parent;
          }else{
            return;
          }
        }
    }


    /**
     * Retrieves the element with the highest priority (root of the heap).
     *
     * @returns {T} - The element with the highest priority in the priority queue.
     */

    top = ()=> this.#array[0];
    
    /**
     * Removes and returns the element with the highest priority (root of the heap).
     */
    pop = ()=>{
        let data = this.#array[0];
        this.#array[0]=this.#array[this.#array.length-1];
        this.#array.pop();
        let curr = 0;
        while(curr < this.#array.length){
            if(curr*2+1 < this.#array.length && this.#compareFun(this.#array[curr*2+1],this.#array[curr])){
              let temp=this.#array[curr];
              this.#array[curr]=this.#array[curr*2 +1];
              this.#array[curr*2+1]=temp;
              curr = curr*2+1;
              continue;
            }
            if(curr*2+2 < this.#array.length && this.#compareFun(this.#array[curr*2+2],this.#array[curr])){
                let temp=this.#array[curr];
                this.#array[curr]=this.#array[curr*2 +2];
                this.#array[curr*2+2]=temp;
                curr = curr*2+2;
                continue;
              }
              return data ;

        }
        return data;
    }
}
