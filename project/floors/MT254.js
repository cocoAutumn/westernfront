main.floors.MT254=
{
    "floorId": "MT254",
    "title": "巴勒莫",
    "name": "巴勒莫",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground5",
    "bgm": "cao7.mp3",
    "firstArrive": [
        {
            "type": "text",
            "text": "\t[艾森豪威尔]\f[eisenhower.png,0,310]指挥官阁下，我很高兴收到你们成功进入巴勒莫的消息。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[艾森豪威尔]\f[eisenhower.png,0,310]同时，我接到来自意大利方面的请求，墨索里尼政府已经倒台，他们的新政府希望加入我们，并准备与我们商讨投降事宜。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[巴多格里奥]\f[badoglio.png,0,310]意大利人民已经厌倦了战争。希望盟军尽快登陆意大利，如果德军发现了我们的意图，以他们的战斗力，占领意大利全境用不了多久。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[凯赛林]\f[kasselring.png,0,310]墨索里尼下台，意大利新政府似乎有叛变的意图。我们会派特工救援墨索里尼，同时向意大利边境调集兵力，一旦他们叛变，立即进攻。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]当前区域全体意军已投降！",
        {
            "type": "setEnemy",
            "id": "italyinf2",
            "name": "special",
            "value": "[61]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf3",
            "name": "special",
            "value": "[61]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf4",
            "name": "special",
            "value": "[61]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf5",
            "name": "special",
            "value": "[61]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf6",
            "name": "special",
            "value": "[61]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf7",
            "name": "special",
            "value": "[61]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "da90",
            "name": "special",
            "value": "[61]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "l640",
            "name": "special",
            "value": "[61]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "m1340",
            "name": "special",
            "value": "[61]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "p2640",
            "name": "special",
            "value": "[61]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "c202",
            "name": "special",
            "value": "[61]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sm79",
            "name": "special",
            "value": "[61]"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "1,1": [
            "空降兵回归队伍，蓝钥匙+1",
            {
                "type": "setValue",
                "name": "flag:mission36task2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "item:blueKey",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "2,14": {
            "floorId": "MT253",
            "loc": [
                2,
                0
            ]
        },
        "14,7": {
            "floorId": "MT255",
            "loc": [
                0,
                6
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
    [10015,667,10015, 22, 21,10015,411,535,535,535,10015,10015,10015, 21, 22],
    [10015,550,10015,10015,363,10015, 82,10015,10015,10015,10015,363,  0,363,10015],
    [10015, 82,10015,362,571, 81,  0,371,538,10015,518,518,10015, 81,10015],
    [392,518,363,571,10015,571,363,10015,538,10015,363,10015,10015,518,518],
    [10015,392,10015, 81,518,10015,539,10015,538,207,  0,10015,  0,539,10015],
    [10015,10015,538,365,10015,10015,362,10015,10015, 81,10015,10015,362,  0,10015],
    [362, 81,538,538,538,10015,  0, 81,  0, 21,392,10015,  0,10015,10015],
    [537,10015,207,10015,10015,10015,10015,392,10015,207, 21,10015,411, 81, 94],
    [537,10015,  0,366,392,10015,571,571,10015, 81,10015,10015,  0,10015,10015],
    [10015,10015,10015, 81,10015, 81,362,10015,10015,  0,  0,371,362,10015,536],
    [535,535,10015,571,10015,571,10015,392,  0,366,10015,10015,571, 81,536],
    [10015,207,10015,362,10015,362,10015, 81,10015,10015,10015,10015, 81,10015,10015],
    [362, 82,367,  0,363,  0,10015,  0,539,  0,371,  0,362,  0,  0],
    [ 21,10015,  0,10015, 81,10015,10015,362,10015,10015, 81,10015,10015,10015,363],
    [ 21,10015, 93,10015,362,539,539,539,10015, 21,363, 21,10015,392, 22]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}