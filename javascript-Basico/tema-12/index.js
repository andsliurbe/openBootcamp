console.log(`- Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])`)
function suma(num){
        b=1;
        a=1;
        c=0;
        fibonachi=new Array(1,1);
    while(b<num){
        if (c!=0){
        }
        c=a+b;
        a=b;
        b=c;

        fibonachi.push(c)
    }
    
    console.log(fibonachi);
    return fibonachi;
}
console.log(suma(9))
console.log(`- Ejecuta la depuración de VSCode para visualizar la ejecución de la función`)