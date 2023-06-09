import Card from '../components/Card';

export default function Cards(props) {
   
   return <div>
      {props.characters.map(({id, name, status, species, gender, origin, image}) =>(
         //e desestructurado
         <Card 
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={props.onClose}
         />
      )
         )}
   </div>;
}
