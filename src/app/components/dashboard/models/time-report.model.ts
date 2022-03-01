interface TimeReport {
    title: TimeReportTypes;
    timeframes: Timeframes
}

type TimeReportTypes = "Work" | "Play" | "Study" | "Exercise" | "Social" | "Self Care";

interface Timeframes {
    daily: Timeframe;
    weekly: Timeframe;
    monthly: Timeframe;
}

type TimeframeType = "daily" | "weekly" | "monthly";

interface Timeframe {
    current: number;
    previous: number;

}

export {
    TimeReport,
    TimeReportTypes,
    Timeframes,
    TimeframeType,
    Timeframe
}