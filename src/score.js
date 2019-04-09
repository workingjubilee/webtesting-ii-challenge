// - display the count of `balls` and `strikes` for the at-bat.
// - should be updated when the user records activity on the `Dashboard` component.

// ### Count Rules

class Board {
  constructor(score = {}) {
    this.hits = score.hits || 0;
    this.strikes = score.strikes || 0;
    this.balls = score.balls || 0;
  }

  cascade() {

  }

  reset() {

  }
}


export function addFoul(score) {
  const update = new Board(score);

  return update;
}

export function addHit(score) {
  const update = new Board(score);

  return update;
}

export function addBall(score) {
  const update = new Board(score);

  return update;
}

export function addStrike(score) {
  const update = new Board(score);

  return update;
}

export default { Board };