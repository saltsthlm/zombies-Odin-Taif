import { ok } from "node:assert/strict";
import { test } from "node:test";

const createRoom = (initCapacity: number) => {
  const _capacity = initCapacity;
  let zombies: string[] = [];

  return {
    isFull: () => (_capacity === zombies.length ? true : false),
    isEmpty: () => _capacity >= 0 && zombies.length === 0,
    addZombie: () => {
      if (_capacity !== zombies.length) {
        zombies.push("Zombie");
      }
    },
  };
};

test("room is not full", () => {
  const roomCapacity = createRoom(1);
  const result = roomCapacity.isFull();

  ok(!result);
});

test("empty room that fits one zombie is not full", () => {
  const roomCapacity = createRoom(1);
  const result = roomCapacity.isFull();

  ok(!result);
});

test("empty room cannot fit any zombies", () => {
  const roomCapacity = createRoom(1);
  //roomCapacity.addZombie();
  const result = roomCapacity.isEmpty();

  ok(result);
});

test("one-roomer becomes full when a zombie is added", () => {
  const roomCapacity = createRoom(1);
  // when adding a zombie, the capacity of the room will decrease by 1.
  roomCapacity.addZombie();
  const result = roomCapacity.isFull();

  ok(result);
});

test("two-roomer is not full when a zombie is added", () => {
  const roomCapacity = createRoom(2);
  roomCapacity.addZombie();
  const result = roomCapacity.isFull();

  ok(!result);
});

test("second zombie consumes first zombie when added to a one-roomer", () => {
  const roomCapacity = createRoom(1);
  roomCapacity.addZombie(); // zombies = [zombie]
  const result = roomCapacity.isFull();

  ok(result);
});

// You are free to add more tests that you think are relevant!
