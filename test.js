function cashOut(money) {
  if (typeof money !== "number" || money < 0) {
    return "Invalid";
  }
  return (money * 1.75) / 100;
}

function validEmail(email) {
  if (typeof email !== "string") return "Invalid";

  if (/^[\.-_+@]/.test(email)) return false;

  if (!email.includes("@")) return false;

  if (email.includes(" ")) return false;

  if (!email.endsWith(".com")) return false;

  return true;
}

function electionResult(votes) {
  if (!Array.isArray(votes)) {
    return "Invalid";
  }

  let mangoCount = 0;
  let bananaCount = 0;

  for (let vote of votes) {
    if (typeof vote === "string") {
      let lowerVote = vote.toLowerCase();
      if (lowerVote === "mango") {
        mangoCount++;
      } else if (lowerVote === "banana") {
        bananaCount++;
      }
    }
  }

  if (mangoCount > bananaCount) {
    return "Mango";
  } else if (bananaCount > mangoCount) {
    return "Banana";
  } else {
    return "Draw";
  }
}

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
