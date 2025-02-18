function calculateWatchTime(times) {
  if (!Array.isArray(times) || times.some((time) => typeof time !== "number")) {
    return "Invalid";
  }

  let totalSeconds = times.reduce((sum, time) => sum + time, 0);

  let hour = Math.floor(totalSeconds / 3600);
  let minute = Math.floor((totalSeconds % 3600) / 60);
  let second = totalSeconds % 60;

  return { hour, minute, second };
}

console.log(calculateWatchTime([100, 99, 119, 300]));
console.log(calculateWatchTime([7200, 3661, 59]));
console.log(calculateWatchTime([4000, 2000, 1000]));
console.log(calculateWatchTime([]));
console.log(calculateWatchTime("Not an array"));
