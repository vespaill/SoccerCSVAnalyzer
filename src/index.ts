import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";

let csvFileReader = new CsvFileReader("football.csv");
let matchReader = new MatchReader(csvFileReader);
matchReader.load();

let summary = new Summary(new WinsAnalysis("Man United"), new ConsoleReport());

summary.buildAndPrintReport(matchReader.matches);