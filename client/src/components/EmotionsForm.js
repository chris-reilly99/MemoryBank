import React, { useState } from 'react';

function EmotionsForm(props) {
  const [input, setInput] = useState('');
  let [emotions, setEmotions] = useState('');

  const emotionsLevel = ['Fear', 'Joy', 'Anger', 'Disgust', 'Sadness']

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emotions) {
      emotions = 'Fear';
    }

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      text: input,
      emotions: emotions,
    });

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
