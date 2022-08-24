export function cashSuffixes(value, decimalLength = 2) {
    try {
        const selectType = Math.log10(Math.abs(value)) / 3 | 0;
        if (selectType === 0) return value;
        const types = ['', 'k', 'M', 'B'];
        //You can use this: const types = ['', 'k', 'M', 'B', 'T', 'qd', 'Qn', 'sx', 'Sp', 'O', 'N'];
        let scaled = (value / Math.pow(10, selectType * 3)).toString(), number;
        const split = scaled.split('.'), int = split[0], decimal = split[1];
        if (decimal === undefined) number = int;
        else number = int + '.' + decimal.slice(0, decimalLength);
        return number + types[selectType];
    } catch (e) {
        return value;
    }
}

//console.log(cashSuffixes(50000000000)) Output: 50B
//console.log(cashSuffixes(50060000000)) Output: 50.06B
//console.log(cashSuffixes(50500013502)) Output: 50.50B
//console.log(cashSuffixes(50500013502, 5)) Output: 50.50001B
//console.log(cashSuffixes(50568200000, 10)) Output: 50.5682BB
//console.log(cashSuffixes(50000000000)) Output: 50B