import React from 'react';
import Card from './card';

const CardBlockShop = (props) => {

    const renderCards = () => (
        props.list ? 
            props.list.map(card => (
                <Card 
                    key={card._id}
                    {...card}
                    grid={props.grid}
                />
            ))
        :null
    )

    return (
        <div className="card_block_shop">
            <div>
                <div>
                    {props.list ?
                        props.list.length === 0 ?
                            <div className="no_result">
                                Sorry, no result
                            </div>
                        : renderCards()
                    :null}
                </div>
            </div>
        </div>
    )
}

export default CardBlockShop
