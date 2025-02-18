function isBestFriend(f1, f2) {
  if (
    typeof f1 !== "object" ||
    typeof f2 !== "object" ||
    f1 === null ||
    f2 === null ||
    !("name" in f1 && "roll" in f1 && "bestFriend" in f1) ||
    !("name" in f2 && "roll" in f2 && "bestFriend" in f2)
  ) {
    return "Invalid";
  }

  return f1.bestFriend === f2.roll && f2.bestFriend === f1.roll;
}
console.log(
  isBestFriend(
    { name: "hashem", roll: 1, bestFriend: 2 },
    { name: "kashem", roll: 2, bestFriend: 1 }
  )
);

console.log(
  isBestFriend(
    { name: "hashem", roll: 21, bestFriend: 1 },
    { name: "kashem", roll: 1, bestFriend: 2 }
  )
);

console.log(
  isBestFriend(
    { name: "kashem", roll: 2, bestFriend: 11 },
    "Kashem er Kono Bondhu Nai"
  )
);

console.log(
  isBestFriend("hashem", { name: "kashem", roll: 2, bestFriend: 11 })
);

console.log(
  isBestFriend(
    { name: "hashem", roll: 1, bestFriend: 1 },
    { name: "kashem", roll: 1, bestFriend: 1 }
  )
);
