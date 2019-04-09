
const baseScore = { strikes: 0, balls: 0, hits: 0 }

const testScore = { strikes: 2, balls: 3, hits: 0 }

it('shouldn\'t increase strikes past a certain value', function() {
  // With two strikes a foul has no effect, count stays at 2 strikes.

  expect(addFoul(testScore).strikes).toEqual(testScore.strikes);
})


it('should increase the correct value on a baseline score', function() {

  expect(addHit(baseScore).hits).toEqual(baseScore.hits +1)
  expect(addFoul(baseScore).strikes).toEqual(baseScore.strikes +1)
  expect(addStrike(baseScore).strikes).toEqual(baseScore.strikes +1)
  expect(addBall(baseScore).balls).toEqual(baseScore.balls +1)
});


it('shouldn\'t increase the wrong value on baseline scores', function() {

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

  expect(addStrike(testScore)).toHaveProperty('strikes', 0)
  expect(addStrike(testScore)).toHaveProperty('balls', 0)

  expect(addBall(testScore)).toHaveProperty('strikes', 0)
  expect(addBall(testScore)).toHaveProperty('balls', 0)
});

it('should always reset balls and strikes on recording a hit', function() {

  expect(addHit(baseScore)).toHaveProperty('strikes', 0)
  expect(addHit(baseScore)).toHaveProperty('balls', 0)

  expect(addHit(testScore)).toHaveProperty('strikes', 0)
  expect(addHit(testScore)).toHaveProperty('balls', 0)
});
