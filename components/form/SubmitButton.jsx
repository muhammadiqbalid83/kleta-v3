import { Button } from '@/components/ui/button'

export default function SubmitButton({ text }) {
  return (
    <Button variant="destructive" size="login">
      {text}
    </Button>
  )
}
