function fizzBuzz(num : number):string|number {

    if(num % 5 === 0 && num % 3 === 0){
        return 'fizzbuzz';
    }

     if(num % 3 === 0){
         return 'fizz';
     }

     if(num % 5 === 0){
          return 'buzz';
     }

     return num;
     
}

describe('fizzBuzz', () => {
    it('return a fizz when multiple of 3 is passed',()=>{
        expect(fizzBuzz(3)).toBe('fizz');
        expect(fizzBuzz(6)).toBe('fizz');
    })

    it('return a fizz when multiple of 5 is passed',()=>{
        expect(fizzBuzz(5)).toBe('buzz');
        expect(fizzBuzz(10)).toBe('buzz');
    })

    it('return a fizzbuzz when multiple of 3 and 5 is passed',()=>{
        expect(fizzBuzz(15)).toBe('fizzbuzz');
        expect(fizzBuzz(30)).toBe('fizzbuzz');
    })

    it('return the number if is not fizz or buzz',()=>{
        expect(fizzBuzz(13)).toBe(13);
        expect(fizzBuzz(8)).toBe(8);
    })

})