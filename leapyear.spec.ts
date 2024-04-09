function leapYear(year: number):string {

    if(year % 100 === 0  && year % 400 !== 0) {
        return 'not leap';
    }

    if(year % 4 === 0  && year % 100 !== 0) {
        return 'leap';
    }

    if(year % 400 === 0) {
        return 'leap';
    }

    if(year % 4 !== 0 ) {
        return 'not leap';
    }

}

describe('leapYear should', () => {

    it('a leap year', () => {
        expect(leapYear(800)).toBe('leap');
    })

    it('returns not a leap year', () => {
        expect(leapYear(700)).toBe('not leap');
    })

    it('returns a leap year if divisible by 4 but not by 100', () => {
        expect(leapYear(2008)).toBe('leap');
    })

    it('returns a no leap year if not divisible by 4', () => {
        expect(leapYear(2017)).toBe('not leap');
    })
})