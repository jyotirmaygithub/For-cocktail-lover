# <<----------------concepts learned throughout the project------------>>

 1. (*) the catch-all or fallback route (<Route path="*">) is there to handle URLs that don't match any of your explicitly defined routes. Bascially it makes our application user friendly where even after not matching the exact path , user will be able to see a default page

This route is often used as a catch-all or fallback route. It will match any URL path that hasn't been matched by the preceding routes. Without this catch-all route, if a user enters a URL that doesn't match any defined route, React Router may issue a warning or not render anything.

2. from next time , if i will not have any subroutes then i will gonna write all the route in the  appjs file of the react application. from next time does not matter how many route you have try to declare them in the appjs where your main root of the routers lies 

to get actuall implementation of the above content look at the working of appjs and footerjs pages of the application

# to get the functionality of top loading bar copy and paste below command on vs code terminal
npm install react-top-loading-bar

# to receive and send emails from you site download npm package of emailjs
# explaination 
EmailJS helps to send emails using client-side technologies only. No server is required – just connect EmailJS to one of the supported email services, create an email template, and use our SDK to trigger an email.
# code for email ------------->>>>> npm i @emailjs/browser

# Search cocktail by name
www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

# Filter by Glass
www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass

# www.thecocktaildb.com/images/ingredients/gin.png
(700x700 pixels)

# Search by ingredient
www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin