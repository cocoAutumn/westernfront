main.floors.MT19=
{
    "floorId": "MT19",
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
    "bgm": "gaijin1.mp3",
    "firstArrive": [
        {
            "type": "resumeBgm"
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "drawArrow",
            "x1": 144,
            "y1": 400,
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
            "type": "drawArrow",
            "x1": 240,
            "y1": 400,
            "x2": 240,
            "y2": 120,
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
            "x2": 304,
            "y2": 120,
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
        "指挥官阁下，“发电机计划”已经正式启动，我们必须离开敦刻尔克海滩这个鬼地方，回到英国本土去。",
        {
            "type": "clearMap"
        },
        {
            "type": "show",
            "loc": [
                [
                    4,
                    11
                ],
                [
                    5,
                    9
                ],
                [
                    6,
                    10
                ],
                [
                    7,
                    8
                ],
                [
                    8,
                    9
                ],
                [
                    9,
                    8
                ],
                [
                    10,
                    9
                ]
            ],
            "time": 500
        },
        "我们的船已经成功接走了一部分人。但这超大规模的撤退根本不可能逃得过敌人的侦察。",
        "敌人的空军和潜艇部队已经向我们发起过一轮攻击，但目前我们还架得住。",
        {
            "type": "move",
            "loc": [
                3,
                13
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "rightup:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                4,
                12
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "right:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                2,
                12
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "right:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                3,
                14
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "up:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                5,
                14
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "up:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                7,
                14
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "up:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                10,
                14
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "up:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                12,
                9
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "left:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                12,
                11
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "left:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                12,
                13
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "left:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                10,
                10
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "left:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                10,
                12
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "left:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                11,
                13
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "leftup:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                11,
                11
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "left:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                11,
                9
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "leftdown:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                6,
                13
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "up:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                8,
                13
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "up:1"
            ]
        },
        {
            "type": "waitAsync"
        },
        "但更大的威胁来自敌人的地面部队。他们重新组织起来向我们发起了进攻！",
        "阁下，请尽全力阻挡德国人的坦克。我们数十万人的生命，现在都握在你的手里了！",
        {
            "type": "pauseBgm"
        },
        {
            "type": "changeFloor",
            "floorId": "MT20",
            "loc": [
                7,
                7
            ],
            "direction": "down"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "5,9": {
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
        "4,11": {
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
        "7,8": {
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
        "8,9": {
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
        "9,8": {
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
        "10,9": {
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
    [  0,10179,10235,10232,  0,10250,10242,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,547,565,  0,497,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,497,  0,497,  0,495,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,495,  0,495,  0,495,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,510,  0,510,  0,498,  0,  0,  0,  0],
    [  0,  0,498,  0,500,564,  0,500,  0,499,  0,  0,  0,  0,  0],
    [  0,  0,  0,499,  0,  0,499,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,498,  0,498,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,498,  0,  0,498,  0,498,494,226,  0,207],
    [  0,  0,  0,  0,  0,  0,498,564,  0,  0,494,  0,  0,205,  0],
    [  0,  0,  0,  0,498,494,  0,  0,  0,503,  0,494,226,  0,206],
    [  0,  0,226,  0,503,  0,  0,507,  0,  0,494,  0,  0,205,  0],
    [  0,  0,  0,494,  0,  0,494,  0,494,  0,  0,506,226,  0,207],
    [  0,  0,  0,226,  0,226,  0,226,  0,  0,226,  0,  0,  0,  0]
],
    "bgmap": [
    [492,492,492,492,492,492,492,492,492,492,492, 16, 16, 16, 16],
    [492,492,492,492,492,492,492,492,492,492,492, 16, 16, 16, 16],
    [492,492,492,492,492,492,492,492,492,492,492, 16, 16, 16, 16],
    [492,492,492,492,492,492,492,492,492,492,492, 16, 16, 16, 16],
    [492,492,492,492,492,492, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [492,492, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,359,359,359],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,493,359,359,359],
    [ 16, 16, 16, 16, 16, 16, 16, 16,493,493,493,493,359,359,359],
    [ 16, 16, 16, 16, 16,493,493,493,493,493,493,493,359,359,359],
    [359,359,359,493,493,493,493,493,493,493,493,493,359,359,359],
    [359,359,359,493,493,493,493,493,493,493,493,493,359,359,359],
    [359,359,359,359,359,359,359,359,359,359,359,359,359,359,359]
],
    "fgmap": [

],
    "area": "陆地"
}