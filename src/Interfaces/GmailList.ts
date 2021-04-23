export default interface IGmailList {
    messages: {
        id: string;
        threadId: string;
    }[];
    nextPageToken: string;
    resultSizeEstimate: number;
}
