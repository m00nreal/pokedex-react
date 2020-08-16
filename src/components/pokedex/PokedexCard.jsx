import React from 'react';
import {Card, CardBody, CardImg, CardHeader, Badge, Spinner} from "reactstrap";
import {capitalize, getTypeColor} from "../../helpers/utils";

const PokeCard = ({
    id,
    image,
    name,
    abilities,
    height,
    weight,
    types,
    loading
    }) => {

    const getImage = () => {
        return image ? image : `${process.env.PUBLIC_URL}/assets/images/noimg.png`
    }
    return (
        loading ? <span>cargando</span> :
        <Card className="m-auto animate__animated animate__fadeIn">
            <CardHeader className="text-center font-weight-bolder">{ capitalize(name) } <span className="card-header__id small d-block  "># { id }</span></CardHeader>
            <CardBody className="d-flex flex-column">
                { loading ? <Spinner color="primary"/> : <CardImg className="align-self-center" width="50%" src={getImage()} alt={name}/>}
                <div>
                    <li className="list-item">Height: <span>{ height/10 } m</span></li>
                    <li className="list-item">Weight: {weight/10 } kg</li>
                    <div className="abilities">
                        <div className="abilities-header">
                            Abilities
                        </div>
                        <div className="abilities-content">
                            {
                                abilities.join(', ')
                            }
                        </div>
                    </div>
                    <li className="list-item">
                        {
                            types.map(t => {
                                const color = getTypeColor(t);
                                return <Badge key={t} className="mr-1 p-1" style={{background: color}}>{ t }</Badge>
                            })
                        }
                    </li>
                </div>
            </CardBody>
        </Card>
    );
};

export default PokeCard;
