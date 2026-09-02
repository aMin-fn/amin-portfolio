export function getAdjacentSlideIndex(
  currentIndex: number,
  direction: -1 | 1,
  slideCount: number,
) {
  return (currentIndex + direction + slideCount) % slideCount;
}

export function getSwipeDirection(startX: number, endX: number): -1 | 0 | 1 {
  const distance = startX - endX;

  if (Math.abs(distance) < 48) {
    return 0;
  }

  return distance > 0 ? 1 : -1;
}
