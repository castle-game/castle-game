"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tile_1 = require("../tile");
const city_segment_1 = require("../city-segment");
const farm_segment_1 = require("../farm-segment");
const road_segment_1 = require("../road-segment");
const tile_edge_1 = require("../tile-edge");
const immutable_1 = require("immutable");
class TileD extends tile_1.Tile {
    constructor() {
        let cityA = new city_segment_1.CitySegment('cityA');
        let farmA = new farm_segment_1.FarmSegment('farmA');
        let farmB = new farm_segment_1.FarmSegment('farmB');
        let roadA = new road_segment_1.RoadSegment('roadA');
        let edgeN = new tile_edge_1.TileEdge(immutable_1.List([farmA, roadA, farmB]));
        let edgeE = new tile_edge_1.TileEdge(immutable_1.List([cityA]));
        let edgeS = new tile_edge_1.TileEdge(immutable_1.List([farmB, roadA, farmA]));
        let edgeW = new tile_edge_1.TileEdge(immutable_1.List([farmA]));
        let segments = immutable_1.List([cityA, farmA, farmB, roadA]);
        super(edgeN, edgeE, edgeS, edgeW, segments);
    }
}
exports.TileD = TileD;
//# sourceMappingURL=tile-d.js.map