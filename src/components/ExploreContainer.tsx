import { IonGrid, IonRow, IonCol } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      {/* <IonGrid >
        <IonRow>
          <IonCol>ion-col</IonCol>
          <IonCol>ion-col</IonCol>
  
        </IonRow>
      </IonGrid> */}
      <strong>{name}</strong>
      <p>Website Still under development.</p>
      
      <p><b>Coming very soon</b></p>
    </div>
  );
};

export default ExploreContainer;
