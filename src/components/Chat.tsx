'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useChat } from 'ai/react'
import { ScrollArea } from "./ui/scroll-area";

export function Chat() {

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  })


  return (
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>
          Chat IA
        </CardTitle>
        <CardDescription className="text-stone-700 font-bold">
          Using Vercel SDK to create a chat bot.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[500px] w-full space-y-4">
          {messages.map((message) => {
            return (
              <div key={message.id} className="flex gap-2 text-zinc-800 text-sm">
                {message.role === 'user' && (
                  <Avatar>
                    <AvatarFallback>PH</AvatarFallback>
                    <AvatarImage src="https://github.com/eu-pedro.png" />
                  </Avatar>
                )}

                {message.role === 'assistant' && (
                  <Avatar>
                    <AvatarFallback>PH</AvatarFallback>
                    <AvatarImage src="/AvatarChat.webp" />
                  </Avatar>
                )}
                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-800">{message.role === 'user' ? 'Usuário' : 'IA'}:</span>
                  {message.content}
                </p>
              </div>
            )

          })}
          </ScrollArea>
      </CardContent>
      <CardFooter className="space-x-2">
        <form className="flex gap-2 w-full" onSubmit={handleSubmit}>
          <Input placeholder="How can I help you?" value={input} onChange={handleInputChange} />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  )
}