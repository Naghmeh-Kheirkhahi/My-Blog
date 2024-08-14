
function getPosts() {

    fetch('https://jsonplaceholder.typicode.com/posts')

    .then(res=> res.json())

    .then(data=> {

        // console.log(data);

        data = data.splice(1,3);

        data.forEach(item => {

            document.querySelector('.getPosts').innerHTML +=
            `<div class="titleHeading">
                        <img src="image/woods.jpg" alt="woods">
    
                        <div>
                            <h2>${item.title}</h2>
    
                            <h4 class="titleDescription"><p>Title description,</p><p class="date">April 7, 2014</p></h4>
    
                            <p class="description">${item.body}</p>
    
                            <div class="moreInfo">
                                <a href="#">
                                    READ MORE
                                    <i class="fa-solid fa-angles-right"></i>
                                </a>
    
                                <div class="comments">
                                    <p>Comments</p>
                                    <p class="commentNum">0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>`
        });
    })
}


getPosts();


//*********************************


function getPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')

    .then(res=> res.json())

    .then(data=> {

        // console.log(data);
        
        data = data.splice(1,3);

        data.forEach(item => {
            
            document.querySelector('.getPhotos').innerHTML +=
            `<div class="titleHeading">
                        <img src="${item.url}" alt="">
    
                        <div>
                            <h2>${item.title}</h2>
                            
                            <h4 class="titleDescription"><p>Title description,</p><p class="date">April 2, 2014</p></h4>
    
                            <p class="description">
                                Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
                            </p>
    
                            <div class="moreInfo">
                                <a href="#">
                                    READ MORE
                                    <i class="fa-solid fa-angles-right"></i>
                                </a>
    
                                <div class="comments">
                                    <p>Comments</p>
                                    <p class="commentNum">2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>`
        });
    })
}


getPhotos();