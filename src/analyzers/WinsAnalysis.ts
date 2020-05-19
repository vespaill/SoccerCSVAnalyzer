import { Analyzer } from "../Summary";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";

export class WinsAnalysis implements Analyzer {
    /**
     * Defines public memeber teamName and initializes it with given argument.
     * @param teamName Name of the team to perform a wins analysis on.
     */
    constructor(public teamName: string) {}
    /**
     * Counts the number of wins by this teamName in the given MatchData array.
     * @param matches Array of MatchData tuples.
     */
    run(matches: MatchData[]): string {
        let wins = 0;
        for (let match of matches) {
            let wonHome =
                match[1] === this.teamName && match[5] === MatchResult.HomeWin;

            let wonAway =
                match[2] === this.teamName && match[5] === MatchResult.AwayWin;

            if (wonHome || wonAway) wins++;
        }
        return `Team ${this.teamName} won ${wins} games`;
    }
}
