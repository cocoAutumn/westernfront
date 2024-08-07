main.floors.MT119=
{
    "floorId": "MT119",
    "title": "马耳他",
    "name": "马耳他",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X10007",
    "bgm": "bgm5.mp3",
    "firstArrive": [
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]中间这个阵型是不是在哪见过？"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,8": [
            {
                "type": "playSound",
                "name": "开关门"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "7,7": [
            {
                "type": "if",
                "condition": "(blockId:7,7!=='redKey')",
                "true": [
                    {
                        "type": "playSound",
                        "name": "door.mp3"
                    },
                    {
                        "type": "setBlock",
                        "number": "redKey",
                        "loc": [
                            [
                                7,
                                7
                            ]
                        ]
                    }
                ],
                "false": []
            }
        ]
    },
    "changeFloor": {
        "7,14": {
            "floorId": "MT118",
            "loc": [
                7,
                0
            ]
        },
        "7,0": {
            "floorId": "MT120",
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
    [80058,518, 82,530,530, 22,80058, 91,367,  0,248,533,80058, 21, 21],
    [518,534,80058,  0,365,  0,80058,80058,80058,80058, 81,80058,534,534, 21],
    [362,80058,80058,80058, 81,80058,518,361,  0,80058,  0,530,80058,80058,365],
    [  0,  0,361,  0,  0,80058,518,80058,  0,361,530,  0, 81,  0,  0],
    [80058,80058, 81,80058,80058,80058,80058,80058,80058,80058,80058,361,80058,80058,80058],
    [  0,  0,577,  0,80058,570,  0,576,  0, 22,80058,  0, 81,364,  0],
    [361,80058,80058,  0,80058,  0,  0,80058,  0,  0,80058,530,80058,80058,361],
    [532,532,80058,362,80058,207,80058,80058,80058,207,80058,362,80058,  0,  0],
    [80058,80058,534,  0,80058,  0,  0,80058,  0,  0,80058,  0,80058,361,80058],
    [532,532,80058,362,80058, 21,  0,80058,  0, 21,80058,  0,80058,530,530],
    [80058,  0,577,  0,80058,  0,387,  0,387,  0,80058,361,80058,80058,80058],
    [80058,80058, 81,80058,80058,80058,80058, 82,80058,80058,80058,  0,  0, 81,576],
    [534,  0,362,  0,  0,362,  0,  0,362,  0,  0,362,  0,80058, 21],
    [ 81,80058,80058,80058,363,80058,80058,80058,80058,363,80058,80058,80058,80058,569],
    [361,533,533,80058,  0,518,  0, 93,80058,533,533,533,80058,569,569]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}