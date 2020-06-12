var a = [[1,2],[3,4]];
function neg(a)
{
    var neg = [[],[]]
    var i,j;
    for(i=0;i<2;i++)
    {
        for(j=0;j<2;j++)
        {
        
            neg[i][j] = 0 - a[i][j];

        }
    }
    return neg;
}
console.log("neg(",a,") => ",neg(a));
//先參考老師範例，後自己寫出來，已100%理解原理//