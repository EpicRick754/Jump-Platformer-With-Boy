scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    scene.setBackgroundColor(15)
    tiles.setTilemap(tiles.createTilemap(hex`32000a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000010101010100000000000100000000000000000000000001010101010000000000000000000000010000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000001010000000000000000000000000000000101010100000000000000000100000000000000000000000101010100000000000100000000010101010100000000000000000000000000000000000000010000000000000000000000010100000000010000010000000000000000000000000000000000000000000001010100000001000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`, img`
        ..................................................
        .......................................22222.....2
        ............22222...........2.....................
        ...........2................22...............2222.
        .......2...........2222.....2....22222............
        .......2...........22....2..2.....................
        .222...2....................2.....................
        .......2..........................................
        .......2..........................................
        ..................................................
        `, [myTiles.transparency16,sprites.dungeon.collectibleInsignia,myTiles.tile3,sprites.dungeon.darkGroundCenter], TileScale.Sixteen))
    My_Jumping_Hero.setPosition(34, 88)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(hex`5a000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000100000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101000000000000000001000000000000000000000000000000000000000000000000000000000001010101010000000000000000000000000000000000000000000000000101010100000000000000000000000000000001000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000101010100000000000000000000010100000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000001010101010000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000001000000000000000101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010000000000000000000000000000000000000000000000000100000000000000000000000000000001010101000000000000000000000101010101000000000000000000000000000000000000000000000000000000000000000101000000000000000000000000000101010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`, img`
        ..........................................................................................
        ..........2..2...............................................................2222........2
        .............................22222........................2222...............2............
        ........2..................................2222..........22..................2............
        .......................22222.....................2...........................2.......22...
        ........................2.........................22........................2.............
        ..2222..........22222...............................22.............2222...................
        ......................................22...............................2..................
        ..........................................................................................
        ..........................................................................................
        `, [myTiles.transparency16,sprites.builtin.brick,myTiles.tile5,sprites.dungeon.darkGroundCenter], TileScale.Sixteen))
    My_Jumping_Hero.setPosition(41, 89)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    controller.moveSprite(My_Jumping_Hero, 100, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (My_Jumping_Hero.vy == 0) {
        My_Jumping_Hero.vy = -100
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.brick, function (sprite, location) {
    controller.moveSprite(My_Jumping_Hero, 100, 50)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    My_Jumping_Hero,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    500,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, My_Jumping_Hero)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, My_Jumping_Hero)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundCenter, function (sprite, location) {
    My_Jumping_Hero.destroy(effects.fire, 500)
    pause(200)
    game.over(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    My_Jumping_Hero,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
	
})
let My_Jumping_Hero: Sprite = null
scene.setBackgroundColor(15)
game.showLongText("Use Left Right And Space Keys To Move", DialogLayout.Bottom)
game.showLongText("Happy Playing!!!!   -Rithik", DialogLayout.Bottom)
My_Jumping_Hero = sprites.create(img`
    ....ffffff..............
    ..ffeeeef2f.............
    .ffeeeef222f............
    .feeeffeeeef............
    .ffffee2222ef...........
    .fe222ffffe2f...........
    fffffffeeefff...........
    ffe44ebf44eef...........
    fee4d41fddef............
    .feee4ddddf.............
    ..fdde444ef.............
    ..fdde22ccc.............
    ...eef22cdc.............
    ...f4444cddc............
    ....fffffcddc...........
    .....fff..cddc..........
    ...........cdc..........
    ............cc..........
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
My_Jumping_Hero.setPosition(25, 40)
tiles.setTilemap(tiles.createTilemap(hex`1400080000000000000000000000000000000000000000000000000000000000000000000000000300000000000000000001010100000101010100030000000400010101000000000000000000000003000000010000000000000000000000000000000101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000202020202020202020202020202020202020202`, img`
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 . . 2 2 2 2 . . . . . . 
    . 2 2 2 . . . . . . . . . . . 2 . . . 2 
    . . . . . . . . . . . . . . . 2 2 2 . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.dungeon.darkGroundCenter,sprites.builtin.brick,myTiles.tile2], TileScale.Sixteen))
controller.moveSprite(My_Jumping_Hero, 100, 0)
My_Jumping_Hero.ay = 250
scene.cameraFollowSprite(My_Jumping_Hero)
My_Jumping_Hero.setFlag(SpriteFlag.ShowPhysics, true)
