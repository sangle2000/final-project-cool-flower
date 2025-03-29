// import Header from "../components/Store/Header.jsx";
import RecommendProduct from "../components/Store/RecommendProduct.jsx";
import Helper from "../components/Helper.jsx";
import ShoppingItemCard from "../components/Home/ShoppingItemCard.jsx";
import {useProductQuery} from "../store/ProductQueryProvider.jsx";
import {Autocomplete, Checkbox, InputLabel, ListItemText, MenuItem, OutlinedInput, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {MenuProps} from "../utils/constant.js";

function Store() {

    const [productSearch, setProductSearch] = useState([]);
    const [currentProductSearch, setCurrentProductSearch] = useState("");
    const [productList, setProductList] = useState([]);

    const [categoryId, setCategoryId] = useState([])
    const [categoryIdSelected, setCategoryIdSelected] = useState([])

    const [productType, setProductType] = useState([])
    const [productTypeSelected, setProductTypeSelected] = useState([])

    const { products } = useProductQuery();

    useEffect(() => {
        if (!products) return;

        setCategoryId([...new Set(products.map(product => product.categoryId))])
        setProductType([...new Set(products.map(product => product.productType))])

        setProductList(products)
        setProductSearch(products.map(product => ({ label: `${product.productCode} - ${product.name}` })))
    }, [products])

    useEffect(() => {
        if (!products) return;

        const isCheckProductName = !!currentProductSearch
        const isCheckCategoryType = categoryIdSelected.length > 0
        const isCheckProductType = productTypeSelected.length > 0

        setProductList(products.filter(product => {

            return (!isCheckProductName || currentProductSearch === `${product.productCode} - ${product.name}`) &&
                (!isCheckCategoryType || categoryIdSelected.includes(product.categoryId)) &&
                (!isCheckProductType || productTypeSelected.includes(product.productType))
        }))
    }, [currentProductSearch, categoryIdSelected, productTypeSelected, products]);

    useEffect(() => {
        console.log(productList)
    }, [productList])

    return (
        <>
            {/*<Header image="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2020/07/store-bg.jpg" />*/}

            <RecommendProduct />

            <div className="product-container">
                <h1 className="product-title">
                    Our Productions
                </h1>

                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Autocomplete
                        disablePortal
                        options={productSearch}
                        onChange={(event, value) => {
                            setCurrentProductSearch(value?.label);
                        }}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Product" />}
                    />

                    <div>
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <InputLabel id="demo-multiple-checkbox-label">Category Type</InputLabel>
                            <Select
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                multiple
                                value={categoryIdSelected}
                                onChange={(e) => setCategoryIdSelected(e.target.value)}
                                input={<OutlinedInput label="Tag" />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {categoryId.map((category) => (
                                    <MenuItem key={category} value={category}>
                                        <Checkbox checked={categoryIdSelected.includes(category)} />
                                        <ListItemText primary={category} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl sx={{ m: 1, width: 300 }}>
                            <InputLabel id="demo-multiple-checkbox-label">Product Type</InputLabel>
                            <Select
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                multiple
                                value={productTypeSelected}
                                onChange={(e) => setProductTypeSelected(e.target.value)}
                                input={<OutlinedInput label="Tag" />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {productType.map((el) => (
                                    <MenuItem key={el} value={el}>
                                        <Checkbox checked={productTypeSelected.includes(el)} />
                                        <ListItemText primary={el} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>

                </div>

                <div className="product-content">
                    {
                        productList && productList.length > 0 &&
                        productList.map((productList) => {
                            return (
                                <ShoppingItemCard
                                    id={productList.id}
                                    code={productList.productCode}
                                    key={productList.id}
                                    image={productList.imageUrl}
                                    name={productList.name}
                                    type={productList.productType}
                                    isSale={productList.salePercent}
                                    oldPrice={productList.price}
                                    currentPrice={productList.price - (productList.price * productList.salePercent)}
                                />
                            )
                        })
                    }
                </div>
            </div>

            <Helper />

            <div className="blank" style={{ width: "100vw", marginTop: "8rem" }}></div>
        </>
    )
}

export default Store;