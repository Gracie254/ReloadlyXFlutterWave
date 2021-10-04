import React from 'react'
import { Switch, Route} from 'react-router-dom'
import LoginPage from './Login'
import SignupPage from './Signup'
import ConfirmPassWord from './ChangePass'
import MyDashBoard from './Dashboard'
import MyNavbar from './navbar'
import MyStore from '../StoreComponents/images/StorePages/StoreContainer'
import { AuthProvider } from '../Context/AuthContext'
import MyShoppingCart from './ShoppingCart'
import AllProductsPage from './AllProducts';
import MakePurchase from './BuyProduct'
import Airtime from './Buy Airtime'
// import PrivateRoute from '../Context/PrivateRoute'

import CheckoutPage from '../components/Checkout'


const EntryPage = () => {
    
    return (
        
        <div className="landing-page">
            
                 <Switch>
            <AuthProvider>
            <MyNavbar />
            </AuthProvider>
            </Switch>
            <Switch>
                 <Route path="/cart" component={MyShoppingCart} /> 
                
                <Route path="/checkout" component={CheckoutPage} />
            </Switch>
            
             <AuthProvider>
            <Switch>
                <Route path="/dash" component={MyDashBoard} />
                <Route path="/mystore" component={MyStore} />
                <Route path="/purchase/:id/:descr/:price/:image" ><MakePurchase/></Route>
                 {/* <Route path="/product" component={MakePurchase} /> */}
                 <Route exact path="/prod" component={AllProductsPage} />  
                 <Route path="/airtime" component={Airtime} />
                
                <div className="container">
                   
                  
              <Route path="/login" component={LoginPage} />  
               <Route exact path="/" component={SignupPage} />
               <Route path="/changepasscode" component={ConfirmPassWord} />
               
               </div>
            </Switch>
            </AuthProvider>
       
        </div>
        
    )
}

export default EntryPage