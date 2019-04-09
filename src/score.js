// - display the count of `balls` and `strikes` for the at-bat.
// - should be updated when the user records activity on the `Dashboard` component.

// ### Count Rules

class Board {
  constructor() {

  }

  cascade() {

  }
}


function addFoul(score) {
  const update = new Board(score);
}

function addHit(score) {
  const update = new Board(score);
}


function addBall(score) {
  const update = new Board(score);
}

function addStrike(score) {
  const update = new Board(score);
}

function reset(score) {
  const update = new Board(score);
  
}

function cascade(score) {
  if (this.hits === score.hits +1) {

  }

}

const baseScore = { strikes: 0, balls: 0, hits: 0 }

const testScore = { strikes: 2, balls: 3, hits: 0 }

it('should increase strikes', function() {
  // - a `foul` increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes.

});


it('shouldn\'t increase strikes past a certain value', function() {
  // With two strikes a foul has no effect, count stays at 2 strikes.

  expect(addFoul(testScore)).toHaveProperty('strikes', 2)
})

badScore()

it('shouldn\'t increase the wrong value', function() {

  expect(addFoul(baseScore).balls).toEqual(baseScore.balls);
  expect(addFoul(baseScore).hits).toEqual(baseScore.hits);

  expect(addStrike(baseScore).balls).toEqual(baseScore.balls);
  expect(addStrike(baseScore).hits).toEqual(baseScore.hits);

  expect(addBall(baseScore).hits).toEqual(baseScore.hits);
  expect(addBall(baseScore).strikes).toEqual(baseScore.strikes);
// - balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
// - balls and strikes reset to 0 when a `hit` is recorded.

});

it('should always reset balls and strikes on reaching their maximum values', function() {
// - balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
// - balls and strikes reset to 0 when a `hit` is recorded.

});

it('should always reset balls and strikes on recording a hit', function() {
// - balls and strikes reset to 0 when a `hit` is recorded.

});
