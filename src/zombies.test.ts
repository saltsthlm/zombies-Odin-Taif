import { ok } from "node:assert/strict";
import { test } from "node:test";

const createRoom = (initCapacity: number) => {
  let _capacity = initCapacity;

  return {
    isFull: () => (_capacity === 0 ? true : false),
    notFull: () => (_capacity > 0 ? false : true),
    isEmpty: (_capacity: number) => _capacity >= 2,
    // addZombie: (_capacity: number) =>
    //   _capacity > 0 ? (_capacity--, true) : false,
    // removeZombie: () =>
    //   _capacity < initCapacity ? (_capacity++, true) : false,
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
  // if room capacity is 2 or more(meaning no zombies inside) then the room is empty and therefor can not fit any zombies.
  const roomCapacity = createRoom(2);
  const result = roomCapacity.isEmpty(2);

  ok(result);
});

// test("one-roomer becomes full when a zombie is added", () => {
//   const roomCapacity = createRoom(1);
//   const result = roomCapacity.addZombie(1);

//   ok(result);
// });

// test("two-roomer is not full when a zombie is added", () => {
//   const roomCapacity = createRoom(2);
//   const result = roomCapacity.addZombie(1);

//   ok(result);
// });

// test("second zombie consumes first zombie when added to a one-roomer", () => {
//   const roomCapacity = createRoom(1);
//   const result = roomCapacity.removeZombie(1);

//   ok(result);
// });

// You are free to add more tests that you think are relevant!
