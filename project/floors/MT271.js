main.floors.MT271=
{
    "floorId": "MT271",
    "title": "德国",
    "name": "德国",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "sky.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "europe6.mp3",
    "firstArrive": [
        "\t[护航战斗机中队队长,N573]呼叫第八航空队，我们的燃料见底了，现在必须返航。接下来靠你们自己了。",
        {
            "type": "unloadEquip",
            "pos": 4
        },
        {
            "type": "unloadEquip",
            "pos": 5
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]护航战斗机撤退，敌人的攻击更加肆无忌惮。全体敌人攻击力提升80%！",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]之后的战斗会非常艰难。如果实在打不过，可以考虑走旁边的安全通道直接通关。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,14": {
            "floorId": "MT270",
            "loc": [
                7,
                0
            ]
        },
        "7,0": {
            "floorId": "MT272",
            "loc": [
                7,
                14
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  0,  0,  0,  0,  0,  0,  0, 91, 86, 86, 86, 86, 86,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,140,140,140,140,140,140,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,140,140,140,140,140,140,  0],
    [  0,  0,  0,  0,  0,  0,  0, 93, 86, 86, 86, 86, 86,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}