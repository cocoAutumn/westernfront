main.floors.MT221=
{
    "floorId": "MT221",
    "title": "凯赛林隘口",
    "name": "凯赛林隘口",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "cao5.mp3",
    "firstArrive": [
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]部队的士气正逐渐崩溃！攻击力暂时减少300！",
        {
            "type": "setValue",
            "name": "status:atk",
            "operator": "-=",
            "value": "300"
        }
    ],
    "eachArrive": [
        {
            "type": "setValue",
            "name": "flag:mission32task2",
            "operator": "+=",
            "value": "1"
        }
    ],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "14,7": {
            "floorId": "MT220",
            "loc": [
                0,
                7
            ]
        },
        "0,7": {
            "floorId": "MT222",
            "loc": [
                14,
                7
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
    [ 21,571,409,150,148,148,148,148,148,148,148,148,148,148,148],
    [571,150,  0,150,150,150,150,148,148,148,148,148,148,148,148],
    [409,  0, 81, 21,410,537,150,150,150,150,150,580,148,148,148],
    [150,150,150,250,150,537,250,  0,250, 21,150,518,518,253,248],
    [518,518,150,  0,150,150,150, 81,150,150,150,150,150,150, 82],
    [518,250, 81,271, 81,  0,538,404,  0,  0,150,265,536,536,536],
    [150,150,150,204,150,538,  0,150,150,265,150, 81,150,150,150],
    [ 92,  0,272, 82,150,150,150,220,150,  0, 81,203,  0,  0, 94],
    [150,150,150,204,266,  0,266,  0,150,571,150,408,150,150,150],
    [537,537,404,  0,150,571,150, 81,390,150,150,  0,539,250,539],
    [150,150, 81,150,150,535,150,  0,150,271, 81,539,  0,150,539],
    [  0,150,  0,150,535,150,150,404,150,539,150,250,150,150,150],
    [410, 81,  0,250,  0,  0,404,  0,248,537,150,  0,  0,150,538],
    [203,150,150,150,250,150,150,150,150,538,150, 82,150,150,538],
    [518,518,150,150, 21,390,150,552,150,535,150,409,  0,250,538]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}