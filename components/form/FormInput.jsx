import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function FormInput({
  htmlfor,
  label,
  name,
  type,
  defaultValue,
}) {
  return (
    <div className="mt-[20px]">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} name={name} defaultValue={defaultValue} />
    </div>
  )
}
