import { createContext, useState } from "react";
import axios from "axios";

export const ProductAmdminSide = createContext();

function ProductAmdminContextProvider(props) {

    // state for creating product form
    const [createProductFormData, setCreateProductFormData] = useState({
        title: '',
        type: '',
        size: '',
        color: '',
        gender: '',
        description: '',
        image: '',
        organic: false,
        recycled: false
    });

    // functions for create product form
    function handleCreateProductChange(e){
        const {value, name} = e.target;
        if(name === 'name'){
            setCreateProductFormData((prevFormData) => ({
                ...prevFormData,
                title:value.charAt(0).toUpperCase() + value.slice(1)
            }));
        }else if(name === 'type'){
            setCreateProductFormData((prevFormData) => ({
                ...prevFormData,
                type:value.charAt(0).toUpperCase() + value.slice(1)
            }));
        }else if(name === 'size'){
            setCreateProductFormData((prevFormData) => ({
                ...prevFormData,
                size:value.charAt(0).toUpperCase() + value.slice(1)
            }));
        }else if(name === 'color'){
            setCreateProductFormData((prevFormData) => ({
                ...prevFormData,
                color:value.charAt(0).toUpperCase() + value.slice(1)
            }));
        }else if(name === 'gender'){
            setCreateProductFormData((prevFormData) => ({
                ...prevFormData,
                gender:value.charAt(0).toUpperCase() + value.slice(1)
            }));
        }else if(name === 'description'){
            setCreateProductFormData((prevFormData) => ({
                ...prevFormData,
                description:value.charAt(0).toUpperCase() + value.slice(1)
            }));
        }else if(name === 'image'){
            setCreateProductFormData((prevFormData) => ({
                ...prevFormData,
                image:e.target.files[0]
            }));
        }else if(name === 'organic'){
            setCreateProductFormData((prevFormData) => ({
                ...prevFormData,
                organic: !createProductFormData.organic
            }));
        }else if(name === 'recycled'){
            setCreateProductFormData((prevFormData) => ({
                ...prevFormData,
                recycled:!createProductFormData.recycled
            }));
        }
    }

    async function handleCreateProductSubmit(e){
        e.preventDefault();

        const res = await axios.post(`${import.meta.env.VITE_BACKEND_CREATEPROD}`, createProductFormData);
        console.log(res);
    }
    
    const value = { 
        handleCreateProductChange,
        createProductFormData,
        handleCreateProductSubmit
    };

    
    
    return (
        <ProductAmdminSide.Provider value={value}>
        {props.children}
        </ProductAmdminSide.Provider>
    );
}

export default ProductAmdminContextProvider;