import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [keyword, setKeyword] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [musicUrl, setMusicUrl] = useState('');
  const [feedback, setFeedback] = useState('');

  const generateImage = async () => {
    const res = await axios.post('http://127.0.0.1:5000/image/generate', {
      prompt: keyword,
    });
    setImageUrl(`http://127.0.0.1:5000${res.data.image_url}`);
  };

  const generateMusic = async () => {
    const res = await axios.post('http://127.0.0.1:5000/music/generate', {
      prompt: keyword,
    });
    setMusicUrl(`http://127.0.0.1:5000${res.data.music_url}`);
  };

  const generateFeedback = async () => {
    const res = await axios.post('http://127.0.0.1:5000/feedback/generate', {
      prompt: keyword,
    });
    setFeedback(res.data.feedback);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🎨 Creative AI</h1>
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="키워드를 입력하세요"
      />
      <div style={{ marginTop: '1rem' }}>
        <button onClick={generateImage}>이미지 생성</button>
        <button onClick={generateMusic}>음악 생성</button>
        <button onClick={generateFeedback}>피드백 생성</button>
      </div>

      {imageUrl && (
        <div style={{ marginTop: '2rem' }}>
          <h3>🖼️ 생성된 이미지</h3>
          <img src={imageUrl} alt="생성된 이미지" width="300" />
        </div>
      )}

      {musicUrl && (
        <div style={{ marginTop: '2rem' }}>
          <h3>🎵 생성된 음악</h3>
          <audio controls src={musicUrl}></audio>
        </div>
      )}

      {feedback && (
        <div style={{ marginTop: '2rem' }}>
          <h3>💡 피드백</h3>
          <p>{feedback}</p>
        </div>
      )}
    </div>
  );
}

export default App;