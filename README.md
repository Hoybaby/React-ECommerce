# React-ECommerce


Process

<h1>Styling the Navbar, Annoucement </h1>

<p>In any react application, one must install react and I am first only doing the front end and then supporting it with Node.JS later. I will be using styled-components than vanilla css. I am using styled components because it can avoid conflicts between child components and styling. I first want to create and style components from left to right in the Navbar. Just like any React.Js application, a components folder will hold my styled components with the components themselves. I could combine the two files together but I want the component itself not to have any styling aspects to keep things simple and concise. When we are handing more logic based functions, it will get confusing. The styling is slow but tedious. In past projects, I let material-ui or Bootstrap handle most of the components but this time around, I wanted to practice my CSS and doing it from scatch.</p>


<h1>Slider/Carousel</h1>

<p> As explained in the Navbar section, I wanted to improve my CSS skills and didnt want to use a carousel component from BootStrap or something similar. In order to create the slider/carousel, I first need to have the images I wanted to pick. In a portfolio, I used the same method to cycle through the images, descriptions and titles. I just imported the data and used the map() function on the array. Once the images were on the screen. I had to use Material-UI Icons to display the right and left signals on the page and make sure those icons have a z-index in order to gurantee they will always be displayed over an image. Once the icons and border-radios of the icons are set, they need to have an onClick function to cycle through the data index. In order to do this, it needs to remember the state it is currently on which is being held in a variable I made called slideIndex. The handleClick will cycle through the data by self identying with the state. With the transform css effect, the pictures will rotate through right to left and then eventually bring it back to the begining.</p>


<h1>Products</h1>

<p>Was able to find pictures that would be able to display my "products" onto the webpage. Finding the right images help and I will user a similar process with the categories components with this. I will create a general component that will have another component that will cycle through the JavaScript object.<p>






Backend

<p>First I wanted to create a new brance so I can host all the work thats related to the backend in this seperate branch. This also prevents me from pushing code that might not work with the main branch so it safeguards my already working code. First I had to do an npm init -y to get the basic packages then install some packages with npm i. The packages I used at the moment are (mongoose, dotenv, express and nodemon). After installing all the packages, it is best to create a simple server with express which doesn't take a lot of lines to code. When succesfull i can create the mongoDB connection which as well, doesn't take long to make. IT IS IMPORTANT to hide the connection information to prevent others in getting access to information that can be tricky. This is done with the package dotenv which enables the application to use the hidden information in a ".env" file which is an enviromental variable on my machine.</p>


<p>After creating the connection to mongoose, I want to set up the models for all the CRUD application I will be doing first. This can be done with by making a models folder and then creating a file that will first import mongoose then use " new mongoose schema". If done correctly, it can be testied with the postman to the endpoint I created early for "auth". The auth enpoint will take in the data I used from postman and send it through the schema which in then sent to my database collection. Before I was running into an error and I noticed that I was not exporting the module correct and had a typo.</p>
