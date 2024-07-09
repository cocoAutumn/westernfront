main.floors.MT202=
{
    "floorId": "MT202",
    "title": "阿尔及利亚",
    "name": "阿尔及利亚",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "bgm7.mp3",
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
            "value": "150000",
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
            "id": "italyinf2",
            "name": "special",
            "value": "[]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf3",
            "name": "hp",
            "value": "145000",
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
            "id": "italyinf3",
            "name": "special",
            "value": "[1,4]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf4",
            "name": "hp",
            "value": "145000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf4",
            "name": "atk",
            "value": "4000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf4",
            "name": "special",
            "value": "[]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf5",
            "name": "hp",
            "value": "135000",
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
            "id": "italyinf5",
            "name": "special",
            "value": "[5]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf6",
            "name": "hp",
            "value": "130000",
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
            "id": "italyinf6",
            "name": "special",
            "value": "[6]",
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
            "value": "2500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "l640",
            "name": "special",
            "value": "[5,60]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "m1340",
            "name": "hp",
            "value": "40000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "m1340",
            "name": "atk",
            "value": "6000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "m1340",
            "name": "special",
            "value": "[]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "hp",
            "value": "165000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "atk",
            "value": "1800",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "hp",
            "value": "140000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "atk",
            "value": "7000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "hp",
            "value": "155000",
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
            "id": "lightmg",
            "name": "hp",
            "value": "145000",
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
            "value": "140000",
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
            "id": "mgbunker",
            "name": "hp",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mgbunker",
            "name": "atk",
            "value": "2200",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer105",
            "name": "hp",
            "value": "12000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer105",
            "name": "atk",
            "value": "25000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer105",
            "name": "zone",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sdkfz234",
            "name": "hp",
            "value": "22000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sdkfz234",
            "name": "atk",
            "value": "6000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer3f",
            "name": "hp",
            "value": "30000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer3f",
            "name": "atk",
            "value": "8000",
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
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4f",
            "name": "hp",
            "value": "40000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4f",
            "name": "atk",
            "value": "15000",
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
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "da90",
            "name": "special",
            "value": "[40]",
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
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "zone",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "rommel",
            "name": "hp",
            "value": "30000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "rommel",
            "name": "atk",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "rommel",
            "name": "special",
            "value": "[25,38,57,62]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "rommel",
            "name": "money",
            "value": "0",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "rommel",
            "name": "exp",
            "value": "0"
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
        "\t[任务目标]⭐通过当前区域\n⭐肃清海岸上的敌人\n⭐通关时至少持有50下午茶",
        {
            "type": "callBook"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,13": [
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]前方进入内陆，进入下一张地图后，海军类装备将会全员撤退。请确认不需要海军支援后再继续前进。",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "0,7": {
            "floorId": "MT203",
            "loc": [
                14,
                7
            ]
        },
        "14,7": {
            "floorId": "MT204",
            "loc": [
                0,
                7
            ]
        },
        "7,14": {
            "floorId": "MT205",
            "loc": [
                7,
                0
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
    [145,145,145,145,145,145,145,145,145,145,145,145,145,145,145],
    [539,145,145,145,145,145,145,145,145,145,145,145,145,145,145],
    [  0,366, 21, 21,150,145,145,145,601,571,150,538,150,518,518],
    [  0,150, 21, 22,150,571, 21,  0, 21,571,150,362,150,363,518],
    [ 81,150,150,150,150,571, 21,  0, 21,571,150, 11,150, 81,150],
    [538,578,  0, 81,538,150,150, 86,150,150,150,  0, 11,537,537],
    [150,150,  0,150,538, 11,362,364,  0,362,  0,150,  0,150,150],
    [ 92,363, 81,150,150,363,150, 11,150,150, 11,150,392,363, 94],
    [150,150, 11,150,392,  0,150,362,536,536,362,150, 81,150,150],
    [539,150,405,392,150,150,150,150,150,150,150,570, 11,578,150],
    [539,362,  0,150,  0, 11,521,366, 11,  0,570,405,150,539,539],
    [539,150,521, 81,362,150,150, 81,150,150,150, 81,150, 81,150],
    [150,150,150,150, 11,150,150, 82,150,  0,  0,365,150,365,537],
    [535,536,  0,150,579,  0,150,  0,150,392,150,150,150,150,537],
    [535,536,365, 81,  0,535,150, 93,150,538,538,363, 81,363,537]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "浅滩"
}