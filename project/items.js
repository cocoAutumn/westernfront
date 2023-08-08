var items_296f5d02_12fd_4166_a7c1_b5e830c9ee3a = 
{
	"yellowKey": {
		"cls": "tools",
		"name": "黄钥匙",
		"text": "可以打开一扇黄门",
		"hideInToolbox": true
	},
	"blueKey": {
		"cls": "tools",
		"name": "蓝钥匙",
		"text": "可以打开一扇蓝门",
		"hideInToolbox": true
	},
	"redKey": {
		"cls": "tools",
		"name": "红钥匙",
		"text": "可以打开一扇红门",
		"hideInToolbox": true
	},
	"redGem": {
		"cls": "items",
		"name": "红宝石",
		"text": ",攻击+1",
		"itemEffect": "core.status.hero.atk += 1;",
		"itemEffectTip": "，攻击+1",
		"useItemEffect": "core.status.hero.atk += 1;",
		"canUseItemEffect": "true"
	},
	"blueGem": {
		"cls": "items",
		"name": "蓝宝石",
		"text": "，指挥点数+10",
		"itemEffect": "core.status.hero.mana += 10;",
		"itemEffectTip": "，指挥点+10",
		"useItemEffect": "core.status.hero.mana += 10;",
		"canUseItemEffect": "true"
	},
	"greenGem": {
		"cls": "items",
		"name": "绿宝石",
		"text": "，后勤+5",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio",
		"itemEffectTip": "，后勤+${core.values.greenGem * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem",
		"canUseItemEffect": "true"
	},
	"yellowGem": {
		"cls": "items",
		"name": "黄宝石",
		"text": ",血量及血限+50",
		"itemEffect": "core.status.hero.hpmax += 50;\ncore.status.hero.hp += 50;",
		"itemEffectTip": "，血量及血限+50",
		"useItemEvent": null,
		"canUseItemEffect": "true"
	},
	"redPotion": {
		"cls": "items",
		"name": "红血瓶",
		"text": "，生命+${core.values.redPotion}",
		"itemEffect": "core.status.hero.hp += core.values.redPotion * core.status.thisMap.ratio",
		"itemEffectTip": "，生命+${core.values.redPotion * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.hp += core.values.redPotion",
		"canUseItemEffect": "true"
	},
	"bluePotion": {
		"cls": "items",
		"name": "蓝血瓶",
		"text": "，生命+${core.values.bluePotion}",
		"itemEffect": "core.status.hero.hp += core.values.bluePotion * core.status.thisMap.ratio",
		"itemEffectTip": "，生命+${core.values.bluePotion * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.hp += core.values.bluePotion",
		"canUseItemEffect": "true"
	},
	"yellowPotion": {
		"cls": "items",
		"name": "黄血瓶",
		"text": "，生命+${core.values.yellowPotion}",
		"itemEffect": "core.status.hero.hp += core.values.yellowPotion * core.status.thisMap.ratio",
		"itemEffectTip": "，生命+${core.values.yellowPotion * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.hp += core.values.yellowPotion",
		"canUseItemEffect": "true"
	},
	"greenPotion": {
		"cls": "items",
		"name": "绿血瓶",
		"text": "，生命+${core.values.greenPotion}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"sword0": {
		"cls": "items",
		"name": "破旧的剑",
		"text": "一把已经生锈的剑",
		"equip": {
			"type": 0,
			"animate": "sword",
			"value": {
				"atk": 0
			}
		},
		"itemEffect": "core.status.hero.atk += 0",
		"itemEffectTip": "，攻击+0"
	},
	"sword1": {
		"cls": "items",
		"name": "铁剑",
		"text": "一把很普通的铁剑",
		"equip": {
			"type": 0,
			"animate": "sword",
			"value": {
				"atk": 10
			}
		},
		"itemEffect": "core.status.hero.atk += 10",
		"itemEffectTip": "，攻击+10"
	},
	"sword2": {
		"cls": "items",
		"name": "银剑",
		"text": "一把很普通的银剑",
		"equip": {
			"type": 0,
			"animate": "sword",
			"value": {
				"atk": 20
			}
		},
		"itemEffect": "core.status.hero.atk += 20",
		"itemEffectTip": "，攻击+20"
	},
	"sword3": {
		"cls": "items",
		"name": "骑士剑",
		"text": "一把很普通的骑士剑",
		"equip": {
			"type": 0,
			"animate": "sword",
			"value": {
				"atk": 40
			}
		},
		"itemEffect": "core.status.hero.atk += 40",
		"itemEffectTip": "，攻击+40"
	},
	"sword4": {
		"cls": "items",
		"name": "圣剑",
		"text": "一把很普通的圣剑",
		"equip": {
			"type": 0,
			"animate": "sword",
			"value": {
				"atk": 80
			}
		},
		"itemEffect": "core.status.hero.atk += 80",
		"itemEffectTip": "，攻击+80"
	},
	"sword5": {
		"cls": "items",
		"name": "神圣剑",
		"text": "一把很普通的神圣剑",
		"equip": {
			"type": 0,
			"animate": "sword",
			"value": {
				"atk": 160
			}
		},
		"itemEffect": "core.status.hero.atk += 100",
		"itemEffectTip": "，攻击+100"
	},
	"shield0": {
		"cls": "items",
		"name": "破旧的盾",
		"text": "一个很破旧的铁盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 0
			}
		},
		"itemEffect": "core.status.hero.def += 0",
		"itemEffectTip": "，防御+0"
	},
	"shield1": {
		"cls": "items",
		"name": "铁盾",
		"text": "一个很普通的铁盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 10
			}
		},
		"itemEffect": "core.status.hero.def += 10",
		"itemEffectTip": "，防御+10"
	},
	"shield2": {
		"cls": "items",
		"name": "银盾",
		"text": "一个很普通的银盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 20
			}
		},
		"itemEffect": "core.status.hero.def += 20",
		"itemEffectTip": "，防御+20"
	},
	"shield3": {
		"cls": "items",
		"name": "骑士盾",
		"text": "一个很普通的骑士盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 40
			}
		},
		"itemEffect": "core.status.hero.def += 40",
		"itemEffectTip": "，防御+40"
	},
	"shield4": {
		"cls": "items",
		"name": "圣盾",
		"text": "一个很普通的圣盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 80
			}
		},
		"itemEffect": "core.status.hero.def += 80",
		"itemEffectTip": "，防御+80"
	},
	"shield5": {
		"cls": "items",
		"name": "神圣盾",
		"text": "一个很普通的神圣盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 100,
				"mdef": 100
			}
		},
		"itemEffect": "core.status.hero.def += 100;core.status.hero.mdef += 100",
		"itemEffectTip": "，防御+100，护盾+100"
	},
	"superPotion": {
		"cls": "items",
		"name": "圣水",
		"itemEffect": "core.status.hero.hp *= 2",
		"itemEffectTip": "，生命值翻倍",
		"useItemEffect": "core.status.hero.hp *= 2;core.playSound('回血');",
		"canUseItemEffect": "true",
		"text": "生命值翻倍"
	},
	"book": {
		"cls": "constants",
		"name": "敌军情报",
		"text": "可以查看当前战场内各敌人属性",
		"hideInToolbox": true,
		"useItemEffect": "core.ui.drawBook(0);",
		"canUseItemEffect": "true"
	},
	"fly": {
		"cls": "constants",
		"name": "战场传送器",
		"text": "可以在当前区域内已到过的战场地图之间进行快捷传送，需要在出入口旁使用",
		"hideInReplay": true,
		"hideInToolbox": true,
		"useItemEffect": "core.ui.drawFly(core.floorIds.indexOf(core.status.floorId));",
		"canUseItemEffect": "(function () {\n\tif (core.flags.flyNearStair && !core.nearStair()) return false;\n\treturn core.status.maps[core.status.floorId].canFlyFrom;\n})();"
	},
	"coin": {
		"cls": "constants",
		"name": "幸运金币",
		"text": "持有时打败怪物可得双倍金币"
	},
	"freezeBadge": {
		"cls": "constants",
		"name": "冰冻徽章",
		"text": "可以将面前的熔岩变成平地",
		"useItemEffect": "(function () {\n\tvar success = false;\n\n\tvar snowFourDirections = false; // 是否多方向雪花；如果是将其改成true\n\tif (snowFourDirections) {\n\t\t// 多方向雪花\n\t\tfor (var direction in core.utils.scan) { // 多方向雪花默认四方向，如需改为八方向请将这两个scan改为scan2\n\t\t\tvar delta = core.utils.scan[direction];\n\t\t\tvar nx = core.getHeroLoc('x') + delta.x,\n\t\t\t\tny = core.getHeroLoc('y') + delta.y;\n\t\t\tif (core.getBlockId(nx, ny) == 'lava') {\n\t\t\t\tcore.removeBlock(nx, ny);\n\t\t\t\tsuccess = true;\n\t\t\t}\n\t\t}\n\t} else {\n\t\tif (core.getBlockId(core.nextX(), core.nextY()) == 'lava') {\n\t\t\tcore.removeBlock(core.nextX(), core.nextY());\n\t\t\tsuccess = true;\n\t\t}\n\t}\n\n\tif (success) {\n\t\tcore.playSound('打开界面');\n\t\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\t} else {\n\t\tcore.playSound('操作失败');\n\t\tcore.drawTip(\"当前无法使用\" + core.material.items[itemId].name, itemId);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n})();",
		"canUseItemEffect": "true"
	},
	"cross": {
		"cls": "constants",
		"name": "十字架",
		"text": "持有后无视怪物的无敌属性"
	},
	"dagger": {
		"cls": "constants",
		"name": "屠龙匕首",
		"text": "该道具尚未被定义"
	},
	"amulet": {
		"cls": "constants",
		"name": "护符",
		"text": "持有时无视负面地形"
	},
	"bigKey": {
		"cls": "items",
		"name": "大黄门钥匙",
		"text": "可以开启当前层所有黄门",
		"itemEffect": "core.addItem('yellowKey', 1);\ncore.addItem('blueKey', 1);\ncore.addItem('redKey', 1);",
		"itemEffectTip": "，全钥匙+1",
		"useItemEffect": "(function () {\n\tvar actions = core.searchBlock(\"yellowDoor\").map(function (block) {\n\t\treturn { \"type\": \"openDoor\", \"loc\": [block.x, block.y], \"async\": true };\n\t});\n\tactions.push({ \"type\": \"waitAsync\" });\n\tactions.push({ \"type\": \"tip\", \"text\": core.material.items[itemId].name + \"使用成功\" });\n\tcore.insertAction(actions);\n})();",
		"canUseItemEffect": "(function () {\n\treturn core.searchBlock('yellowDoor').length > 0;\n})();"
	},
	"greenKey": {
		"cls": "tools",
		"name": "绿钥匙",
		"text": "可以打开一扇绿门"
	},
	"steelKey": {
		"cls": "tools",
		"name": "铁门钥匙",
		"text": "可以打开一扇铁门"
	},
	"pickaxe": {
		"cls": "tools",
		"name": "破墙镐",
		"text": "可以破坏勇士面前的墙",
		"useItemEffect": "(function () {\n\tvar canBreak = function (x, y) {\n\t\tvar block = core.getBlock(x, y);\n\t\tif (block == null || block.disable) return false;\n\t\treturn block.event.canBreak;\n\t};\n\n\tvar success = false;\n\tvar pickaxeFourDirections = false; // 是否多方向破；如果是将其改成true\n\tif (pickaxeFourDirections) {\n\t\t// 多方向破\n\t\tfor (var direction in core.utils.scan) { // 多方向破默认四方向，如需改成八方向请将这两个scan改为scan2\n\t\t\tvar delta = core.utils.scan[direction];\n\t\t\tvar nx = core.getHeroLoc('x') + delta.x,\n\t\t\t\tny = core.getHeroLoc('y') + delta.y;\n\t\t\tif (canBreak(nx, ny)) {\n\t\t\t\tcore.removeBlock(nx, ny);\n\t\t\t\tsuccess = true;\n\t\t\t}\n\t\t}\n\t} else {\n\t\t// 仅破当前\n\t\tif (canBreak(core.nextX(), core.nextY())) {\n\t\t\tcore.removeBlock(core.nextX(), core.nextY());\n\t\t\tsuccess = true;\n\t\t}\n\t}\n\n\tif (success) {\n\t\tcore.playSound('破墙镐');\n\t\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\t} else {\n\t\t// 无法使用\n\t\tcore.playSound('操作失败');\n\t\tcore.drawTip(\"当前无法使用\" + core.material.items[itemId].name, itemId);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n})();",
		"canUseItemEffect": "true"
	},
	"icePickaxe": {
		"cls": "tools",
		"name": "破冰镐",
		"text": "可以破坏勇士面前的一堵冰墙",
		"useItemEffect": "(function () {\n\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\tcore.insertAction({ \"type\": \"openDoor\", \"loc\": [\"core.nextX()\", \"core.nextY()\"] });\n})();",
		"canUseItemEffect": "(function () {\n\treturn core.getBlockId(core.nextX(), core.nextY()) == 'ice';\n})();"
	},
	"bomb": {
		"cls": "tools",
		"name": "炸弹",
		"text": "可以炸掉勇士面前的怪物",
		"useItemEffect": "(function () {\n\tvar bombList = []; // 炸掉的怪物坐标列表\n\tvar todo = []; // 炸弹后事件\n\tvar money = 0,\n\t\texp = 0; // 炸弹获得的金币和经验\n\n\tvar canBomb = function (x, y) {\n\t\tvar block = core.getBlock(x, y);\n\t\tif (block == null || block.disable || block.event.cls.indexOf('enemy') != 0) return false;\n\t\tvar enemy = core.material.enemys[block.event.id];\n\t\treturn enemy && !enemy.notBomb;\n\t};\n\n\tvar bomb = function (x, y) {\n\t\tif (!canBomb(x, y)) return;\n\t\tbombList.push([x, y]);\n\t\tvar id = core.getBlockId(x, y),\n\t\t\tenemy = core.material.enemys[id];\n\t\tmoney += core.getEnemyValue(enemy, 'money', x, y) || 0;\n\t\texp += core.getEnemyValue(enemy, 'exp', x, y) || 0;\n\t\tcore.push(todo, core.floors[core.status.floorId].afterBattle[x + \",\" + y]);\n\t\tcore.push(todo, enemy.afterBattle);\n\t\tcore.removeBlock(x, y);\n\t}\n\n\t// 如果要多方向可炸，把这里的false改成true\n\tif (false) {\n\t\tvar scan = core.utils.scan; // 多方向炸时默认四方向，如果要改成八方向炸可以改成 core.utils.scan2\n\t\tfor (var direction in scan) {\n\t\t\tvar delta = scan[direction];\n\t\t\tbomb(core.getHeroLoc('x') + delta.x, core.getHeroLoc('y') + delta.y);\n\t\t}\n\t} else {\n\t\t// 仅炸当前\n\t\tbomb(core.nextX(), core.nextY());\n\t}\n\n\tif (bombList.length == 0) {\n\t\tcore.playSound('操作失败');\n\t\tcore.drawTip('当前无法使用' + core.material.items[itemId].name, itemId);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n\n\tcore.playSound('炸弹');\n\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\n\t// 取消这里的注释可以炸弹后获得金币和经验\n\t// core.status.hero.money += money;\n\t// core.status.hero.exp += exp;\n\n\t// 取消这里的注释可以炸弹引发战后事件\n\t// if (todo.length > 0) core.insertAction(todo);\n\n})();",
		"canUseItemEffect": "true"
	},
	"centerFly": {
		"cls": "tools",
		"name": "中心对称飞行器",
		"text": "可以飞向当前楼层中心对称的位置",
		"useItemEffect": "core.playSound('centerFly.mp3');\ncore.clearMap('hero');\ncore.setHeroLoc('x', core.bigmap.width - 1 - core.getHeroLoc('x'));\ncore.setHeroLoc('y', core.bigmap.height - 1 - core.getHeroLoc('y'));\ncore.drawHero();\ncore.drawTip(core.material.items[itemId].name + '使用成功');",
		"canUseItemEffect": "(function () {\n\tvar toX = core.bigmap.width - 1 - core.getHeroLoc('x'),\n\t\ttoY = core.bigmap.height - 1 - core.getHeroLoc('y');\n\tvar id = core.getBlockId(toX, toY);\n\treturn id == null;\n})();"
	},
	"upFly": {
		"cls": "tools",
		"name": "上楼器",
		"text": "可以飞往楼上的相同位置",
		"useItemEffect": "(function () {\n\tvar floorId = core.floorIds[core.floorIds.indexOf(core.status.floorId) + 1];\n\tif (core.status.event.id == 'action') {\n\t\tcore.insertAction([\n\t\t\t{ \"type\": \"changeFloor\", \"loc\": [core.getHeroLoc('x'), core.getHeroLoc('y')], \"floorId\": floorId },\n\t\t\t{ \"type\": \"tip\", \"text\": core.material.items[itemId].name + '使用成功' }\n\t\t]);\n\t} else {\n\t\tcore.changeFloor(floorId, null, core.status.hero.loc, null, function () {\n\t\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t\t\tcore.replay();\n\t\t});\n\t}\n})();",
		"canUseItemEffect": "(function () {\n\tvar floorId = core.status.floorId,\n\t\tindex = core.floorIds.indexOf(floorId);\n\tif (index < core.floorIds.length - 1) {\n\t\tvar toId = core.floorIds[index + 1],\n\t\t\ttoX = core.getHeroLoc('x'),\n\t\t\ttoY = core.getHeroLoc('y');\n\t\tvar mw = core.floors[toId].width,\n\t\t\tmh = core.floors[toId].height;\n\t\tif (toX >= 0 && toX < mw && toY >= 0 && toY < mh && core.getBlock(toX, toY, toId) == null) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n})();"
	},
	"downFly": {
		"cls": "tools",
		"name": "下楼器",
		"text": "可以飞往楼下的相同位置",
		"useItemEffect": "(function () {\n\tvar floorId = core.floorIds[core.floorIds.indexOf(core.status.floorId) - 1];\n\tif (core.status.event.id == 'action') {\n\t\tcore.insertAction([\n\t\t\t{ \"type\": \"changeFloor\", \"loc\": [core.getHeroLoc('x'), core.getHeroLoc('y')], \"floorId\": floorId },\n\t\t\t{ \"type\": \"tip\", \"text\": core.material.items[itemId].name + '使用成功' }\n\t\t]);\n\t} else {\n\t\tcore.changeFloor(floorId, null, core.status.hero.loc, null, function () {\n\t\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t\t\tcore.replay();\n\t\t});\n\t}\n})();",
		"canUseItemEffect": "(function () {\n\tvar floorId = core.status.floorId,\n\t\tindex = core.floorIds.indexOf(floorId);\n\tif (index > 0) {\n\t\tvar toId = core.floorIds[index - 1],\n\t\t\ttoX = core.getHeroLoc('x'),\n\t\t\ttoY = core.getHeroLoc('y');\n\t\tvar mw = core.floors[toId].width,\n\t\t\tmh = core.floors[toId].height;\n\t\tif (toX >= 0 && toX < mw && toY >= 0 && toY < mh && core.getBlock(toX, toY, toId) == null) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n})();"
	},
	"earthquake": {
		"cls": "tools",
		"name": "地震卷轴",
		"text": "可以破坏当前层的所有墙",
		"useItemEffect": "(function () {\n\tvar indexes = [];\n\tfor (var index in core.status.thisMap.blocks) {\n\t\tvar block = core.status.thisMap.blocks[index];\n\t\tif (!block.disable && block.event.canBreak) {\n\t\t\tindexes.push(index);\n\t\t}\n\t}\n\tcore.removeBlockByIndexes(indexes);\n\tcore.redrawMap();\n\tcore.playSound('炸弹');\n\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n})();",
		"canUseItemEffect": "(function () {\n\treturn core.status.thisMap.blocks.filter(function (block) {\n\t\treturn !block.disable && block.event.canBreak;\n\t}).length > 0;\n})();"
	},
	"poisonWine": {
		"cls": "tools",
		"name": "解毒药水",
		"text": "可以解除中毒状态",
		"useItemEffect": "core.triggerDebuff('remove', 'poison');",
		"canUseItemEffect": "core.hasFlag('poison');"
	},
	"weakWine": {
		"cls": "tools",
		"name": "解衰药水",
		"text": "可以解除衰弱状态",
		"useItemEffect": "core.triggerDebuff('remove', 'weak');",
		"canUseItemEffect": "core.hasFlag('weak');"
	},
	"curseWine": {
		"cls": "tools",
		"name": "解咒药水",
		"text": "可以解除诅咒状态",
		"useItemEffect": "core.triggerDebuff('remove', 'curse');",
		"canUseItemEffect": "core.hasFlag('curse');"
	},
	"superWine": {
		"cls": "tools",
		"name": "万能药水",
		"text": "可以解除所有不良状态",
		"useItemEffect": "core.triggerDebuff('remove', ['poison', 'weak', 'curse']);",
		"canUseItemEffect": "(function() {\n\treturn core.hasFlag('poison') || core.hasFlag('weak') || core.hasFlag('curse');\n})();"
	},
	"hammer": {
		"cls": "tools",
		"name": "圣锤",
		"text": "该道具尚未被定义"
	},
	"lifeWand": {
		"cls": "tools",
		"name": "生命魔杖",
		"text": "可以恢复100点生命值",
		"useItemEvent": [
			{
				"type": "comment",
				"text": "先恢复一个魔杖（因为使用道具必须消耗一个）"
			},
			{
				"type": "function",
				"function": "function(){\ncore.addItem('lifeWand', 1);\n}"
			},
			{
				"type": "playSound",
				"name": "打开界面"
			},
			{
				"type": "input",
				"text": "请输入生命魔杖使用次数：(0-${item:lifeWand})"
			},
			{
				"type": "comment",
				"text": "【接受用户输入】弹窗输入的结果将会保存在“flag:input”中\n如果需要更多帮助，请查阅帮助文档"
			},
			{
				"type": "if",
				"condition": "flag:input<=item:lifeWand",
				"true": [
					{
						"type": "setValue",
						"name": "item:lifeWand",
						"operator": "-=",
						"value": "flag:input"
					},
					{
						"type": "setValue",
						"name": "status:hp",
						"operator": "+=",
						"value": "flag:input*100"
					},
					{
						"type": "playSound",
						"name": "回血"
					},
					"成功使用${flag:input}次生命魔杖，恢复${flag:input*100}点生命。"
				],
				"false": [
					{
						"type": "playSound",
						"name": "操作失败"
					},
					"输入不合法！"
				]
			}
		],
		"canUseItemEffect": "true"
	},
	"jumpShoes": {
		"cls": "tools",
		"name": "跳跃靴",
		"text": "能跳跃到前方两格处",
		"useItemEffect": "core.playSound(\"跳跃\");\ncore.insertAction({ \"type\": \"jumpHero\", \"loc\": [core.nextX(2), core.nextY(2)] });",
		"canUseItemEffect": "(function () {\n\tvar nx = core.nextX(2),\n\t\tny = core.nextY(2);\n\treturn nx >= 0 && nx < core.bigmap.width && ny >= 0 && ny < core.bigmap.height && core.getBlockId(nx, ny) == null;\n})();"
	},
	"skill1": {
		"cls": "constants",
		"name": "技能：二倍斩",
		"text": "可以打开或关闭主动技能二倍斩",
		"hideInReplay": true,
		"useItemEffect": "(function () {\n\tvar skillValue = 1; // 技能的flag:skill值，可用于当前开启技能的判定；对于新技能可以依次改成2，3等等\n\tvar skillNeed = 5; // 技能的需求\n\tvar skillName = '二倍斩'; // 技能的名称\n\n\tif (core.getFlag('skill', 0) != skillValue) { // 判断当前是否已经开了技能\n\t\tif (core.getStatus('mana') >= skillNeed) { // 这里要写当前能否开技能的条件判断，比如魔力值至少要多少\n\t\t\tcore.playSound('打开界面');\n\t\t\tcore.setFlag('skill', skillValue); // 开技能1\n\t\t\tcore.setFlag('skillName', skillName); // 设置技能名\n\t\t} else {\n\t\t\tcore.playSound('操作失败');\n\t\t\tcore.drawTip('魔力不足，无法开启技能');\n\t\t}\n\t} else { // 关闭技能\n\t\tcore.setFlag('skill', 0); // 关闭技能状态\n\t\tcore.setFlag('skillName', '无');\n\t}\n})();",
		"canUseItemEffect": "true"
	},
	"wand": {
		"cls": "constants",
		"name": "技能快捷键查看",
		"text": "查看当前快捷键所对应的技能",
		"canUseItemEffect": true,
		"useItemEvent": [],
		"useItemEffect": "core.insertCommonEvent('查看技能')"
	},
	"pack": {
		"cls": "items",
		"name": "钱袋",
		"itemEffect": "core.status.hero.money += 500",
		"itemEffectTip": "，金币+500"
	},
	"I334": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I335": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I336": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I337": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I338": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I339": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I340": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I341": {
		"cls": "items",
		"name": "大银块",
		"canUseItemEffect": "true"
	},
	"I342": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I343": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I344": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"orangeGem": {
		"cls": "items",
		"name": "橙宝石",
		"canUseItemEffect": "true",
		"text": "，增加5雷击",
		"itemEffectTip": "，增加5雷击",
		"itemEffect": "core.status.hero.top += 5;"
	},
	"pinkGem": {
		"cls": "items",
		"name": "粉宝石（废稿）",
		"canUseItemEffect": "true",
		"text": "，增加5空袭",
		"itemEffectTip": "，增加5空袭"
	},
	"medal": {
		"cls": "items",
		"name": "勋章",
		"canUseItemEffect": "true",
		"text": "，全属性提升",
		"itemEffectTip": "，全属性提升",
		"useItemEvent": [
			{
				"type": "playSound",
				"name": "xinxinbazhe.mp3"
			}
		],
		"itemEffect": "core.status.hero.hpmax += 50;\ncore.status.hero.hp += 50;\ncore.status.hero.mana += 10;\ncore.status.hero.atk += 1;\ncore.status.hero.top += 5;\ncore.status.hero.mdef += 5;"
	},
	"ft17": {
		"cls": "equips",
		"name": "雷诺FT17",
		"canUseItemEffect": "true",
		"text": "攻10，穿5装3。",
		"equip": {
			"type": 0,
			"value": {
				"atk": 10,
				"ap": 5,
				"arm": 5
			},
			"percentage": {}
		}
	},
	"h35": {
		"cls": "equips",
		"name": "哈奇开斯H35",
		"canUseItemEffect": "true",
		"text": "攻+20，穿20装5",
		"equip": {
			"type": 0,
			"value": {
				"atk": 20,
				"arm": 5,
				"ap": 20
			},
			"percentage": {}
		}
	},
	"s35": {
		"cls": "equips",
		"name": "索玛S35",
		"canUseItemEffect": "true",
		"text": "废稿"
	},
	"crusades": {
		"cls": "equips",
		"name": "十字军巡洋坦克",
		"canUseItemEffect": "true"
	},
	"valentine": {
		"cls": "equips",
		"name": "瓦伦丁步兵坦克",
		"canUseItemEffect": "true"
	},
	"cromwell": {
		"cls": "equips",
		"name": "克伦威尔巡洋坦克",
		"canUseItemEffect": "true"
	},
	"matilda": {
		"cls": "equips",
		"name": "玛蒂尔达步兵坦克",
		"canUseItemEffect": "true",
		"equip": {
			"type": 0,
			"value": {
				"atk": 150,
				"ap": 50,
				"arm": 78
			},
			"percentage": {}
		},
		"text": "攻+150，穿50，装78。\n被动技能：\n压制：敌方地面部队无法击穿我方装甲时，受到伤害额外减少20%。\n迟缓：未击穿敌方装甲时，敌人额外先攻5回合。"
	},
	"churchillmk3": {
		"cls": "equips",
		"name": "丘吉尔MK3型",
		"canUseItemEffect": "true"
	},
	"m3grant": {
		"cls": "equips",
		"name": "M3格兰特",
		"canUseItemEffect": "true"
	},
	"m4a1": {
		"cls": "equips",
		"name": "M4A1谢尔曼",
		"canUseItemEffect": "true"
	},
	"m4a2": {
		"cls": "equips",
		"name": "M4A2谢尔曼",
		"canUseItemEffect": "true"
	},
	"m4a3": {
		"cls": "equips",
		"name": "M4A3谢尔曼",
		"canUseItemEffect": "true"
	},
	"m4a3e2": {
		"cls": "equips",
		"name": "M4A3E2“巨无霸”",
		"canUseItemEffect": "true"
	},
	"firefly": {
		"cls": "equips",
		"name": "谢尔曼“萤火虫”",
		"canUseItemEffect": "true"
	},
	"a34comet": {
		"cls": "equips",
		"name": "A34彗星",
		"canUseItemEffect": "true"
	},
	"churchillmk7": {
		"cls": "equips",
		"name": "丘吉尔MK7型",
		"canUseItemEffect": "true"
	},
	"m26pershing": {
		"cls": "equips",
		"name": "M26潘兴",
		"canUseItemEffect": "true",
		"text": "攻+200%，穿120装90。被动技能待定。"
	},
	"classe": {
		"cls": "equips",
		"name": "E级驱逐舰",
		"canUseItemEffect": "true",
		"text": "攻+100，雷击+100，鱼雷管+3。闪避鱼雷数+1。\n被动：\n反潜：对潜艇攻击时，每回合额外造成一次等同于0.1倍攻击力的伤害。",
		"equip": {
			"type": 1,
			"value": {
				"tpn": 3,
				"top": 100,
				"dod": 1,
				"atk": 100
			},
			"percentage": {}
		}
	},
	"mahan": {
		"cls": "equips",
		"name": "马汉级驱逐舰",
		"canUseItemEffect": "true",
		"text": "攻+120，雷击+150，鱼雷管+3，闪避鱼雷数+2。\n被动：\n反潜：对潜艇攻击时，每回合额外造成一次等同于攻击力的伤害。\n哑弹：发射的鱼雷不会爆炸（神剧难度无效）。",
		"equip": {
			"type": 1,
			"value": {
				"tpn": 3,
				"top": 150,
				"dod": 2,
				"atk": 120
			},
			"percentage": {}
		}
	},
	"classj": {
		"cls": "equips",
		"name": "J级驱逐舰",
		"canUseItemEffect": "true"
	},
	"gridley": {
		"cls": "equips",
		"name": "格里德利级驱逐舰",
		"canUseItemEffect": "true"
	},
	"classv": {
		"cls": "equips",
		"name": "V级驱逐舰",
		"canUseItemEffect": "true"
	},
	"flecher": {
		"cls": "equips",
		"name": "弗莱彻级驱逐舰",
		"canUseItemEffect": "true"
	},
	"edinburgh": {
		"cls": "equips",
		"name": "轻巡·爱丁堡号",
		"canUseItemEffect": "true",
		"text": "攻200，雷击+100，鱼雷管+2。",
		"equip": {
			"type": 2,
			"value": {
				"tpn": 2,
				"top": 100,
				"atk": 200
			},
			"percentage": {}
		}
	},
	"sheffield": {
		"cls": "equips",
		"name": "轻巡·谢菲尔德号",
		"canUseItemEffect": "true",
		"text": "攻+150，雷击+50，鱼雷管+1。\n"
	},
	"norfolk": {
		"cls": "equips",
		"name": "重巡·诺福克号",
		"canUseItemEffect": "true"
	},
	"dorsetshire": {
		"cls": "equips",
		"name": "重巡·多塞特郡号",
		"canUseItemEffect": "true"
	},
	"benson": {
		"cls": "equips",
		"name": "本森级驱逐舰",
		"canUseItemEffect": "true"
	},
	"cleveland": {
		"cls": "equips",
		"name": "轻巡·克利夫兰号",
		"canUseItemEffect": "true"
	},
	"hood": {
		"cls": "equips",
		"name": "胡德号战列巡洋舰",
		"canUseItemEffect": "true"
	},
	"warspite": {
		"cls": "equips",
		"name": "厌战号战列舰",
		"canUseItemEffect": "true",
		"text": "攻+500。闪避鱼雷数-1。\n每3回合额外发射一轮主炮，对敌方水面战舰造成1倍攻击力的伤害。",
		"equip": {
			"type": 3,
			"value": {
				"atk": 500,
				"dod": -1
			},
			"percentage": {}
		}
	},
	"kinggeorge5": {
		"cls": "equips",
		"name": "乔治五世号战列舰",
		"canUseItemEffect": "true"
	},
	"northcarolina": {
		"cls": "equips",
		"name": "北卡罗莱纳号战列舰",
		"canUseItemEffect": "true"
	},
	"iowa": {
		"cls": "equips",
		"name": "衣阿华级战列舰",
		"canUseItemEffect": "true"
	},
	"illustrious": {
		"cls": "equips",
		"name": "光辉号航空母舰",
		"canUseItemEffect": "true",
		"text": "舰载机：海喷火MK2、火把式攻击机、梭鱼式鱼雷机。闪避鱼雷数-2，且装备时主角攻击力减少200点。\n被动：装甲航母：在海上遭遇敌方空袭时，减少15%炸弹伤害。遭遇非战列舰的水面舰艇攻击时，伤害减少20%。"
	},
	"eagle": {
		"cls": "equips",
		"name": "鹰号航空母舰",
		"canUseItemEffect": "true",
		"text": "舰载机：海飓风MK1、贼鸥式轰炸机、剑鱼式鱼雷机。闪避鱼雷数-2。\n受到敌方鱼雷伤害增加20%。",
		"equip": {
			"type": 3,
			"value": {
				"dod": -2,
				"atk": 60
			},
			"percentage": {}
		}
	},
	"raider": {
		"cls": "equips",
		"name": "突击者号航空母舰",
		"canUseItemEffect": "true",
		"text": "舰载机：F4F-3野猫战斗机、SBD-3无畏式轰炸机、TBD蹂躏者鱼雷机，闪避鱼雷数-2\n此航母的SBD俯冲轰炸机炸弹伤害增加50%，TBD鱼雷机的鱼雷伤害减少50%。"
	},
	"essex": {
		"cls": "equips",
		"name": "埃塞克斯号航空母舰",
		"canUseItemEffect": "true",
		"text": "属性：攻击+5%，雷击+10%\n舰载机：F6F-3地狱猫战斗机、SB2C地狱俯冲者轰炸机、TBF复仇者鱼雷机。\n对敌方飞机造成的伤害＋50%，对战列舰造成的鱼雷伤害增加70%。"
	},
	"enterprise": {
		"cls": "equips",
		"name": "企业号航空母舰",
		"canUseItemEffect": "true",
		"text": "属性：攻击力+10%，后勤+20%\n舰载机：F4U-4B海盗式战斗机、SB2C地狱俯冲者轰炸机、TBF复仇者鱼雷机\n被动：\n幸运E：企业号的舰载机造成的一切伤害×250%，且我方遭遇致死攻击时，进入无敌状态，锁定血量为1，持续3回合。"
	},
	"wrestler": {
		"cls": "equips",
		"name": "斗士MK2型",
		"canUseItemEffect": "true",
		"text": "主武器：4×7.62mm机枪\n攻+25。",
		"equip": {
			"type": 4,
			"value": {
				"atk": 25
			},
			"percentage": {}
		}
	},
	"hurricanemk1": {
		"cls": "equips",
		"name": "飓风MK1",
		"canUseItemEffect": "true",
		"text": "主武器：8×7.62mm机枪\n攻+40。每回合对轰炸机追加80点伤害。",
		"equip": {
			"type": 4,
			"value": {
				"atk": 40
			},
			"percentage": {}
		}
	},
	"spitfiremk1": {
		"cls": "equips",
		"name": "喷火MK1",
		"canUseItemEffect": "true",
		"text": "主武器：8×7.62mm机枪\n攻击+40，与战斗机作战时，每回合额外追加10%伤害",
		"equip": {
			"type": 4,
			"value": {
				"atk": 40
			},
			"percentage": {}
		}
	},
	"p40e": {
		"cls": "equips",
		"name": "P40E战鹰",
		"canUseItemEffect": "true"
	},
	"hurricanemk2": {
		"cls": "equips",
		"name": "飓风MK2",
		"canUseItemEffect": "true"
	},
	"spitfiremk2": {
		"cls": "equips",
		"name": "喷火MK2",
		"canUseItemEffect": "true"
	},
	"f4f3": {
		"cls": "equips",
		"name": "F4F-3野猫",
		"canUseItemEffect": "true"
	},
	"f6f5": {
		"cls": "equips",
		"name": "F6F-5地狱猫",
		"canUseItemEffect": "true"
	},
	"spitfiremk5": {
		"cls": "equips",
		"name": "喷火MK5",
		"canUseItemEffect": "true"
	},
	"spitfiremk16": {
		"cls": "equips",
		"name": "喷火MK16",
		"canUseItemEffect": "true"
	},
	"seafury": {
		"cls": "equips",
		"name": "海怒",
		"canUseItemEffect": "true"
	},
	"f4u": {
		"cls": "equips",
		"name": "F4U-4B海盗",
		"canUseItemEffect": "true"
	},
	"p51d": {
		"cls": "equips",
		"name": "P51D野马",
		"canUseItemEffect": "true",
		"text": "攻+100%.挂载：6×127mm火箭弹。\n对地和对舰攻击时抢先发射2轮火箭弹，每发火箭弹伤害为0.3倍攻击力。\n被动：长途护航——与战略轰炸机一同出击时，受到的所有战斗伤害减少30%。\n     制空霸权——与敌方战斗机战斗时，每回合额外攻击2次。"
	},
	"skua": {
		"cls": "equips",
		"name": "贼鸥式轰炸机",
		"canUseItemEffect": "true",
		"text": "攻+20。挂载：1×500磅炸弹。\n每4个回合投弹，造成2倍攻击力的伤害。\n被动技能：\n俯冲轰炸：攻击军舰时，炸弹造成的伤害提升50%。",
		"equip": {
			"type": 5,
			"value": {
				"atk": 20
			},
			"percentage": {}
		}
	},
	"sbd3": {
		"cls": "equips",
		"name": "SBD-3无畏",
		"canUseItemEffect": "true"
	},
	"beautifighter": {
		"cls": "equips",
		"name": "英俊战士MK6C",
		"canUseItemEffect": "true",
		"text": "攻击+300。挂载：8×RP-3火箭弹。攻击轰炸机时增伤30%。\n攻击非空军敌人时率先发射1轮火箭弹，每发火箭弹的伤害为0.2倍攻击力。\n被动：机载雷达：敌人的“先攻”技能无效且我方额外进行2次普通攻击。",
		"equip": {
			"type": 5,
			"value": {
				"atk": 300
			},
			"percentage": {}
		}
	},
	"p38": {
		"cls": "equips",
		"name": "P38闪电",
		"canUseItemEffect": "true"
	},
	"torch": {
		"cls": "equips",
		"name": "火把式攻击机",
		"canUseItemEffect": "true",
		"text": "攻＋250。挂载：16×RP3火箭弹、1×500磅炸弹。遭遇敌方战斗机或重型战斗机时额外受到20%伤害。\n攻击非空军敌人时，率先发射一轮火箭弹，每发火箭弹伤害为0.2倍攻击力。\n每4回合投掷一次炸弹，每枚炸弹伤害为2倍攻击力。",
		"equip": {
			"type": 5,
			"value": {
				"atk": 250
			},
			"percentage": {}
		}
	},
	"mosquito": {
		"cls": "equips",
		"name": "蚊式战斗机",
		"canUseItemEffect": "true"
	},
	"p47d": {
		"cls": "equips",
		"name": "P47D雷电",
		"canUseItemEffect": "true"
	},
	"sb2c": {
		"cls": "equips",
		"name": "SB2C地狱俯冲者",
		"canUseItemEffect": "true"
	},
	"tempest": {
		"cls": "equips",
		"name": "暴风式攻击机",
		"canUseItemEffect": "true"
	},
	"p61": {
		"cls": "equips",
		"name": "P61黑寡妇",
		"canUseItemEffect": "true"
	},
	"swordfish": {
		"cls": "equips",
		"name": "剑鱼式鱼雷机",
		"canUseItemEffect": "true",
		"text": "无属性加成。挂载：1×鱼雷 或 3×200磅炸弹\n对舰攻击时，每5回合投放一枚鱼雷。对地攻击时，每5回合投放一次炸弹，每颗炸弹伤害为0.6倍攻击力.",
		"equip": {
			"type": 6,
			"value": {},
			"percentage": {}
		}
	},
	"tbd": {
		"cls": "equips",
		"name": "TBD蹂躏者",
		"canUseItemEffect": "true",
		"text": "攻+5。挂载：1×鱼雷或12×50磅炸弹\n对舰攻击时，每5回合投放1枚鱼雷。对地攻击时，每5回合投放一轮炸弹，每颗炸弹伤害为0.1倍攻击力\n哑弹：投放的鱼雷不会爆炸（神剧难度无效）"
	},
	"blenheim": {
		"cls": "equips",
		"name": "布伦海姆轰炸机",
		"canUseItemEffect": "true"
	},
	"b25": {
		"cls": "equips",
		"name": "B25米切尔",
		"canUseItemEffect": "true"
	},
	"barracuda": {
		"cls": "equips",
		"name": "梭鱼式轰炸机",
		"canUseItemEffect": "true"
	},
	"tbf": {
		"cls": "equips",
		"name": "TBF复仇者",
		"canUseItemEffect": "true"
	},
	"a26": {
		"cls": "equips",
		"name": "B26入侵者",
		"canUseItemEffect": "true"
	},
	"sterling": {
		"cls": "equips",
		"name": "斯特林MK1",
		"canUseItemEffect": "true"
	},
	"b17": {
		"cls": "equips",
		"name": "B17空中堡垒",
		"canUseItemEffect": "true"
	},
	"b24": {
		"cls": "equips",
		"name": "B24解放者",
		"canUseItemEffect": "true"
	},
	"lancaster": {
		"cls": "items",
		"name": "兰开斯特轰炸机",
		"canUseItemEffect": "true"
	},
	"b29": {
		"cls": "equips",
		"name": "B29超级空中堡垒",
		"canUseItemEffect": "true",
		"text": "攻＋250.挂载：20×250磅炸弹.\n每10回合投掷1轮炸弹，每颗炸弹伤害为1倍攻击力。\n被动：战略轰炸——减免80%高射炮伤害，自身炸弹伤害减少70%。无法在海上发挥任何战力。\n     ？？？——涉及最高级军事机密，无法查看该技能详情。"
	},
	"tea": {
		"cls": "tools",
		"name": "下午茶",
		"canUseItemEffect": "core.status.hero.hp < core.status.hero.hpmax",
		"text": "英式下午茶，能让人的精神得到放松。\n饮用后恢复25%血量。快捷键8。",
		"useItemEvent": [
			{
				"type": "animate",
				"name": "heal",
				"loc": "hero",
				"async": true
			}
		],
		"useItemEffect": "if (hero.hp > hero.hpmax * 3 / 4) core.drawHeroAnimate('hpfull');\ncore.status.hero.hp += hero.hpmax * 0.25;"
	},
	"cola": {
		"cls": "tools",
		"name": "可乐",
		"canUseItemEffect": "core.status.hero.hp < core.status.hero.hpmax",
		"text": "美国大兵的最爱，不过喝太多了会导致一些健康问题。\n饮用后恢复50%血量。",
		"useItemEvent": [
			{
				"type": "animate",
				"name": "heal",
				"loc": "hero",
				"async": true
			}
		],
		"useItemEffect": "if (hero.hp > hero.hpmax * 1 / 2) core.drawHeroAnimate('hpfull');\ncore.status.hero.hp += hero.hpmax * 0.5;"
	},
	"I520": {
		"cls": "items",
		"name": "银屑",
		"canUseItemEffect": "true",
		"text": "，黄金+5",
		"itemEffectTip": "，黄金+5",
		"itemEffect": "core.status.hero.money += 5;"
	},
	"I521": {
		"cls": "items",
		"name": "金屑",
		"canUseItemEffect": "true",
		"text": "，黄金+10",
		"itemEffectTip": "，黄金+10",
		"itemEffect": "core.status.hero.money += 10;"
	},
	"I522": {
		"cls": "items",
		"name": "银块",
		"canUseItemEffect": "true"
	},
	"I523": {
		"cls": "items",
		"name": "金块",
		"canUseItemEffect": "true"
	},
	"I524": {
		"cls": "items",
		"name": "大金块",
		"canUseItemEffect": "true"
	},
	"red2Gem": {
		"cls": "items",
		"name": "2阶红宝石",
		"canUseItemEffect": "true",
		"text": ",攻击+2",
		"itemEffect": "core.status.hero.atk += 2;",
		"itemEffectTip": "，攻击+2",
		"useItemEffect": "core.status.hero.atk += 2;"
	},
	"red3Gem": {
		"cls": "items",
		"name": "3阶红宝石",
		"canUseItemEffect": "true"
	},
	"red4Gem": {
		"cls": "items",
		"name": "4阶红宝石",
		"canUseItemEffect": "true"
	},
	"red5Gem": {
		"cls": "items",
		"name": "5阶红宝石",
		"canUseItemEffect": "true"
	},
	"blue2Gem": {
		"cls": "items",
		"name": "2阶蓝宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.mana += 20;",
		"text": "，指挥点数+20",
		"itemEffectTip": "，指挥点+20",
		"useItemEffect": "core.status.hero.mana += 20;"
	},
	"blue3Gem": {
		"cls": "items",
		"name": "3阶蓝宝石",
		"canUseItemEffect": "true"
	},
	"blue4Gem": {
		"cls": "items",
		"name": "4阶蓝宝石",
		"canUseItemEffect": "true"
	},
	"blue5Gem": {
		"cls": "items",
		"name": "5阶蓝宝石",
		"canUseItemEffect": "true"
	},
	"green2Gem": {
		"cls": "items",
		"name": "2阶绿宝石",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.mdef += 10;",
		"text": "，后勤+10",
		"itemEffectTip": "，后勤+10",
		"useItemEffect": "core.status.hero.mdef += 10;"
	},
	"green3Gem": {
		"cls": "items",
		"name": "3阶绿宝石",
		"canUseItemEffect": "true"
	},
	"green4Gem": {
		"cls": "items",
		"name": "4阶绿宝石",
		"canUseItemEffect": "true"
	},
	"green5Gem": {
		"cls": "items",
		"name": "5阶绿宝石",
		"canUseItemEffect": "true"
	},
	"yellow2Gem": {
		"cls": "items",
		"name": "2阶黄宝石",
		"canUseItemEffect": "true",
		"text": ",血量及血限+100",
		"itemEffectTip": ",血量及血限+100",
		"itemEffect": "core.status.hero.hpmax += 100;\ncore.status.hero.hp += 100;",
		"useItemEffect": "core.status.hero.hpmax += 100;\ncore.status.hero.hp += 100;"
	},
	"yellow3Gem": {
		"cls": "items",
		"name": "3阶黄宝石",
		"canUseItemEffect": "true"
	},
	"yellow4Gem": {
		"cls": "items",
		"name": "4阶黄宝石",
		"canUseItemEffect": "true"
	},
	"yellow5Gem": {
		"cls": "items",
		"name": "5阶黄宝石",
		"canUseItemEffect": "true"
	},
	"orange2Gem": {
		"cls": "items",
		"name": "2阶橙宝石",
		"canUseItemEffect": "true"
	},
	"orange3Gem": {
		"cls": "items",
		"name": "3阶橙宝石",
		"canUseItemEffect": "true"
	},
	"orange4Gem": {
		"cls": "items",
		"name": "4阶橙宝石",
		"canUseItemEffect": "true"
	},
	"orange5Gem": {
		"cls": "items",
		"name": "5阶橙宝石",
		"canUseItemEffect": "true"
	},
	"p40c": {
		"cls": "equips",
		"name": "P40C战斧",
		"canUseItemEffect": "true",
		"text": "主武器：2×12.7mm和4×7.62mm机枪\n攻+30。挂载：2×100磅和1×500磅炸弹\n仅第2回合投弹，造成两次0.4倍攻击力的伤害和1次2倍攻击力的伤害",
		"equip": {
			"type": 4,
			"value": {
				"atk": 35
			},
			"percentage": {}
		}
	},
	"baltimore": {
		"cls": "equips",
		"name": "重巡·巴尔的摩号",
		"canUseItemEffect": "true"
	}
}