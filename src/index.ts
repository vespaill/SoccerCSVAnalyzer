import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

/* Use MatchReader's static method 'fromCsv' to create a new MatchReader object
   having a CSV reader with the given file. */
let matchReader = MatchReader.fromCsv("football.csv");

/* Similarly, invoke this static method from class Summary to create a new
   summary object for team 'Man United'. */
let summary = Summary.winsAnalysisWithHtmlReport("Man United");

/* Execute the reader associated with matchReader in order to read and parse the
   associated file and store it in a 'matches' array. */
matchReader.load();

/* Build and print a summary report with the given matches. */
summary.buildAndPrintReport(matchReader.matches);
