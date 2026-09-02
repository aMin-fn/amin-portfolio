import assert from "node:assert/strict";
import test from "node:test";

import {
  getAdjacentSlideIndex,
  getSwipeDirection,
} from "./project-gallery-state.ts";

test("advancing from the final slide wraps to the first slide", () => {
  assert.equal(getAdjacentSlideIndex(3, 1, 4), 0);
});

test("moving backward from the first slide wraps to the final slide", () => {
  assert.equal(getAdjacentSlideIndex(0, -1, 4), 3);
});

test("moving between interior slides advances by one", () => {
  assert.equal(getAdjacentSlideIndex(1, 1, 4), 2);
});

test("a left swipe advances to the next slide", () => {
  assert.equal(getSwipeDirection(120, 40), 1);
});

test("a right swipe moves to the previous slide", () => {
  assert.equal(getSwipeDirection(40, 120), -1);
});

test("a short touch movement leaves the active slide unchanged", () => {
  assert.equal(getSwipeDirection(120, 90), 0);
});
