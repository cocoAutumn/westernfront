main.floors.MT79=
{
    "floorId": "MT79",
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
        "\t[德军岸炮部队,coast381]敌舰进入射程！开火！"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "0,8": [
            "\f[hipper.jpg,170,50]希佩尔海军上将级重巡洋舰是1935年英德海军协定签订后，德国被容许合法摆脱《凡尔赛和约》建造大型舰只后，建造的重型巡洋舰。计划建造5艘，实际完成3艘，分别是“希佩尔海军上将”号、“布吕歇尔”号和“欧根亲王”号。该级巡洋舰舰体修长，航速较快，非常适合海上破交战。三艘巡洋舰中，只有“布吕歇尔”号于1940年在挪威被击沉，其余两艘均存活至战争结束。“希佩尔”号被英国拆毁，“欧根亲王”号于1946年被美国当作核试验的靶船，在核弹的蘑菇云下缓缓沉入海洋。"
        ]
    },
    "changeFloor": {
        "0,7": {
            "floorId": "MT78",
            "loc": [
                14,
                7
            ]
        },
        "14,7": {
            "floorId": "MT80",
            "loc": [
                0,
                7
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "4,12": [
            {
                "type": "setBlock",
                "number": "17"
            },
            {
                "type": "setValue",
                "name": "flag:st12tsk3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "0,13": [
            {
                "type": "setBlock",
                "number": "17"
            },
            {
                "type": "setValue",
                "name": "flag:st12tsk3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,13": [
            {
                "type": "setBlock",
                "number": "17"
            },
            {
                "type": "setValue",
                "name": "flag:st12tsk3",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {
        "4,12": [],
        "0,12": [],
        "4,11": [],
        "10,12": [],
        "0,13": [],
        "10,13": []
    },
    "cannotMoveIn": {
        "4,12": [],
        "0,13": [],
        "10,13": []
    },
    "map": [
    [566,529,566, 82,580,  3,  0,566,393,566,  0,  3,529,382,529],
    [572,572,572,  3,360, 81,207,  3,  6,  3,207,  3,  3, 81,  6],
    [  0,216,  0,  6, 21,  3,  0,526,393,526,  0,382,  0,528,  0],
    [  3, 81,  3,  3,371,  3,  6,  3,385,  3,  3,  3, 81,  3,371],
    [521,  0,382,  0,527,525,  3,566,528,  6,528,216,  0,  3,  0],
    [  0,393, 81,  6,  3,393,  3,  3,216, 81,  0,  3,360,207,525],
    [  3,  3,527,360,528,368, 21,  3,528,  6,360,  3,526,  6, 82],
    [ 92,  0, 21,  3,528,  6,566, 81,566,  3,  0, 81,  0,582, 94],
    [  3,  3,368,  3,371,  3,  3,526,  3,  3,  3,528,  3,  3,  3],
    [521,385,  0,527,  0,385, 21,  0,368,525,  0,394, 21,216,518],
    [  3,  3, 82,  3,  3, 81,  3, 82,  3,  3, 81,  3, 81,  3,518],
    [566,566,207,  0,  0,382,  3,525,534,526,216,  3,216,  3,566],
    [566,566, 17, 17,267, 17, 17, 17, 17,529,529,  3,530,  3,  3],
    [267, 17, 17, 17, 17, 17, 17, 17, 17, 17,267, 17,533,532,534],
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17]
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
    [ 16, 16,152,152,152,152,152,152,152, 16, 16, 16, 16, 16, 16],
    [152,152,152,152,152,152,152,152,152,152,152,152, 16, 16, 16],
    [152,152,152,152,152,152,152,152,152,152,152,152,152,152,152]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [10163,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,148,148,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [148,  0,  0,148,148,148,148,  0,148,  0,  0,  0,  0,  0,  0]
],
    "area": "海洋"
}