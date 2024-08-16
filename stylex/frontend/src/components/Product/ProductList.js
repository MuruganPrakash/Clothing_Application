// import axios from 'axios';
// // import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';

// import React, { useEffect, useState } from 'react';
// import './ProductList.css';
// import NavBar from '../Navbar/Navbar';


// const ProductList = () => {

//      const { type } = useParams(); 
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try 
//             {
//                 const response = await axios.get('http://localhost:8080/getProducts');
//                 setProducts(response.data);
//             } 
//             catch (error) 
//             {
//                 console.error('Error fetching products', error);
//             }
//         };

//         fetchProducts();
//     }, []);
    
//     const filteredProducts = products.filter(product => product.type.toLowerCase() === type.toLowerCase());


//     const [isDropdownOpen, setDropdownOpen] = useState({
//         size: false,
//         price: false,
//         brand: false,
//         color: false
//     });
   
    


//     const toggleDropdown = (e) => {
//         const id = e.target.id;
//         setDropdownOpen((prevState) => ({
//             ...prevState,
//             [id]: !prevState[id]
//         }));
//     };

//     return (
//         <>
//         <NavBar/>  
//         <div className='product-display'>
//             <div className="filter-group">
//                 <h1>Refine By</h1>
//                 <div className="dropdown">
//                     <label className="dropdown-label" id='brand' onClick={toggleDropdown}>
//                         {isDropdownOpen.brand ? '- Brands' : '+ Brands'}
//                     </label>
//                     {isDropdownOpen.brand && (
//                         <div className="dropdown-content">
//                             <div className="dropdown-item">
//                                 <input type="checkbox" id="allen-solly" />
//                                 <label htmlFor="below-500">ALLEN SOLLY</label>
//                             </div>
//                             <div className="dropdown-item">
//                                 <input type="checkbox" id="altheory" />
//                                 <label htmlFor="500-1000">ALTHEORY</label>
//                             </div>
//                             <div className="dropdown-item">
//                                 <input type="checkbox" id="campus-sultra" />
//                                 <label htmlFor="1001-1500">Campus Sutra</label>
//                             </div>
//                             <div className="dropdown-item">
//                                 <input type="checkbox" id="dnmx" />
//                                 <label htmlFor="1501-2000">DNMX</label>
//                             </div>
//                         </div>
//                     )}
//                 </div>

//                 <div className="dropdown">
//                     <label className="dropdown-label" id='price' onClick={toggleDropdown}>
//                         {isDropdownOpen.price ? '- Price Range' : '+ Price Range'}
//                     </label>
//                     {isDropdownOpen.price && (
//                         <div className="dropdown-content">
//                             <div className="dropdown-item">
//                                 <input type="checkbox" id="below-500" />
//                                     <label htmlFor="below-500">Rs.1-500</label>
//                             </div>
//                             <div className="dropdown-item">
//                                 <input type="checkbox" id="500-1000" />
//                                 <label htmlFor="500-1000">Rs.500-1000</label>
//                             </div>
//                             <div className="dropdown-item">
//                                 <input type="checkbox" id="1001-1500" />
//                                 <label htmlFor="1001-1500">Rs.1001-1500</label>
//                             </div>
//                             <div className="dropdown-item">
//                                 <input type="checkbox" id="1501-2000" />
//                                 <label htmlFor="1501-2000">Rs.1501-2000</label>
//                             </div>
//                         </div>
//                     )}
//                 </div>

                   


//                 <div className="dropdown">
//                     <label className="dropdown-label" id='color' onClick={toggleDropdown}>
//                         {isDropdownOpen.color ? '- Colors' : '+ Colors'}
//                     </label>
//                     {isDropdownOpen.color && (
//                         <div className="dropdown-content">
//                             <div className="dropdown-item">
//                                 <input type="checkbox" id="blue" />
//                                 <label htmlFor="below-500">Blue</label>
//                             </div>
//                             <div className="dropdown-item">
//                                 <input type="checkbox" id="red" />
//                                 <label htmlFor="500-1000">Red</label>
//                             </div>
//                             <div className="dropdown-item">
//                                 <input type="checkbox" id="black" />
//                                 <label htmlFor="1001-1500">Black</label>
//                             </div>
//                             <div className="dropdown-item">
//                                 <input type="checkbox" id="White" />
//                                 <label htmlFor="1501-2000">white</label>
//                             </div>
//                         </div>
//                     )}
//                 </div>

