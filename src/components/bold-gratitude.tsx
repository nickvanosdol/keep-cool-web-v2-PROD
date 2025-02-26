export default function BoldGratitude({ text }: { text: string }) {
  const phrases = ['thank you', 'thanks']
  const regex = new RegExp(`(${phrases.join('|')})`, 'gi')

  return (
    <span>
      {text.split(regex).map((part, index) => {
        const isMatch = phrases.includes(part.toLowerCase())
        return isMatch ? <strong key={index}>{part}</strong> : part
      })}
    </span>
  )
}
