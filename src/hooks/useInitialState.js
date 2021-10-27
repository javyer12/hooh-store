import {useState} from 'react'
import initialState from '../../initialState';

const useInitialState = () => {
    const [state,setState] = useState(initialState);

    const addToCart = payload => {
      setState({
        ...state,
        cart: [...state.cart, payload],
      })
     
    }

    const removeFromCart = payload => {
      setState({
        ...state,
        cart: state.cart.filter(item => item.id !==  payload.id)
      })
    }

    return {
      addToCart,
      removeFromCart,
      state,
    }
};



export default useInitialState;



// otra forma de manejar el context


// import React, { createContext } from "react";
// import useInitialState from "../hooks/useInitialState";

// export const AppContext = createContext();

// const AppProvider = ({ children }) => {
//   const initialState = useInitialState();

//   return (
//     <AppContext.Provider value={initialState}>{children}</AppContext.Provider>
//   );
// };

// export default AppProvider;

// import AppProvider from "../context/AppContext";

// const App = () => {
//   return (
//     <AppProvider>
//       <BrowserRouter>
//         <Layout>
//           <Switch>
//             <Route exact path="/" component={Home} />
//             <Route exact path="/checkout" component={Checkout} />
//             <Route exact path="/checkout/information" component={Information} />
//             <Route exact path="/checkout/payment" component={Payment} />
//             <Route exact path="/checkout/success" component={Success} />
//             <Route component={NotFound} />
//           </Switch>
//         </Layout>
//       </BrowserRouter>
//     </AppProvider>
//   );
// };
// export default App;