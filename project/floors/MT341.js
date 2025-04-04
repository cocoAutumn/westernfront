main.floors.MT341=
{
    "floorId": "MT341",
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
    "bgm": "gaijin2.mp3",
    "firstArrive": [
        {
            "type": "setCurtain",
            "time": 500
        },
        "指挥官阁下，我们已经在欧洲站稳脚跟，现在是扩大战果的时候了。",
        "我们已经完成了兵力集结，现在开始全线推进，以最快的速度清扫法国全境的德军。",
        {
            "type": "drawArrow",
            "x1": 176,
            "y1": 272,
            "x2": 240,
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
            "type": "drawArrow",
            "x1": 208,
            "y1": 368,
            "x2": 304,
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
            "x1": 336,
            "y1": 432,
            "x2": 432,
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
            "type": "sleep",
            "time": 500
        },
        "我们的兵力数量占优势，还有大量空军掩护。敌人大多都是残兵败将，士气低沉，空中力量也几乎消耗殆尽。",
        "不过，你最好还是注意对空搜索，让战斗机时刻巡逻。因为敌人已经开始使用V1导弹轰炸英国本土，这也就表明，我们现在就在他们的打击范围内，仍然有遭受轰炸的风险。",
        "我们尚且不知道这种武器能不能对我们的地面行军造成实质威胁，但也不能掉以轻心。",
        {
            "type": "clearMap"
        },
        {
            "type": "changeFloor",
            "floorId": "MT342",
            "loc": [
                7,
                12
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,203,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,203,547,203],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,203,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,370,  0,370,203,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,203,  0,565,  0,  0,203],
    [  0,  0,  0,  0,  0,  0,218,547,218,  0,370,  0,370,  0,  0],
    [  0,  0,  0,  0,550,250,227,  0,  0,  0,  0,547,  0,203,547],
    [  0,  0,  0,  0,549,550,250,  0,218,203,  0,  0,  0,  0,  0],
    [  0,  0,  0,504,  0,550,250,227,  0,  0,218,  0,370,  0,370],
    [  0,  0,  0,  0,549,550,250,  0,250,227,  0,  0,  0,565,  0],
    [  0,  0,  0,504,  0,  0,550,250,550,250,547,218,370,  0,370],
    [  0,547,  0,  0,  0,549,  0,550,  0,550,250,227,  0,218,  0],
    [573,573,  0,  0,504,  0,549,  0,549,  0,550,250,  0,227,218],
    [565,573,  0,504,  0,  0,  0,504,  0,549,  0,550,250,227,  0]
],
    "bgmap": [
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,  0,  0],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,  0,  0,  0],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,  0,  0,  0,  0],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16,  0,  0,  0,  0,  0,  0],
    [ 16, 16, 16, 16, 16, 16, 16, 16,  0,  0,  0,  0,  0,  0,  0],
    [ 16, 16, 16, 16, 16, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [ 16, 16, 16, 16, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [ 16, 16, 16, 16,492,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [ 16, 16, 16,492,492,492,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [ 16, 16,492,492,492,492,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [ 16,492,492,492,492,492,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [492,492,492,492,492,492,492,  0,492,  0,  0,  0,  0,  0,  0],
    [492,492,492,492,492,492,492,492,492,492,  0,  0,  0,  0,  0],
    [492,492,492,492,492,492,492,492,492,492,492,  0,  0,  0,  0],
    [492,492,492,492,492,492,492,492,492,492,492,492,  0,  0,  0]
],
    "fgmap": [

],
    "area": "陆地"
}