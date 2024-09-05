import React, { useState } from "react";
import endpoints from '../../constants/constant';

function AddItem() {
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [apiMsg, setApiMsg] = useState(null);
    const [apiData, setApiData] = useState(null);

    const uploadItem = async () => {
        setIsLoading(true);
        const response = await fetch(
            endpoints.prod.addItem, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Host': '192.168.0.157'
                }, 
                body: JSON.stringify({
                    label: itemName,
                    value: itemName,
                    price: itemPrice
                })
        });
        setIsLoading(false);

        if (!response.ok) {
            setError('Failed to Add the Item. Check your Internet Connection and try again.')
            throw new Error('Failed to push data to Database.');
        }

        const resData = await response.json();
        if (resData) {
            if (resData.success === true) {
                setError(null);
                setApiData(resData.container);
                setApiMsg(resData.message);
                setItemName("");
                setItemPrice("");
            } else {
                setError(resData.errorMessage);
            }
        } else {
            setError('An Error occured parsing the server response, Try again later.')
        }
    };

    const handleUpload = async (ev) => {
        ev.preventDefault();
        setApiMsg(null);
        setApiData(null);
        setError(null);

        if(itemName.trim() != "" && itemPrice.trim() != "") {
            await uploadItem();
        } else {
            if (itemName.trim() == "") {
                setError("Please enter a valid Item Name.");
                setItemName("");
                return;
            }
            if (itemPrice.trim() == "") {
                setError("Please enter a valid Item Price.");
                setItemPrice("");
            }
        }
        console.log('ItemPrice: '+itemPrice);
        console.log('ItemName: '+itemName);
        console.log('Error: '+error);
    }


    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>ADD NEW ITEM</h3>
            </div>

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <center><h3>Enter Details: </h3></center>
                    </div>
                    <div className="form-container">
                        <input 
                            type="text" 
                            className="input-field" 
                            placeholder="Enter Item Name." 
                            value={itemName} 
                            onChange={(ev) => {setItemName(ev.target.value)}}
                        >
                        </input>
                        <input type="text" 
                            className="input-field" 
                            placeholder="Enter Item Price."
                            value={itemPrice}
                            onChange={(ev) => {setItemPrice(ev.target.value)}}
                        >
                        </input>

                        {error ? (<h4 className="center" style={{ color: 'red' }}>{error}</h4>):(<></>)}

                        <button className="submit-button" onClick={(ev) => {handleUpload(ev)}} disabled={isLoading}>
                            {isLoading ? (
                            <>
                                <div className="spinner"></div>
                            </>
                            ) : (
                                'Add'
                            )}
                        </button>
                        {apiMsg ? (<h4 className="center" style={{ color: 'green' }}>{apiMsg}</h4>):(<></>)}
                    </div>
                </div>
                {/* <div className='card'>
                    <div className='card-inner'>
                        <h3>CATEGORIES</h3>
                        <BsFillGrid3X3GapFill className='card_icon'/>
                    </div>
                    <h1>12</h1>
                </div> */}
                {/* <div className='card'>
                    <div className='card-inner'>
                        <h3>CUSTOMERS</h3>
                        <BsPeopleFill className='card_icon'/>
                    </div>
                    <h1>33</h1>
                </div> */}
                {/* <div className='card'>
                    <div className='card-inner'>
                        <h3>ALERTS</h3>
                        <BsFillBellFill className='card_icon'/>
                    </div>
                    <h1>42</h1>
                </div> */}
            </div>
        </main>
    )
}

export default AddItem;