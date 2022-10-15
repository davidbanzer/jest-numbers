const Numeros = require('./ejemplo');

let numeros = new Numeros();

test('La suma de 4 + 10 es igual a 14, mayor a 12, mayor o igual a 13.2, menor a 16, menor o igual a 14.5', () => { 
    const valor = numeros.suma(4, 10);
    expect(valor).toBeGreaterThan(12);
    expect(valor).toBeGreaterThanOrEqual(13.5);
    expect(valor).toBeLessThan(16);
    expect(valor).toBeLessThanOrEqual(14.5);

    expect(valor).toBe(14);
    expect(valor).toEqual(14);
})

test('La división de 4 entre 3 es cercana a 1.33', () => { 
    const valor = numeros.division(4, 3);
    // expect(valor).toBe(1.33);
    expect(valor).toBeCloseTo(1.33);
})