main.floors.MT53=
{
    "floorId": "MT53",
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
    "bgm": "gaijin3.mp3",
    "firstArrive": [
        {
            "type": "setCurtain",
            "time": 500
        },
        "指挥官阁下，我们是时候向敌人发起清算了！",
        "之前的几天内，我们都在以小规模袭击迷惑敌人，但今天，我们将拿出全部的实力！",
        {
            "type": "drawArrow",
            "x1": 368,
            "y1": 336,
            "x2": 368,
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
            "type": "sleep",
            "time": 500
        },
        "我们的雷达站探测到了今天这批向伦敦发起袭击的德国佬，正巧，这也是迄今规模最大的一次空袭。",
        {
            "type": "clearMap"
        },
        {
            "type": "drawArrow",
            "x1": 176,
            "y1": 240,
            "x2": 368,
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
            "x1": 464,
            "y1": 240,
            "x2": 368,
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
            "x1": 464,
            "y1": 48,
            "x2": 368,
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
            "x1": 304,
            "y1": 48,
            "x2": 368,
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
            "x1": 144,
            "y1": 80,
            "x2": 368,
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
            "type": "sleep",
            "time": 500
        },
        "伦敦周围所有航程之内的战斗机都会参与到这次行动当中，他们将统一接受你的指挥！伦敦市区的高射炮也会与你们一起阻击敌人！",
        "我们调查过，德国佬的ME109战斗机受到航程限制，只能在目标空域滞留10分钟。这无疑给了我们绝佳的猎杀机会！",
        "放开手脚，冲进敌机群里大闹一番吧！今天的胜利必将属于我们！",
        "天佑女王！",
        {
            "type": "clearMap"
        },
        {
            "type": "changeFloor",
            "floorId": "MT54",
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,495,565,495,  0,  0,495,565],
    [  0,  0,  0,495,565,495,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,547,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,495,565,495,  0,  0,  0,  0,  0,  0,495,565],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,563,563,  0,205,  0,205,563,205,  0,205,  0,205],
    [  0,  0,  0,  0,  0,  0,  0,205,  0,382,  0,382,  0,205,563],
    [  0,  0,  0,  0,  0,  0,382,  0,382,  0,382,  0,382,  0,382],
    [  0,  0,  0,  0,  0,  0,  0,382,  0,382,  0,382,  0,382,  0],
    [  0,  0,  0,  0,  0,  0,383,  0,383,  0,383,  0,383,  0,383]
],
    "bgmap": [
    [492,492,492,492,492,492,492,492,492,492,492,492,492,492,492],
    [492,492,492,492,492,492,492,492,492,492,492,492,492,492,492],
    [492,492,492,492,492,492,492,492,492,492,492,492,492,492,492],
    [492,492,492,492,492,492,492,492,492,492,492,492,492,492,492],
    [492,492,492,492,492,492,492,492,492,492,492,492,492,492,492],
    [492,492,492,492,492,492,492,492,492,492,492,492,492,492,492],
    [492,492,492,492,492,492,492,492,492,492,492,492,492,492,492],
    [492,492,492,492,492,492,492,492,492,492,492,492,492,492,492],
    [492,492,492,492,492,492,492,492,492,492,492,492,492,492,492],
    [ 16, 16,492,492,492,492,492,492,492,492,492,492,492,492,492],
    [ 16,492,492,492,492,492,492,492,492,492,492, 16,492,492,492],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,492],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,574,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "area": "陆地"
}