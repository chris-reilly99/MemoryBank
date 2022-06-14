import React, { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
// import EmotionsForm from './EmotionsForm';
// import Feeling from './Feeling';
// import {useQuery} from '@apollo/client'
// import { QUERY_MEMORIES } from '../utils/queries';

// Reference week: 21 MERN activity: 26 thoughtlist
const FeelingList = ({
  memories,
  title,
  showTitle = true,
  showUsername = true


}) => {
  if (!memories.length) {
    return <h3>You don't have any memories recorded...</h3>;
  }
  return (
    <div>
      {showTitle && <h3>{title}</h3>}

      {memories && memories.map((memory) => (
        <div className="card mb-3">
          <h4 className="card-header bg-primary text-light p-2 m-0">
            {showUsername ?(
              <Link
                className='text-light'
                to={`/profiles/${memory.memoryOwner}`}
              >
                I was feeling {memory.emotion} on {memory.date}
                I remembered this on {memory.createdAt}

              </Link>
            ) : (
            <>
              <span>
                I, {memory.memoryOwner} was feeling {memory.emotion} on {memory.createdAt} I remembered this on {memory.createdAt}

              </span>
            </>
        )}

          </h4>
          <div className="card-body bg-light p-2">
            <p>{memory.memoryText}</p>
          </div>
        </div>
      ))}
    </div>
  );

};





export default FeelingList;
