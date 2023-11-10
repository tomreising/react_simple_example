import React, { useState } from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';


function ThingsToDo({ returnData }) {
    async function fetchData(apiUrl) {
        try {
            const apiUrl = "https://www.boredapi.com/api/activity"
            // Make the API request using fetch
            const response = await fetch(apiUrl);

            // Check if the request was successful (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Parse the JSON response
            const data = await response.json();
            console.log(data.type)
            // Return the JSON data
            const thingy = document.getElementById("testone")
            thingy.innerText = `Activity ${data.activity}
            type of work: ${data.type}
            price: ${data.price}`
            return data;
        } catch (error) {
            // Handle errors, e.g., network issues, API errors
            console.error('Error fetching data:', error.message);
            throw error;
        }
    }
    return (
        <div>
            <br />
            <button onClick={fetchData}>get something to do</button>
            <br />
            <br />
            <div id="testone"></div>
        </div>
    )

}

export default ThingsToDo