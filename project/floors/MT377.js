main.floors.MT377=
{
    "floorId": "MT377",
    "title": "阿尔屯峡湾西北",
    "name": "阿尔屯峡湾西北",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "water",
    "bgm": "europe6.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,0": [
            {
                "type": "choices",
                "text": "\t[WARNING]再次提醒：主线boss战开始后无法返回。确认前进？",
                "choices": [
                    {
                        "text": "前进",
                        "action": [
                            {
                                "type": "changeFloor",
                                "floorId": "MT378",
                                "loc": [
                                    7,
                                    14
                                ],
                                "direction": "up"
                            }
                        ]
                    },
                    {
                        "text": "再等等",
                        "action": [
                            {
                                "type": "moveHero",
                                "steps": [
                                    "down:1"
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "7,14": {
            "floorId": "MT376",
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
                "name": "flag:door_MT377_7_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,12": [
            {
                "type": "setValue",
                "name": "flag:door_MT377_7_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "0,13": [
            {
                "type": "setValue",
                "name": "flag:door_MT377_7_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,13": [
            {
                "type": "setValue",
                "name": "flag:door_MT377_7_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "0,14": [
            {
                "type": "setValue",
                "name": "flag:door_MT377_7_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,14": [
            {
                "type": "setValue",
                "name": "flag:door_MT377_7_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "13,12": [
            {
                "type": "setValue",
                "name": "flag:door_MT377_7_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "14,12": [
            {
                "type": "setValue",
                "name": "flag:door_MT377_7_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "13,13": [
            {
                "type": "setValue",
                "name": "flag:door_MT377_7_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "14,13": [
            {
                "type": "setValue",
                "name": "flag:door_MT377_7_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "13,14": [
            {
                "type": "setValue",
                "name": "flag:door_MT377_7_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "14,14": [
            {
                "type": "setValue",
                "name": "flag:door_MT377_7_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "0,0": [
            {
                "type": "setValue",
                "name": "flag:door_MT377_7_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,0": [
            {
                "type": "setValue",
                "name": "flag:door_MT377_7_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "0,1": [
            {
                "type": "setValue",
                "name": "flag:door_MT377_7_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,1": [
            {
                "type": "setValue",
                "name": "flag:door_MT377_7_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "0,2": [
            {
                "type": "setValue",
                "name": "flag:door_MT377_7_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,2": [
            {
                "type": "setValue",
                "name": "flag:door_MT377_7_2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "13,0": [
            {
                "type": "setValue",
                "name": "flag:door_MT377_7_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "14,0": [
            {
                "type": "setValue",
                "name": "flag:door_MT377_7_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "13,1": [
            {
                "type": "setValue",
                "name": "flag:door_MT377_7_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "14,1": [
            {
                "type": "setValue",
                "name": "flag:door_MT377_7_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "13,2": [
            {
                "type": "setValue",
                "name": "flag:door_MT377_7_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "14,2": [
            {
                "type": "setValue",
                "name": "flag:door_MT377_7_1",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "7,4": {
            "0": {
                "condition": "flag:door_MT377_7_4==6",
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
                        "name": "flag:door_MT377_7_4",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "7,3": {
            "0": {
                "condition": "flag:door_MT377_7_3==6",
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
                        "name": "flag:door_MT377_7_3",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "7,2": {
            "0": {
                "condition": "flag:door_MT377_7_2==6",
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
                        "name": "flag:door_MT377_7_2",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "7,1": {
            "0": {
                "condition": "flag:door_MT377_7_1==6",
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
                        "name": "flag:door_MT377_7_1",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "6,0": {
            "0": {
                "condition": "!core.hasEnemyLeft(undefined,['MT374','MT375','MT376','MT377'])",
                "currentFloor": false,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[51][1]=true\n}"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [396,395,  3,635,635,635,  3,620,  3,636,636,636,  3,395,396],
    [583,255, 82,643,341,643,  3, 85,  3,643,341,643, 82,255,583],
    [396,395,  3,643,643,643,  3, 85,  3,643,643,643,  3,395,396],
    [  3,  3,  3,  3,373,  3,  3, 85,  3,  3,373,  3,  3,  3,  3],
    [635, 21,  3,  0,  0,  0,  3, 85,  3,  0,  0,  0,  3, 21,636],
    [635,385, 81,  0,590,373, 81,  0, 81,373,590,  0, 81,385,636],
    [635, 21,  3,  0,  0,  0,  3,  0,  3,  0,  0,  0,  3, 21,636],
    [  3,  3,  3,  3,  3,  3,  3,332,  3,  3,  3,  3,  3,  3,  3],
    [637, 21,  3,  0,  0,  0,  3,  0,  3,  0,  0,  0,  3, 21,638],
    [637,385, 81,  0,590,373, 81,608, 81,373,590,  0, 81,385,638],
    [637, 21,  3,  0,  0,  0,  3,  0,  3,  0,  0,  0,  3, 21,638],
    [  3,  3,  3,  3,373,  3,  3,608,  3,  3,373,  3,  3,  3,  3],
    [396,395,  3,643,643,643,  3,  0,  3,643,643,643,  3,395,396],
    [582,255, 82,643,341,643,  3,  0,  3,643,341,643, 82,255,582],
    [396,395,  3,637,637,637,  3, 93,  3,638,638,638,  3,395,396]
],
    "bgmap": [
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
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
    "area": "海洋"
}