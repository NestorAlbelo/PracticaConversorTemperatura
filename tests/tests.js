var assert = chai.assert;

suite('conversorTemperatura', function() {
    test('256F = 124.44 Celsius', function() {
        entrada.value = "256F";
        conversor();
        assert.deepEqual(salida.innerHTML, "124.44 Celsius");
    });
    test('128C = 262.40 Farenheit', function() {
        entrada.value = "128C";
        conversor();
        assert.deepEqual(salida.innerHTML, "262.40 Farenheit");
    });
    test('-500C = error', function() {
        entrada.value = "-500C";
        conversor();
        assert.match(salida.innerHTML, /ERROR/);
    });
    test('600g = fallo de sintaxis', function() {
        entrada.value = "600g";
        conversor();
        assert.match(salida.innerHTML, /Por/);
    });
});
