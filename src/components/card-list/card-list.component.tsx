// import { Component } from "react";
import Card from "../card/card.component";
import './card-list.styles.css';
import { Monster } from "../../App";

type cardListProps = {
    monsters: Monster[];
}

const CardList = (props: cardListProps) => {
    const { monsters } = props;
    return <div className="card-list">
    {
        monsters.map((monster) => {
            return <Card monster={monster} />
        })
    }
    </div>
}

/* class CardList extends Component {
    render(){
        const { monsters } = this.props;
        return <div className="card-list">
        {
            monsters.map((monster) => {
                return <Card monster={monster} />
            })
        }
        </div>
    }
} */

export default CardList;