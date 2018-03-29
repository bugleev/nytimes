const scrollDownSmooth = (scrollTo, duration = 400, timingName = "ease-out") => {
  const TIMINGFUNC_MAP = {
    "linear": t => t,
    "ease-in": t => t * t,
    "ease-out": t => t * (2 - t),
    "ease-in-out": t => (t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
  };

  const timingFunc = TIMINGFUNC_MAP[timingName];
  let start = null;
  const step = (timestamp) => {
    start = start || timestamp;
    const progress = timestamp - start;
    let time = Math.min(1, ((timestamp - start) / duration));
    window.scrollTo(0, window.scrollY + (timingFunc(time) * (scrollTo - window.scrollY)));
    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

export default scrollDownSmooth;