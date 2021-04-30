class vector {
    constructor(Array){
        this.a=Array;
    }
    add(y){
        var r=[];
        var x=this;
        for(var i=0;i<x.a.length;i++)r[i]=x.a[i]+y.a[i];
        return new vector(r);
    }
    sub(y){
        var r=[];
        var x=this;
        for(var i=0;i<x.a.length;i++)r[i]=x.a[i]-y.a[i];
        return new vector(r);
    }
    dot(y){
        var m=0;
        for(var i=0;i<x.a.length;i++)m+=x.a[i]*y.a[i];
        return m;
    }neg(){
        var r=[];
        var x=this;
        for(var i=0;i<x.a.length;i++)r[i]=-1*x.a[i];
        return new vector(r);
    }
}
var x = new vector([1,2,3])
var y = new vector([1,1,1])
console.log('x.add(y)=', x.add(y)) 
console.log('x.add(y).add(y).add(x)=', x.add(y).add(y).add(x))
console.log('x.sub(y)=', x.sub(y)) 
console.log('x.sub(y).sub(y).sub(x)=', x.sub(y).sub(y).sub(x)) 
console.log('x.dot(y)=', x.dot(y)) 
console.log('x.neg()=',  x.neg())