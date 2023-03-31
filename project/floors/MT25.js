main.floors.MT25=
{
    "floorId": "MT25",
    "title": "敦刻尔克",
    "name": "敦刻尔克",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass2",
    "bgm": "hitman.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,0": {
            "floorId": "MT24",
            "loc": [
                7,
                14
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT25_7_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT25_7_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT25_7_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT25_7_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT25_7_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT25_7_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT25_7_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT25_7_6",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "7,6": {
            "0": {
                "condition": "flag:door_MT25_7_6==8",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            6
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            8,
                            7
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            8
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            7
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT25_7_6",
                        "value": "null"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  0,143,  0,143,  0,143,  0, 91,  0,143,143,  0,143,  0,143],
    [  0,143,  0,143,  0,143,401,143,401, 81,  0,  0,254,  0,  0],
    [  0,143,  0,143,254, 81,  0,143,  0,143,143, 81,143,143,143],
    [254,143,254,143,  0,143,  0,143,  0,143,  0,  0,143,  0,  0],
    [  0,  0,  0,143,143,143,143,143,143,143,143,  0, 81,  0,  0],
    [143, 81,143,  0,143,  0,407,  0,407,  0,143,402,143,143,205],
    [  0,  0,265,  0,143,226,109, 85,109,226,143,  0,143,  0,  0],
    [204,143,143,143,143,  0, 85, 89, 85,  0,143,  0,143,  0,143],
    [  0,  0,206,  0,143,226,109, 85,109,226,143,  0,143,  0,  0],
    [  0,  0,143,  0,143,  0,401,  0,401,  0,143,  0,143,143,205],
    [143,143,143, 81,143,143,143, 83,143,143,143,403,143,  0,  0],
    [  0, 82,  0,  0,  0,143,219,  0,219,143,  0,  0,143,143,143],
    [  0,143,243,143,143,143,  0,  0,  0, 81,  0,  0, 82,390,  0],
    [  0,143,243,143,  0,204,  0,203,143,143, 81,143,143,  0,  0],
    [  0,143,  0, 81,  0,143,203,  0,143,  0,  0,  0,143,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}