function solve(count) {
    let sum=0;
    let num=1;
    for(let i=0;i<count;i++){
        console.log(num);
        sum+=num;
        num+=2;
    }
    console.log('Sum: '+sum);
}
solve(5)