import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LoginPage from './Login'
import SignupPage from './Signup'
import ConfirmPassWord from './ChangePass'
import MyDashBoard from './Dashboard'
import MyNavbar from './navbar'
import MyStore from '../StoreComponents/images/StorePages/StoreContainer'
import { AuthProvider } from '../Context/AuthContext'
import MyShoppingCart from './ShoppingCart'
import MakePurchase from './BuyProduct'
const EntryPage = () => {
    return (
        
        <div className="landing-page">
            
            <AuthProvider>
            <MyNavbar />
            </AuthProvider>
           
        <Router>
             <AuthProvider>
            <Switch>
                <Route path="/dash" component={MyDashBoard} />
                <Route path="/mystore" component={MyStore} />
                <Route path="/product" component={MakePurchase} /> 
                <div className="container">
                   
                  
               <Route path="/login" component={LoginPage} /> 
               <Route exact path="/" component={SignupPage} />
               <Route path="/changepasscode" component={ConfirmPassWord} />
               
               </div>
            </Switch>
            </AuthProvider>
        </Router>
        
        </div>
        
    )
}

export default EntryPage