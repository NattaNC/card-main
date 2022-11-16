import React from 'react'
import foto from '../../assets/images/image-product-desktop.jpg'
import {
    Container,
    Content,
    Image,
    NameProduct,
    MainTitle,
    DescriptionText,
    DivPrice,
    Price,
    PriceOff,
    Button
} from './styles'

const Card = () => {
  return (
    <Container >
        <Image src={foto} alt='perfume'/>
        <Content>
          <NameProduct>Perfume</NameProduct>
          <MainTitle>Gabrielle Essence Eau De Parfum</MainTitle>
          <DescriptionText>A floral, solar and voluptuous interpretation composed by Olivier Polge, 
          Perfumer-Creator for the House of CHANEL.</DescriptionText>
          <DivPrice>
            <Price>$149.99</Price>
            <PriceOff><s>$169.99</s></PriceOff>
          </DivPrice>
          <Button>Add to Cart</Button>
        </Content>

    </Container>
  )
}

export { Card }
