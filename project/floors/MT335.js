main.floors.MT335=
{
    "floorId": "MT335",
    "title": "德拉吉尼昂",
    "name": "德拉吉尼昂",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "cao7.mp3",
    "firstArrive": [
        {
            "type": "unloadEquip",
            "pos": 1
        },
        {
            "type": "if",
            "condition": "(!core.hasEquip('baltimore'))",
            "true": [
                {
                    "type": "unloadEquip",
                    "pos": 2
                }
            ]
        },
        {
            "type": "if",
            "condition": "((!core.hasEquip('essex'))||(!core.hasEquip('enterprise')))",
            "true": [
                {
                    "type": "unloadEquip",
                    "pos": 3
                }
            ]
        },
        {
            "type": "playSound",
            "name": "跳跃"
        },
        {
            "type": "jump",
            "from": [
                13,
                14
            ],
            "dxy": [
                0,
                0
            ],
            "time": 50,
            "keep": true
        },
        {
            "type": "animate",
            "name": "vehicleexplore",
            "loc": [
                13,
                13
            ]
        },
        {
            "type": "hide",
            "loc": [
                [
                    13,
                    13
                ]
            ],
            "remove": true,
            "time": 500
        },
        {
            "type": "playSound",
            "name": "跳跃"
        },
        {
            "type": "jump",
            "from": [
                9,
                1
            ],
            "dxy": [
                0,
                0
            ],
            "time": 50,
            "keep": true
        },
        {
            "type": "animate",
            "name": "shoot",
            "loc": [
                9,
                2
            ]
        },
        {
            "type": "hide",
            "loc": [
                [
                    9,
                    2
                ]
            ],
            "remove": true,
            "time": 500
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]与不带显伤的友军空降兵交互，可以获得属性或道具增援（跟西西里岛那时候一样）"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,14": {
            "floorId": "MT333",
            "loc": [
                7,
                0
            ]
        },
        "0,7": {
            "floorId": "MT336",
            "loc": [
                14,
                7
            ]
        },
        "7,0": {
            "floorId": "MT337",
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
    [635,635,265,235, 82,643,152, 91,152,636,152,643,632,632,  0],
    [635,635,519,265,152, 11,152,370,152,550,152, 11,152,152, 82],
    [152,152,152,152,152,643,152, 81,152,266,152,266,152,519,235],
    [550,580,580,235,152,370, 11,663, 11,370,152,643,152,635,635],
    [152,152,152, 82,152,275,152,152,152,608, 81,373,152,635,635],
    [637,637,266,373, 81,608, 81, 11,  0,152,152,152,152,152,152],
    [152,152, 11,152,152,152,643,152,227,152,  0, 81, 11,275,638],
    [ 92,608,265,  0, 11,227,643,152,643,152,275,152,275,228,638],
    [152,152, 81,152,152,152,152,152,643,632,  0,152,152, 81,152],
    [636,636,632,  0,152,636,590,152,152,152, 11,152,250,638,250],
    [152,152,152,250,152,590,  0,373,152,643,250,152,390,244,390],
    [637,581,152,244,152,152,152, 11, 81,643, 81,152,152, 81,152],
    [637,637,152,244,152,218, 11,244,152,152,250,152,  0,270,  0],
    [632,152,152,250,152,  0,152,  0,152,218,275,152,650,389,650],
    [643,643, 81,  0, 81,275,152, 93,152,638,638,152,389,550,389]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}