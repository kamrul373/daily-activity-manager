// break time storing in loclaStorage
const setBreakTimeLocally = (duration) => {
    localStorage.setItem("breakTime", duration);
}
export { setBreakTimeLocally }