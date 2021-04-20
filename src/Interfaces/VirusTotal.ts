export default interface VirusTotal {
    filescan_id: string | null;
    permalink: string;
    positives: number;
    resource: string;
    response_code: number;
    scan_date: number;
    scan_id: string;
    total: number;
    url: string;
    verbose_msg: string;
    scans?: {
        "CMC Threat Intelligence": {
            detected: boolean;
            result: string;
        };
        "VX Vault": {
            detected: boolean;
            result: string;
        };
        Armis: {
            detected: boolean;
            result: string;
        };
        "Comodo Valkyrie Verdict": {
            detected: boolean;
            result: string;
        };
        PhishLabs: {
            detected: boolean;
            result: string;
        };
        K7AntiVirus: {
            detected: boolean;
            result: string;
        };
        "CINS Army": {
            detected: boolean;
            result: string;
        };
        Cyren: {
            detected: boolean;
            result: string;
        };
        Quttera: {
            detected: boolean;
            result: string;
        };
        BlockList: {
            detected: boolean;
            result: string;
        };
        OpenPhish: {
            detected: boolean;
            result: string;
        };
        "Feodo Tracker": {
            detected: boolean;
            result: string;
        };
        "Web Security Guard": {
            detected: boolean;
            result: string;
        };
        Scantitan: {
            detected: boolean;
            result: string;
        };
        AlienVault: {
            detected: boolean;
            result: string;
        };
        Sophos: {
            detected: boolean;
            result: string;
        };
        Phishtank: {
            detected: boolean;
            result: string;
        };
        EonScope: {
            detected: boolean;
            result: string;
        };
        Cyan: {
            detected: boolean;
            result: string;
        };
        Spam404: {
            detected: boolean;
            result: string;
        };
        SecureBrain: {
            detected: boolean;
            result: string;
        };
        "Hoplite Industries": {
            detected: boolean;
            result: string;
        };
        AutoShun: {
            detected: boolean;
            result: string;
        };
        Rising: {
            detected: boolean;
            result: string;
        };
        Fortinet: {
            detected: boolean;
            result: string;
        };
        "alphaMountain.ai": {
            detected: boolean;
            result: string;
        };
        "Virusdie External Site Scan": {
            detected: boolean;
            result: string;
        };
        "Artists Against 419": {
            detected: boolean;
            result: string;
        };
        "Google Safebrowsing": {
            detected: boolean;
            result: string;
        };
        ADMINUSLabs: {
            detected: boolean;
            result: string;
        };
        CyberCrime: {
            detected: boolean;
            result: string;
        };
        CRDF: {
            detected: boolean;
            result: string;
        };
        Trustwave: {
            detected: boolean;
            result: string;
        };
        "AICC (MONITORAPP)": {
            detected: boolean;
            result: string;
        };
        CyRadar: {
            detected: boolean;
            result: string;
        };
        "Dr.Web": {
            detected: boolean;
            result: string;
        };
        Emsisoft: {
            detected: boolean;
            result: string;
        };
        Webroot: {
            detected: boolean;
            result: string;
        };
        Avira: {
            detected: boolean;
            result: string;
        };
        "Cisco Talos IP Blacklist": {
            detected: boolean;
            result: string;
        };
        securolytics: {
            detected: boolean;
            result: string;
        };
        "Antiy-AVL": {
            detected: boolean;
            result: string;
        };
        "AegisLab WebGuard": {
            detected: boolean;
            result: string;
        };
        "Quick Heal": {
            detected: boolean;
            result: string;
        };
        "CLEAN MX": {
            detected: boolean;
            result: string;
        };
        DNS8: {
            detected: boolean;
            result: string;
        };
        "benkow.cc": {
            detected: boolean;
            result: string;
        };
        EmergingThreats: {
            detected: boolean;
            result: string;
        };
        "Yandex Safebrowsing": {
            detected: boolean;
            result: string;
            detail: "http://yandex.com/infected?l10n=en&url=https://projectl.be/";
        };
        MalwareDomainList: {
            detected: boolean;
            result: string;
            detail: "http://www.malwaredomainlist.com/mdl.php?search=projectl.be";
        };
        Lumu: {
            detected: boolean;
            result: string;
        };
        zvelo: {
            detected: boolean;
            result: string;
        };
        Kaspersky: {
            detected: boolean;
            result: string;
        };
        "Sucuri SiteCheck": {
            detected: boolean;
            result: string;
        };
        "desenmascara.me": {
            detected: boolean;
            result: string;
        };
        URLhaus: {
            detected: boolean;
            result: string;
        };
        PREBYTES: {
            detected: boolean;
            result: string;
        };
        StopForumSpam: {
            detected: boolean;
            result: string;
        };
        Blueliv: {
            detected: boolean;
            result: string;
        };
        Netcraft: {
            detected: boolean;
            result: string;
        };
        ZeroCERT: {
            detected: boolean;
            result: string;
        };
        "Phishing Database": {
            detected: boolean;
            result: string;
        };
        MalwarePatrol: {
            detected: boolean;
            result: string;
        };
        MalBeacon: {
            detected: boolean;
            result: string;
        };
        Sangfor: {
            detected: boolean;
            result: string;
        };
        IPsum: {
            detected: boolean;
            result: string;
        };
        Spamhaus: {
            detected: boolean;
            result: string;
        };
        Malwared: {
            detected: boolean;
            result: string;
        };
        BitDefender: {
            detected: boolean;
            result: string;
        };
        GreenSnow: {
            detected: boolean;
            result: string;
        };
        "G-Data": {
            detected: boolean;
            result: string;
        };
        StopBadware: {
            detected: boolean;
            result: string;
        };
        "SCUMWARE.org": {
            detected: boolean;
            result: string;
        };
        "malwares.com URL checker": {
            detected: boolean;
            result: string;
        };
        NotMining: {
            detected: boolean;
            result: string;
        };
        "Forcepoint ThreatSeeker": {
            detected: boolean;
            result: string;
        };
        Certego: {
            detected: boolean;
            result: string;
        };
        ESET: {
            detected: boolean;
            result: string;
        };
        Threatsourcing: {
            detected: boolean;
            result: string;
        };
        MalSilo: {
            detected: boolean;
            result: string;
        };
        Nucleon: {
            detected: boolean;
            result: string;
        };
        "BADWARE.INFO": {
            detected: boolean;
            result: string;
        };
        ThreatHive: {
            detected: boolean;
            result: string;
        };
        FraudScore: {
            detected: boolean;
            result: string;
        };
        Tencent: {
            detected: boolean;
            result: string;
        };
        "Bfore.Ai PreCrime": {
            detected: boolean;
            result: string;
        };
        "Baidu-International": {
            detected: boolean;
            result: string;
        };
    };
}
