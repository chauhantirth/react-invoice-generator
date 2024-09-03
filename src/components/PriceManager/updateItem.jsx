import React, { useState, useEffect } from "react";
import Select from 'react-select';

function UpdateItem() {
    const [itemList, setItemList] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [newName, setNewName] = useState("");
    const [newPrice, setNewPrice] = useState("");
    
    const [fetchingItems, setFetchingItems] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [fetchError, setFetchError] = useState(null);
    const [error, setError] = useState(null);
    
    const fetchItems = async () => {
        setFetchingItems(true);
        const response = await fetch(
            "http://192.168.0.157:4000/api/getItem", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Host': '192.168.0.157'
                }, 
        });
        setFetchingItems(false);

        if (!response.ok) {
            setFetchError('Failed to retrieve the Items. Check your Internet Connection and try again.')
            throw new Error('Failed to retrieve data from Database.');
        }

        const resData = await response.json();
        if (resData) {
            if (resData.success === true) {
                setFetchError(null);
                setItemList(resData.container[0]);
            } else {
                setFetchError(resData.errorMessage);
            }
        } else {
            setFetchError('An Error occured parsing the server response, Try again later.')
        }
    };

    const updateItems = async () => {
        setIsLoading(true);
        const response = await fetch(
            "http://192.168.0.157:4000/api/updateItem", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Host': '192.168.0.157'
                },
                body: JSON.stringify({
                    label: newName,
                    value: newName,
                    price: newPrice
                })
        });
        setIsLoading(false);

        if (!response.ok) {
            setError('Failed to retrieve the Items. Check your Internet Connection and try again.')
            throw new Error('Failed to retrieve data from Database.');
        }

        const resData = await response.json();
        if (resData) {
            if (resData.success === true) {
                setError(null);
                // setItemList(resData.container); Update in the main ItemList here
            } else {
                setError(resData.errorMessage);
            }
        } else {
            setError('An Error occured parsing the server response, Try again later.')
        }
    };

    const handleSelectedItemChange = (selectedOption) => {
        setSelectedItem(selectedOption);
    };

    useEffect(() => {
        fetchItems();
    }, []);

    console.log(itemList);

    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>UPDATE ITEM</h3>
            </div>

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        {fetchingItems ? (
                            <>
                                <center><h3>Fetching Items... </h3></center>
                                <center><div className="spinner"></div></center>
                            </>
                        ) : (<>
                                <center><h3>Edit Details: </h3></center>
                                {fetchError ? (<span>fetchError</span>) : (<></>)}
                            </>
                            )}
                    </div>
                    
                    {itemList ? (
                        <div style={{ width: '300px', margin: '50px auto' }}>
                        <Select
                            value={selectedItem}
                            onChange={handleSelectedItemChange}
                            options={itemList}
                            placeholder="Select an item..."
                            isSearchable={true}
                            getOptionLabel={(option) => `${option.label} - ${option.price}₹`}
                            getOptionValue={(option) => option._id}
                        />
                    </div>) : (<></>)}

                    {selectedItem ? (
                        <>
                            <div style={{ marginTop: '20px' }}>
                                <h4>Selected Item:</h4>
                                <p><strong>Label:</strong> {selectedItem.label}</p>
                                <p><strong>Price:</strong> {selectedItem.price}</p>
                            </div>
                            <div className="form-container">
                                <input type="text" className="input-field" placeholder="Item Name.">
                                </input>
                                <input type="text" className="input-field" placeholder="Item Price.">
                                </input>
                                <button className="submit-button">Update</button>
                            </div>
                        </>) : (<></>)}

                </div>
            </div>
        </main>
    )
}

export default UpdateItem;