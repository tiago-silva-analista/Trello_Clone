import { PropsWithChildren } from 'react';
import { RealmProvider, AppProvider, UserProvider } from '@realm/react';
import { Task } from '../models/Task';
import AnonymousLogin from '../components/AnonymousLogin';

const appId = 'trello-mjcyr';

export default function RealmCustomProvider({ children }: PropsWithChildren) {
  return (
      <AppProvider id={appId}>
        <RealmProvider
          schema={[Task]}
        >
          {children}
        </RealmProvider>
    </AppProvider>
  );
}
