controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 4 b 
        b d d c d 5 5 b 5 4 4 4 4 4 b . 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `)
})
function bossFight () {
    tiles.setCurrentTilemap(tilemap`level3`)
    Pannochka = sprites.create(img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f d d f f 6 f . . . 
        . . f 6 f d f d d f d f 6 f . . 
        . . f 6 f d 3 d d 3 d f 6 f . . 
        . . f 6 6 f d d d d f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f d 3 5 3 3 5 3 3 f f . . 
        . . f d f f 3 5 5 3 f d f . . . 
        . . . f f 3 3 3 3 3 f d f . . . 
        . . . f 3 3 5 3 3 5 3 f f . . . 
        . . . f f f f f f f f f . . . . 
        . . . . . f f . . . . . . . . . 
        `, SpriteKind.Enemy)
    metPannochka = true
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, -100)
    projectile.startEffect(effects.warmRadial)
})
function startNextLevel () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    currentLevel += 1
    if (currentLevel == 1) {
        tiles.setCurrentTilemap(tilemap`level1`)
    } else if (currentLevel == 2) {
        tiles.setCurrentTilemap(tilemap`level1`)
    } else if (currentLevel == 3) {
        bossFight()
    } else {
        game.over(true)
    }
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . d d d d d d d d d d . . . 
        . . . d 5 5 d d d d 5 5 d . . . 
        . . d d 6 6 d d d d 6 6 d d . . 
        . . . 3 3 d d d d d d 3 3 . . . 
        . . . . d d d d d d d d . . . . 
        . . . 1 1 1 1 2 2 1 1 1 1 . . . 
        . . 1 1 1 1 1 2 2 1 1 1 1 1 . . 
        . . d b . 1 1 1 1 1 1 . b d . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(mySprite, sprites.castle.rock0)
    controller.moveSprite(mySprite, 100, 100)
    mySprite.setStayInScreen(true)
    info.setLife(5)
    scene.cameraFollowSprite(mySprite)
}
info.onLifeZero(function () {
    mySprite.destroy(effects.ashes, 500)
    game.over(false)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . d d d d d d d d d d . . . 
        . . . d 5 5 d d d d 5 5 d . . . 
        . . d d 6 6 d d d d 6 6 d d . . 
        . . . 3 3 d d d d d d 3 3 . . . 
        . . . . d d d d d d d d . . . . 
        . . . 1 1 1 1 2 2 1 1 1 1 . . . 
        . . 1 1 1 1 1 2 2 1 1 1 1 1 . . 
        . . d b . 1 1 1 1 1 1 . b d . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.saplingOak, function (sprite, location) {
    mySprite.destroy()
    startNextLevel()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    projectile.follow(Demon1)
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.ashes, 500)
})
let projectile2: Sprite = null
let Demon1: Sprite = null
let currentLevel = 0
let projectile: Sprite = null
let metPannochka = false
let Pannochka: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    fffffffcbccffffffffffcfbddddddddddd111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbffcddffffffcfcfffff
    fffffffccffffcffffffbfddddddddd111111.1111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccdbffffffffffffff
    ff33333333333333333333333333333333333.33.333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333cf
    ff3fffcffffffffbdffffddddddd111111111.1..1111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccffffffdfbffff3ff
    fc3ffffffcdcdffdffdccdddddd1111111111..1.111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbffffffdfffff3ff
    ff3ffffffdbddcfffffcddddd1111111.1111..1.111111111111111111111111111dddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfcfffffcfffb3ff
    fc3fffbffbffffffffbbddddd111111..111...1.11111111111111111111111111d11dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdcfffffffffbf3ff
    fc3ffffffcfffffffcdddd111111111..111.1.1.111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccfffffffffff3ff
    fd3ccffffdbffcffccdddd111111111..111.1.1.31111111111111111111111111d111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffffffffffff3ff
    ff3fffffffff3333311d11111111111..11b..bb.1bbbbb1111dddddddbbbdddddddddddddddddddddddddddddddddddddddddbbbbdddddddddddddddddddddddddddddddddddddddfcffffffffff3ff
    ff3fffffffff3333311111111111111..11...bb.1bbbbb1111dddddddbbbdddddddddddddddddddddddddddddddddddddddddbbbbdddddddddddddddddddddddddddddddddddddddcfffffffffff3ff
    ff3ffffddcff3333311111111111111..11...bb.1bbbbb1111dddddddbbbdddddddddddddddddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddddddddddddddddfffffffffff3ff
    ff3ffffdddbf333bb11ddd111111111..11.b.bb.bbbbbbdddddddddddbbbbbdddddddddddddddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddddddddddddddbcfffcfffffff3ff
    ff3fffcbfccc333bb11ddd111111111..11.b.bb.bbbbbbdddddddddddbbbbbdddddddddddddddddddddddddddddddddddddddbbbbdddddddddddddddddddddddddddddddddddddddccffffffffff3ff
    ff3ffffffcfd333dd111111111bbb11...1.1.bbb.bbb1111dddddddddbbbbbdddddddddddddddddddddddddddddddddddddddbbbbdddddddddddddddddddddddddddddddddddddddddcfffffffff3ff
    ff3fffffdfcd333dd111111111bbb11......1bbb.bbb1111dddddddddbbbbbdddddddddddddddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddddddddddddddddcfbfffcffff3ff
    ff3fffffcfbd33311111111111ddd11......1bbb.bbb1111ddddddddddddbbbbdddddddddddddddddddddddddddddddddddddbbbbdddddddddddddddddddddddddddddddddddddddddbfffdfffff3ff
    ff3ffffcdcdd33311111111111ddd1.1.....1bbb.bbb1111ddddddddddddbbbbdddddddddddddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddddddddddddddddddfffffffff3ff
    ff3ffbfffcdd33311111111111ddd1.1.....1bbb.bbbddddddddddddddddddbbdddddddddddddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddddddddddddddddbcfffffffff3ff
    fc3ffdcbfbdd33311111111111ddd1.......1bbb.bbbddddddddddddddddddbbdddddddddddddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddddddddddddddddbcfffffffff3ff
    ff3cffcdfbdd111bb11bbb1111ddd1..1....1bbb.bbbddddddddddddddddddbbbbbddbbbbddddddddddddddddddddddddddddbbbbddddddddddddddddddddddddddddddddddddddddbcfffffffff3ff
    ff3dfffbbbdd111bb11bbb1111ddd1..1....1bbb.bbbddddddddddddddddddbbbbbddbbbbddddddddddddddddddddddddddddbbbbdddddddddddddddddddddddddddddddddddddddddcfccffffff3ff
    cf3ffffbcdd1111ccbbbbbbb111111..1...11bbb.bbbddddddddddddddddddbbbbbddbbddddddddddddddddbbbbbdddddddddbbbbdddddddddddddddddddddddddddddddddddddddddbfcdffffff3ff
    ff3fffccdd11111ccbbbbbbb111111......11bbb.bbbddddddddddddddddddbbbbbddbbddddddddddddddddbbbbbdddddddddbbbbdddddddddddddddddddddddddddddddddddddddddccfbffffff3ff
    ff3fffbdb111111ccbbbbbbb111111......11bbb.bbbddddddddddddddddddbbbbbddbbddddddddddddddddbbbbbdddddddddbbbbdddddddddddddddddddddddddbbdddddddddddddddcfdbfffff3ff
    ff3ffcddddd1333bbbbbbb1111111d..1...11bbb.bbbbb11ddddddddddddddddbbbbbbbddddddddddddddddbbbbbdddddddddbbbbdddddddddddddddddddddddddbddddddddddddddddbfcffffff3ff
    ff3ffbdddd11333bbbbbbb1111111d..1...11bbb.bbbbb11ddddddddddddddddbbbbbbbddddddddddddddddbbbbbdddddddddbbbbddddddddddddddddddddddddbbddddddddddddddddcfcffffff3ff
    ff3fcbddddd133311bbbbb11111111.1....11bbb.bbbbbddddddddddddddddddbbbbbbbddddddddddddddddbbddddddddddddbbbbddddddddddddddddddddddddbddddddddddddddddbcffffffff3ff
    ff3ccddddd1133311bbbbb1111111..1...111bbb.bbbbbddddddddddddddddddbbbbbbbddddddddddddddddbbddddddddddddbbbbddddddddddddddddddddddddbdddddddddddddddbbfffffffff3ff
    ff3cbddddd11333dd11bbbbbb.111..1...111bbb.bbbbbdddddddddddddddddddddbbbbddddddddddddddbbbbddddddddddddbbbbddddddddddddddddddddddddbddddddddddddddddbfffffffff3cf
    ff3cddddddd1333dd11bbbbbb.111..1.1.111bbb.bbbbbdddddddddddddddddddddbbbbddddddddddddddbbbbddddddddddddbbbbddddddddddddddddddddddddbddddddbbdddddddbcfffffffff3ff
    ff3bdddddd113331111111bbb.11.....1.111bbb.bbbbbddddddddd11ddddddddddbbbbddddddddddddddbbbbddddddddddddbbbbddddddddddddddddddddbbddbbdddddbbdddddddbccffffffff3ff
    ff3bddddd1113331111111bbb.11..1....111bbbb.bbbbddddddddd11ddddddddddbbbbddddddddddddddbbbbddddddddddddbbbbdddddddddddddddddddddbbddbddddddbddddddddffffffffff3ff
    fc3bdddddd113331111111bbb.1.1.1....bbbbbbb.bbbbdddddddddddddddddddddbbbbbbddddddddddddbbbbddddddddddddbbbbdddddddddddddddddddddbbbdbbdddddbdbddddbbbcffffffff3ff
    fc3dddddd1113331111111bbb.1.1..1...bbbbbbb.bbbbdddddddddddddddddddddbbbbbbddddddddddddbbbbddddddddddddbbbbdddbdddddddddddddddddddbddbbddddbbbddbbbcffffffffff3ff
    cc3dddddd111333bb11111bbb.1.....1..bbbbbbb.bbbbdddddddddddddddddddddbbbbbbddddddddddddbbbbddddddddddddbbbbdddbbdddddddddddddddddddbddbddddbbddbbbbfffffffffff3ff
    dd3dddddd111333bb11111bb.b.1....1..bbbbbbb.bbbbdddddddddddddddddddddbbbbbbddddddddddddbbbbddddddddddddbbbbdddbbdddddddddddddddddddbbbbddddbddbbbbccffffffffff3ff
    dd3ddddd1111333dd11111bb.1.1.......bbbbbbb.bbbbbbdddddddddddddddddddbbbbbbddddddddddddbbbbddddddddddbbbbbbdddbdddbdddddddddddddddddbbbddddbbbbbbbccffffffffff3ff
    dd3ddddd1111333dd11111bb..11..1....bbbbbbb.bbbbbbdddddddddddddddddddbbbbbbddddddddddddbbbbddddddddddbbbbbbdddbddbbdddddddddddddddddbbbdddbbbbbbbbccffffffffff3ff
    dd3ddddd1111333dd11111bb..11..1....bbbbbbb.bbbbbbdddddddddddddddddddbbbbbbddddddddddddbbbbddddddddddbbbbbbdddbddbdddddddddddddddddddbbdddbbbbbbbccfffffffffff3ff
    dd3ddddddd113331111111bb..11...1...bbbbbbb.bbbbbbbbdddddddddddddddddbbbbbbbbbdddddddddbbbbdddddddbbbbbbbbbdddbdbddddddddddddddddddddbbddbbbbbbbbcbfffffffffff3ff
    dd3ddddddd113331111111bb.b1....1...bbbbbbb.bbbbbbbbdddddddddddddddddbbbbbbbbbdddddddddbbbbdddddddbbbbbbbbbdddbbdddddddddddddddddddddbbdbbbbbbbbccffffffffffff3ff
    dd3ddddddd11333bbbb111b..b1.....b..bbbbbbb.bbbbbbbbbbbbbddddddddddddbbbbbbbbbdddddddddbbbbdddddbbbbbbbbbddddbbdddddddddddbbddddddddbbbbbbbbbbbcbbcfffffffffff3ff
    dd3dddddd1d1333bbbb111bb.b1.....b..bbbbbbb.bbbbbbbbbbbbbddddddddddddbbbbbbbbbdddddddddbbbbdddddbbbbbbbbbdddbbddddddddddddbdddddddddbbbbbbbbbbccbcffffffffffff3ff
    dd3dddddd1d1333bbbbbbbbbbbb...b.b..bbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbddddddddddddbdddddddddbbbbbbbbbbbbcfffffffffffff3ff
    dd3dddddd1d1333bbbbbbbbbbbb...b.b..bbbbbbb.bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbddddddddddddbbdddddbddbbbbbbbbbbbccffffffffffffff3ff
    dd3ddddddddd333bbbbbbbbbbb....b.b..bbbbbbb.bbbbbbbbbbbbbbbb.bbbbbbbbbbbbbbbbbbbddbbbbbbbddbbbdddddddddbbddbbddddddddddddbbdddddbddbbbbbbbbbbbbccfffffffffffff3ff
    dd3ddddddddd333bbbbbbbbbbb.....bb..bbbbbbb.bbbbbbbbbbbbbbb..bbbbbbbbbbbbbbbbbbbddbbbbbbbddbbbdddddddddbbddbbddddddddddddbbdddddbdbbbbbbbbbbbbcfffffffffffffff3ff
    dd3ddddddddd33333bbbbbbbbb.b.b.bb..bbbbbbb.bbbbbbbbbbbbbbb..bbbbbbbbbbbbdddddddddddddddddddddddbbdddddddddbbddddddddddddbbdddddbdbbbbbbbbbbbbcfffffffffffffff3ff
    dd3ddddddddd33333bbbbbbbbb...b.bb..bbbbbbb.bbbbbbbbbbbbbb.b.bbbbbbbbbbbbdddddddddddddddddddddddbbdddddddddbbddddddddddddbbdddddbbbbbbbbbbbbbbcfffffffffffffff3ff
    dd3ddddddddd33333bbbbbbbbb...b.bb..bbbbbbb.bbbbbbbbbbbbbb.b.bbbbbbbbdddddddddbbddddddddddddddddddbbbddddddbbbddddddddddddbdddddbbbbbbbbbbbbbbbcffffffffffffff3ff
    dd3ddddddddd33333bbbbbbbb...bb.bb..bbbbbbb.bbbbbbbbbbbbb.bb.bbbbbbbbdddddddddbbddddddddddddddddddbbbddddddbbbddddddddddddbbdddbbbbbbbbbbbbbbbcfffffffffffffff3ff
    dd3ddddddddd33333bbbbbbbb...bb.bb..bbbbbbb.bbbbbbbbbbbbb.bb.bbbbbbbbdd..dddddbbddddddddddddddddddbbbddddddbbbddddddddddddbbddbbbbbbbbbbbbbbbcfcffffffffffffff3ff
    dd3ddddddddd3333333333bbb...bb.bb..bbbbbbb.bbbbbbddddddd.dd.dddddddd..d.ddddddddddddddddddddddddddddddddddbbbdddddddddddbbbbbbbbbbbbbbbbbbbccffffffffffffffff3ff
    dd3ddddddddd3333333333bbb.b.b.bbb..bbbbbbb.bbbbbbdddddd.ddd.dddddd..ddd.ddddddddddddddddddddddddddddddddddbbbddddddddbdbbbbbbbbbbbbbbbbbbbbcfcfffffffffffffff3ff
    dd3ddddddddd3333333333333.b.b.bbb..bbbbbdd.bbdddddddddd.ddd.dbbdd.ddddd.bbddddddddddddddddddddddddddddddddbbbddddbdddbdbbbbbbbbbbbbbbbbbbbbffffffffffffffffff3ff
    dd3ddddddddd333333333333..b.b.bbb..bbbbbdd.bbddddddddd.ddddd.bb..dddddd.bbddddddddddddddddddddddddddddddddbbbdddbbdddbbbbbbbbdbbbbbbbbbbbbcffffffffffffffffff3ff
    dd3ddddddddd33333bb33333..b.b.bbb..bbbdddd.bbddddddddd.ddddd.d....ddddd.ddddddddddddddddddddddddddddddddddbbbdddbbddddddbdddddddddbbbbbbbbcfffffffcffffffffff3ff
    dd3ddddbbddd33333bb33333..b.b.bbb..bbbdddd.bbddddddddd.dd......dddddddd.ddddddddddddddddddddddddddddddddddbbbddddbdbdddddddddddddddddddddddffffffffffffffffff3ff
    db3dddddddbbbbbbbbb333bb.d..d.ddd..ddddddd.ddddddddbb....d...dddddddddd.ddddddddddddddddddddddddddddddddddbbbbdddddddddddddddbddddddddddbbcffffffffffffffffff3ff
    dd3ddbddbbbbbbbbbbb333bb.d...dddd..ddddddd.ddddddd....ddd.dd.ddddddddd.dddddddddddddddddddddddddddddddddddbbbdddddddddddddddddddddddddddbcfffffffffffffffffff3ff
    db3bbbbbbbbbddddddddddc..d.b.dddd..dddbbbb.dd.....dbb.b..ddd.ddddddddd.ddddddddddbbbddddddddddddddddddddddbbddddddddddddddddddddddddddbbbcdffffffffffffffffff3ff
    ...............................................ddddb.b.bdddd.ddddddddd.ddddddddddbbbdddddddddddddddddddddddbbdddddddddddddddddddbddddbccfddffffffffffffffffff3ff
    db3....bbbbbddddddddddd..d.d.dddd............................................dddddddddddddddddddddddddddddddddddddddddbdddddddddddddbcfffffffffffffffffffffff3ff
    bb3bbbb.....dddd...................ddddddd.ddddddd..ddddddddd.ddddddbb.dddddd......dddddddddddddddddddddddddddddddddddddddddddddddddccfffffffffffffffffffffff3ff
    bb3bbbbbd........ddddd..dd.d.dddd..bbbbbdd.dddddd.d.ddddddddd.dddddddd.dddddddddddd.....ddddddddddddddddddddddddddddddddddddbdddddbbbffbdffffffffffffffffffff3ff
    bb3......dddddddd.......dd.d.dddd..bbbbbdd.dddd..dd.ddddddddd.dddddddd.ddddddddddddddddd...dddddddddddddddddddddddddddddddddddddddbddfcbfdfffffffffffffffffff3ff
    ...bdddddddddddddddddd......ddddd..bbbbbdd.ddd.ddd.dddddddddd.dddddddd.ddddddddddddddddddd.dddddddddddddddddddddddddddddddddddddddbdffdffbcffffffffffffffffff3ff
    b..ddddddddddddddddddd..dd......d..dddbbdd.d..dddd.dddddddddd.ddddddd.ddddddddddddddddddd.ddddddddddddddddddddddddddddddddddddddddcffcdfffffffffffffffffcffff3ff
    bb3..ddddddddddddddddd..dd..dddd.....dbbdd..dddddd.dddddddddd.ddddddd.ddddddddddddddddd..dddddddddddddddddddddddddddddddddddddddbcdffdfcdffffffffffffffffffff3ff
    bd3dd..dddddddddddddd..ddd..ddddd..dd....d.ddddbb.ddddddbbddd.ddddddd.dddddddddddbbbdd.ddddddddddddddddddddddddddddddbddddddddddbfcffffcfffffffffffffffffffff3ff
    dd3dddd.ddddddddddddd..ddd..ddddd..ddddd.....ddbb.ddddddbbddd.ddddddd.dddddddddddbbbd.dddddddddddddddddddddddddddddbddddddddddddcbdffffffffffbfffffcffffffffc3ff
    db3bdddd..ddddddddddd..ddd..ddddd..dddd.dd.dd.....ddddddddddd.dddddd.bbbbbddddddddd..dddddddddddddddddddddddddddddddddddddddddddcffffffffffffffffffffffffcfff3df
    dd3dddbddd..ddddddddd..ddd.dddddd..dd..ddd.ddddd.......ddddddd.ddddd.bbbbbddddddd..ddddddddddddddddddddddddddddddddddddddddddddbffffffffffffffffffffffffcdfff3ff
    dd3ddddddddd..ddddddd..dbb.dddddd.dd.ddddd.ddddd.dddddd.....dd.ddddd.ddddddddd...dddddddddbbbddbbddddddddddddddddddddddddddddddcfffffffffffffffffffffffffffdf3ff
    dd3ddddddddddd..dddd.d.dbb.dddddd.d.dddddd.ddddd.ddddddddddd.....ddd.dddddd...ddddddddddddbbbddbbddddddddddddddddddddddddddddddccffffffffffffffffffffffffffff3ff
    dd3ddddddddddddd..........ddddddd..ddddddd.ddbb.dccbbbdddddddd.dd......dd..dddddddddddddddddddddddddddddddddddddddddddddddddddcfcffffffffffffffffcfffffffffff3ff
    bd3ddddddbdddddddddd..ddbb...................bb.dccbbbdddddddd.dddd.dd.....ddddddddddddddddddddddddddddddddddddddddddddddddddbffffffffcffffffffffffffffcfcfff3ff
    db3dbddddddddddbbddd..dddddddd..d.dddddddd.dd................................ddddddddddddddddddddddddddddddddddddddddddddddddcfffffffffffffffffffffffffffcfff3ff
    dd3ddddddddddddbbddd..ddddddd.dddddddddddd.ddd.ddddddddddddddd.bb...dddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffbffffffffffffffffffffffffffcf3ff
    dd3dddddddddcddddddb..333333.33333333b3b3b.ddd.dbdbcdddddddddd...dd.ddddddddddcbddddddddddddbdddddddddddddddddddddddddddddddcfffdffffffffffffffffffffffffffff3ff
    dd3ddddddddbcdddddb..3bb33..333b333bbbbb33.dbd.ddbdbddddddd...d.dd.ddddddddddddddddddddddddddddddddddddddddbbddddddddddddddbffffcffffffffffffffffffffffffffff3ff
    bd3dddddddcdddddddd..3bbb.bbb3bbbdddbddddb.ddd.dddddddddd..dddd.dd.ddddddddbcdddcddddddddddddddddddddddddddccddddddddddddddbddfffffffffffcffffffffffffffffccc3ff
    dd3dddddddddbddddbd..bbd.3bddbdbdddddddddd.ddd.dddbddd...dddddd.dd.ddbddddddddddddddddbddddddddbdddddddddddddddddddddddddddcdfffffffffffffffffffffffffffffccf3fc
    dd3cddddddddddddddd..cd.dddddbdbbbdddbdddd.dd.ddddc...dddbddddd.dd.ddddddddcddddddddddddddddddddddddddddddddddddddddcddddddcfffffffffffffffffffffffffffffffff3ff
    dd3bddddddddddddddd.dc.ddddddcbddddbbddddd.cd.dd...dddddddddbcb.b.cbddddddcbddddddddddddddddddddddddddddbddddddddddddddddddcfffffffffffffffcfffffffffffffffff3ff
    bd3ddddddddddddddd..d.ddddddbddbdbcbdbbddd.bd...dddddddddbbbbbb.b.bbcdbbddddbddbcddddddddddddddddbdddddddddddddddddddddddddcffffbdcffffffffcffffffffffcffffff3ff
    dd3ddddddddddddddd..d.dddddbbdddddbcdddddd....ddcdbbdbbbbcccbbc.c.bcbcbbbbbbbbccbcbbbdbbbbddddddddddddddddddddddddddbbbbdddcffffcfbffffffffffffffffffffffffff3ff
    dd3ddddddddddddddd...ddddcbbddddddbbddd....bb.dddbbbbbccccccccc.c.ccccccccccccccccbccbcbbccbdbbdddddddddddddddddddbbbbbbddbccfddfffffffffffbbffffffffffffffff3ff
    bb3dddddddbddddddd..dddbddcddbdddddb...bcc.c.cbbcbbbcbccccccccc.c.ccccccccccccccbcccccccccccccbbbdddddddddddddbbbbccccbbddccfffffcfffffffffffffffffffffffffff3ff
    cc3bdddddddddddddd..ddddddbdddddb...bccccc.c.cccccccccccccccccc.c.ccccccccccccccccccccccccccccbccccbdbdddbdbbbcccbccbbbdddbfffffdffffffffffffffffffffffffffff3ff
    cc3cddbddddddddddd.ddddccbbb.....bbccccccb.c.cccccccccccccccccc.c.cccccccccccccccccccccccccccccccccccccccccccccccbcccbdddddfffffffffffffffcffffffffffffffffff3ff
    cc3bbbbdddddddddd..ddd......cccbcccccccccc..ccccccccccccccccccc.c.ccccccccccccccccccccccccccccccbcccccccccccccccccbbddddddbffffffffffffffffffffffffffffffffff3ff
    cc3cccbcbbbdddddb.....cccccccccccccccccccc..ccccccccccccccccccc..ccccccccccccccccccccccccccccccccccccccccccccccccbddddddddbffffffffffffffffffffffffffffffffff3ff
    cc3ccccbccbbbcbcc.cccccccccccccccccccccccc..ccccccccccccccccccc..ccccccccccccccccccccccccccccccccccccccccccccbcbdddddddddbcffffffffffffffffcbffffffffffffffff3ff
    cc3ccccccccbcbccc.cccccccccccccccccccccccc.cccccccccccccccccccc..ccccccccccccccccccccccccccccbccccccccccccccccbbdddddbdddbcffffffffffffffffffffffffffffffffff3ff
    cc3cccccccccccccc.cccccccccccccccccccccccc.cccccccccccccccccccc..cccccccccccccccccccccccccbcbbcccccccccccccbbbbddddddddddbcffcfffffffffffffffffffffffffffffff3ff
    cc3cccccccccccccc.cccccccccccccccccccccccc.ccccccccccccccccccccc.cccccccccccccccccccccbcccbbcccccbbcccccccbbbbdddddddddddbccfffffffffffffffffffffffffffffffff3ff
    cc3cccccccccccccc.cccccccccccccccccccccccc.ccccccccccccccccccccc.ccccccccccccccccccbcbddddddbbcbbbdbccccbbdddddbdddddddddcffdffdfffffffffffffffffffffffffffff3ff
    cc3ccccccccccccccccccccccccccccbbccccccccc.ccccccccccccccccccccccccccccccbcccbbbbbbddddddddddddddbbbbbbdddddcdddddddddddbcfffffffffffffffffffffffffffffffffff3fc
    cc3ccccccccccccccccccccccccccbbddcbccccbccccccccccccccccccccccccccccccbdbbbbddddbdddddbddddddddddddddddddddddccdddddddddcffffffffffffffffffffffffffffffffffff3ff
    cc3ccccccccccccccccccccccccbbbcddbbcbbbbbccbbcccccccccccccccccccccbbbddddbbdddddbdccddbdddddddddddddddddddddddddddddddbcffffffffffffffffffffcffffffffffffffff3ff
    cc3cccccccccccccccccccccccbddddddbbbbddbbbbdbccccccccccccccccccbcddddddddddbddcbdccbddddddddddddddddddddddddddddddddcbfdfffffffffffffffffffffffffffffffffffff3ff
    cc3ccccccccccccbccccccccbcdddddddddbddddddbbbddbbbbccccccccccccdbdddddddddddbddddddddddddddddddddddddddddddddddddddcfcfffffffffffffffffcbffffffffffffffcfffff3ff
    cc3ccccccccccccccccccfccccbddddddddddddddbcbcdddddbbbcccccbbbcdddddddbdddddddddddddddddddddddddddddddddddddddddddcdffbffffffffffffffffffbffffffffffffcbcfffff3ff
    cc3cccccccccccccccfccffffccbdddddddddddddddbdbddddddcdbcbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffdffcfffffbfffffffffdccffffffffffffffffff3ff
    cc3ccccccccccccffcffcccffffccdddddddddddddcccdddddbdbddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffddfffffffffffffffddfffffffffffffffffff3ff
    cc3ccccfccffffcffffffcdfffffcfddddddddddddbccbddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffffffffdfffffffffcffffffffffffffbfffffffffff3ff
    cc3cccfffffffffffffffffffffcfccddddddddddbdcdddddddddddddddddddddddddddddddddddddddddddddbccbbccbcbbbdbbbdbfffdffffffffffffffffcfffffffffffffddffffffffffffff3ff
    cf3cccffffffffffffffffffffffbcfcdddddddddccbdbdddddddddddddddddddddddddddddddddddddddbddfccccbfcfffffcbcfffcffcffffffffffccfffcffffffffffffffdbffffffffffffff3ff
    fc3ffffffffffffffffffffffffffffbcbbdddddbcbcdbbbcbdbddddddddddddddddddddddddddddddbbccffffffffffffffffcbfffffffffffdffffcfffffffffffffffffffccfffffffffffffff3ff
    ff3ffffffffffffffffffffffffffffcfffcdcfffcbcfcbccfccbddddddddddddddddddddddddddddbbbcfffffffffffffffffffcdbffffffffffffcdfdffffffffffffffffffffffffffffffffff3ff
    ff3fffffffffffffffffffffffffffffffffcffffffdffdfcffffccddddddddddddddddddddddddbdccfffffffffffffffffffffcffffcfffffffffffffffffffffffffffffffffffffffffffffff3ff
    ff3fffffffffffffffffffffffffffdfffffbfbfffffbcfbffffffcccbcbcbdddddddddddddccccffffffffffffffffffffffffffffffffffffffffffcfffffffccffffffffffffffffffffffffff3ff
    ff3fffffffffffffffffffffffffccffffffffffffffdfdcfffffddffcffccccffbdbbbdddcfdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffff3ff
    ff3ffffffffffffffffcffffffffffffffffffffffffffffffffddfcfbfffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3ff
    ff3fffffffffffffffffffffffffffffffffffffffffffcfffffdcfffddffffffffffffffffbffffcbffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcff3ff
    ff3fffffffffffffffffffdfffffffffcfffffffbffffffffffdffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdfffffffffffffffffffffffff3ff
    ff3ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffbffffdfffcddcffffffffffffff3ff
    ff333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333ff
    `)
game.splash("HEllo")
startNextLevel()
game.onUpdateInterval(randint(1000, 5000), function () {
    if (metPannochka == true) {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . c d 5 d c . . . . . 
            . . . b c c d 5 5 5 d c c b . . 
            . . b d d 5 5 5 5 5 5 5 d d b . 
            . . . b c c d 5 5 5 d c c b . . 
            . . . . . . c d 5 d c . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Pannochka, 50, 50)
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . c d 5 d c . . . . . 
            . . . b c c d 5 5 5 d c c b . . 
            . . b d d 5 5 5 5 5 5 5 d d b . 
            . . . b c c d 5 5 5 d c c b . . 
            . . . . . . c d 5 d c . . . . . 
            . . . . . . . c 5 c . . . . . . 
            . . . . . . . c d c . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Pannochka, 0, 50)
    }
})
game.onUpdateInterval(1000, function () {
    if (currentLevel == 1 || currentLevel == 2) {
        Demon1 = sprites.createProjectileFromSide(assets.image`Chort`, 0, 100)
        Demon1.x = randint(5, 155)
        Demon1.setKind(SpriteKind.Enemy)
    }
})
forever(function () {
    music.playMelody("C5 G B A F A C5 B ", 120)
})
