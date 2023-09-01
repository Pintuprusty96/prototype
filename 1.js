/*
let arr1= new arrr('a','b','c')
console.log(arr1 )
let arr = new Array(1,2,4)
console.log(Object.values(arr))

function Array(){
    // this.length = arguments.length;
    Object.defineProperty(this,"length",{
        values:0,
        writable:true, // important!
        enumerable:false // could be omittedṇ
    })
    for(let i = 0; i<arguments.length; i++){
        this[i]=arguments[i]
    }
    // console.log(arguments)
}
*/


// console.log(arr1)
function array(){
    for(let i =0; i<arguments.length; i++){
        Object.defineProperty(this, 'length',{
            value:0,
            writable:true,
            enumerable:false
        })
        this[i]=  arguments[i]
    }
    this.length=arguments.length
}
array.prototype.gush= function(value){ //own push function
    Object.defineProperty(this,'length',{
        value:0,
        value:this.length,
        writable:true,
        enumerable:false
    })
    this[this.length] = value
    this.length++
}
array.prototype.hatao= function(){  // won pop function
    // Object.defineProperty(this,'length',{
    //     value:0,
    //     value:this.length,
    //     writable:true,
    //     enumerable:false
    // })
    if(this.length==0){
        return 0
    }
    let index = this.length-1
    delete this[index]
    this.length--
}
// let arr3= new array()
let arr = new array('a','b','c','d');
arr.gush('e')
arr.gush('e')
arr.gush('e')

console.log(Object.values(arr))



let arr2 = new array();
    // arr2.gush('e');
    arr2.hatao()
    arr2.hatao()
    // arr2.hatao()
    console.log(Object.values(arr2))

