import React, { useState } from 'react';
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
            {(
              <Link
                className='text-light'
                to={`/profiles/${memory.memoryAuthor}`}
              >
                I was feeling {memory.emotion} on {memory.date}
                I remembered this on {memory.createdAt}

              </Link>
            ) : (
            <>
              <span>
                I was feeling {memory.emotion} on {memory.createdAt} I remembered this on {memory.createdAt}

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


// i believe this is the old code below
// function FeelingList() {
//   const [feeling, setFeeling] = useState([]);

//   // Function to add a feeling list item
//   const addFeelingItem = (item) => {
//     console.log(
//       '🚀 ~ file: feelingList.js ~ line 10 ~ addfeelingItem ~ item',
//       item
//     );
//     // Check to see if the item text is empty
//     if (!item.text) {
//       return;
//     }

//     // Add the new feeling list item to the existing array of objects
//     const newFeeling = [item, ...feeling];
//     console.log(newFeeling);

//     // Call setfeeling to update state with our new set of feeling list items
//     setFeeling(newFeeling);
//   };

//   // Function to mark feeling list item as complete
//   const completeFeelingItem = (id) => {
//     // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
//     let updatedFeeling = feeling.map((item) => {
//       if (item.id === id) {
//         item.isComplete = !item.isComplete;
//       }
//       return item;
//     });

//     console.log(updatedFeeling);
//     setFeeling(updatedFeeling);
//   };

//   // Function to remove feeling list item and update state
//   const removeFeelingItem = (id) => {
//     const updatedFeeling = [...feeling].filter((item) => item.id !== id);

//     setFeeling(updatedFeeling);
//   };

//   // Function to edit the feeling list item
//   const editFeelingItem = (itemId, newValue) => {
//     // Make sure that the value isn't empty
//     if (!newValue.text) {
//       return;
//     }

//     // We use the "prev" argument provided with the useState hook to map through our list of items
//     // We then check to see if the item ID matches the if of the item that was clicked and if so we set it to a new value
//     setFeeling((prev) =>
//       prev.map((item) => (item.id === itemId ? newValue : item))
//     );
//   };

//   return (
//     <div>
//       <EmotionsForm onSubmit={addFeelingItem} />
//       <Feeling
//         feeling={feeling}
//         completeFeelingItem={completeFeelingItem}
//         removeFeelingItem={removeFeelingItem}
//         editFeelingItem={editFeelingItem}
//       ></Feeling>
//     </div>
//   );
// }

export default FeelingList;
