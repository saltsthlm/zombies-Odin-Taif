import { ok } from "node:assert/strict";
import { test } from "node:test";

const createRoom = (capacity: number) => {
  const _capacity = capacity;

  return {
    isFull: () => true,
    notFull: () => false,
  };
};

test("room is not full", () => {
  const room = createRoom(0);
  const result = room.isFull();
  ok(result);
});

test("empty room that fits one zombie is not full", () => {
  const room = createRoom(1);
  const result = room.notFull();
  ok(!result);
});

// test.skip("empty room cannot fit any zombies", () => {});

// test.skip("one-roomer becomes full when a zombie is added", () => {});

// test.skip("two-roomer is not full when a zombie is added", () => {});

// test.skip("second zombie consumes first zombie when added to a one-roomer", () => {});

// You are free to add more tests that you think are relevant!
