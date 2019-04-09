import * as score from './score.js';

console.log(score);

const baseScore = { strikes: 0, balls: 0, hits: 0 }

const testScore = { strikes: 2, balls: 3, hits: 0 }

it('shouldn\'t increase strikes past a certain value', function() {
  // With two strikes a foul has no effect, count stays at 2 strikes.

  expect(score.addFoul(testScore).strikes).toEqual(testScore.strikes);
})


it('should increase the correct value on a baseline score', function() {

  expect(score.addHit(baseScore).hits).toEqual(baseScore.hits +1)
  expect(score.addFoul(baseScore).strikes).toEqual(baseScore.strikes +1)
  expect(score.addStrike(baseScore).strikes).toEqual(baseScore.strikes +1)
  expect(score.addBall(baseScore).balls).toEqual(baseScore.balls +1)
});


it('shouldn\'t increase the wrong value on baseline scores', function() {

  expect(score.addFoul(baseScore).balls).toEqual(baseScore.balls);
  expect(score.addFoul(baseScore).hits).toEqual(baseScore.hits);

  expect(score.addStrike(baseScore).balls).toEqual(baseScore.balls);
  expect(score.addStrike(baseScore).hits).toEqual(baseScore.hits);

  expect(score.addBall(baseScore).hits).toEqual(baseScore.hits);
  expect(score.addBall(baseScore).strikes).toEqual(baseScore.strikes);
// - balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
// - balls and strikes reset to 0 when a `hit` is recorded.
});

it('should always reset balls and strikes on reaching their maximum values', function() {
// - balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
// - balls and strikes reset to 0 when a `hit` is recorded.

  expect(score.addStrike(testScore)).toHaveProperty('strikes', 0)
  expect(score.addStrike(testScore)).toHaveProperty('balls', 0)

  expect(score.addBall(testScore)).toHaveProperty('strikes', 0)
  expect(score.addBall(testScore)).toHaveProperty('balls', 0)
});

it('should always reset balls and strikes on recording a hit', function() {

  expect(score.addHit(baseScore)).toHaveProperty('strikes', 0)
  expect(score.addHit(baseScore)).toHaveProperty('balls', 0)

  expect(score.addHit(testScore)).toHaveProperty('strikes', 0)
  expect(score.addHit(testScore)).toHaveProperty('balls', 0)
});
