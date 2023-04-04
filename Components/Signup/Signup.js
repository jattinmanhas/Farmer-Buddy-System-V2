import React from 'react'
import {useState, useEffect} from 'react'
import { Auth } from 'aws-amplify'
import {CognitoHostedUIIdentityProvider} from "@aws-amplify/auth/lib/types"
import "../../configureAmplify"

const Signup = () => {
    useEffect(() =>{
        checkUser()
        async function checkUser(){
            const user = await Auth.currentAuthenticatedUser()
            console.log(user);
        }
    },[])
  return (
    <div>
        <button onClick={()=>Auth.federatedSignIn({
            provider: CognitoHostedUIIdentityProvider.Google
        })}>
            Sign In with Google
        </button>

        <button onClick={() => Auth.signOut()}>
            Sign OUT
        </button>
    </div>
  )
}

export default Signup