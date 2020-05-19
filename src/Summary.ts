import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

/**
 * The class summary uses composition. It doesn't really have much behavior to
 * it. Instead it has references to other objects. Whenever we call a method on
 * Summary, it is going to attempt to use these objects it has references to
 * (Analyzer and OutputTarget) in order to do the heavy lifting. Summary is like
 * a coordinator. The advantage to composition is that we can freely swap out
 * the Analyzer or OutpuTarget for different kinds and get different kind of
 * reports.
 */
export class Summary {
    /**
     * Defines public members analyzer and outputTarget and initializes them
     * with the given arguments.
     * @param analyzer Object satisfying the Analyzer interface.
     * @param outputTarget Object satisfying the outputTarget interface.
     */
    constructor(
        public analyzer: Analyzer,
        public outputTarget: OutputTarget
    ) {}
    /**
     * Returns a Summary the given team.
     * @param team Name of the team to perform summary on.
     */
    static winsAnalysisWithHtmlReport(team: string): Summary {
        return new Summary(
            new WinsAnalysis(team),
            new HtmlReport()
        );
    }
    /**
     * Runs the analyzer and outputTarget associated with this instance of
     * Summary on the given array of MatchData.
     * @param matches Array of MatchData Tuples.
     */
    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}

// new Summary(new WinsAnalysis(), new ConsoleReport());
