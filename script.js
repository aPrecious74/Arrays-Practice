let x = 5;

console.log(x);

let a = [56,76,89,2,0]

console.log(a)
console.log(a.length)

a.push(100);
console.log(a)

console.log(a[100]) //[something] allows you to pull out something from the array. This would be undefined since there is not 100th number



let b=["car", "truck", "bike"];
console.log(b)
console.log(b[1]);

for (let i= 0; i<b.length; i++)//symbol "++ increases the value eby one. We are counting by one
{ // "+2" counts by two and "--" counts down by 1
    console.log('foo', b[i]);
}