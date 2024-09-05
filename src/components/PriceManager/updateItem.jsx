import React, { useState, useEffect } from "react";
import Select from 'react-select';
import endpoints from '../../constants/constant';

function UpdateItem() {
    const [itemList, setItemList] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [newName, setNewName] = useState("");
    const [newPrice, setNewPrice] = useState("");
    
    const [fetchingItems, setFetchingItems] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [fetchError, setFetchError] = useState(null);
    const [error, setError] = useState(null);

    const [apiMsg, setApiMsg] = useState(null);
    
    const fetchItems = async () => {
        try {
            setFetchingItems(true);
            const response = await fetch(
                endpoints.prod.getItem, {
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
        } catch (error) {
            setFetchingItems(false);
            setFetchError('Failed to retrieve the Items. Check your Internet Connection and try again.');
        }
    };

    const updateItems = async () => {
        setIsLoading(true);
        const response = await fetch(
            endpoints.prod.updateItem, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Host': '192.168.0.157'
                },
                body: JSON.stringify({
                    label: newName,
                    value: newName,
                    price: newPrice,
                    item_id: selectedItem._id
                })
        });
        setIsLoading(false);

        if (!response.ok) {
            setError('Failed to update the Item. Check your Internet Connection and try again.')
            throw new Error('Failed to update data on Database.');
        }

        const resData = await response.json();
        if (resData) {
            if (resData.success === true) {
                setError(null);
                setApiMsg(resData.message);
                localUpdate(selectedItem._id, {
                    label: newName,
                    value: newName,
                    price: newPrice
                });
                setSelectedItem({_id: selectedItem._id, label: newName, value: newName, price: newPrice});
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

    const localUpdate = (id, updatedObj) => {
        setItemList((prevItemList) => prevItemList.map((item) => item._id === id ? { ...item, ...updatedObj} : item))
    }

    const handleUpdate = async (ev) => {
        ev.preventDefault();
        setApiMsg(null);
        setError(null);

        if (newName == selectedItem.label && newPrice == selectedItem.price) {
            setError("Please make changes to the values before Updating.");
            return;
        }

        if(newName.trim() != "" && newPrice.trim() != "") {
            console.log("Calling API.")
            await updateItems();
        } else {
            if (newName.trim() == "") {
                setError("Please enter a valid Item Name.");
                setNewName("");
                return;
            }
            if (newPrice.trim() == "") {
                setError("Please enter a valid Item Price.");
                setNewPrice("");
            }
        }
    }

    useEffect(() => {
        fetchItems();
    }, []);

    useEffect(() => {
        if(selectedItem !== null) {
            setNewName(selectedItem.label)
            setNewPrice(selectedItem.price)
        }
    }, [selectedItem]);

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
                                <center><h3>Select Item:</h3></center>
                            </>
                            )}
                    </div>

                    {fetchError ? (<h4 className="center" style={{ color: 'red' }}>{fetchError}</h4>) : (<></>)}

                    {itemList ? (
                        <div style={{ width: '300px', margin: '10px auto 20px auto' }}>
                        <Select
                            value={selectedItem}
                            onChange={handleSelectedItemChange}
                            options={itemList}
                            placeholder="Select an item..."
                            isSearchable={true}
                            getOptionLabel={(option) => `${option.label} - ${option.price}₹`}
                            getOptionValue={(option) => option._id}
                            className="dark"
                        />
                    </div>) : (<></>)}

                    {selectedItem ? (
                        <>
                            <div className="form-container">
                                <input type="text" className="input-field"
                                    value={newName} onChange={(ev) => {setNewName(ev.target.value)}}>
                                </input>
                                <input type="text" className="input-field"
                                    value={newPrice} onChange={(ev) => {setNewPrice(ev.target.value)}}>
                                </input>

                                {error ? (<h4 className="center" style={{ color: 'red' }}>{error}</h4>):(<></>)}

                                <button 
                                    className="submit-button" 
                                    onClick={(ev) => {handleUpdate(ev)}} 
                                    disabled={isLoading}>
                                        {isLoading ? (
                                        <>
                                            <div className="spinner"></div>
                                        </>
                                        ) : (
                                            'Update'
                                        )}
                                </button>
                                {apiMsg ? (<h4 className="center" style={{ color: 'green' }}>{apiMsg}</h4>):(<></>)}
                            </div>
                        </>) : (<></>)}

                </div>
            </div>
        </main>
    )
}

export default UpdateItem;