main.floors.MT366=
{
    "floorId": "MT366",
    "title": "阿纳姆市",
    "name": "阿纳姆市",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": null,
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
        {
            "type": "animate",
            "name": "wonder",
            "loc": "hero"
        },
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 0,
            "keep": true
        },
        {
            "type": "playSound",
            "name": "zone.mp3"
        },
        "看上去情报出了问题，你们空降的地点出现了敌人的大规模装甲部队！",
        "伞兵部队在天上就被高射炮打了个七零八落，侥幸存活降落到地面的士兵们也遭到了敌军重型武器的围剿。只有轻武器的你们根本没有靠自己突围的可能性。",
        "你向外围友军求援，但他们根本无法打穿包围圈解救你们。最终，你在坚守阿纳姆桥时被子弹击中身亡。临死前，你用最后一口气朝远在大本营的蒙哥马利竖了个中指。",
        {
            "type": "restart"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  0,  0,  0,  0,  0,  0,250,  0,250,  0,  0,  0,  0,  0,  0],
    [  0,250,  0,  0,  0,270,  0,  0,  0,270,  0,  0,  0,250,  0],
    [250,  0,  0,228,  0,  0,275,  0,275,  0,  0,228,  0,  0,250],
    [  0,  0,  0,  0,  0,275,  0,632,  0,275,  0,  0,  0,  0,  0],
    [  0,228,  0,  0,227,  0,632,  0,632,  0,227,  0,  0,228,  0],
    [  0,275,  0,632,  0,  0,  0,  0,  0,  0,  0,632,  0,275,  0],
    [275,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,275],
    [  0,275,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,275,  0],
    [  0,228,  0,632,  0,  0,  0,  0,  0,  0,  0,632,  0,228,  0],
    [  0,  0,  0,  0,227,  0,632,  0,632,  0,227,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,275,  0,632,  0,275,  0,  0,  0,  0,  0],
    [250,  0,  0,228,  0,  0,275,  0,275,  0,  0,228,  0,  0,250],
    [  0,250,  0,  0,  0,270,  0,  0,  0,270,  0,  0,  0,250,  0],
    [  0,  0,  0,  0,  0,  0,250,  0,250,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}