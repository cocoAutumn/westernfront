main.floors.MT15=
{
    "floorId": "MT15",
    "title": "阿拉斯",
    "name": "阿拉斯",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass3",
    "bgm": "allthis.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "13,13": [
            {
                "type": "playSound",
                "name": "technology.mp3"
            },
            "\t[系统提示]习得新技能："
        ]
    },
    "changeFloor": {
        "7,0": {
            "floorId": "MT14",
            "loc": [
                7,
                14
            ]
        },
        "7,14": {
            "floorId": "MT16",
            "loc": [
                7,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "0,12": [
            {
                "type": "setValue",
                "name": "flag:door_MT15_13_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,12": [
            {
                "type": "setValue",
                "name": "flag:door_MT15_13_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "0,13": [
            {
                "type": "setValue",
                "name": "flag:door_MT15_13_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,13": [
            {
                "type": "setValue",
                "name": "flag:door_MT15_13_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "0,14": [
            {
                "type": "setValue",
                "name": "flag:door_MT15_13_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,14": [
            {
                "type": "setValue",
                "name": "flag:door_MT15_13_11",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "13,11": {
            "0": {
                "condition": "flag:door_MT15_13_11==6",
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
                        "name": "flag:door_MT15_13_11",
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
    [  0,  0,207, 82,  0,  0,141, 91,141,141,  0,141,141,141,141],
    [  0,  0,  0,141,  0,141,141,  0,217,141,217,  0,  0,  0,402],
    [141,141,141,141,250,141,  0,141,  0, 81,141,141,141,141, 81],
    [  0,  0,  0,141,  0,141,  0,141,141,217,141,  0,141,  0,  0],
    [  0,  0,207, 82,  0,141,254,205,141,  0,141,  0,141,203,141],
    [141,141,141,141,248,141,141, 81,141,244, 81,244,141,  0,  0],
    [  0,  0,250, 81,  0,  0,141, 81,141,202,141,202,141,141,403],
    [  0,  0,141,141,141,  0,203,  0,203,  0,141,  0,401,  0,  0],
    [141,141,141,  0,141,141,141,141,141,141,219,141, 81,141,141],
    [  0,  0,141,141,141,  0,141,219,141,  0,  0,141,  0,  0,  0],
    [  0,  0,266,  0,  0,  0,205,  0,205,  0,  0,265,  0,  0,  0],
    [141,141,141,243,141,141,141, 82,141,141,141,141,141, 85,141],
    [219,219,141,  0,141,204,265,266,254,244,401,141,345,518,345],
    [219,219,141,  0,141,219,141, 82,141,141,402,141,518,551,518],
    [219,219, 82,  0, 81,  0,141, 93,407,226,403,141,345,518,345]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}