main.floors.MT194=
{
    "floorId": "MT194",
    "title": "阿拉曼",
    "name": "阿拉曼",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "cao2.mp3",
    "firstArrive": [
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
        "\r[yellow]Mission 29 第二次阿拉曼战役",
        {
            "type": "text",
            "text": "\t[蒙哥马利]\f[montgomary.png,0,310]士兵们，感到荣幸吧！我将带领你们，击败那个曾令你们恐惧的沙漠之狐！非洲军团即将遭受灭顶之灾！",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[隆美尔]\f[rommel.png,0,310]我们的燃油所剩无几。将所有可用的坦克调集到北边，阻挡英军的装甲部队。诸位，为了非洲军团，为了德意志，也为了自己能够活下去，请全力一搏吧！",
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
            "id": "italyinf2",
            "name": "hp",
            "value": "90000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf2",
            "name": "atk",
            "value": "1400",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf3",
            "name": "hp",
            "value": "85000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf3",
            "name": "atk",
            "value": "1400",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf4",
            "name": "hp",
            "value": "80000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf4",
            "name": "atk",
            "value": "3500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf5",
            "name": "hp",
            "value": "75000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf5",
            "name": "atk",
            "value": "1700",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf6",
            "name": "hp",
            "value": "70000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf6",
            "name": "atk",
            "value": "1800",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "l640",
            "name": "hp",
            "value": "30000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "l640",
            "name": "atk",
            "value": "2200",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "m1340",
            "name": "hp",
            "value": "25000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "m1340",
            "name": "atk",
            "value": "5500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "hp",
            "value": "90000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "atk",
            "value": "1700",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "hp",
            "value": "80000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "atk",
            "value": "6000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "hp",
            "value": "75000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "atk",
            "value": "1900",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "special",
            "value": "[1,4,52,55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "hp",
            "value": "75000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "atk",
            "value": "1900",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "hp",
            "value": "70000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "atk",
            "value": "2200",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "aceinf",
            "name": "hp",
            "value": "130000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "aceinf",
            "name": "atk",
            "value": "5500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sdkfz234",
            "name": "hp",
            "value": "25000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sdkfz234",
            "name": "atk",
            "value": "6500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer3f",
            "name": "hp",
            "value": "29000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer3f",
            "name": "atk",
            "value": "6500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stug3a",
            "name": "hp",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stug3a",
            "name": "atk",
            "value": "12500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4e",
            "name": "hp",
            "value": "28000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4e",
            "name": "atk",
            "value": "11000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4f",
            "name": "hp",
            "value": "28000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4f",
            "name": "atk",
            "value": "12500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88c6",
            "name": "hp",
            "value": "32000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88c6",
            "name": "atk",
            "value": "5000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "hp",
            "value": "33000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "atk",
            "value": "800",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "bom",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "special",
            "value": "[28]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak38",
            "name": "hp",
            "value": "12000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak38",
            "name": "atk",
            "value": "6500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak38",
            "name": "special",
            "value": "[55,59]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak38",
            "name": "zone",
            "value": "6500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak38",
            "name": "range",
            "value": "2",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "da90",
            "name": "hp",
            "value": "12000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "da90",
            "name": "atk",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "hp",
            "value": "12000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "atk",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "special",
            "value": "[55,59]"
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "zone",
            "value": "10000"
        },
        {
            "type": "setGlobalValue",
            "name": "lavaDamage",
            "value": 20000
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
        "\t[任务目标]⭐击败隆美尔（主线boss）\n⭐击败巴多格里奥（支线boss）\n⭐消灭所有敌人",
        {
            "type": "callBook"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "0,7": {
            "floorId": "MT195",
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
    [  0,  0,  0,  0, 81,  0,150,  0,150,  0,  0,  0,150,  0,  0],
    [150,150,150,150,  0,  0,150,  0,150,150, 11,150,150,150, 11],
    [  0,150,  0,150, 11,150,150,  0, 11,  0,  0,  0, 11,  0,  0],
    [  0,150,  0,  0,  0,  0,  0,  0,150,  0,150,  0,150,150,150],
    [  0,150, 81,150,150,150, 81,150,150,150,150, 81,150,571,571],
    [  0, 81,  0,  0,  0,150,  0,  0,  0,150,  0,  0,150,571,571],
    [150,150, 11,150,  0,150,150,150, 11,150,150, 11,150,  0,  0],
    [ 92, 82,  0,150,  0, 11,  0,  0,  0,  0,  0,  0, 86,  0,  0],
    [150,150, 11,  0,  0,150,  0,150,150,150,  0,  0,150,  0,  0],
    [  0,  0, 11,150,150,150, 81,150,  0,150,150, 11,150,571,571],
    [150,150,  0,  0,  0,  0,  0,  0,  0,150,  0,  0,150,571,571],
    [  0,150, 81,150,150,150,150,150, 81,150, 11,150,150,150,150],
    [  0,150,  0,  0,150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,150,  0,150,150, 81,150,150,150,150, 81,150,150,150, 11],
    [  0, 82,  0,150,  0,  0,  0,150,  0,  0,  0,150,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}