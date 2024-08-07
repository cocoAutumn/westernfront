main.floors.MT66=
{
    "floorId": "MT66",
    "title": "爱尔兰西部海域",
    "name": "爱尔兰西部海域",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "water",
    "bgm": "wots1.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "0,7": {
            "floorId": "MT65",
            "loc": [
                14,
                7
            ]
        },
        "14,7": {
            "floorId": "MT67",
            "loc": [
                0,
                7
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "1,2": [
            {
                "type": "setValue",
                "name": "flag:st10tsk3",
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
    [530,531,  3,566,  3,566,566,216,  3,527,  3,  3,  3,518,518],
    [532,533,  3,210,  3,  3,  3, 81,  3,527,528,234,  0,  3,518],
    [  3,399, 82,  0,  0,  0,211,  0,  3,528,  0,  3,  0, 81,216],
    [528,  3,  3,  3, 81,  3,  3,  0,385,  3, 81,  3,  3,385,  3],
    [528,211,  0,  0,385,  0,  3,  3,  0,  0,211,  0,  3, 21, 21],
    [528,  3,211,  3,  3,566,  0,  3,566,  3,  3,566,  0,  3, 21],
    [  3,  3, 81,  3,  0,  3,210,  3,  3,525,526,  3,234,  3,  3],
    [ 92,  0,210, 81,211,  3,  0,  3,528,527,216, 81,  0, 81, 94],
    [  3,  3, 81,  3,  0,216,  0, 81,210,  3,  3,  3,234,  3,  3],
    [  3,529,211,  3,528,  3,  3,  0,566,  3, 21, 21,  0,385,518],
    [529,529,  3,210,  0,210,  3,  3,  0, 81,216,  0,  3,  3,  3],
    [  3, 21,  3,  0,  3,  0,  0,  3,216,  3,  3,567, 81,  0,567],
    [  3, 82,  3,  0,  3,  3, 81,  3,529,529, 82,  0,  3,216,  3],
    [572,572,  3,385,  3,526,525,  3,529,529,  3, 82,  3,530,530],
    [572,216, 81,  0,216,527,  3,  3,  3,  3,  3, 21,210,530,  3]
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