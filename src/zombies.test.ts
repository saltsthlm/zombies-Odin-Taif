import { ok } from "node:assert/strict";
import { test } from "node:test";

const createRoom = (capacity: number) => {
  const _capacity = capacity;

  return {
    isFull: () => true,
    notFull: () => false,
    isEmpty: (_capacity: number) => (_capacity >= 2 ? true : false),
  };
};

test("room is not full", () => {
  const roomCapacity = createRoom(0);
  const result = roomCapacity.isFull();
  ok(result);
});

test("empty room that fits one zombie is not full", () => {
  const roomCapacity = createRoom(1);
  const result = roomCapacity.notFull();
  ok(!result);
});

test("empty room cannot fit any zombies", () => {
  const roomCapacity = createRoom(2);
  const result = roomCapacity.isEmpty(2);
  ok(result);
});

// test.skip("one-roomer becomes full when a zombie is added", () => {});

// test.skip("two-roomer is not full when a zombie is added", () => {});

// test.skip("second zombie consumes first zombie when added to a one-roomer", () => {});

// You are free to add more tests that you think are relevant!
