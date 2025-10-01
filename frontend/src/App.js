import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [keyword, setKeyword] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // ✅ 여기에 넣으세요!
  const generateImage = async () => {
    try {
      const res = await axios.post('http://localhost:5000/image/generate', {
        prompt: keyword,
      });
      setImageUrl(`http://localhost:5000${res.data.image_url}`);
    } catch (error) {
      console.error('이미지 생성 중 오류 발생:', error);
    }
  };

  return (
    <div>
      <h1>AI 그림 생성기</h1>
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="키워드를 입력하세요"
      />
      <button onClick={generateImage}>그림 생성</button>

      {/* 이미지가 있을 때만 표시 */}
      {imageUrl && <img src={imageUrl} alt="생성된 이미지" />}
    </div>
  );
}

export default App;