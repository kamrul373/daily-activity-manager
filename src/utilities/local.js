// break time storing in loclaStorage
const setBreakTimeLocally = (duration) => {
    localStorage.setItem("breakTime", duration);
}
const getBreakTime = () => {
    let breaktTime = localStorage.getItem("breakTime");
    if (breaktTime) {
        breaktTime = JSON.parse(breaktTime);
    } else {
        breaktTime = 0;
    }
    return breaktTime;
}
export { setBreakTimeLocally, getBreakTime }