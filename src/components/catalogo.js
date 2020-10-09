import React from 'react';
import '../App.css';
import { Card, Avatar, Col, Row } from 'antd';
import "antd/dist/antd.css";
const { Meta } = Card;

const cards = [
  {
    titulo: "Incineroar V", 
    description :"Pokémon-V HP220",
    imagen :  "https://assets.pokemon.com/assets//cms2/img/cards/web/SWSH35/SWSH35_EN_8.png",
  },
  {
    titulo: "Lucario V", 
    description :"Pokémon-V HP210",
    imagen :  "https://assets.pokemon.com/assets//cms2/img/cards/web/SWSH35/SWSH35_EN_27.png",
  },
  {
    titulo: "Gardevoir VMAX", 
    description :"Pokémon-VMAX HP320 ",
    imagen :  "https://assets.pokemon.com/assets//cms2/img/cards/web/SWSH35/SWSH35_EN_17.png",
  },
  {
    titulo: "Drednaw VMAX", 
    description :"Pokémon-VMAX HP320",
    imagen :  "https://assets.pokemon.com/assets//cms2/img/cards/web/SWSH35/SWSH35_EN_15.png",
  },
  {
    titulo: "Wailord V", 
    description :"Pokémon-V HP280",
    imagen :  "https://assets.pokemon.com/assets//cms2/img/cards/web/SWSH35/SWSH35_EN_13.png",
  },
  {
    titulo: "Galarian Obstagoon", 
    description :"Stage 2 Pokémon HP170",
    imagen :  "https://assets.pokemon.com/assets//cms2/img/cards/web/SWSH35/SWSH35_EN_37.png",
  },
  {
    titulo: "Alcremie V", 
    description :"Pokémon-V HP170",
    imagen :  "https://assets.pokemon.com/assets//cms2/img/cards/web/SWSH35/SWSH35_EN_22.png",
  },
  {
    titulo: "Galarian Cursola V", 
    description :"Pokémon-V HP190",
    imagen :  "https://assets.pokemon.com/assets//cms2/img/cards/web/SWSH35/SWSH35_EN_21.png",
  },




]

function catalogo(){
    return(
        <Row gutter={[16, 16]}>
        {cards.map(card =>{
          return (
            <Col span={6}>  <Card
            hoverable
            // style={{ width: 240 }}
            cover={<img alt="banda" src={card.imagen} />}
          >
            <Avatar src="https://www.flaticon.com/svg/static/icons/svg/2094/2094510.svg" />
            <Meta title={card.titulo} description= {card.description} />
          </Card>
          </Col>

          )})}
        </Row>
    )
}

export default catalogo;
