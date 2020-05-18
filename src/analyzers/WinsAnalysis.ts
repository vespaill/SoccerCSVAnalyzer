import { Analyzer } from "../Summary";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";

export class WinsAnalysis implements Analyzer {
    constructor(public teamName: string) {}

    run(matches: MatchData[]): string {
        let wins = 0;
        for (let match of matches) {
            let wonHome =
                match[1] === this.teamName && match[5] === MatchResult.HomeWin;

            let wonAway =
                match[2] === this.teamName && match[5] === MatchResult.AwayWin;

            if (wonHome || wonAway) wins++;
        }
        return `${this.teamName} won ${wins} games`;
    }
}
