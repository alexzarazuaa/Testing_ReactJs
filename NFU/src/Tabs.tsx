
import React from 'react';
import { Redirect,Route } from 'react-router-dom';
import {     
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonRouterOutlet,    
} from '@ionic/react';

import Home from './pages/Home';
import Events from './pages/Events';
//import Details from './pages/Details';
import Create from './pages/create/Create';
import { home, people, addCircle,barbellSharp } from 'ionicons/icons';
import Instalaciones from './pages/Instalaciones';
import Instalacion from './pages/instalacion';

const Tabs: React.FC = () => {
        
    return (
        <IonTabs>
        <IonRouterOutlet>
          <Route path="/app/home" component={Home} exact={true} />
          <Route path="/app/events" component={Events} exact={true} />
          <Route path="/app/instalaciones" component={Instalaciones} />   
          <Route path="/app/instalacion/:id" component={Instalacion}/>   
          <Route path="/app/create" component={Create} />          
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/app/home">
            <IonIcon icon={home} />
            <IonLabel>HOME</IonLabel>
          </IonTabButton>
          <IonTabButton tab="events" href="/app/events">
            <IonIcon icon={people} />
            <IonLabel>EVENTS</IonLabel>
          </IonTabButton>
          <IonTabButton tab="instalaciones" href="/app/instalaciones">
            <IonIcon icon={barbellSharp} />
            <IonLabel>Instalaciones</IonLabel>
          </IonTabButton>
          <IonTabButton tab="create" href="/app/create">
            <IonIcon icon={addCircle} />
            <IonLabel>Create Event</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>      
   
    );
};

export default Tabs;