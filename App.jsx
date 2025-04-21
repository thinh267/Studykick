import React, { useState } from 'react';
import './styles.css';

export default function StudySidekickOnboarding() {
  const [formData, setFormData] = useState({
    nickname: '',
    goal: '',
    motivation: '',
    strength: '',
    badHabit: '',
    vibe: '',
    studyTime: '',
    sessionsPerWeek: '',
    commitment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const telegram = window.Telegram.WebApp;
    telegram.sendData(JSON.stringify(formData));
    telegram.close();
  };

  return (
    <div className="max-w-md mx-auto p-6 font-sans bg-soft-yellow rounded-lg shadow-md border border-soft-green">
      <h1 className="text-3xl font-bold text-center mb-6 text-primary-green">📝 StudySidekick Onboarding</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input name="nickname" placeholder="Nickname" onChange={handleChange} className="w-full p-3 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-soft-green" />
        <textarea name="goal" placeholder="Mục tiêu học trong 30 ngày" onChange={handleChange} className="w-full p-3 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-soft-green" />
        <textarea name="motivation" placeholder="Lý do cá nhân khiến bạn muốn học" onChange={handleChange} className="w-full p-3 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-soft-green" />
        <input name="strength" placeholder="Điểm mạnh trong việc học của bạn" onChange={handleChange} className="w-full p-3 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-soft-green" />
        <input name="badHabit" placeholder="Thói quen xấu gây trì hoãn" onChange={handleChange} className="w-full p-3 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-soft-green" />
        <div>
          <p className="font-medium text-soft-green">Bạn muốn StudySidekick nhắc bạn theo phong cách nào?</p>
          <div className="flex flex-col gap-2 mt-2">
            <label className="flex items-center">
              <input type="radio" name="vibe" value="Zen" onChange={handleChange} className="mr-2" />
              Zen 🧘 – Êm dịu, chill, không áp lực
            </label>
            <label className="flex items-center">
              <input type="radio" name="vibe" value="Savage" onChange={handleChange} className="mr-2" />
              Savage 🔥 – Toxic nhẹ, cà khịa mạnh, không thương tiếc
            </label>
            <label className="flex items-center">
              <input type="radio" name="vibe" value="Nerd" onChange={handleChange} className="mr-2" />
              Nerd 📊 – Phân tích logic, tracking như mentor xịn
            </label>
          </div>
        </div>
        <input name="studyTime" placeholder="Bạn học hiệu quả vào khung giờ nào? (VD: 19h-22h)" onChange={handleChange} className="w-full p-3 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-soft-green" />
        <input name="sessionsPerWeek" placeholder="Bạn muốn học bao nhiêu buổi mỗi tuần? (VD: 3 buổi)" onChange={handleChange} className="w-full p-3 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-soft-green" />
        <textarea name="commitment" placeholder="Một lời cam kết hoặc quote tự nhắc bản thân" onChange={handleChange} className="w-full p-3 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-soft-green" />
        <button type="submit" className="w-full bg-soft-green text-white p-3 rounded font-semibold hover:bg-primary-green transition-colors">
          Gửi thông tin
        </button>
      </form>
    </div>
  );
}
