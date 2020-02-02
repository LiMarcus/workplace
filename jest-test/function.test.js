const functions = require('./function');

//test('description',
test('Add 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
})

test('Add 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
})

//--------------------------Object-------------------------------

//toBe() uses Object.is to test exact equality(means: will check their memory location is same or not). 
//If you want to check the value of an object, use toEqual() instead:
test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});


//--------------------------Truthiness-------------------------------

// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false
test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

//--------------------------Numbers-------------------------------

test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
});

//For floating point equality, use toBeCloseTo instead of toEqual,
// because you don't want a test to depend on a tiny rounding error.
test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
});

//--------------------------Strings-------------------------------

test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});


//--------------------------Arrays and iterables------------------------------- 

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
];

test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer');
});

//--------------------------Exceptions------------------------------- 
function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(Error);

    // You can also use the exact error message or a regexp
    expect(compileAndroidCode).toThrow('you are using the wrong JDK');
    expect(compileAndroidCode).toThrow(/JDK/);
});



//--------------------------Async Data------------------------------- 

//Promise
test('name should be Leanne Graham', () => {
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham');
        })
})
//If you expect a promise to be rejected use the .catch method
//Make sure to add expect.assertions to verify that a certain number of assertions are called. 
//Otherwise a fulfilled promise would not fail the test.
test('the fetch fails with an error', () => {
    expect.assertions(1);
    return functions.fetchUser().catch(e => expect(e).toMatch('error'));
});


//Async Await
test('name should be Leanne Graham', async () => {
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
})

test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
        await functions.fetchUser();
    } catch (e) {
        expect(e).toMatch('error');
    }
});