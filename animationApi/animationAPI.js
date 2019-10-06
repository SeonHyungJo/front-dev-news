registerAnimator('twitter-header', class {
  constructor(options) {
  }

  animate(currentTime, effect) {
    effect.localTime = currentTime;
  }
});
