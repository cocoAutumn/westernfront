main.floors.MT352=
{
    "floorId": "MT352",
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
    "events": {},
    "changeFloor": {
        "7,14": {
            "floorId": "MT351",
            "loc": [
                7,
                0
            ]
        },
        "7,0": {
            "floorId": "MT353",
            "loc": [
                7,
                14
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "7,10": [
            {
                "type": "setValue",
                "name": "flag:mission48tsk2",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,2": [
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
    [ 21, 21,369,277,369, 21,140, 91,140, 22,140,636,636,277,  0],
    [140,140,140, 81,140, 21,140,  0,140, 22,140,636,636,140,372],
    [ 21, 21,140,  0,140,140,140, 81,140,376,140,140,140,140, 81],
    [369,140,140,371,608,  0,277,  0,277,  0,371,  0,608,140,  0],
    [  0,378,  0,608,140,140,140, 82,140,140,140,608,  0,378,  0],
    [ 81,140,140,140,140,635,643,374,643,635,140,140,140,140, 81],
    [371,518,518,  0,140,643,635,140,635,643,140,  0,518,518,371],
    [140,140,140,370, 82,374,140,140,140,374, 82,370,140,140,140],
    [371,518,518,  0,140,643,635,140,635,643,140,  0,518,518,371],
    [ 81,140,140,140,140,635,643,374,643,635,140,140,140,140, 81],
    [643,370,  0,  0,140,140,140,376,140,140,140,  0,  0,370,643],
    [ 81,140,140,379,140,369, 81,277, 81,369,140,378,140,140,140],
    [372,  0,140,643,140, 21,140,  0,140, 21,140,643,140,638,638],
    [637,637,140,643,140, 21,140,  0,140, 21,140,643,140,638,638],
    [637,637,140,  0, 81,369,140, 93,140,369, 81,  0, 81,372,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}