import React, { useState } from 'react';
import {useMutation} from '@apollo/client'
import {ADD_MEMORY} from '../utils/mutations'
import {QUERY_MEMORIES, QUERY_ME} from '../utils/queries'
import Auth from '../utils/auth'

function EmotionsForm(props) {
  const [input, setInput] = useState('');
  let [emotions, setEmotions] = useState('');
  console.log(props)
  const emotionsLevel = ['Fear', 'Joy', 'Anger', 'Disgust', 'Sadness']

  const [addMemory, {error}] = useMutation(ADD_MEMORY, {
    update(cache, {data: {addMemory}}) {
      try {
        const {memories} = cache.readQuery({ query: QUERY_MEMORIES})
        cache.writeQuery({
          query: QUERY_MEMORIES,
          data: {memories: [addMemory, ...memories]}
        })
      } catch (e) {
        console.error(e)
      }
      const {me} = cache.readQuery({query: QUERY_ME});
      cache.writeQuery({
        query: QUERY_ME,
        data: {me: {...me, memories: [...me.memories, addMemory]}}
      })
    }
  })

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!emotions) {
      emotions = 'Fear';
    }
    const {data} = await addMemory({
      variables: {
        memoryText: input,
        emotion: emotions,
        // date,
        // keyword,
        memoryOwner: Auth.getProfile().data.username
        
      }
    })
    // props.onSubmit({
    //   id: Math.random(Math.floor() * 1000),
    //   text: input,
    //   emotions: emotions,
    // });
    console.log(data)

    setInput('');
    setEmotions('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return !props.edit ? (
    <div>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add your emotions"
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${emotions}`}>
            {emotions || 'Main Feeling'}
          </button>
          <div className="dropdown-content">
            <p onClick={() => setEmotions(emotionsLevel[0])}>Fear</p>
            <p onClick={() => setEmotions(emotionsLevel[1])}>Joy</p>
            <p onClick={() => setEmotions(emotionsLevel[2])}>Anger</p>
            <p onClick={() => setEmotions(emotionsLevel[3])}>Disgust</p>
            <p onClick={() => setEmotions(emotionsLevel[4])}>Sadness</p>
          </div>
        </div>
        <button className="bucket-button">Add Emotion</button>
      </form>
    </div>
  ) : (
    <div>
      <h3>Update entry: {props.edit.value}</h3>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={props.edit.value}
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${emotions}`}>
            {emotions || 'Joy'}
          </button>
          <div className="dropdown-content">
            <p onClick={() => setEmotions(emotionsLevel[0])}>Fear</p>
            <p onClick={() => setEmotions(emotionsLevel[1])}>Joy</p>
            <p onClick={() => setEmotions(emotionsLevel[2])}>Anger</p>
            <p onClick={() => setEmotions(emotionsLevel[3])}>Disgust</p>
            <p onClick={() => setEmotions(emotionsLevel[4])}>Sadness</p>
          </div>
        </div>
        <button className="bucket-button">Update</button>
      </form>
    </div>
  );
}

export default EmotionsForm;
