main.floors.MT128=
{
    "floorId": "MT128",
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
    "bgm": "wot2.mp3",
    "firstArrive": [
        {
            "type": "setCurtain",
            "time": 500
        },
        "指挥官阁下，新一轮行动马上开始。这是本次“十字军行动”的计划。",
        {
            "type": "drawArrow",
            "x1": 240,
            "y1": 432,
            "x2": 48,
            "y2": 368,
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
            "x1": 48,
            "y1": 368,
            "x2": 16,
            "y2": 112,
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
        "我们的一个旅会绕行沙漠内陆，尝试骚扰班加西，以误导敌人。",
        {
            "type": "drawArrow",
            "x1": 304,
            "y1": 144,
            "x2": 144,
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
            "type": "sleep",
            "time": 500
        },
        "第13军以步兵为主要力量，沿海岸朝托布鲁克前进，并解决沿途的防御。",
        {
            "type": "drawArrow",
            "x1": 304,
            "y1": 208,
            "x2": 176,
            "y2": 208,
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
        "第30军以装甲部队为主，他们是此次行动的主力，也是你负责指挥的队伍。",
        "你要做的是突破隆美尔设下的封锁，配合托布鲁克守军向敌人防线施压。",
        "你不必急于冒进，放缓脚步，拖延敌军即可。我们在装甲对战方面不是隆美尔的对手，可他们现在燃料紧缺，这是他们的劣势。",
        "我们的损失要尽可能的少，让敌人多跑一段路，等到他们燃料耗尽，就是我们的主场了。",
        "此外，敌人的空军力量薄弱，我们有着绝对的空中优势。合理利用这一点，或许可以有效应对隆美尔的装甲军团！",
        {
            "type": "clearMap"
        },
        {
            "type": "changeFloor",
            "floorId": "MT129",
            "loc": [
                7,
                8
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [547,361,  0,  0,564,  0,  0,  0,  0,  0,  0,  0,  0,500,  0],
    [361,  0,362,494,547,  0,  0,  0,  0,  0,  0,  0,510,  0,499],
    [  0,361,405,507,494,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [361,  0,363,405,363,362,217,  0,232,494,  0,  0,  0,  0,  0],
    [  0,  0,405,  0,405,  0,  0,232,250,  0,494,  0,495,547,495],
    [  0,  0,  0,  0,  0,  0,217,  0,232,507,  0,  0,  0,565,  0],
    [  0,  0,  0,  0,  0,  0,  0,232,250,  0,494,  0,495,  0,495],
    [  0,  0,  0,  0,  0,  0,217,  0,232,507,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,494,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,494,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,507,494,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,494,  0,507,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,494,507,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [491,491,491, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [491,491,491,  0,  0, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [491,491,491,  0,  0, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [491,491,491,491,491,491,359,359,359,  0,  0,  0,  0,  0,  0],
    [491,491,491,491,491,359,359,359,359,  0,  0,  0,  0,  0,  0],
    [491,491,491,491,491,359,359,359,359,  0,  0,  0,  0,  0,  0],
    [491,491,491,491,491,359,359,359,359,  0,  0,  0,  0,  0,  0],
    [491,491,491,491,491,359,359,359,359,  0,  0,  0,  0,  0,  0],
    [491,491,491,491,491,359,359,359,359,  0,  0,  0,  0,  0,  0],
    [491,491,491,491,359,359,359,359,491,  0,  0,  0,  0,  0,  0],
    [491,491,491,491,359,359,491,491,491,  0,  0,  0,  0,  0,  0],
    [491,491,491,491,491,491,491,491,  0,  0,  0,  0,  0,  0,  0],
    [491,491,491,491,491,491,491,  0,  0,  0,  0,  0,  0,  0,  0],
    [491,491,491,491,491,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "area": "陆地"
}