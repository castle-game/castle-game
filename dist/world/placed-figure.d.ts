import { Figure } from './figure';
import { PlacedSegment } from './placed-segment';
import { PlacedTile } from './placed-tile';
import { Player } from '../player';
export interface PlacedFigure {
    readonly figure: Figure;
    readonly placedTile?: PlacedTile;
    readonly placedSegment?: PlacedSegment;
    readonly player: Player;
}