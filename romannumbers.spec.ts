function romanNumbers(num: number): string{

    let roman_numerals :{}   = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
    }

    let roman = "";

    for (const value of Object.keys(roman_numerals).reverse()) {
        const numericValue:number = parseInt(value);

        while (num >= numericValue) {
            console.log(numericValue);
            roman += roman_numerals[numericValue];
            num -= numericValue;
        }
    }

    return roman;

}

describe('roman number should:', () => {
    it('Should be I if 1 is passed', () => {
        expect(romanNumbers(1)).toBe('I');
    })

    it('Should be V if 5 is passed', () => {
        expect(romanNumbers(5)).toBe('V');
    })

    it('Should be X if 1 is passed', () => {
        expect(romanNumbers(10)).toBe('X');
    })

    it('Should be L if 5 is passed', () => {
        expect(romanNumbers(50)).toBe('L');
    })

    it('Should be C if 1 is passed', () => {
        expect(romanNumbers(100)).toBe('C');
    })

    it('Should be D if 5 is passed', () => {
        expect(romanNumbers(500)).toBe('D');
    })

    it('Should be M if 1000 is passed', () => {
        expect(romanNumbers(1000)).toBe('M');
    })

    it('Should be XCIX if 99 is passed', () => {
        expect(romanNumbers(99)).toBe('XCIX');
    })

    it('Should be CDXXVIII  if 428 is passed', () => {
        expect(romanNumbers(428)).toBe('CDXXVIII');
    })

})