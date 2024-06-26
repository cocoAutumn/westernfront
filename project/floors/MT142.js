main.floors.MT142=
{
    "floorId": "MT142",
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
    "bgm": "gaijin1.mp3",
    "firstArrive": [
        {
            "type": "setCurtain",
            "time": 500
        },
        "指挥官阁下，敌人已经开始了行动。",
        {
            "type": "drawArrow",
            "x1": 272,
            "y1": 144,
            "x2": 368,
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
            "x1": 272,
            "y1": 240,
            "x2": 368,
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
            "type": "sleep",
            "time": 500
        },
        "我们的前线防御部队发来报告，就在刚刚，敌人开始向我们的防线发起冲击。",
        "不过，他们的进攻并不顺利。通信兵告诉我们，他们的部队正被困在我们的阵地和雷区里面，战斗已经进入胶着状态。",
        {
            "type": "drawArrow",
            "x1": 464,
            "y1": 240,
            "x2": 336,
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
            "x1": 432,
            "y1": 176,
            "x2": 304,
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
        "现在，带领你的装甲预备队向敌人发起反冲锋，击退他们。",
        "不过，依照我们对隆美尔的了解，他不太可能只派这一支部队进攻我们的防线。战斗期间多加注意，避免进入敌人的圈套。",
        {
            "type": "clearMap"
        },
        {
            "type": "changeFloor",
            "floorId": "MT143",
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,564,  0,  0,361,589, 11,501,550,547,  0,  0],
    [  0,  0,  0,  0,  0,547,  0,361,361,361, 11,501,550,  0,564],
    [  0,382,  0,368,  0,  0,  0,  0,589,361, 11,550,  0,507,547],
    [  0,  0,565,  0,  0,  0,  0,  0,589,361,  0,501,550,  0,  0],
    [547,368,  0,382,  0,  0,  0,  0,232,250,501,550,  0,504,507],
    [  0,  0,368,  0,  0,  0,  0,232,250, 11,550,  0,507,  0,  0],
    [  0,207,565,207,  0,  0,  0,  0,  0,  0,501,550,  0,507,  0],
    [  0,  0,368,  0,  0,408,  0,  0,  0, 11,550,  0,  0,  0,504],
    [  0,  0,  0,  0,  0,  0,408,  0,  0,  0,501,550,  0,507,  0],
    [  0,  0,  0,  0,  0,408,  0,250,  0, 11,550,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,250,  0,  0,  0,501,550,507,  0,504],
    [  0,  0,  0,  0,  0,250,  0,  0,  0,  0, 11,501,550,504,  0]
],
    "bgmap": [
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16,491,491,491,491,492,492,492,492, 16, 16],
    [ 16, 16, 16,491,491,491,491,491,491,492,492,492,492,492, 16],
    [491,491,491,491,491,491,491,491,491,491,492,492,492,492,492],
    [491,491,491,  0,  0,  0,  0,491,491,491,492,492,492,492,492],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,492,492,492,492,492],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,492,492,492,492,492,492],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,492,492,492,492,492,492],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,492,492,492,492,492,492],
    [491,491,491,491,  0,  0,  0,  0,  0,492,492,492,492,492,492],
    [491,491,491,491,491,  0,  0,  0,  0,492,492,492,492,492,492],
    [491,491,491,491,491,491,491,491,491,492,492,492,492,492,492],
    [491,491,491,491,491,491,491,491,491,491,492,492,492,492,492]
],
    "fgmap": [

],
    "area": "陆地"
}