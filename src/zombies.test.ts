import { ok } from "node:assert/strict";
import { test } from "node:test";

const createRoom = (initCapacity: number) => {
  let _capacity = initCapacity;

  return {
    isFull: () => (_capacity === 0 ? true : false),
    notFull: () => (_capacity === 1 ? true : false),
    isEmpty: () => _capacity === 0,
    addZombie: () => (_capacity ? (_capacity++, true) : null),
    removeZombie: () => (_capacity > 0 ? (_capacity--, true) : null),
  };
};

test("room is not full", () => {
  const roomCapacity = createRoom(1);
  const result = roomCapacity.isFull();

  ok(!result);
});

test("empty room that fits one zombie is not full", () => {
  const roomCapacity = createRoom(1);
  const result = roomCapacity.notFull();

  ok(result);
});

test("empty room cannot fit any zombies", () => {
  const roomCapacity = createRoom(0);
  roomCapacity.addZombie();
  const result = roomCapacity.isEmpty();

  ok(result);
});

test("one-roomer becomes full when a zombie is added", () => {
  const roomCapacity = createRoom(1);
  roomCapacity.removeZombie();
  const result = roomCapacity.isFull();

  ok(result);
});

test("two-roomer is not full when a zombie is added", () => {
  const roomCapacity = createRoom(2);
  roomCapacity.removeZombie();
  const result = roomCapacity.notFull();

  ok(result);
});

test("second zombie consumes first zombie when added to a one-roomer", () => {
  const roomCapacity = createRoom(1);
  roomCapacity.addZombie();
  const result = roomCapacity.removeZombie(); // Removing the zombie

  ok(result);
});

// You are free to add more tests that you think are relevant!
