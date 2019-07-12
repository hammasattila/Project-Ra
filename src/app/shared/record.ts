enum RecordType { income, expense };

export interface Record {
    //$key: string;
    type: RecordType;
    value: number;
    name: string;
    from: string;
    comment: string;
}