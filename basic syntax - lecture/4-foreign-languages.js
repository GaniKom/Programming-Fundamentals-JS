function solve(country) {
    if (country == 'USA' || country == 'England') {
        console.log('English');
    } else if (country == 'Spain' || country == 'Argentina' || country == 'Mexico') {
        console.log('Spanish');
    } else {
        console.log('unknown');
    }
}
function solveSwitch(country) {
    switch (country) {
        case 'USA':
        case 'England':
            console.log('English');
            break;
        case 'Spain':
        case 'Argentina':
        case 'Mexico':
            console.log('Spanish');
            break;
        default:
            console.log('unknown');
    }
}
solveSwitch('Mexio')