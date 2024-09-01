import { createRealmContext} from '@realm/react'
import  { Task } from '../models/Task';
import { ObjectSchema } from 'realm';


export const TaskRealmContext = createRealmContext({schema:[Task]});
