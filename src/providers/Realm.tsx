import Realm from 'realm';
import { PropsWithChildren } from 'react';
import {RealmProvider} from '@realm/react'
import { Task } from '../models/Task';

export default function RealmCustomProvider({children}:PropsWithChildren){
    return(
        // <RealmProvider schema={[Task]}>
        <>
            {children}
        </>
        // </RealmProvider>
        )
}