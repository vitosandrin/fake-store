import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { GridContainer, Menu, Title, Wrapper } from "./styles";
import { setProducts } from "../../redux/actions/productActions";
import Carousel from "../../components/Carousel";

const Home = () => {

    //const products = useSelector((state) => state.allProducts.products);
    //console.log("products: ", products);

    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch((error) => {
                console.log("error", error);
            });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts()
    }, []) 


    return (
        <Wrapper>
            <Menu>
                <Title>fake-store</Title>
            </Menu>
            <GridContainer>
                <ProductCard />
            </GridContainer>
        </Wrapper>
    )
}

export default Home;