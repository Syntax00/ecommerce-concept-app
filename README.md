# Ecommerce-Concept React Native App 

![Application Screenshot](https://i.imgur.com/Q1vnjDU.png)

## Used Technologies
1. React / React Native
2. TypeScript
3. Expo
4. Redux / Redux Toolkit
5. React Navigation


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

