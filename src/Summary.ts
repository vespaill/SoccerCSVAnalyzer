import { MatchData } from "./MatchData";

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string) : void;
}

/* The class summary uses composition. It doesn't really have much behavior too
   it. Instead it has references to other objects. Whenever we call a method on
   Summary, it is going to attempt to use these objects it has references to
   (Analyzer and OutputTarget) in order to do the heavy lifting. Summary is like
   a coordinator. The advantage to composition is that we can freely swap out
   the Analyzer or OutpuTarget for different kinds and get different kind of
   reports. */
export class Summary {
    constructor(
        public analyzer: Analyzer,
        public outputTarget: OutputTarget
    ) {}

    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}

// new Summary(new WinsAnalysis(), new ConsoleReport());