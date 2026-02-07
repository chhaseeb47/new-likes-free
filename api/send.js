export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { username, service, videoLink } = req.body;

  const token = "7244277654:AAF3Fxa26pLKeQMV4I0x9PkD7xnHY594YJQ";
  const chatId = "6626415274";

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

    res.status(200).json({ success: true });

  } catch (error) {
    res.status(500).json({ error: "Failed to send message" });
  }
}
