main.floors.MT273=
{
    "floorId": "MT273",
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
    "defaultGround": "grass",
    "bgm": "europe6.mp3",
    "firstArrive": [
        {
            "type": "animate",
            "name": "shootair",
            "loc": [
                0,
                9
            ]
        },
        {
            "type": "animate",
            "name": "explore",
            "loc": [
                0,
                9
            ]
        },
        {
            "type": "animate",
            "name": "bigexplore",
            "loc": [
                0,
                9
            ]
        },
        {
            "type": "playSound",
            "name": "crash2.mp3"
        },
        {
            "type": "hide",
            "loc": [
                [
                    0,
                    9
                ]
            ],
            "remove": true,
            "time": 500
        },
        {
            "type": "animate",
            "name": "shootair",
            "loc": [
                12,
                2
            ]
        },
        "\t[轰炸机飞行员,N622]尾炮手！你还活着吗？我无法控制飞机尾舵了，迅速报告你那里的情况！",
        "\t[轰炸机机腹炮手,N622]我是机腹炮手，尾炮手和球形炮塔炮手已阵亡，机舱内多处损毁，尾舵已经不见了。",
        "\t[轰炸机飞行员,N622]Fuck！到底是谁让我们出的这次任务！安顿好其他伤员，我马上找迫降的地……",
        {
            "type": "animate",
            "name": "shootair",
            "loc": [
                12,
                2
            ]
        },
        {
            "type": "animate",
            "name": "explore",
            "loc": [
                12,
                2
            ]
        },
        {
            "type": "animate",
            "name": "bigexplore",
            "loc": [
                12,
                2
            ]
        },
        {
            "type": "playSound",
            "name": "crash2.mp3"
        },
        {
            "type": "hide",
            "loc": [
                [
                    12,
                    12
                ]
            ],
            "remove": true,
            "time": 500
        },
        "\t[第八航空队轰炸机大队长,N622]保持编队不要分散！我们马上到了！",
        {
            "type": "animate",
            "name": "shootair",
            "loc": [
                4,
                0
            ]
        },
        "\t[轰炸机飞行员,N622]我们无法保持队形！两个引擎起火，灭火无效，高度正在降低！",
        "\t[第八航空队轰炸机大队长,N622]我看见你们了，飞机损毁非常严重，立刻跳伞，快！",
        "\t[轰炸机飞行员,N622]收到，机组成员，弃机跳伞，重复，所有还活着的机组成员，立刻跳……（刺耳电流声）",
        {
            "type": "animate",
            "name": "shootair",
            "loc": [
                4,
                0
            ]
        },
        {
            "type": "animate",
            "name": "explore",
            "loc": [
                4,
                0
            ]
        },
        {
            "type": "animate",
            "name": "bigexplore",
            "loc": [
                4,
                0
            ]
        },
        {
            "type": "playSound",
            "name": "crash2.mp3"
        },
        {
            "type": "hide",
            "loc": [
                [
                    4,
                    0
                ]
            ],
            "remove": true,
            "time": 500
        },
        "\t[第八航空队轰炸机大队长,N622]无论如何，我们都必须完成这次任务。不能让那些兄弟们白白牺牲……"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,0": [
            {
                "type": "function",
                "function": "function(){\nflags.mission[38][0]=true\n}"
            },
            {
                "type": "if",
                "condition": "(flag:友军血量>=500000)",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[38][1]=true\n}"
                    }
                ]
            },
            {
                "type": "setCurtain",
                "color": [
                    0,
                    0,
                    0,
                    1
                ],
                "time": 500,
                "keep": true
            },
            {
                "type": "changeFloor",
                "floorId": "MT274",
                "loc": [
                    -1,
                    -1
                ]
            }
        ]
    },
    "changeFloor": {
        "7,14": {
            "floorId": "MT272",
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
    [  0,  0,140,  0,622,  0,140, 89, 86, 86, 86, 86, 86,  0,  0],
    [  0,  0,140,  0,372,  0,140,379,140,140,140,140,140,140,  0],
    [  0,  0,140,140, 81,140,140,277,140,  0,  0,  0,  0,140,  0],
    [  0,  0,  0,  0,  0,  0,140,372,140,  0,  0,  0,  0,140,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140,  0],
    [140,140,140,140,  0,  0,  0,  0,  0,  0,  0,  0,  0,140,  0],
    [622,  0,  0,140,  0,  0,  0,  0,  0,  0,  0,  0,  0,140,  0],
    [371,140,140,140,  0,  0,  0,  0,  0,  0,140,  0,  0,140,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140,140,369,140,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,140,  0,622,140,  0],
    [  0,  0,  0,  0,  0,  0,140,  0,140,140,140,140,140,140,  0],
    [  0,  0,  0,  0,  0,  0,140, 93, 86, 86, 86, 86, 86,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}