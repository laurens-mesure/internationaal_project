export default interface Gmail {
    id: string;
    threadId: string;
    labelIds: string[];
    snippet: string;
    sizeEstimate: number;
    raw: string;
    historyId: string;
    internalDate: Date;
}
