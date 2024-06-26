main.floors.MT170=
{
    "floorId": "MT170",
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
    "defaultGround": "ground6",
    "bgm": "europe6.mp3",
    "firstArrive": [
        {
            "type": "setCurtain",
            "time": 500
        },
        "指挥官阁下，敌人开始行动了！",
        {
            "type": "drawArrow",
            "x1": 208,
            "y1": 400,
            "x2": 240,
            "y2": 336,
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
            "y1": 304,
            "x2": 240,
            "y2": 272,
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
            "x1": 144,
            "y1": 208,
            "x2": 208,
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
            "type": "animate",
            "name": "zone",
            "loc": [
                7,
                8
            ]
        },
        {
            "type": "sleep",
            "time": 500
        },
        "隆美尔应该是不想等到我们完善防线，他们迅速组织部队发起了一次进攻。",
        "德意联军分工明确，在炮兵和空军的配合下，集中兵力向防线的一处发起冲击，不过以目前的形势，我们还能勉强挡住。",
        {
            "type": "drawArrow",
            "x1": 272,
            "y1": 240,
            "x2": 240,
            "y2": 272,
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
            "y1": 272,
            "x2": 240,
            "y2": 336,
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
            "y1": 464,
            "x2": 208,
            "y2": 400,
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
            "y1": 400,
            "x2": 208,
            "y2": 400,
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
            "y1": 336,
            "x2": 208,
            "y2": 336,
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
        "奥金莱克将军已经命令各个装甲部队主动出击，阻击德意联军的攻势。",
        "指挥官阁下，你负责的装甲旅是整场战斗的核心，你将与隆美尔的主力装甲部队展开正面对决！",
        "虽然我们有绝对的数量优势，但对面毕竟是那位“沙漠之狐”，绝不可掉以轻心！",
        {
            "type": "clearMap"
        },
        "出发吧，祝好运！",
        {
            "type": "changeFloor",
            "floorId": "MT171",
            "loc": [
                7,
                13
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [564,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [547,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,578,  0,  0,405,362,501,  0,564,  0,  0,  0,  0,  0,  0],
    [565,  0,  0,  0,405,362,550,504,  0,  0,573,  0,497,  0,  0],
    [  0,578,  0,  0,405,362,501,  0,507,  0,  0,565,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,550,501,  0,507,573,  0,497,  0,  0],
    [  0,  0,  0,  0,  0,232,250,550,504,  0,  0,  0,  0,547,  0],
    [  0,  0,  0,  0,  0,  0,250,501,550,  0,507,  0,573,  0,497],
    [382,  0,369,  0,  0,232,  0,250,550,504,  0,  0,  0,565,  0],
    [  0,565,  0,  0,  0,  0,232,  0,501,  0,507,  0,573,  0,497],
    [382,  0,369,  0,  0,  0,  0,250,550,504,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,232,250,501,  0,507,  0,  0,  0,  0]
],
    "bgmap": [
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [491,491, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [491,491,491, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [491,491,491,491,491,491,492,492, 16, 16, 16, 16, 16, 16, 16],
    [491,491,491,491,491,491,492,492,492,492,492,492,492, 16, 16],
    [491,491,491,491,491,491,492,492,492,492,492,492,492,492,492],
    [491,491,491,491,  0,  0,492,492,492,492,492,492,492,492,492],
    [491,491,  0,  0,  0,  0,  0,492,492,492,492,492,492,492,492],
    [  0,  0,  0,  0,  0,  0,  0,492,492,492,492,492,492,492,492],
    [  0,  0,  0,  0,  0,  0,  0,  0,492,492,492,492,492,492,492],
    [  0,  0,  0,  0,  0,  0,  0,  0,492,492,492,492,492,492,492],
    [  0,  0,  0,  0,  0,  0,  0,  0,492,492,492,492,492,492,492],
    [  0,  0,  0,  0,  0,  0,  0,  0,492,492,492,492,492,492,492]
],
    "fgmap": [

],
    "area": "陆地"
}