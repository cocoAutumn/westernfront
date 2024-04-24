main.floors.MT120=
{
    "floorId": "MT120",
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
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,14": {
            "floorId": "MT119",
            "loc": [
                7,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT120_7_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT120_7_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT120_7_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT120_7_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT120_7_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT120_7_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT120_7_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,10": [
            {
                "type": "setValue",
                "name": "flag:door_MT120_7_8",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "7,8": {
            "0": {
                "condition": "flag:door_MT120_7_8==8",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT120_7_8",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [387, 21, 21, 22,80058,  0,361,  0,361,  0,80058, 22, 21, 21,387],
    [ 81,80058,80058,80058,80058,  0,80058, 82,80058,  0,80058,80058,80058,80058, 81],
    [528,528,  0,  0,381,  0,80058,588,80058,  0,381,  0,  0,528,528],
    [80058,80058, 81,80058,80058,80058,80058,80058,80058,80058,80058,80058, 81,80058,80058],
    [526,  0,363,80058,568,  0,  0,520,  0,  0,568,80058,363,  0,  0],
    [  0,80058,80058,80058,  0,362,80058,366,80058,362,  0,80058,80058,80058,  0],
    [577, 81,363,80058,  0,80058,80058,80058,80058,80058,  0,80058,363, 81,577],
    [527,80058,  0,80058,520,365,80058, 89,80058,365,520,80058,  0,80058,527],
    [527,80058,361,80058,  0,80058,80058, 85,80058,80058,  0,80058,361,80058,527],
    [80058,80058,  0,80058,  0,362,80058,367,80058,362,  0,80058,  0,80058,80058],
    [525,80058,  0,80058,568,  0,  0,361,  0,  0,568,80058,  0,80058,525],
    [525,80058,363,80058,80058,80058,80058, 83,80058,80058,80058,80058,363,80058,525],
    [207, 81,  0,  0,  0,  0,362,  0,362,  0,  0,  0,  0, 81,207],
    [  0,80058,80058,80058, 81,80058,80058,  0,80058,80058, 81,80058,80058,80058,  0],
    [  0,80058, 21, 21,576,529,80058, 93,80058,529,576, 21, 21,80058,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}