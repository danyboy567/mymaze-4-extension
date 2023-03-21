// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101040404010101010101010101010101010404040101010101010200000000000007010101010100000101010101010100010100010101050101010101010101000101000000000401010101010101010000010001010101010101010101010101000000000006010101010400000101010101010101000101010100010001010101010101010001010101000100010100000000000000010101010001050000000100010101010101010100010101010101000101010101010101000001010101010001010101010101010101010101010100000400010101010101010101010101010101000000000301010101010101010101010101010101`, img`
2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 
. . . . . . . . 2 2 2 2 2 . . 2 
2 2 2 2 2 2 . 2 2 . 2 2 2 . 2 2 
2 2 2 2 2 2 . 2 2 . . . . . 2 2 
2 2 2 2 2 2 . . 2 . 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . . . . . 2 2 2 
2 . . . 2 2 2 2 2 2 2 2 . 2 2 2 
2 . 2 . 2 2 2 2 2 2 2 2 . 2 2 2 
2 . 2 . 2 2 . . . . . . . 2 2 2 
2 . 2 . . . . 2 . 2 2 2 2 2 2 2 
2 . 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
2 . . 2 2 2 2 2 . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . . . . 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorMixed,myTiles.tile1,myTiles.tile2,myTiles.tile3,sprites.dungeon.doorClosedSouth], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