//                 <div className="dropdown">
//                     <label className="dropdown-label" id='size' onClick={toggleDropdown}>
//                         {isDropdownOpen.size ? '- Size & Fit' : '+ Size & Fit'}
//                     </label>
//                     {isDropdownOpen.size && (
//                         <div className="dropdown-content">
//                             <div className="dropdown-item">
//                                 <input type="checkbox" id="xs" />
//                                 <label htmlFor="below-500">XS</label>
//                             </div>
//                             <div className="dropdown-item">
//                                 <input type="checkbox" id="s" />
//                                 <label htmlFor="500-1000">S</label>
//                             </div>
//                             <div className="dropdown-item">
//                                 <input type="checkbox" id="m" />
//                                 <label htmlFor="1001-1500">M</label>
//                             </div>
//                             <div className="dropdown-item">
//                                 <input type="checkbox" id="l" />
//                                 <label htmlFor="1501-2000">L</label>
//                             </div>
//                             <div className="dropdown-item">
//                                 <input type="checkbox" id="xl" />
//                                 <label htmlFor="1501-2000">XL</label>
//                             </div>
//                             <div className="dropdown-item">
//                                 <input type="checkbox" id="xxl" />
//                                 <label htmlFor="1501-2000">XXL</label>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//             <div className="card-container">
//                 {filteredProducts.length > 0 ? (
//                     filteredProducts.map(product => (
                    
//                         <div className="card" key={product.id}>
//                             <Link to={`/product/${product.id}`} className="no-link-style">
//                             <img src={product.image} className="card-image" alt='product-image'/>
//                             <div className="card-content">
//                                 <h3 className="card-title">{product.brand}</h3>
//                                 <p className="card-description">{product.description}</p>
//                                 <p className="card-price">Price: Rs.{product.price}</p>
//                                 <button
//                                     className="add-to-cart-button"
                                    
//                                     >
//                                     Add to Cart
//                                 </button>
//                             </div>
//                             </Link>
//                         </div>
//                     ))
//                 ) : (
//                 <p className="no-products-message">No products available for this category.</p>
//                 )}          

//             </div>
//         </div>
//         </>
//     );
// };

// export default ProductList;
















import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductList.css';
import NavBar from '../Navbar/Navbar';

