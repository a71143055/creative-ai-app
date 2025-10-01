import React, { useState } from 'react';
export default function InputForm({ onSubmit }) {
  const [keyword, setKeyword] = useState('');
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(keyword); }}>
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="키워드를 입력하세요" />
      <button type="submit">생성</button>
    </form>
  );
}