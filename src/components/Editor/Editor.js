import React from 'react';

import './Editor.css';

export default function Editor({ setFont, setAlign, setSubtitle, setTitle, setText }) {
  return (
    <div className="editor">
      <div className="form-control">
        <input name="title" type="text" onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="title">Title</label>
      </div>
      <div className="form-control">
        <input type="text" onChange={(e) => setSubtitle(e.target.value)} />
        <label>Subtitle</label>
      </div>
      <div className="form-control">
        <select
          onChange={(e) => {
            setFont(e.target.value);
          }}
        >
          <option value="architect">{"Architect's Daughter"}</option>
          <option value="comforter">Comforter</option>
          <option value="fredoka">Fredoka</option>
          <option value="indie-flower">Indie Flower</option>
          <option value="monteserrat">Monteserrat</option>
          <option value="roboto">Roboto</option>
          <option value="roboto-mono">Roboto Mono</option>
          <option value="titillium">Titillium</option>
        </select>
        <label>Font</label>
      </div>
      <div className="form-control">
        <label>Alignment</label>
        <div
          className="radio-group"
          onClick={(e) => {
            setAlign(e.target.value);
          }}
        >
          <label>
            <input name="align" type="radio" value="left" />
            <i className="ri-align-left"></i>
          </label>
          <label>
            <input name="align" type="radio" value="center" />
            <i className="ri-align-center"></i>
          </label>
          <label>
            <input name="align" type="radio" value="right" />
            <i className="ri-align-right"></i>
          </label>
        </div>
      </div>
      <div className="form-control">
        <textarea style={{ height: '250px' }} onChange={(e) => setText(e.target.value)} />
        <label>Text</label>
      </div>
    </div>
  );
}
