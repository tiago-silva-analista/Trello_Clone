import { BSON, ObjectSchema,Realm } from 'realm';

export class Task extends Realm.Object<Task> {
    _id!: BSON.ObjectId;
    name!: string;
    static schema: ObjectSchema = {
      name: 'Task',
      properties: {
        _id: 'objectId',
        name: {type: 'string', indexed: 'full-text'},
      },
      primaryKey: '_id',
    };
  }