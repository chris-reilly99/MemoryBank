import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import EmotionsForm from '../components/EmotionsForm'
import ProfHeader from '../components/ProfHeader'
import RecallMem from '../components/RecallMem'
import FeelingsList from '../components/FeelingList'

import {QUERY_USER, QUERY_ME} from '../utils/queries'

import Auth from '../utils/auth'

const Profile = () => {
    const { username: userParam } = useParams();
    console.log(userParam)

    const { loading, data } = useQuery(userParam ? QUERY_USER: QUERY_ME, {
      variables: { username: userParam },
    });
    console.log(data)
    const user = data?.me || data?.user || {};
    console.log(user)
    // navigate to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
      return <Navigate to="/Profile" replace={true} />;
    }
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!user?.username) {
      return (
        <h4>
          You need to be logged in to see this. Use the navigation links above to
          sign up or log in!
        </h4>
      );
    }
    return(
        <div>
        <ProfHeader />
      <div className="Bucket-app">
       <RecallMem />
       <div>
        <EmotionsForm
        data={data.me}/>
        <FeelingsList 
        memories ={user.memories}
        title={`${user.username}'s memories...`}
        showTitle={false}
        />
        </div>
      </div>
      </div>
    )
}

export default Profile