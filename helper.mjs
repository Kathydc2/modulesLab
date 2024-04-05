// Fetch Request -> JSON placeholder
// https://jsonplaceholder.typicode.com/

export async function getPhotos() {// async method using await
     await fetch("https://jsonplaceholder.typicode.com/photos") // fetch info but wait
     .then((response) => {
        return response.json()
     })// once we have that info put it in json format
     
     .then((data) => { // then using that data what do you want to do with it
        console.log(data)
        for (let i = 0; i < 108; i ++) {
            const image = document.createElement('img'); // create NEW img element
            image.setAttribute('src', data[i].thumbnailUrl); // set src attribute

            const container = document.querySelector('.sprintInner'); // assign it to sprintInner
            container.appendChild(image); // append it to the container
        
        
        }
     })

}

// use Export async using await.... await the fetch request of photos then i have to use the word "return" bc im using the {} after .then. Return the response. From that response put what you want to do with the data. I console.log it to see how the data is arranged and check what i need to populate the images. I used for for loop bc i didnt want to use all 5k pix. I went with 100. I added a div in html called "sprintInner". Under the loop I created an element called"img" i set the attribute to that new "img" element. Then u used queryselector for the class i created called "sprintInner. ". Finaly append the new img element to the existing sprintInner. Also add "getPhotos()" method to the main data.mjs page as an instance. and import {getPhotos} from "./helper.mjs"

