import { ExponentialCost, FreeCost, LinearCost } from "./api/Costs";
import { Localization } from "./api/Localization";
import { BigNumber } from "./api/BigNumber";
import { theory } from "./api/Theory";
import { Utils } from "./api/Utils";
import {ui} from "./api/ui/UI";

var id = "hackedexpidle";
var name = "Exponential Idle Hack Boiiiiiiiiii!!!!!!";
var description = "1e100 dt.";
var authors = "Gilles-Philippe Paillé";
var version = 1;

import { ExponentialCost, FreeCost, LinearCost } from "./api/Costs";
import { Localization } from "./api/Localization";
import { BigNumber } from "./api/BigNumber";
import { theory } from "./api/Theory";
import { Utils } from "./api/Utils";

var id = "my_custom_theory_id";
var name = "Exponential Idle Hack Boiiiiiiiiiii!!!";
var description = "huh dt";
var authors = "nobody";
var version = 1;

var getStartPopup = ui.createPopup({
    title: "Hacked dt",
    content: ui.createStackLayout({
        children: [
            ui.createFrame({
                ui.createButton({text: "Hacked dt value", onClicked: () => dt = 1e100()})
                ui.createButton({text: "Hacked dt power", onClicked: () => dt = dt * dt()})
                })
            });
