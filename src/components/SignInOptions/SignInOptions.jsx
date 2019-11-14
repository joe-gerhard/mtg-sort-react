import React from 'react';
import { StyledSignInOptions, GoogleButton, FacebookButton, TwitterButton } from './styles';

const SignInOptions = ({handleSignIn}) => {
  return(
    <StyledSignInOptions>
      <GoogleButton
        onClick={() => handleSignIn('google')}
      >
        <img src='/google-512.png' alt='google'/>
        Sign in with Google
      </GoogleButton>

      <FacebookButton
        onClick={() => handleSignIn('facebook')}
      >
        <img src='/facebook-official-512.png' alt='facebook' />
        Sign in with Facebook
      </FacebookButton>
      
      <TwitterButton
        onClick={() => handleSignIn('twitter')}
      >
        <img src='/Twitter-512.png' alt='Twitter' />
        Sign in with Twitter
      </TwitterButton>

    </StyledSignInOptions>
  )
}

export default SignInOptions;
