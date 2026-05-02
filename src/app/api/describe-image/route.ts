import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: NextRequest) {
  try {
    const { imageUrl } = await req.json();

    if (!imageUrl) {
      return NextResponse.json({ error: 'Image URL is required' }, { status: 400 });
    }

    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY || '');
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // 画像をフェッチしてbase64に変換
    const imageResp = await fetch(imageUrl);
    const buffer = await imageResp.arrayBuffer();
    const base64Data = Buffer.from(buffer).toString('base64');

    const prompt = `
      あなたは動物病院のウェブサイト運用アシスタントです。
      この画像の内容を、SEO（検索エンジン最適化）に配慮した簡潔な「代替テキスト（alt属性）」として説明してください。
      
      ルール：
      - 日本語で出力してください。
      - 「〜の画像」「〜の写真」といった表現は不要です。
      - 内容を具体的に説明してください（例：「診察台の上で大人しくしている茶色の柴犬」）。
      - 病院名（湖東どうぶつ病院）などは含めず、純粋に画像の内容を説明してください。
      - 100文字以内で出力してください。
      - 出力は説明文のみとしてください。
    `;

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          data: base64Data,
          mimeType: imageResp.headers.get('content-type') || 'image/jpeg'
        }
      }
    ]);

    const description = result.response.text().trim();

    return NextResponse.json({ description });
  } catch (error) {
    console.error('Error describing image:', error);
    return NextResponse.json({ error: 'Failed to describe image' }, { status: 500 });
  }
}
