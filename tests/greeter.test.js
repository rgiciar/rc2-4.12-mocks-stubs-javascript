import { Clock } from '../src/Clock';
import { Greeter } from '../src/Greeter';

jest.mock('../src/Clock');

test('should greet Buenos días in the morning', () => {
    // Mocking isMorning() to always return true
    Clock.mockImplementation(() => ({
        isMorning: jest.fn(() => true),
        getCurrentTime: jest.fn(),
    }));

    const greeter = new Greeter();
    const result = greeter.greet('John');

    expect(result).toBe('Buenos días, John');
});

test('should greet Ya son las 17:00', () => {
    // Mocking isMorning() to always return true
    Clock.mockImplementation(() => ({
        isMorning: jest.fn(() => false),
        getCurrentTime: jest.fn(() => "17:00"),
    }));

    const greeter = new Greeter();
    const result = greeter.greet('John');

    expect(result).toBe('Ya son las 17:00, John');
});



