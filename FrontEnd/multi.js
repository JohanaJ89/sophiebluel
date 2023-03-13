function multi(x) {
    if (total === 0) {
        return (total = x);
    } else {
        total *= x;
        return total;
    }
}
