import { ok } from "node:assert/strict";
import { test } from "node:test";
import { deepEqual } from "node:assert";

const createRoom = (initCapacity: number) => {
  const _capacity = initCapacity;
  let zombies: string[] = [];

  return {
    isFull: () => _capacity === zombies.length,
    isEmpty: () => _capacity >= 0 && zombies.length === 0,

    addZombie: (zombie: string) => {
      if (_capacity === 0) {
        return;
      }

      if (zombies.length === _capacity) {
        zombies.pop();
      }

      zombies.push(zombie);
    },

    getZombies: () => zombies,
  };
};

test("room is not full", () => {
  //room is full cause capacity is 0
  const roomCapacity = createRoom(0);
  const result = roomCapacity.isFull();

  ok(result);
});

test("empty room that fits one zombie is not full", () => {
  const roomCapacity = createRoom(1);
  const result = roomCapacity.isFull();

  ok(!result);
});

test("empty room cannot fit any zombies", () => {
  const roomCapacity = createRoom(0);
  // here the addZombie will check for the capacity || in our case it 0.
  roomCapacity.addZombie("Earl");
  // zombies will be empty.
  const zombies = roomCapacity.getZombies();

  deepEqual(zombies, []);
});

test("one-roomer becomes full when a zombie is added", () => {
  const roomCapacity = createRoom(1);
  roomCapacity.addZombie("Earl");
  const result = roomCapacity.isFull();

  ok(result);
});

test("two-roomer is not full when a zombie is added", () => {
  const roomCapacity = createRoom(2);
  roomCapacity.addZombie("Earl");
  const result = roomCapacity.isFull();

  ok(!result);
});

test("second zombie consumes first zombie when added to a one-roomer", () => {
  const roomCapacity = createRoom(1);
  roomCapacity.addZombie("Earl");
  roomCapacity.addZombie("Sonik");
  const zombies = roomCapacity.getZombies();

  deepEqual(zombies, ["Sonik"]);
});

// You are free to add more tests that you think are relevant!
