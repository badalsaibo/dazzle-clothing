import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUpPage'
import Header from './components/header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux';
import setCurrentUser from './redux/user/user-actions';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.unSubscribeFromAuth = null;
  }
  
  componentDidMount() {

    const { setCurrentUser } = this.props;

    console.log("I'm mounted")

    this.unSubscribeFromAuth = auth.onAuthStateChanged( async (userAuth) => {   // attaching an async callback function
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot( (snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route 
            exact 
            path='/signin' 
            render={ () => this.props.currentUser
                            ? <Redirect to='/' />
                            : <SignInAndSignUpPage />
            } 
          />
        </Switch>
      </>
    );
  }
};

const mapStateToProps = (state) => {
  const { user } = state;
  return {
    currentUser: user.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => {
      return dispatch(setCurrentUser(user));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
