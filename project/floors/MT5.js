main.floors.MT5=
{
    "floorId": "MT5",
    "title": "马奇诺防线",
    "name": "马奇诺防线",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "firstArrive": [
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[重要消息]\r[red]荷兰  投降！"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "0,7": {
            "floorId": "MT4",
            "loc": [
                14,
                7
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "11,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT5_12_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "12,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT5_12_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "13,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT5_12_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT5_12_10",
                "operator": "+=",
                "value": "1"
            }
        ],
        "12,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT5_12_10",
                "operator": "+=",
                "value": "1"
            }
        ],
        "13,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT5_12_10",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "12,4": {
            "0": {
                "condition": "flag:door_MT5_12_4==3",
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
                        "name": "flag:door_MT5_12_4",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "12,10": {
            "0": {
                "condition": "flag:door_MT5_12_10==3",
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
                        "name": "flag:door_MT5_12_10",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "13,7": {
            "0": {
                "condition": "!core.hasEnemyLeft(undefined,['MT1','MT2','MT3','MT4','MT5'])",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor",
                        "loc": [
                            13,
                            7
                        ],
                        "floorId": "MT5"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 27, 27,  2, 29, 29,  2,250, 21, 21, 22,  2,  2,  2,  2,  2],
    [518,205,  2,  2,254,  2, 81,  2,  2,  2,  2,  2,  2,  2,  2],
    [205,244, 82,  0, 30, 30,  0,  2, 21, 22,109,109,109,109,109],
    [518,205,  2,  2,  2, 81,  2,  2, 21, 21,109, 34,347, 34,109],
    [ 27, 27,  2,  0,217,  0,  0, 81,265,  0,109,109, 85,109,109],
    [  2,  2,  2,203,  2, 21,  2,  2,  2,  2,109,401,250,401,109],
    [ 28, 21,  2, 28,  2,  0,254,  0,250,  0,109,109, 86,109,109],
    [ 92,201, 81,201,  2,  2,  2,  2,  2, 21, 83,201, 33, 85, 89],
    [ 28, 21,  2, 28,  2,265, 81,  0,250,  0,109,109, 86,109,109],
    [  2,  2,  2,203,  2,  0,  2,  2,  2,  2,109,401,250,401,109],
    [  0,254,  0,  0, 81,  0,  2, 31,  2, 30,109,109, 85,109,109],
    [ 29,  2, 30,  2,  2,  0,254, 29,204, 28,109, 34,347, 34,109],
    [ 81,  2,  2,345,  2,  2,  2, 82,  2,  2,109,109,109,109,109],
    [204,  0,217,345,  2, 27,205,244,205, 27,  2,  2,  2,  2,  2],
    [  2, 30,  2,345,  2, 27,518,205,518, 27,  2,  2,  2,  2,  2]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "7days4.mp3",
    "area": "陆地"
}