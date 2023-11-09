import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { githubApi } from "./github/github.api";
import { setupListeners } from "@reduxjs/toolkit/query";


const rootReducer = combineReducers({

})
export const  store = configureStore({
      reducer: {
            [githubApi.reducerPath]: githubApi.reducer
      },
      middleware: getDefaultMiddleware => getDefaultMiddleware().concat(githubApi.middleware)
})

setupListeners(store.dispatch)