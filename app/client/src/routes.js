import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/index';
import Layout from './HOC/layout';
import RegisterLogin from './components/Register_login/index';
import Register from './components/Register_login/register';
import UserDashboard from './components/user/index';
import AuthenticationCheck from './HOC/auth';
import Shop from './components/Shop/index';
import AddProduct from './components/user/Admin/add_prodcut';
import ManageCategories from './components/user/Admin/manage_categories';
import ProductDetail from './components/Product/index';
import UserCart from './components/user/cart';
import UpdateProfile from './components/user/update_profile';
import ManageSite from './components/user/Admin/manage_site';
import PageNotFound from './components/utils/page_not_found';
import AddFileLocalComponent from './components/user/Admin/add_file_local';
import ResetUser from './components/Reset_user_password';
import ResetPass from './components/Reset_user_password/reset_pass';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/user/dashboard" exact component={AuthenticationCheck(UserDashboard, true)}/>
        <Route path="/user/cart" exact component={AuthenticationCheck(UserCart, true)}/>
        <Route path="/user/user_profile" exact component={AuthenticationCheck(UpdateProfile,true)}/>
        <Route path="/admin/add_product" exact component={AuthenticationCheck(AddProduct,true)}/>
        <Route path="/admin/manage_categories" exact component={AuthenticationCheck(ManageCategories,true)}/>
        <Route path="/admin/site_info" exact component={AuthenticationCheck(ManageSite,true)}/>
        <Route path="/admin/add_file_local" exact component={AuthenticationCheck(AddFileLocalComponent,true)}/>

        <Route path="/product_detail/:id" exact component={AuthenticationCheck(ProductDetail, null)}/>
        <Route path="/register" exact component={AuthenticationCheck(Register, false)}/>
        <Route path="/register_login" exact component={AuthenticationCheck(RegisterLogin, false)}/>
        <Route path="/reset_user" exact component={AuthenticationCheck(ResetUser, false)}/>
        <Route path="/reset_password/:token" exact component={AuthenticationCheck(ResetPass, false)}/>
        <Route path="/shop" exact component={AuthenticationCheck(Shop, null)}/>
        <Route path="/" exact component={AuthenticationCheck(Home, null)}/>
        <Route component={AuthenticationCheck(PageNotFound)}/>
      </Switch>
    </Layout>
  )
}

export default Routes;
