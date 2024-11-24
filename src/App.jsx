import React, { useState } from 'react';
import './App.css';

function App() {
  // State variables
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [readTime, setReadTime] = useState(0);

  // Handle text input
  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);

    // Update text analysis
    updateTextAnalysis(newText);
  };

  // Update word count, character count, and reading time
  const updateTextAnalysis = (text) => {
    const words = text.trim().split(/\s+/).filter((word) => word.length > 0);
    const wordCount = words.length;
    const charCount = text.length;
    const readTime = Math.round(wordCount / 200); // assuming 200 words per minute

    setWordCount(wordCount);
    setCharCount(charCount);
    setReadTime(readTime);
  };

  // Convert text to camelCase, snake_case, or PascalCase
  const convertText = (format) => {
    let newText = text.trim();
    if (format === 'camelCase') {
      newText = newText
        .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
          index === 0 ? match.toLowerCase() : match.toUpperCase()
        )
        .replace(/\s+/g, '');
    } else if (format === 'snake_case') {
      newText = newText.replace(/\s+/g, '_').toLowerCase();
    } else if (format === 'PascalCase') {
      newText = newText
        .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match) => match.toUpperCase())
        .replace(/\s+/g, '');
    }

    setText(newText);
    updateTextAnalysis(newText); // Update analysis after conversion
  };

  // Apply text formatting: bold, italic, or underline
  const applyFormatting = (style) => {
    let formattedText = text;
    if (style === 'bold') {
      formattedText = `<b>${text}</b>`;
    } else if (style === 'italic') {
      formattedText = `<i>${text}</i>`;
    } else if (style === 'underline') {
      formattedText = `<u>${text}</u>`;
    }
    setText(formattedText);
  };

  // Clear all formatting
  const clearFormatting = () => {
    setText(text.replace(/<\/?b>/g, '').replace(/<\/?i>/g, '').replace(/<\/?u>/g, ''));
  };

  return (
    <div className="App">
      <h1>Text Editor</h1>

      <div className="toolbar">
        <button onClick={() => applyFormatting('bold')}>Bold</button>
        <button onClick={() => applyFormatting('italic')}>Italic</button>
        <button onClick={() => applyFormatting('underline')}>Underline</button>
        <button onClick={clearFormatting}>Clear Formatting</button>
      </div>

      <textarea
        value={text}
        onChange={handleTextChange}
        rows="10"
        cols="50"
        placeholder="Type your text here..."
      ></textarea>

      <div className="text-analysis">
        <p>Word Count: {wordCount}</p>
        <p>Character Count: {charCount}</p>
        <p>Estimated Reading Time: {readTime} minutes</p>
      </div>

      <div className="text-conversion">
        <button onClick={() => convertText('camelCase')}>To camelCase</button>
        <button onClick={() => convertText('snake_case')}>To snake_case</button>
        <button onClick={() => convertText('PascalCase')}>To PascalCase</button>
      </div>
    </div>
  );
}

export default App;