const ProductList = () => {
    const { type } = useParams();
    const [products, setProducts] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState({
        price: [],
        brand: [],
        color: [],
        size: []
    });

    const [isDropdownOpen, setDropdownOpen] = useState({
        size: false,
        price: false,
        brand: false,
        color: false
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/getProducts');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products', error);
            }
        };
        fetchProducts();
        
    }, []);

    const toggleDropdown = (e) => {
        const id = e.target.id;
        setDropdownOpen((prevState) => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    const handleFilterChange = (e) => {
        const { id, name, checked } = e.target;
        setSelectedFilters((prevFilters) => {
            const filterArray = prevFilters[name];
            return {
                ...prevFilters,
                [name]: checked
                    ? [...filterArray, id]
                    : filterArray.filter((filter) => filter !== id)
            };
        });
    };

    const filterProducts = () => {
        return products.filter((product) => {
            const matchesType = product.type.toLowerCase() === type.toLowerCase();
            const matchesPrice = selectedFilters.price.length === 0 || selectedFilters.price.some((range) => {
                const [min, max] = range.split('-').map(Number);
                return product.price >= min && product.price <= max;
            });
            
            const matchesBrand = selectedFilters.brand.length === 0 || selectedFilters.brand.includes(product.brand.toLowerCase());
            const matchesColor = selectedFilters.color.length === 0 || selectedFilters.color.includes(product.color.toLowerCase());
            // const matchesSize = selectedFilters.size.length === 0 || selectedFilters.size.includes(product.size.toLowerCase());
            
            return matchesType && matchesPrice && matchesBrand && matchesColor ;
        });
    };

    const filteredProducts = filterProducts();

    return (
        <>
            <NavBar />
            <div className='product-display'>
                <div className="filter-group">
                    <h1>Refine By</h1>
                    <div className="dropdown">
                        <label className="dropdown-label" id='brand' onClick={toggleDropdown}>
                            {isDropdownOpen.brand ? '- Brands' : '+ Brands'}
                        </label>
                        {isDropdownOpen.brand && (
                            <div className="dropdown-content">
                                <div className="dropdown-item">
                                    <input type="checkbox" id="allen-solly" name="brand" onChange={handleFilterChange} />
                                    <label htmlFor="allen-solly">ALLEN SOLLY</label>
                                </div>
                                <div className="dropdown-item">
                                    <input type="checkbox" id="peter england" name="brand" onChange={handleFilterChange} />
                                    <label htmlFor="peter england">PETER ENGLAND</label>
                                </div>
                                <div className="dropdown-item">
                                    <input type="checkbox" id="snitch" name="brand" onChange={handleFilterChange} />
                                    <label htmlFor="snitch">SNITCH</label>
                                </div>
                                <div className="dropdown-item">
                                    <input type="checkbox" id="dnmx" name="brand" onChange={handleFilterChange} />
                                    <label htmlFor="dnmx">DNMX</label>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="dropdown">
                        <label className="dropdown-label" id='price' onClick={toggleDropdown}>
                            {isDropdownOpen.price ? '- Price Range' : '+ Price Range'}
                        </label>
                        {isDropdownOpen.price && (
                            <div className="dropdown-content">
                                <div className="dropdown-item">
                                    <input type="checkbox" id="1-500" name="price" onChange={handleFilterChange} />
                                    <label htmlFor="1-500">Rs.1-500</label>
                                </div>
                                <div className="dropdown-item">
                                    <input type="checkbox" id="500-1000" name="price" onChange={handleFilterChange} />
                                    <label htmlFor="500-1000">Rs.500-1000</label>
                                </div>
                                <div className="dropdown-item">
                                    <input type="checkbox" id="1001-1500" name="price" onChange={handleFilterChange} />
                                    <label htmlFor="1001-1500">Rs.1001-1500</label>
                                </div>
                                <div className="dropdown-item">
                                    <input type="checkbox" id="1501-2000" name="price" onChange={handleFilterChange} />
                                    <label htmlFor="1501-2000">Rs.1501-2000</label>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="dropdown">
                        <label className="dropdown-label" id='color' onClick={toggleDropdown}>
                            {isDropdownOpen.color ? '- Colors' : '+ Colors'}
                        </label>
                        {isDropdownOpen.color && (
                            <div className="dropdown-content">
                                <div className="dropdown-item">
                                    <input type="checkbox" id="blue" name="color" onChange={handleFilterChange} />
                                    <label htmlFor="blue">Blue</label>
                                </div>
                                <div className="dropdown-item">
                                    <input type="checkbox" id="red" name="color" onChange={handleFilterChange} />
                                    <label htmlFor="red">Red</label>
                                </div>
                                <div className="dropdown-item">
                                    <input type="checkbox" id="black" name="color" onChange={handleFilterChange} />
                                    <label htmlFor="black">Black</label>
                                </div>
                                <div className="dropdown-item">
                                    <input type="checkbox" id="white" name="color" onChange={handleFilterChange} />
                                    <label htmlFor="white">White</label>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="dropdown">
                        <label className="dropdown-label" id='size' onClick={toggleDropdown}>
                            {isDropdownOpen.size ? '- Size & Fit' : '+ Size & Fit'}
                        </label>
                        {isDropdownOpen.size && (
                            <div className="dropdown-content">
                              
                                <div className="dropdown-item">
                                    <input type="checkbox" id="s" name="size" onChange={handleFilterChange} />
                                    <label htmlFor="s">S</label>
                                </div>
                                <div className="dropdown-item">
                                    <input type="checkbox" id="m" name="size" onChange={handleFilterChange} />
                                    <label htmlFor="m">M</label>
                                </div>
                                <div className="dropdown-item">
                                    <input type="checkbox" id="l" name="size" onChange={handleFilterChange} />
                                    <label htmlFor="l">L</label>
                                </div>
                                <div className="dropdown-item">
                                    <input type="checkbox" id="xl" name="size" onChange={handleFilterChange} />
                                    <label htmlFor="xl">XL</label>
                                </div>
                                
                            </div>
                        )}
                    </div>
                </div>
                <div className="card-container">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <div className="card" key={product.id}>
                                <Link to={`/product/${product.id}`} className="no-link-style">
                                    <img src={product.image} className="card-image" alt='product-image' />
                                    <div className="card-content">
                                        <h3 className="card-title">{product.brand}</h3>
                                        <p className="card-description">{product.description}</p>
                                        <p className="card-price">Price: Rs.{product.price}</p>
                                        <button className="add-to-cart-button">Add to Cart</button>
                                    </div>
                                </Link>
                            </div>
                        ))
                ) : (
                <p className="no-products-message">No products available for this category.</p>
                )}

            </div>
        </div>
        </>
    );
};

export default ProductList;