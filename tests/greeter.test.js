import { Greeter } from "../src/Greeter"

test('saludar por las manhanas ', () => {
    let greeter = new Greeter()

    let saludo = greeter.greet("Oli")

    expect(saludo).toBe("Buenos dias, Oli")
})
