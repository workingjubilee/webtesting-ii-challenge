// - display the count of `balls` and `strikes` for the at-bat.
// - should be updated when the user records activity on the `Dashboard` component.

// ### Count Rules

export class Board {
  constructor(score = {}) {
    this.hits = score.hits || 0;
    this.strikes = score.strikes || 0;
    this.balls = score.balls || 0;
  }
}

function reset(score) {
  score.strikes = 0;
  score.balls = 0;
  return score;
}

function cascade(score) {
  if (score.strikes >= 3) {
    return reset(score);
  } else if (score.balls >= 4) {
    return reset(score);
  } else {
    return score;
  }
}

export function addFoul(score) {
  const update = new Board(score);
  update.strikes < 2 ? update.strikes += 1 : null;

  return update;
}

export function addHit(score) {
  const update = new Board(score);
  update.hits += 1;

  return reset(update);
}

export function addBall(score) {
  const update = new Board(score);
  update.balls += 1;

  return cascade(update);
}

export function addStrike(score) {
  const update = new Board(score);
  update.strikes += 1;

  return cascade(update);
}