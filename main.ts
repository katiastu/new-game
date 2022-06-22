/**
 * Enemies
 */
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Shiel = 1
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . d d d d d d d d d d . . . 
        . . . d 5 5 d d d d 5 5 d . . . 
        . . e d 6 6 d d d d 6 6 d d . . 
        . . e 3 3 d 5 5 5 5 d 3 3 . . . 
        e e e e e 5 d d d d 5 d . . . . 
        . . e 1 1 1 1 2 2 1 1 1 1 . . . 
        . . e 1 1 1 1 2 2 1 1 1 1 1 . . 
        . . e b . 1 1 1 1 1 1 . b d . . 
        . . e . . f f f f f f . . . . . 
        . . . . 1 f f . . f f . . . . . 
        `)
})
function bossFight () {
	
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (currentLevel != 0) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . b . . . . . . . . 
            . . . . . . b d b . . . . . . . 
            . . . . . . c d c . . . . . . . 
            . . . . . . c 5 c . . . . . . . 
            . . . . . . c 5 c . . . . . . . 
            . . b c c c d 5 d c c c b . . . 
            . b d d 5 5 5 5 5 5 5 d d b . . 
            . . b c c d d 5 d d c c b . . . 
            . . . . . c d 5 d c . . . . . . 
            . . . . . . c 5 c . . . . . . . 
            . . . . . . c 5 c . . . . . . . 
            . . . . . . b 5 b . . . . . . . 
            . . . . . . b 5 b . . . . . . . 
            . . . . . . b d b . . . . . . . 
            . . . . . . . d . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            `, mySprite, 0, -100)
        projectile.startEffect(effects.warmRadial)
    } else {
        startNextLevel()
    }
})
function startNextLevel () {
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    currentLevel += 1
    if (currentLevel == 1) {
        tiles.setCurrentTilemap(tilemap`level1`)
    } else if (currentLevel == 2) {
        tiles.setCurrentTilemap(tilemap`level1`)
    } else if (currentLevel == 3) {
        metPannochka = true
        tiles.setCurrentTilemap(tilemap`level3`)
    } else {
        game.over(true)
    }
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . d d d d d d d d d d . . . 
        . . . d 5 5 d d d d 5 5 d . . . 
        . . d d 6 6 d d d d 6 6 d d . . 
        . . . 3 3 d 5 5 5 5 d 3 3 . . . 
        . . . . d 5 d d d d 5 d . . . . 
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
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    Shiel = 0
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . d d d d d d d d d d . . . 
        . . . d 5 5 d d d d 5 5 d . . . 
        . . d d 6 6 d d d d 6 6 d d . . 
        . . . 3 3 d 5 5 5 5 d 3 3 . . . 
        . . . . d 5 d d d d 5 d . . . . 
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
    if (Shiel == 0) {
        info.changeLifeBy(-1)
        otherSprite.destroy(effects.ashes, 500)
    }
})
let projectile2: Sprite = null
let Demon1: Sprite = null
let metPannochka = false
let projectile: Sprite = null
let mySprite: Sprite = null
let Shiel = 0
let currentLevel = 0
currentLevel = 0
scene.setBackgroundImage(img`
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccc22ccc2ccccc2cccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccc2cccccc22ccc22cccc2ccccc2cccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccc22cccc22cccc22cccc2ccc222cccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccc22cccc22cccc22cccc2ccc2c2cccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccc222ccc2ccccc22cccc2ccc22ccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccffcccccccccccccccccccccccccccccccccccccccc22ccc2ccccc22cccc2ccc22ccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccc22cc22ccccc22cccc2cc22cccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffccccccccccccccccccccccccccccccccccccccccccc22c22ccccc22cccc22c22cccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccfffccccccccccccccccccccccccccccccccccccccccccccc2222cccccc22cccc22c22cccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccffffccccccccccccccccccccccccccccccccccccccccccccc2222cccccc22cccc22c2ccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccfccffccccccccccccccccccccccccccccccccccccccccccccc2222cccccc22ccccc222ccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccc222ccccccc22cccccc22ccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccc222ccccccc22cccccc2cccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccc22cccccccccccccccc2cccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2cccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22ccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22cccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22cccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccddccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22cccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddccccccccccccccccccccccccccccccccccccccccccccccccccccccc22ccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccdcddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddcc.ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccc.ddddddcc.ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddccd.cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccc.ccddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccc.dddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccdcccddddddddddccccdcccccccccccccccccccccccccccccccccccc....cccccccccccccccccccccccccccccffffffffffffffffffffff
    cccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddcccdcccccccccccccccccccccccccccccccccccccccccccccccccccccc...ffffffffffbbbbbbbf.ff.............
    ccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddccc.cccccccccccccccccccccccccccccccccccccccccccccccccccfffffffff..bbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddccc.cccccccccccccccccccffffffcccccccccccccccccccccccffff..ccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddc..fcccccccccffffffff......cccccccccccccccccccc.ffff.bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddffddddddfffffffffffff..............ccccccccccccccccc...ffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffdfff...............................fccccccccccc....f.bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccfccffffffffffffffffffffffdf..ddd................................fccccccccccc..bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbb
    ccccccccccccccccccccccccccccccccccfffffffffffd....ffdffffd.fd...ddd................................ffccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbffbbbbbbbbbbbbbbbbb
    ccccccccccccccccccccccccccccccccccc.fff..dddddd...ffdd.ffdfdd.d..ddf..d.............................fccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbffbbbbbfbbbbbbfffbbb
    cccccccccccccccccccccccccccccccccccff...ddddddddddf.dd.ffdddd.d..ddf..d.............................fcccccc.bbbbbbbbbbbbbbbbbbbbbbbbbbffffffbbbffffffffbffbfffbb
    cccccccccccccccccccccccccccccccccccff...ddddddddddf.dd...dddd.d..ddd..d.............................ff......bbbbbbbbbbbbbbbb..bbbbfbbffbbfbbbffbbffbbfff6fffbbbb
    cccccccccccccccccccccccccccccccccc.f.f..ddddddddddf..dd..dddd.d..ddd..dd.............................ff.....bbbbbbbbbbbbb.bbbbfbbfbbffbbfbb6666bf66fff666f6bb66b
    cccccccccccccccccccccccccccccccccf.f.f..ddddddddddd..dd..dddd.d..ddd..dd.............................fffffffbbbbb666bb.f..bbbbfbffbfff6f.666666b6fbff66666666666
    cccccccccccccccccccccccccccccccccfff.f..ddddddddddd..dd..dddd.d..ddd..dd..............................f.....bbbb6bb66ff66.bbbfbffbfbf6666f6b66f66666666666666666
    cccccccccccccccccccccccccccccccccffff.f.dddddddddddd..d..dddd.d..dd.d..d...........................fffffffffbbb6bb66666f66bbbfffbfff6666f66666666666666666666...
    cccccccccccccccccccccccccccccccccffff.f.dddddddddddd..d..ddd.ddffdd.d..d..............................ff......6..66.6..6f6bbffbffbfb666666666666f666666..ff.....
    ccccccccccccccccccccccccccccccccc.fff.f.dddddddddddd..d.fdfdfddd.dd.d..d..............................ff......6.66.6.66..6666fff66666b66c666f66f66..fffffff.....
    ccccccccccccccccccccccccccccccccc.ff.f.fdddddddddddddddddddddddd.dd.d..d.....dd........................ff......66.6.6.6.66fb6ff6b6b6666c6666b6b6f6ff.....ffffff.
    ..........ccccccccccccccccccccccc.f..f..dddddddddddddddddddddddd.dd.d..dd...d.d.........................f.....66.6.6.6..6.fb6f6bf666b6ff6b6bb6666..........f....
    .........fccccccccccccccccccccccc.f..f..dddddddddddddddddddddddd.dd.d..dd...d.d.........................f....66.666.6..6..bb66bbb66bf6b.b6bb6b6.....6666........
    ...ffffff.ccccccccccccccccccccccc.f..f..dddddddddddddddddddddddd.dd.d..dd...d.d..........................f..6.6666.6..6...b66bbb66bb6bbb6b6666b..666.66.........
    ............6....66ff6f.ffcccccffff..f..fddddddddddddddddddddddd.dd..d.dd...d.d..........................f..6666.66...6....6bbb66bb6bbb666b6bbb66..66...........
    .......6....6.6..6..66.f6fffffffffff.f..fddddddddddddddddddddddd.dd..d.d.d..dd...........................f..6.6666...6....6bbb66bb6bbb66bb6b666..66.............
    .......6...666...6..6..6...6...6.f......f.dddddddddddddddddddddd.dd..d.d.d..dd...........................ff..6666...6....6.bb66bbb6bb66b6666b..66.ff.f..........
    .....666..6666..66.6..6.6..6..6.6f.......fdddddddddddddddddddddd.dd...dd..d.dd............................f.66.6...66...66.b66bbb6bb6bb666bbf66...ffff.6666.....
    ....66.6..6.6...6..6.6.66.66.666ff.......fdddddddddddddddddddddd.dd...dd..dd.d............................f66.6....6...66..66bbbb666b666bbb66ff....6666...6.....
    ...6.6.6..66...6..6.6.6.666.6666f........fdddddddddddddddddddddddd....dd...d.d............................66.66...6...66..6..bbb66666b6bb66....ff66f.....6......
    ...66.6..666..6..6.66.66.6.6666ff........fdddddddddddddddddddddddd.....d...d..............................6f.6...6....6..6....bb666b66b66bb..6666......66.......
    ..6.6.6.666...6..666.66.6.6666.ff........fdddddddddddddddddddddddd.........................................f6...6....6..6.....666..6b66bb6666.......666.........
    ..66.6..666..6..6.6..6.6666666.ff........fddddddddddddddddddddddd...........................................ff.6ff..66.6.....666..6.6b666b........66............
    .6.6.6.666...6.6666.66.66f666fffff.......fddddddddddddddddddddddd...........................................fffff..66.6....666.f666666bbbb.....666..............
    .66.6..666..6..6.6.66.66666...ff..ffff....ddddddddddddddddddddddd.....................................fffffffff...66.6....666.66f66..bbbbb..666.................
    .6..6..66..66.666666666.......ff..........ddddddddddddddddddddddd.................................ffff...fffffff.66.6....66666.......bbbb666....................
    .6..6.666..6.66.666...........ff..........dddddddddddddddddd...............................fffffff.........fffff...6....6666...........66................666666.
    ...6..66..66.66666............fffffff.....dddddddddddddddddd.......................ffffffff...............ffffff.......666............6.......66666666666.....66
    ...6..66.66.66f66............ffffffffff...dddddddddddddddddd..................fffff..ff.......ffffffffffff.fdddddd....6....fffff.....666666666.............666..
    ...6.66..6666f6............ff.fffffffffffffddddddddddddddddd.............fffff...f.fffffffffffff.........ddddddddddddffffff..............................66.....
    ...6.66..6f666.............f.fff..ff...ffff.......ddddd............ffffffffffffffff..fffdddddddddddddddddddddfffffddd.......c.........................666.......
    ..6.666.666.6...............ffffffffffff..f.......ddddd.....ffffffffffff.........ff..fff....ddddddddd......ffddddd.........c.cc.cc.c...............666..........
    ..6.666f66................fffffffffffffff.ff.....ffffffffffffff.........ddddd....ff..fff...............ddddddffffff........c.ccc.c.c............666.............
    ..6.6666..............fffffffffffffffffffffffffffff.ffd......ddddddddddddddddd.dddddddddd.....ddddddddd.fffffff..fff...c...c.ccc.c.c..........66................
    f.666.6......................ff............ff.f.ffff..d...dddddddddd.d...ddddddddd...fff.ddddd........ff.ffffffff......cc..c.ccc.c.cccc.....66..................
    f.66.........................ff.....dd.....f.fff.....d.dddd..ddd...dd.dddddddd.......ff...............fffffffffff......cc..c.ccc.c1cccc...66....................
    ff66.........................fdd...d.d...fffff......dddd..dddddddddddddddd.................................ffffffffffffccf.c.c.c.cccccc.66......................
    ..6.......................fffddd.dd..dfff...dd....dddddddddddddddddddddd....ddd.........................fffff.....ffc6cccfcc.c.c.1cccc66............666.........
    ...ff.......................dfdfd...d.....ddddddddddddddddddddddddddd...dddddd........fff.....ffffffffffff.f.....6cf66cccfccfc.c.1cc66...........666.6..........
    ...ff..................ff.fd.dddfffdfffffddddf......ddddddddddd.dd.......dd..............fffff....ffff....ff...cc6cc66ccc.cc.c.c.666cc......66666..66...........
    ..fff.....f...f.....fff.f.fddd....d..ffdddd..f.ddddddd...dd...dd.......dd...............c....fffff.c....cffffcccc6c.66ccc.cccc.661cccc..6666....666.............
    ..fff.....ff..ff..f.fff.f.ddd..ddd...dddddddddd..ddd..........d......ddffff..........fffcfffffffffcccfffcff..cccc6c.66cccc.c.c.6c1cccc66......66................
    ..fff.....f.f.ff..f.fff..fd.ddd..dddddddddddddddd..............dddddd..fffffffffffffffccccfffffffccf6fcfc...ccccc6.c66.ccc.c.c6cc.cc66.....666..................
    ..f.f...6.f.f.ff..fffff.f..ddd...............f...............fffffffffffffffffffffffff6cccffffc.c.c.6.ccc...ccc6.6.666..cc.c.c666666...6666.....................
    ....f...6.f.f.f.f.f.ffff...d.................f....ffffffffffffffffffffffffffffffffc.c.6ccc.cfcc.c.c.6.ccc..c.c66f6.6.6..c..ccccfcfcc666.........................
    cccccccc6.f.f.f.f.f.fff.fff..f...............f.fffffffff....ffcfffcfffcfff.....cc.c.cc6cccccfcc.c.c.6f6ccccffc66f6..6..f..ffccc.c666............................
    cccccccc66f..ff..ff.ff.....fff...............fffffff.ffccfffffc...cc..c...c....cccc.cc6cccccfccfcfcf616ccc..cc66.6..6fffff...6666cc.............................
    cccccccc66f..fffffff6ff.....ffffff.........ffffffffffffcc..c..cc.fc.c.c...c..c.ccccfcc6ccc6cfcc.c6c.6c6c.c..cf666ff66..f.6666...c...............................
    cccccccc6cccccf.....66.fffffff6...ff6...ffffff..f.fc..fcc..cc.ccf.c.c.c...cffcfcccc6cc6ccc6cfcc.c6c66c6cfcfff.6.6..666666f.................ff...................
    cccccccc6cccccc.....66........66f..66...6ccccccccccc.cfcc.c.c.cc.fcfccccccc..c.cccc6cc6ccc6ccffcc6c66.6c.c....66666....fff.................ff...................
    ccccccccccccccc.....6.6.......66f..66...6ccccccccccc.cfcc.cfccfcffcfcccccccffcfcccc66c6ccc6cc..cc6c66.6c.c.6666........fff..................ff..................
    ccccccccccccccc...6.6.6.......66ff.66..c6ccccccccccfcccccfc.ccfc.fc.ccfcc.c..cc.ccc66c6c6c66c..c.6c6666..66..66........fff..................ff..................
    cccccccccccccccccc6c6cc6......66ff.66..66cccccccccc.cfcccc..cc.cfc..cccccccccccccccc6c6cc666cccc.6c666666..............fff..................ff..................
    cccccccccccccccccc666cc6cccc..66ff.66.c666ccccccccc.f.cccc..fccccccccccccccccccccccc6c6cc66666cc666666.................fff...................f.....6666.........
    cccccccccccccccccc6c6ccc6ccccc6.6f.66.c666cccccccccff.ccc....ccccccccccccccccccccccc666cc66666666c6666.................fff................cccccccc66ccccccc.....
    cccccccccccccccc66cc6ccc6ccccc6c6f.66cc666ccccccccc...cc.....cccccccccccccccccccccc6666c6666c66c6c66.6.6666666.........fff........ccccccccccccc666ccccccccc.....
    cccccccccccccccc66cc6ccc6cccc6cc6c.66cc666ccccccccc....c.....ccccccccccccccccccccc666666666666666666666ccccccc6666666666cccccccccccccccccc66666cccccccccccc.....
    cccccccccccc666c66cc66cc66ccc6cc6cc66cc66ccccccccc...........cccccccccccccccc6666666cc6cccc6c6c6cccccccccccccccccccccccc666666666666666666ccccccccccccccccc.....
    cccccccccccc666c66cc66cc66cc6ccc6cc66cc66ccccccc.........ccccccccccccccccccc6c666ccccc6ccccc66ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.....
    cccccccccccc66c6c6cc66ccc6cc6ccc6cc666c66ccccccccccccccccccccccccccccccccc6666cccccccc6ccccc66cccccccccccccccccccccccccccccccccccccccccccccccccccccccc..........
    ccccccccccccccc6.6ccc6ccccc6cccc6c6cc6cccccccccccccccccccccccccccccccccccccccc.........ccccc6ccccccccccccccccccccccccccccccccccccccccccc.....f..f...............
    cccccccccccccc.6ccccc6cccccccccc6c6cccccccccccccccccccccccccccccccccccc...............cccccc6ccccccccccccccccccccccccccccccccccc.............f.f................
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...f.f................
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc...............
    ccccccccccccccccccccccccccccccccccccc.cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc..........
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc..........
    ccccccccccccccccccccccccccccccccccccccccc.....cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc....cccccccccccccccccccccccccccccccccccccc..........
    ..ccccccccccccccccccccccccccccccccccccccccccc.ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc.............ff.......ccccccccccccccccccccccc..........
    ......cccccccccccc.....cccccccccccccccccccccc....................cccccccccccccccccccccccccccccccccccccccc.............f.....................cccccccccc..........
    ......ccccccccccc.........ccccccccccccccccccc.........................................................................f.........................................
    `)
game.onUpdateInterval(randint(1000, 5000), function () {
    if (metPannochka == true) {
        let Pannochka: Sprite = null
        projectile2 = sprites.createProjectileFromSprite(assets.image`Chort`, Pannochka, 50, 50)
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
