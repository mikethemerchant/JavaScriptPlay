
// NOTE: The OR operator returns the left side if it's true, if it's false returns the right side.

for (let i = 1; i <= 100; i++)
{
    let result = "";
    if(i % 3 == 0) result += "Fizz";
    if(i % 5 == 0) result += "Buzz";
    console.log(result || i);
}
