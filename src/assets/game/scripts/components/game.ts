import { _decorator, Label, Node } from "cc";
import { startGame } from "db://shared-components/shared/scripts/startup";
import Observer from "observer";

import ClassicSlot from "db://shared-classic-slot/scripts/components/classic-slot";
import { siteConfigs } from "../../../scripts/site-configs";
import { containerOptions } from "../containerOptions";
import { settings } from "../game-settings";
import "./../../../resources/i18n";

startGame(settings.name, containerOptions, siteConfigs, settings.tolgeeNamespaces);

const { ccclass, property } = _decorator;
const { observer, render, handle } = Observer;

export interface IWinInstantResult {
    betWin: number;
    bigWin: true;
}

@ccclass
@observer(settings.name)
export default class Game extends ClassicSlot {
    @property({ type: Label, visible: false, override: true })
    lblMinBet: Label = null;

    @property({ type: Label, visible: false, override: true })
    lblMaxBet: Label = null;

    @property(Node)
    lazyLoadNode: Node = null;

    override namespace = settings.name;
    override containerOptions = containerOptions;

    override async loadSymbols() {
        await super.loadSymbols();
        this.lazyLoadNode.active = true;
    }
}
