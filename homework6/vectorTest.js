const V = require('./vector')


var a = new V(1, 2, 3);
var b = new V(1, 1, 1);
console.log('va=',a);
console.log('vb=',b);
console.log('va.add(vb)=', a.add(b));
console.log('va.sub(vb)=', a.sub(b));
console.log('va.dot(vb)=', a.dot(b));
console.log('va.neg()=', a.neg());
//先參考老師範例，後自己寫出來，已100%理解原理//