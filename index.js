import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white flex flex-col items-center justify-center p-6">
      <Head>
        <title>AuthorFlare - שיווק חכם לסופרים</title>
      </Head>
      
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">✍️ קח את הקריירה הספרותית שלך לרמה הבאה!</h1>
        <p className="text-lg">הפלטפורמה הראשונה שמשתמשת בבינה מלאכותית כדי לשווק אותך כסופר ולתת לכל הספרים שלך את הבמה שמגיעה להם.</p>
      </header>
      
      <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg text-lg mb-8 shadow-lg">
        📌 התחבר עם Google והתחל לשווק
      </button>
      
      <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">הצטרף לשירות השיווק לסופרים 📖</h2>
        <form className="flex flex-col space-y-4">
          <input type="text" placeholder="שם מלא" className="p-3 border rounded-lg" />
          <input type="email" placeholder="כתובת אימייל" className="p-3 border rounded-lg" />
          <input type="text" placeholder="טלפון" className="p-3 border rounded-lg" />
          <input type="text" placeholder="כמה ספרים הוצאת לאור?" className="p-3 border rounded-lg" />
          <textarea placeholder="באילו פלטפורמות הספרים שלך מופצים?" className="p-3 border rounded-lg" />
          <button type="submit" className="bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg shadow-lg">🚀 שלח בקשה להצטרפות</button>
        </form>
      </div>
      
      <section className="mt-12 text-center max-w-2xl">
        <h3 className="text-2xl font-bold mb-4">למה לבחור ב-AuthorFlare? 🚀</h3>
        <p className="text-lg">✅ קידום ממוקד לסופרים - יצירת מיתוג אישי ותוכן שיווקי חכם</p>
        <p className="text-lg">✅ התייחסות לכל ספר בנפרד תוך הדגשת הקריירה הספרותית שלך</p>
        <p className="text-lg">✅ ניתוח ביצועים מתקדם ופרסום אוטומטי בכל הפלטפורמות</p>
      </section>
    </div>
  );
}
