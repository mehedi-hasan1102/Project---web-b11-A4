function cashOut(money) {
    // চেক করব ইনপুট কি নাম্বার না
    if (typeof money !== "number" || money < 0) {
        return "Invalid";
    }

    // ক্যাশ আউট চার্জ হিসাব করা (1.75%)
    return money * 1.75 / 100;
}

// ✅ টেস্ট রান:
console.log(cashOut(2000));  // 35
console.log(cashOut(100));   // 1.75
console.log(cashOut(999));   // 17.4825
console.log(cashOut(-350));  // "Invalid"
console.log(cashOut(0));     // 0
console.log(cashOut("101"));// "Invalid"
console.log(cashOut("mewauu")); // "Invalid"
