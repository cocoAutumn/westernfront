main.floors.MT121=
{
    "floorId": "MT121",
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
    "defaultGround": "england",
    "bgm": "gaijin3.mp3",
    "firstArrive": [
        {
            "type": "setCurtain",
            "time": 500
        },
        "指挥官阁下，我们的援军和补给已经送来了，是时候解除托布鲁克的包围了。",
        "敌人兵分两路，意军负责围困托布鲁克的守军，德军在外围充当主力。",
        "我们的海空军最近击沉了他们的油船，想必他们现在面临着燃料和补给匮乏的困境。",
        "我们有数量上的优势，敌人的多数坦克又动不了，这将会是一场轻松的战斗。",
        {
            "type": "drawArrow",
            "x1": 368,
            "y1": 240,
            "x2": 208,
            "y2": 176,
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
            "x1": 336,
            "y1": 272,
            "x2": 176,
            "y2": 240,
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
            "x1": 304,
            "y1": 336,
            "x2": 112,
            "y2": 304,
            "style": [
                255,
                0,
                0,
                1
            ],
            "lineWidth": 3
        },
        {
            "type": "sleep",
            "time": 500
        },
        "无需什么特别的策略，“战斧行动”的内容就是从正面向敌人发起猛冲。",
        "我们将一举粉碎托布鲁克的包围圈，同时击溃他们在北非的主力部队。就是现在！",
        {
            "type": "clearMap"
        },
        {
            "type": "changeFloor",
            "floorId": "MT122",
            "loc": [
                7,
                7
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
    [  0,499,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,500,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [547,  0,  0,499,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [547,547,503,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,499,  0],
    [503,  0,507,494,361,  0,  0,  0,  0,  0,  0,  0,  0,  0,584],
    [  0,507,361,362,405,  0,203,  0,244,  0,  0,  0,  0,499,  0],
    [494,361,362,547,  0,  0,  0,  0,  0,  0,494,  0,  0,  0,  0],
    [361,362,405,  0,  0,  0,  0,232,  0,494,  0,507,495,  0,  0],
    [  0,  0,  0,  0,  0,547,  0,  0,390,  0,507,  0,  0,547,  0],
    [  0,  0,  0,  0,  0,  0,232,390,494,507,  0,548,495,  0,  0],
    [  0,  0,  0,  0,203,  0,  0,  0,  0,494,507,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,244,  0,  0,  0,  0,495,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [  0, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [  0,  0,  0, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [  0,  0,  0,  0,491,491,359, 16, 16, 16, 16, 16, 16, 16, 16],
    [  0,  0,491,491,491,491,359,359,359,359,359, 16, 16, 16, 16],
    [  0,491,491,491,491,491,359,359,359,359,  0,  0, 16, 16, 16],
    [491,491,491,491,491,359,359,359,359,  0,  0,  0,  0,  0,  0],
    [491,491,491,491,359,359,359,359,359,  0,  0,  0,  0,  0,  0],
    [491,491,491,359,359,359,359,359,  0,  0,  0,  0,  0,  0,  0],
    [491,491,359,359,359,359,359,359,  0,  0,  0,  0,  0,  0,  0],
    [491,491,359,359,359,359,359,359,  0,  0,  0,  0,  0,  0,  0],
    [491,359,359,359,359,359,359,359,  0,  0,  0,  0,  0,  0,  0],
    [359,359,359,359,359,359,359,  0,  0,  0,  0,  0,  0,  0,  0],
    [359,359,359,359,359,359,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "area": "陆地"
}