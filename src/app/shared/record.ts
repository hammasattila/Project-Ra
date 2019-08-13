export enum RecordType { income, expense };
export interface Record {
    type: RecordType;
    value: number;
    name: string;
    from: string;
    comment: string;
}