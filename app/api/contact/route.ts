import { type NextRequest, NextResponse } from "next/server"

// In-memory storage for demo purposes
// In production, you'd save to a database
const messages: Array<{
  id: string
  name: string
  email: string
  message: string
  timestamp: string
}> = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Store the message
    const newMessage = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
    }

    messages.push(newMessage)

    // Log the message (in production, you'd save to database)
    console.log("New contact form submission:", newMessage)

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully",
        id: newMessage.id,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}

// Optional: Add GET endpoint to view messages (for demo/testing)
export async function GET() {
  return NextResponse.json({ messages }, { status: 200 })
}
