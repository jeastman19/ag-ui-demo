const apiKey = import.meta.env.VITE_OPENAI_API_KEY;


import { useState } from 'react';

export default function ChatForm() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: input }],
          temperature: 0.7
        }),
      });

      const data = await res.json();
      const message = data.choices?.[0]?.message?.content;
      setResponse(message || "No se recibió respuesta.");
    } catch (error) {
      console.error("Error al llamar a OpenAI:", error);
      setResponse("Ocurrió un error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded-lg shadow bg-white">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <textarea
          className="border p-2 rounded w-full resize-none"
          rows={4}
          placeholder="Escribí tu pregunta..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading || input.trim() === ''}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded disabled:opacity-50"
        >
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </form>

      {response && (
        <div className="mt-4 p-3 border-t">
          <strong>Respuesta:</strong>
          <p className="mt-1 whitespace-pre-wrap">{response}</p>
        </div>
      )}
    </div>
  );
}
