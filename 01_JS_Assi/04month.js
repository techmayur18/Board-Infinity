const daysInMonth = (month) => {
    if (month > 12)
        return "Error";
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
        return 31;
    else if (month == 4 || month == 6 || month == 9 || month == 11)
        return 30;
    else(month == 2)
    return 28;
}
console.log(daysInMonth(8));