function array(){
    // this.length=length
    for(let i=0; i<arguments.length; i++){
        Object.defineProperty(this, "length",{
            value:0,
            writable:true,
            enumerable:false,
            
        })
        this[i]=arguments[i]
    }

    
    this.length=arguments.length;
    }

    array.prototype.push= function(value){
        this[this.length]=value;
        this.length++
    }
    array.prototype.pop = function (){
        if(this.length===0){
            return undefined
        }
        let index=this.length-1;
        delete this[index]
        this.length--
    }
    let arr= new array();
    arr.push('e')
    arr.pop()
    arr.pop()
    console.log(Object.values(arr))
    