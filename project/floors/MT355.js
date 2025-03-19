main.floors.MT355=
{
    "floorId": "MT355",
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
    "defaultGround": "ground6",
    "bgm": "europe3.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,0": [
            {
                "type": "function",
                "function": "function(){\nflags.mission[48][0]=true\n}"
            },
            {
                "type": "if",
                "condition": "(flag:mission48tsk2>=8)",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[48][1]=true\n}"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(flag:友军血量>=200000)",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[48][2]=true\n}"
                    }
                ]
            },
            {
                "type": "setCurtain",
                "color": [
                    0,
                    0,
                    0,
                    1
                ],
                "time": 500,
                "keep": true
            },
            {
                "type": "changeFloor",
                "floorId": "MT356",
                "loc": [
                    -1,
                    -1
                ]
            }
        ]
    },
    "changeFloor": {
        "7,14": {
            "floorId": "MT354",
            "loc": [
                7,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "4,2": [
            {
                "type": "setValue",
                "name": "flag:mission48tsk2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,2": [
            {
                "type": "setValue",
                "name": "flag:mission48tsk2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,13": [
            {
                "type": "setValue",
                "name": "flag:mission48tsk2",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [635,635,140,518,140,341,140, 89,140,341,140, 21, 21, 22, 22],
    [637,637,140,370,140,341,140,  0,140,341,140,140,140,140, 81],
    [380,140,140,  0,376,341,140,374,140,341,376,  0,140,  0,370],
    [  0,378, 82,  0,140,140,140,  0,140,140,140,608,140,370,140],
    [140,140,140,  0,140, 21,369,  0,369, 21,140,370,140,  0,370],
    [518,  0,140,  0,140,140,140,  0,140,140,140, 81,140,140, 81],
    [518,379, 81,  0,608,518,140, 82,140,518,140,  0,  0,  0,  0],
    [518,  0,140,140,140,370, 81,380, 81,372,140,140,140,140, 81],
    [140, 81,140,636,140,518,140, 82,140,518,  0,371,140,  0,518],
    [  0,372,140,636,140,140,140,  0,140,140,140, 81,140,372,140],
    [372,140,140,643,140, 21,369,  0,369, 21,140,  0,140,  0,518],
    [518,  0,140,378,140,140,140,  0,140,140,140,380,140,140, 81],
    [  0,518, 81,  0,  0,  0,140,  0,140,  0,643,643,643,  0,  0],
    [140,140,140,140,140, 82,140,  0,140,376,140,140,140,140,369],
    [635,635,637,638,371,372,140, 93,140,636,636,637,638,140,643]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}