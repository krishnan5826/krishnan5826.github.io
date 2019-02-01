function primeNums ()
{
    /* example of the use of the modulo:
    var x = 8;
    var y = 3;
    var z = x % y;
    alert (z);
    */

    var checkNum = document.primes.enterNumber.value;
    var isPrime = true;
    for (var i=checkNum-1; i >= 2; i--) // i-- is i minus 1
    {
        if (checkNum < 0)
        {
            isPrime = false;

        }
        else if (checkNum % i == 0) // no remainder, so therefore checkNum is NOT prime
        {
            isPrime = false;
            // alert("No remainder present; i = " + i + " " + isPrime);
        }
        /*
        else
        {
            isPrime = true;
            alert("Remainder present; i = " + i + " " + isPrime);
        }
        */
    }
    if (isPrime == true)
    {
        alert(checkNum + " is PRIME!");
    }
    else
    {
        alert(checkNum + " is NOT PRIME!");
    }
}