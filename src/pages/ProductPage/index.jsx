import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectedProduct } from "../../redux/actions/productActions";
import { Wrapper, Image, Description, Container, ContainerCart, AddButton } from "./styles";

const ProductPage = () => {
    let cart = useSelector((state) => state.cart)
    let product = useSelector((state) => state.product)
    const { image, category } = product
    const { productId } = useParams();
    const dispatch = useDispatch();

    //console.log("productID", product);

    const fetchProductById = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((error) => {
                console.log("error", error);
            });
        dispatch(selectedProduct(response.data))
    };

    useEffect(() => {
        if (productId && productId !== "") fetchProductById();
    }, [productId]);

    const renderProductDetails = () => {

        const addProductCart = (productId) => {
            console.log(productId)
            dispatch(addToCart(productId))
        } 

        return (
            <Wrapper>
                <Image src={image} />
                <Container>
                    <Description>{category}</Description>
                </Container>
                <AddButton onClick={() => addProductCart(productId)}>clique</AddButton>
            </Wrapper>
        )
    }

    return <>{renderProductDetails()}</>
}

export default ProductPage;