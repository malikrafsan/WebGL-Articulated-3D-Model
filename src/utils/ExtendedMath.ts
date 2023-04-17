export class ExtendedMath {
  public static radToDegree(rad: number) {
    return (rad * 180) / Math.PI;
  }

  public static degreeToRad(degree: number) {
    return (degree * Math.PI) / 180;
  }

  public static isPowerOfTwo(x: number) {
    return (x & (x - 1)) === 0;
  }
}
