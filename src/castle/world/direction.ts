import { List } from 'immutable'

const DEG_TO_RAD = Math.PI / 180

export class Direction {
  public static readonly north: Direction = new Direction('north', 0)
  public static readonly northeast: Direction = new Direction('northeast', 45)
  public static readonly east: Direction = new Direction('east', 90)
  public static readonly southeast: Direction = new Direction('southeast', 135)
  public static readonly south: Direction = new Direction('south', 180)
  public static readonly southwest: Direction = new Direction('southwest', 225)
  public static readonly west: Direction = new Direction('west', 270)
  public static readonly northwest: Direction = new Direction('northwest', 315)

  /**
   * The four primary directions: north, east, south and west.
   */
  public static readonly cardinals: List<Direction> = List([
    Direction.north,
    Direction.east,
    Direction.south,
    Direction.west
  ])

  public static readonly principals: List<Direction> = List([
    Direction.north,
    Direction.northeast,
    Direction.east,
    Direction.southeast,
    Direction.south,
    Direction.southwest,
    Direction.west,
    Direction.northwest
  ])

  private static readonly all: List<Direction> = Direction.principals

  private constructor (private label: string, public readonly degrees: number) { }

  public get radians (): number {
    return this.degrees * DEG_TO_RAD
  }

  public getOpposite (): Direction {
    const index = Direction.all.indexOf(this) + (Direction.all.size / 2)
    return Direction.all.get(index % Direction.all.size)
  }

  public toString (): string {
    return this.label
  }

}
