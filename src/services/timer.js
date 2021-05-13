export const timer = (timeleft, setTimeleft) => {
  setInterval(() => {
    if (timeleft !== 0) {
      setTimeleft(timeleft - 1);
    } else setTimeleft(9);
  }, 1000);
};
