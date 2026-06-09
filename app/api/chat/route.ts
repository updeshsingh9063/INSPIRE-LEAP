import { NextRequest, NextResponse } from 'next/server'

const GROQ_API_KEY = process.env.GROQ_API_KEY || ''
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'

const DEFAULT_RESPONSES = [
  "I'd be happy to help you with information about our courses! What would you like to know?",
  "Our courses include Full Stack Development, Data Science, Cloud Computing, and Cybersecurity. Which one interests you?",
  "We offer flexible payment options and scholarships. Would you like to know more about our pricing?",
  "Our mentors are industry experts from top companies like Google, Amazon, and Microsoft. Would you like to schedule a session?",
  "We have a 95% placement rate with our hiring partners. Check out our success stories for more details!",
  "You can enroll in any course through our website. Would you like me to guide you to the enrollment page?",
  "We provide lifetime access to course materials and 24/7 support. Is there anything specific you'd like to learn?",
]

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // If no API key is configured, use default responses
    if (!GROQ_API_KEY) {
      const randomIndex = Math.floor(Math.random() * DEFAULT_RESPONSES.length)
      return NextResponse.json({ response: DEFAULT_RESPONSES[randomIndex] })
    }

    // Try to use Groq API
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'system',
            content: `You are a helpful assistant for Inspire Leap, an online education platform. You help students with information about courses, programs, career guidance, and enrollment. Be friendly, professional, and concise. Available courses: Full Stack Development, Data Science & Machine Learning, Cloud Computing & DevOps, Cybersecurity & Ethical Hacking. Key features: Industry mentors, placement assistance, certifications, flexible payment options. If you don't have specific information, guide them to contact support or visit the website.`
          },
          {
            role: 'user',
            content: message
          }
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    })

    if (!response.ok) {
      // If API fails, fall back to default responses
      console.error('Groq API error:', response.statusText)
      const randomIndex = Math.floor(Math.random() * DEFAULT_RESPONSES.length)
      return NextResponse.json({ response: DEFAULT_RESPONSES[randomIndex] })
    }

    const data = await response.json()
    const botResponse = data.choices[0]?.message?.content || DEFAULT_RESPONSES[0]

    return NextResponse.json({ response: botResponse })

  } catch (error) {
    console.error('Chat API error:', error)
    // Fallback to default responses on any error
    const randomIndex = Math.floor(Math.random() * DEFAULT_RESPONSES.length)
    return NextResponse.json({ response: DEFAULT_RESPONSES[randomIndex] })
  }
}
