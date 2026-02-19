
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the personal AI Assistant for Toufic Jandah, a world-class Full-Stack Developer and AI Engineer.
Your goal is to answer questions about Toufic's professional background, skills, and projects based on the portfolio data.

Toufic's Profile:
- Name: Toufic Jandah
- Location: Riga, Latvia
- Role: Full-Stack Developer | AI Engineer
- Key Expertise: Next.js, React, Node.js, AI Integration, Enterprise Fintech, DevOps.
- Notable Projects: Payroll Management System (Luxembourg taxes), AI Sleep Tracking, TaskFlow AI.
- Experience: Advensys, 5oStudios, Codra Tech.

Be professional, concise, and helpful. If asked about contact details, mention his LinkedIn (linkedin.com/in/toufic-jandah) and GitHub (github.com/TAJKING10).
`;

export class PortfolioAI {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async ask(prompt: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });
      return response.text || "I'm sorry, I couldn't process that right now.";
    } catch (error) {
      console.error("AI Error:", error);
      return "I encountered an error while trying to think. Please try again!";
    }
  }
}
