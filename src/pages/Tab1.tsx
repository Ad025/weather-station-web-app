import { IonContent, IonGrid,IonButton, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter, IonMenuButton, IonTabButton, IonButtons, IonIcon, IonSearchbar, IonCol, IonRow, IonImg } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
// import Navbar from '../components/Navbar/Navbar';
import './Tab1.css';
import React, { useState } from 'react';
import { personCircle, helpCircle, search } from 'ionicons/icons';


const Tab1: React.FC = () => {
const [searchText, setSearchText] = useState('');
  return (
    <IonPage>
      <IonHeader>
        {/* <IonToolbar>
          {/* <IonTitle>Tab1</IonTitle> */}
          {/* <IonSearchbar slot="end" value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>


        </IonToolbar> */} 
      </IonHeader>

      <IonContent fullscreen>
        

         
        <IonGrid >
        <IonRow>
            <IonCol >
            <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="always"></IonSearchbar>

            </IonCol>
            
        </IonRow> 

          <IonRow >
            <IonCol >
              {/* <IonImg height="tall" src="http://placehold.it/75"></IonImg> */}
              <img src="http://placehold.it/800"/>
            </IonCol>
            <IonCol><img src="http://placehold.it/800"/></IonCol>
          </IonRow> 
          <IonRow>
            <IonCol><img src="http://placehold.it/800"/></IonCol>
            <IonCol><img src="http://placehold.it/800"/></IonCol>
          </IonRow>
        </IonGrid>





      {/* <IonButton>Click MEEEE      
      <script>
        const btn = document.querySelector('IonButton');
        btn.addEventListener('click'), () {'>'} {
          console.log('Clicked!sss')
        });
        
      </script>

      </IonButton> */}

    
      
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 1 page" /> */}
  
      </IonContent>

      <IonFooter>
        <IonToolbar>
        <IonButtons slot="secondary">
          <IonButton fill="solid">
            <IonIcon slot="start" icon={personCircle} />
            Contact
          </IonButton>
        </IonButtons>
        <IonTitle>Solid Buttons</IonTitle>
        <IonButtons slot="primary">
          <IonButton fill="solid" color="secondary">
            Help
            <IonIcon slot="end" icon={helpCircle} />
          </IonButton>
        </IonButtons>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Tab1;

function setSearchText(arg0: string): void {
  throw new Error('Function not implemented.');
}

