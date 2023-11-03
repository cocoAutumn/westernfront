main.floors.MT46=
{
    "floorId": "MT46",
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
    "bgm": "wot2.mp3",
    "firstArrive": [
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "animate",
            "name": "explore",
            "loc": [
                7,
                6
            ]
        },
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    6
                ]
            ],
            "remove": true
        },
        {
            "type": "animate",
            "name": "explore",
            "loc": [
                8,
                6
            ]
        },
        {
            "type": "hide",
            "loc": [
                [
                    8,
                    6
                ]
            ],
            "remove": true
        },
        {
            "type": "animate",
            "name": "explore",
            "loc": [
                3,
                7
            ]
        },
        {
            "type": "hide",
            "loc": [
                [
                    3,
                    7
                ]
            ],
            "remove": true
        },
        {
            "type": "sleep",
            "time": 500
        },
        "我们有麻烦了！阁下！",
        "德军不间断的空袭和间谍活动终于对我们造成了损伤，我们前线的几个雷达站无法工作了！",
        "我们仍需要一段时间才能让它们恢复运转，但敌人明显不打算给我们这个机会。",
        {
            "type": "show",
            "loc": [
                [
                    7,
                    9
                ],
                [
                    6,
                    10
                ],
                [
                    8,
                    10
                ],
                [
                    5,
                    11
                ],
                [
                    7,
                    11
                ],
                [
                    9,
                    11
                ],
                [
                    4,
                    12
                ],
                [
                    6,
                    12
                ],
                [
                    8,
                    12
                ],
                [
                    10,
                    12
                ],
                [
                    5,
                    13
                ],
                [
                    9,
                    13
                ]
            ],
            "time": 500
        },
        "失效的雷达让敌机钻了空档，我们没能及时发现这一批次的空袭！",
        "现在，他们马上就要跨过海峡，目标正是我们的机场！",
        "没时间了，立即起飞！预计我们马上就会遭遇空袭！",
        "但愿，我们还能撑过这次劫难……",
        {
            "type": "changeFloor",
            "floorId": "MT47",
            "loc": [
                7,
                7
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,9": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "6,10": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "8,10": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "9,11": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "5,11": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "7,11": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "6,12": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "8,12": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "4,12": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "5,13": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "9,13": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "10,12": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        }
    },
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,495,565,495,  0],
    [  0,495,565,495,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,495,565,495,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,563,563],
    [  0,  0,  0,  0,  0,  0,  0,563,563,  0,  0,  0,  0,  0,  0],
    [563,  0,  0,563,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,205,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,205,  0,205,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,205,  0,382,  0,205,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,383,  0,382,  0,382,  0,383,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,383,  0,  0,  0,383,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [
    [492,492,492,492,492,492,492,492,492,492,492,492,492,492,492],
    [492,492,492,492,492,492,492,492,492,492,492,492,492,492,492],
    [492,492,492,492,492,492,492,492,492,492,492,492,492,492,492],
    [492,492,492,492,492,492,492,492,492,492,492,492,492,492,492],
    [492,492,492,492,492,492,492,492,492,492,492,492,492,492,492],
    [492,492,492,492,492,492,492,492,492,492,492,492,492,492,492],
    [492,492,492,492,492,492,492,492,492,492,492,492, 16, 16, 16],
    [492,492,492,492,492, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]
],
    "fgmap": [

],
    "area": "陆地"
}