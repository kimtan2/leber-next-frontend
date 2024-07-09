'use client'
import {Button} from "@/components/ui/button"

function alertt(){
  alert('hello')

}
export default function Home() {
  return (
    <div>
      <Button onClick={alertt}>Click me</Button>
    </div>
  )
}