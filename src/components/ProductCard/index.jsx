import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardImage, Content, Price, Title, Wrapper } from "./styles";

const ProductCard = () => {

    const products = useSelector((state) => state.allProducts.products);

    const renderList = products.map((product) => {
        const { id, title, image, price } = product
        return (
            <Wrapper key={id}>
                <Link to={`/product/${id}`}>
                    <Card>
                        <CardImage src={image} alt={title} />
                        <Content>
                            <Title>{title}</Title>
                            <Price>U$ {price}</Price>
                        </Content>
                    </Card>
                </Link>
            </Wrapper >
        );
    });

    return (
        <>{renderList}</>
    );
};

export default ProductCard;