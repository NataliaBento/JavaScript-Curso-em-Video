//recursividade
function fatorial(n){
    if (n == 1){
        return 1
    }else {
        return n * fatorial(n-1)
    }
}console.log(fatorial(5))









/*5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

5 fatorial é a mesma coisa que 5 vezes 4 fatorial.
Assim como, n! = n x (n-1)!
    n fatorial é a mesma coisa de n menos 1 fatorial.
1! = 1
*/