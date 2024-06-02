main.floors.MT158=
{
    "floorId": "MT158",
    "title": "北冰洋",
    "name": "北冰洋",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "water",
    "bgm": "wots5.mp3",
    "firstArrive": [
        {
            "type": "setValue",
            "name": "flag:escort",
            "value": "true"
        },
        {
            "type": "setValue",
            "name": "flag:友军血量",
            "value": "800000"
        },
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "showStatusBar"
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\r[yellow]Mission 24 PQ17的单程票",
        "\t[盟军指挥官,hero]声纳又探测到了多个不明水下信号，我们被德军潜艇包围了！",
        "\t[盟军指挥官,hero]所有舰船注意规避，按Z字路线航行！",
        {
            "type": "text",
            "text": "\t[邓尼茨]\f[donitz.png,0,310]潜艇部队，用我们的“狼群战术”围攻敌人，优先打击他们的商船。同时我希望意大利海空军能够给予我们援助！",
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
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "u7",
            "name": "hp",
            "value": "3000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "u7",
            "name": "top",
            "value": "8000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "u7",
            "name": "special",
            "value": "[29,33,34,35,58]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "u9",
            "name": "hp",
            "value": "3000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "u9",
            "name": "top",
            "value": "8000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "u9",
            "name": "special",
            "value": "[29,33,34,35,58]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1934",
            "name": "hp",
            "value": "80000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1934",
            "name": "atk",
            "value": "500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "z1934",
            "name": "top",
            "value": "8000"
        },
        {
            "type": "setGlobalValue",
            "name": "lavaDamage",
            "value": 10000
        },
        "\t[系统提示]敌人战力重置完成",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]即将进入存档界面",
        {
            "type": "callSave"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[任务目标]⭐通过当前区域\n⭐友军剩余血量不少于20w\n⭐友军剩余血量不少于10w",
        {
            "type": "callBook"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "14,7": {
            "floorId": "MT159",
            "loc": [
                0,
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
    [  0,  0,  0,  3,  0,  6,  0,  3,  0,  0,  3,  3,  0,  0,  0],
    [  0,  3,  3,  3,  0,  0,  0,  3,  3,  0,  3,  0,  6,  0,  3],
    [  0,  0,  0,  6,  0,  3,  0,  0,  0,  0,  0,  0,  3,  0,  3],
    [  0,  3,  0,  0,  0,  6,  3,  0,  3,  3,  3,  0,  0,  0,  0],
    [  0,  3,  0,  6,  0,  0,  3,  0,  3,  0,  6,  0,  3,  3,  3],
    [  3,  3,  3,  3,  0,  3,  6,  0,  0,  0,  0,  0,  0,  0,  0],
    [570, 21,571,  3,  0,  0,  0,  0,  6,  6,  0,  3,  3,  0,  6],
    [  0,  0,  0, 86,  0,  0,  3,  0,  0,  0,  0,  0,  3,  0, 94],
    [570, 21,571,  3,  6,  0,  3,  3,  3,  0,  3,  6,  3,  0,  3],
    [  3,  3,  3,  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  3,  0,  3,  3,  3,  3,  0,  3,  3,  0,  3,  0],
    [  0,  3,  0,  0,  0,  0,  0,  0,  3,  0,  0,  3,  0,  3,  0],
    [  3,  3,  6,  0,  6,  0,  0,  6,  0,  0,  0,  0,  0,  0,  0],
    [  0,  3,  0,  0,  0,  3,  3,  3,  3,  3,  0,  3,  6,  0,  3],
    [  0,  0,  0,  3,  0,  0,  6,  0,  0,  0,  0,  3,  0,  0,  0]
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