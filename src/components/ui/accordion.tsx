"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const AccordionItem = ({ question, answer, isOpen, onToggle }: AccordionItemProps) => {
  return (
    <div className="border border-border/50 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-accent/50 transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-medium">{question}</span>
        <ChevronDown 
          className={cn(
            "w-4 h-4 transition-transform duration-200",
            isOpen && "transform rotate-180"
          )}
        />
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-200",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-6 pb-4 text-muted-foreground leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  )
}

interface AccordionProps {
  items: Array<{
    question: string
    answer: string
  }>
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  )
}
