main.floors.MT272=
{
    "floorId": "MT272",
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
        {
            "type": "animate",
            "name": "shootair",
            "loc": [
                0,
                4
            ]
        },
        {
            "type": "animate",
            "name": "explore",
            "loc": [
                0,
                4
            ]
        },
        {
            "type": "animate",
            "name": "bigexplore",
            "loc": [
                0,
                4
            ]
        },
        {
            "type": "playSound",
            "name": "crash2.mp3"
        },
        {
            "type": "hide",
            "loc": [
                [
                    0,
                    4
                ]
            ],
            "remove": true,
            "time": 500
        },
        "\t[轰炸机飞行员,N622]Damn！干掉后面那个家伙！快啊！",
        {
            "type": "animate",
            "name": "shootair",
            "loc": [
                12,
                5
            ]
        },
        {
            "type": "animate",
            "name": "explore",
            "loc": [
                12,
                5
            ]
        },
        {
            "type": "playSound",
            "name": "crash2.mp3"
        },
        {
            "type": "hide",
            "loc": [
                [
                    12,
                    5
                ]
            ],
            "remove": true,
            "time": 500
        },
        "\t[德军王牌飞行员,fw190a3]就是这样，冲散他们的编队，他们的自卫火力就会稀疏很多。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,14": {
            "floorId": "MT271",
            "loc": [
                7,
                0
            ]
        },
        "7,0": {
            "floorId": "MT273",
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
    [  0,  0,  0,  0,  0,  0,140, 91, 86, 86, 86, 86, 86,  0,  0],
    [140,140,  0,  0,  0,  0,140,  0,140,140,140,140,140,140,  0],
    [  0,140,  0,  0,  0,  0,140,  0,  0,  0,  0,  0,  0,140,  0],
    [  0,140,  0,  0,  0,  0,  0,  0,  0,  0,  0,140,140,140,  0],
    [622,140,  0,  0,  0,  0,  0,  0,  0,  0,  0,140,  0,140,  0],
    [369,140,  0,  0,  0,  0,  0,  0,  0,  0,  0,371,622,140,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140,  0,140,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140,140,140,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140,  0],
    [  0,  0,  0,  0,  0,  0,140,  0,140,140,140,140,140,140,  0],
    [  0,  0,  0,  0,  0,  0,140, 93, 86, 86, 86, 86, 86,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}