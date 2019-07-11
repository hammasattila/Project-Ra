export class Record {
  type: RecordType = null;
  value: number = 0;
  name: string = '';
  from: string = '';
  comment: string = '';
}

enum RecordType { income, expense };