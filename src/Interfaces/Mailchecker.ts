export default interface IMailchecker {
    success: boolean;
    score: string;
    rules: {
        score: number;
        description: string;
    }[];
    report: string;
}
