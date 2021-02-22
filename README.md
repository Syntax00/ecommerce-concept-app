# Ecommerce-Concept React Native App 
<p align="center"> 
<img src="https://i.imgur.com/Q1vnjDU.png">
</p>

## Used Technologies
1. React / React Native
2. TypeScript
3. Expo
4. Redux / Redux Toolkit
5. React Navigation


# Installation
```javascript
npm i
npm start
```
Then, connect the simulator or the device and run the project through the Expo console.
Or, scan QR code using the Expo Go client on physical phone (Android only).

## Implemented Features
1. Categories listing
2. Featured products listing
3. Category products listing
4. View product details
5. View product details though an external link/URL
6. Add products to Cart
7. Remove products from Cart
8. Cart listing
9. Products swiper
10. User profile
11. Toggle RTL direction
12. Notifications & Location permissions control
13. Addresses listing
14. Add addresess
15. Map view to select address location (defaults to user's current location)
16. Searchbar UI (not functional)


## Project Structure
```javascript
-- components (contains all the components being utilized and composed to form the screens)
        |- Categories
        |- LocationMap
        |- ProductCard
        |- ...
        |- UIElements
                |- Loader
                |- CustomButton
                |- ToggleSwitch
                |- ...
-- hooks (contains all the custom reusable React Hooks)
        |- useDeeplinkRedirect.ts
        |- useServerCall.ts
        |- ...
-- navigation (contains all the navigation logic)
-- Networking (contains APIs, networking handlers, and Axios instance)
        |- axiosInstance.ts
        |- categoriesAPIs.ts
        |- productsAPIs.ts
        |- ...
-- screens (stand-alone screens/activities/pages)
        |-- Home
        |-- CategoryProducts
        |-- Cart
        |-- ProductDetails
        |-- ...
-- store (includes Redux/RTK configurations and state slices)
        |-- slices (state slices)
                |-- cart.ts
                |-- user.ts
                |-- categories.ts
                |-- ...
        |-- index.ts (reducers combination and store configuration)
-- utilities
        |-- common.ts (contains common values that are used globally across the App)
        |-- commonTypes.ts (contains the reoccurring common TypeScript types)
        |-- errorsMap.ts (maps network errors' status codes)
        |-- fp_utils.ts (functional programming hand-made utilities)
        |-- helpers.ts (general functions)

```


## View Product Details Deeplink Scheme
You can automatically open the app and get redirected to a specific product screen by using a link/URL (Deeplink).
This link scheme should be as follows:

```javascript
tradelingapp://product?id=19
```

