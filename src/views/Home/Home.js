import React from 'react';

import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';

import './Home.css';
import { useState } from 'react/cjs/react.production.min';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('Title');
  const [subtitle, setSubtitle] = useState('SubTitle');
  const [font, setFont] = useState('');
  const [align, setAlign] = useState('');
  const [text, setText] = useState('');
  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview
        setTitle={setTitle}
        setSubtitle={setSubtitle}
        setFont={setFont}
        setAlign={setAlign}
        setText={setText}
      />
      <Editor title={title} subtitle={subtitle} font={font} align={align} text={text} />
    </main>
  );
}
