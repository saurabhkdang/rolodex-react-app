// import { Component } from "react";
import './card.styles.css';
import { Monster } from '../../App';

type cardProps = {
    monster: Monster;
}

const Card = (props: cardProps) => {
    const {id, name, email} = props.monster;
    return (
        <div className="card-container" key={id}>
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`${name}`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

/* class Card extends Component {
    render() {
        const {id, name, email} = this.props.monster;
        return (
            <div className="card-container" key={id}>
                <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`${name}`} /> 
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }
} */

export default Card;