import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [keyword, setKeyword] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [musicUrl, setMusicUrl] = useState('');
  const [feedback, setFeedback] = useState('');

  const generateImage = async () => {
    const res = await axios.post('http://localhost:5000/image/generate', { prompt: keyword });
    setImageUrl("https://via.placeholder.com/300");
  };

  const generateMusic = async () => {
    const res = await axios.post('http://localhost:5000/music/generate', { mood: keyword });
    setMusicUrl("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
  };

  const getFeedback = async () => {
    const res = await axios.post('http://localhost:5000/feedback/get', { content: keyword });
    setFeedback(`'${keyword}'에 대한 창의적인 피드백입니다!`);
  };

  return (
    <div>
      <h1>AI 창의력 증진 도구</h1>
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="키워드를 입력하세요" />
      <div style={{ padding: '2rem', backgroundColor: '#f9f9f9' }}>
        <button onClick={generateImage}>그림 생성</button>
        <button onClick={generateMusic}>음악 생성</button>
        <button onClick={getFeedback}>피드백 받기</button>
      </div>
      {imageUrl && <img src={imageUrl} alt="생성된 이미지" />}
      {musicUrl && <audio controls src={musicUrl} />}
      {feedback && <p>피드백: {feedback}</p>}
    </div>
  );
}

export default App;