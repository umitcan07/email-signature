import { createFileRoute } from '@tanstack/react-router'
import { SignatureGenerator } from '../components/SignatureGenerator'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return <SignatureGenerator />
}
