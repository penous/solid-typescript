"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Restaurant_1 = require("./classes/Restaurant");
const Oven_1 = require("./classes/Oven");
const Stove_1 = require("./classes/Stove");
//Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...
let bakery = new Restaurant_1.Restaurant('Bakery', new Oven_1.Oven());
bakery.cook('cookies');
let crepery = new Restaurant_1.Restaurant('Crepery', new Stove_1.Stove());
crepery.cook('crepes');
