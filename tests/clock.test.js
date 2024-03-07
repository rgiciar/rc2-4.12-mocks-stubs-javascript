import { Clock } from "../src/Clock";

jest.mock("../src/Clock");

test("Si son las 8:00 es por la mañana", () => {
  Clock.mockImplementation(() => ({
    isMorning: jest.fn(() => ({
      getHours: jest.fn(() => 8),
    }),
  }));

  const clock = new Clock();
  const result = clock.isMorning();

  expect(result).toBe(true);
});
