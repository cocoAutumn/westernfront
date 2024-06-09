main.floors.MT169=
{
    "floorId": "MT169",
    "title": "利比亚",
    "name": "利比亚",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X10006",
    "bgm": "hiaction4.mp3",
    "firstArrive": [
        {
            "type": "moveHero",
            "time": 500,
            "steps": [
                "up:2"
            ]
        },
        {
            "type": "closeDoor",
            "id": "specialDoor",
            "loc": [
                7,
                13
            ]
        },
        {
            "type": "animate",
            "name": "wonder",
            "loc": [
                7,
                10
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "wonder",
            "loc": [
                6,
                9
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "wonder",
            "loc": [
                8,
                9
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "wonder",
            "loc": [
                6,
                6
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "wonder",
            "loc": [
                8,
                6
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "wonder",
            "loc": [
                7,
                4
            ],
            "async": true
        },
        {
            "type": "waitAsync"
        },
        "\t[德军高炮小队,flak88]敌人空袭！掩护车队！"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,14": {
            "floorId": "MT168",
            "loc": [
                7,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "4,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT169_7_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT169_7_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT169_7_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT169_7_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT169_7_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT169_7_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT169_7_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT169_7_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT169_7_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT169_7_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT169_7_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT169_7_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT169_7_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,10": [
            {
                "type": "setValue",
                "name": "flag:door_MT169_7_1",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "7,1": {
            "0": {
                "condition": "flag:door_MT169_7_1==14",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            13
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT169_7_1",
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
    [150,150,150,150,150,150,150, 89,150,150,150,150,150,150,150],
    [150,  0,  0,  0,  0,  0,  0, 85,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,225,  0,  0,  0,  0,  0,225,  0,  0,  0,150],
    [150,  0,  0,  0,  0,225,  0,390,  0,225,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,225,  0,243,  0,243,  0,225,  0,  0,  0,150],
    [150,  0,  0,  0,  0,225,  0,  0,  0,225,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,404,  0,404,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,254,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,150,150,150,150,150,150, 93,150,150,150,150,150,150,150]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}