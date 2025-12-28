
import { GoogleGenAI } from "@google/genai";

export const askExcelAI = async (prompt: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: "You are an Excel expert who explains formulas clearly in Khmer. Use polite language. Focus on practical examples.",
      },
    });
    return response.text || "សូមអភ័យទោស ខ្ញុំមិនអាចរកចម្លើយបានទេ។";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "មានបញ្ហាក្នុងការភ្ជាប់ទៅកាន់ AI។ សូមព្យាយាមម្តងទៀត។";
  }
};
