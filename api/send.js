export const config = {
  runtime: "nodejs"
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { username, service, videoLink } = req.body;

  const token = process.env.BOT_TOKEN;
  const chatId = process.env.CHAT_ID;

  const message = `
📌 New TikTok Boost Request

👤 Username: ${username}
⚡ Service: ${service}
🔗 Video Link: ${videoLink}
  `;

  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    return res.status(500).json({ error: "Failed to send message" });
  }
}
