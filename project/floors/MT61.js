main.floors.MT61=
{
    "floorId": "MT61",
    "title": "地图",
    "name": "地图",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "wots2.mp3",
    "firstArrive": [
        {
            "type": "setCurtain",
            "time": 500
        },
        "指挥官阁下，这是你今天的护航任务。",
        {
            "type": "drawArrow",
            "x1": 272,
            "y1": 176,
            "x2": 112,
            "y2": 112,
            "style": [
                255,
                0,
                0,
                1
            ],
            "lineWidth": 3
        },
        "一队从美国开来的商船将抵达你所负责的区域，你需要赶往指定海域，完成护航任务的对接。",
        "这支船队规模较大，里面也有很多对我们很重要的物资，请务必保护好他们。",
        "虽然你应该很清楚，但我还是再提醒你一下，尽管位于我们空军的航程之内，你仍要注意防范可能出现的敌人海军。",
        {
            "type": "clearMap"
        },
        {
            "type": "drawArrow",
            "x1": 144,
            "y1": 16,
            "x2": 80,
            "y2": 80,
            "style": [
                255,
                0,
                0,
                1
            ],
            "lineWidth": 3
        },
        {
            "type": "drawArrow",
            "x1": 112,
            "y1": 240,
            "x2": 80,
            "y2": 144,
            "style": [
                255,
                0,
                0,
                1
            ],
            "lineWidth": 3
        },
        {
            "type": "drawArrow",
            "x1": 176,
            "y1": 368,
            "x2": 176,
            "y2": 112,
            "style": [
                255,
                0,
                0,
                1
            ],
            "lineWidth": 3
        },
        "不仅是德国潜艇。意大利也已对我们开战，他们的水面舰队也可能向我们发起攻击。",
        {
            "type": "clearMap"
        },
        "请注意，你的主要任务不是歼灭敌人，而是保护好船队！祝好运！",
        {
            "type": "changeFloor",
            "floorId": "MT62",
            "loc": [
                10,
                9
            ],
            "direction": "down"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  0,  0,216,  0,  0,216,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,565,  0,  0],
    [498,  0,498,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,564,  0,  0,  0,564,  0],
    [498,  0,498,  0,  0,  0,  0,  0,499,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,500,  0,  0,  0,  0,  0],
    [  0,216,  0,  0,  0,  0,  0,  0,499,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,216,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,210,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,210,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,211,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,211,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,492,492,492,492,492],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,492,492,492,492],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16,492, 16,492,492,492,492],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,492, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,492,492, 16, 16,359],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,359,359],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,359,359],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,359],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,359,359,359],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,359,359,359]
],
    "fgmap": [

],
    "area": "陆地"
}