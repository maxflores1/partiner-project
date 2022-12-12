function lives () {
    controller.moveSprite(mySprite, 100, 100)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.startEffect(effects.spray, 1)
    question = game.ask("Is 5 times 20 equal 100 ")
    if (question == true) {
        game.reset()
    }
    if (question == false) {
        game.splash("You Lose")
    }
})
controller.onLightConditionChanged(ControllerLightCondition.Bright, function () {
    scene.setBackgroundColor(9)
})
let question = false
let mySprite: Sprite = null
scene.setBackgroundColor(9)
info.setLife(1)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . 8 8 8 8 8 8 8 8 8 . . . . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    . 8 8 f 8 8 8 8 8 8 8 8 8 8 . . 
    . 8 8 8 8 8 8 8 8 8 8 f 8 8 . . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    . 8 8 8 8 8 8 8 8 8 8 8 f 8 . . 
    . 8 8 8 f 8 8 8 8 8 8 8 f 8 . . 
    . 8 8 8 f f 8 8 8 8 8 f f 8 . . 
    . 8 8 8 8 f f f f f f f 8 8 . . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    . 8 8 . 8 . . 8 8 8 . . 8 8 . . 
    . 8 8 . 8 . . 8 8 8 . . 8 8 . . 
    `, SpriteKind.Player)
let shark = sprites.create(img`
    .............ccfff..............
    ............cddbbf..............
    ...........cddbbf...............
    ..........fccbbcf............ccc
    ....ffffffccccccff.........ccbbc
    ..ffbbbbbbbbbbbbbcfff.....cdbbc.
    ffbbbbbbbbbcbcbbbbcccff..cddbbf.
    fbcbbbbbffbbcbcbbbcccccfffdbbf..
    fbbb1111ff1bcbcbbbcccccccbbbcf..
    .fb11111111bbbbbbcccccccccbccf..
    ..fccc33cc11bbbbccccccccfffbbcf.
    ...fc131c111bbbcccccbdbc...fbbf.
    ....f33c111cbbbfdddddcc.....fbbf
    .....ff1111fbdbbfddcc........fff
    .......cccccfbdbbfc.............
    .............fffff..............
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
shark.setStayInScreen(true)
shark.follow(mySprite, 50)
shark.setPosition(0, randint(scene.screenWidth(), scene.screenHeight()))
lives()
